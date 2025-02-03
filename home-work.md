# API Loyihasi — “Online Ticket System”

## 1. Loyiha Tuzilmasi

1. `index.js`
2. `config/`

- `db.js` (MongoDB ulanish sozlamalari)

3. `models/`

- `User.js` (foydalanuvchi modeli: admin yoki oddiy user)
- `Ticket.js` (chipta modeli)
- `Order.js` (chipta buyurtmalari/tartiblari)

4. `routes/`

- `authRoutes.js` (ro‘yxatdan o‘tish, login, parolni tiklash va h.k.)
- `ticketRoutes.js` (chiptalar CRUD)
- `orderRoutes.js` (buyurtmalar, to‘lov, status)

5. `controllers/` (ixtiyoriy, agar MVC uslubida ajratilsa)

- `authController.js`
- `ticketController.js`
- `orderController.js`

6. `middlewares/`

- `errorMiddleware.js` (xatolarni bir joyda tutish)
- `validateMiddleware.js` (Zod validatsiya uchun)
- `authMiddleware.js` (JWT autentifikatsiya)

7. `validators/` (har bir modul uchun Zod schemalari)
   - `authValidator.js`
   - `ticketValidator.js`
   - `orderValidator.js`
8. `.env` (maxfiy sozlamalar: DB_URI, JWT_SECRET, va h.k.)

> **Topshiriq**: Yuqoridagi tuzilmani `online-ticket-backend` papkasiga tatbiq qiling. Har bir modul/fayl o‘zining maqsadi uchun javobgar bo‘lsin.

---

## 2. Foydalanuvchi va Avtorizatsiya (User & Auth)

### 2.1. Model: `models/User.js`

- Ma’lumotlar maydonlari:
  - `username` (String, unique, required)
  - `email` (String, unique, required)
  - `password` (String, required)
  - `role` (String, default: "user", enum: ["user", "admin"])
  - `createdAt` (Date, default: `Date.now`)
  - `updatedAt` (Date, default: `Date.now`)

> **Topshiriq**: Parollarni **hash** qilish uchun `bcrypt` kutubxonasidan foydalaning. Model pre-save hook (`userSchema.pre('save', ...)`) orqali parolni hash qiling.

```js
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

// Parolni saqlashdan oldin hash qilish
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Parolni solishtirish metodi
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
```

### 2.2. Auth Router: `routes/authRoutes.js`

#### 2.2.1. **POST** `/api/auth/register`

- **Vazifa**: Yangi foydalanuvchini ro‘yxatdan o‘tkazish.
- **Body**: `{ "username": "...", "email": "...", "password": "..." }`
- **Natija**: “muvaffaqiyatli ro‘yxatdan o‘tildi” xabari.

#### 2.2.2. **POST** `/api/auth/login`

- **Vazifa**: Foydalanuvchini login qilish.
- **Body**: `{ "email": "...", "password": "..." }`
- **Natija**: foydalanuvchi ma’lumotlari va JWT tokenlari qaytarilsin.

> **Topshiriq**: `authController.js` da `register`, `login`, `getProfile` funksiyalarni yozing. JWT tokenlar uchun `jsonwebtoken` kutubxonasidan foydalaning.

---

## 3. Chiptalar — Kengaytirilgan CRUD, Filter, Pagination

### 3.1. Model: `models/Ticket.js`

- **Umumiy maydonlar**:
  - `title` (String, required)
  - `description` (String)
  - `category` (String, masalan: “concert”, “sport”, “theater”)
  - `price` (Number, required)
  - `date` (Date, required)
  - `status` (String, enum: [‘available’, ‘sold’, ‘expired’], default: ‘available’)
  - `createdAt`, `updatedAt`
- **Qo‘shimcha**:
  - `location` (String, optional) — Tadbir o‘tkaziladigan joy.
  - `totalQuantity` (Number, default: 100) — Chiptalar soni.
  - `soldQuantity` (Number, default: 0) — Qancha chipta sotilgan?

### 3.2. API Endpointlar: `routes/ticketRoutes.js`

1. **POST** `/api/tickets` – **Yangi chipta yaratish**

- Faqat `admin` ro‘liga ega foydalanuvchi yaratishi kerak.
- Middleware: `authMiddleware`, `adminCheck`.
- Body: `{ title, description, category, price, date, location, totalQuantity }`.

2. **GET** `/api/tickets` – **Chiptalar ro‘yxati**

- **Filter**: query orqali filter qilish: `?category=concert&status=available`
- **Pagination**: `?page=2&limit=10`
- **Sort**: `?sort=price,asc` yoki `?sort=date,desc`
- Natija: `{ data: [...], pageInfo: { page, limit, total, totalPages } }`

3. **GET** `/api/tickets/:id` – **Bitta chipta haqida ma’lumot**

- Kengaytirilgan holda, agar chipta topilmasa, `404 Not Found`.

4. **PUT** `/api/tickets/:id` – **Chiptani yangilash**

- Faqat `admin` roliga ega foydalanuvchi.
- Body: `{ title, description, category, price, date, status, totalQuantity }`.
- `status`ga “expired” yoki “sold” ga o‘tkazish mumkin.

5. **DELETE** `/api/tickets/:id` – **Chiptani o‘chirish**

- Faqat `admin`.
- Agar chiptaga allaqachon buyurtma bo‘lsa, xato qaytarish (masalan, “Chiptani o‘chirib bo‘lmaydi, chunki sotilgan!”).

> **Topshiriq**: Filter, pagination, sortni bir API ichida barpo qiling (`GET /api/tickets`). Masalan:
>
> ```js
> // Query params: category, status, page=1, limit=10, sort=date,order=desc
> Mongoose chain: Ticket.find({ category, status }).skip(...).limit(...).sort({ date: -1 })
> ```

---

## 4. Buyurtmalar (Orders) va To‘lov

Ko‘p hollarda foydalanuvchi chiptalarni “add to cart” yoki “buy now” orqali sotib oladi. Har bir buyurtma (order) quyidagi ma’lumotlarni o‘z ichiga olishi mumkin:

### 4.1. Model: `models/Order.js`

- `user` (mongoose.Schema.Types.ObjectId, ref: “User”) — buyurtma qilgan foydalanuvchi.
- `tickets` – massiv, har bir elementda:
  - `ticket` (mongoose.Schema.Types.ObjectId, ref: “Ticket”)
  - `quantity` (Number)
  - `price` (Number) — chipta narxi (har ehtimolga qarshi momentdagi narx saqlanadi).
- `totalPrice` (Number) — jami narx.
- `status` (String, enum: [‘pending’, ‘paid’, ‘cancelled’], default: ‘pending’)
- `paymentMethod` (String, masalan “stripe”, “paypal”, “cash”)
- `createdAt`, `updatedAt`

```js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tickets: [
      {
        ticket: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Ticket",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      default: "stripe",
    },
    status: {
      type: String,
      enum: ["pending", "paid", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
```

### 4.2. Order Router: `routes/orderRoutes.js`

1. **POST** `/api/orders` – **Yangi buyurtma yaratish**

- Foydalanuvchi (tokeni bilan) buyurtma yaratadi.
- Body: `{ "tickets": [ { "ticketId": "...", "quantity": 2 }, ... ], "paymentMethod": "stripe" }`
- Dastlab `pending` statusda bo‘ladi.
- Har bir `ticketId` orqali `Ticket` modeldan narxni olib, `price` maydoniga saqlab qo‘ying.
- `totalPrice` ni avtomatik hisoblash: `sum( ticket.price * quantity )`.

2. **POST** `/api/orders/:orderId/pay` – **Buyurtma uchun to‘lov**

- Yangi endpoint: `POST /api/orders/:orderId/pay`
- To‘lov integratsiyasi (Stripe yoki PayPal) sodda ko‘rinishda (fake) bo‘lishi mumkin:
  - Agar to‘lov muvaffaqiyatli bo‘lsa, `status = 'paid'` ga o‘zgartirish.
  - `Ticket` modelida `soldQuantity` ni oshirish (buyurtma qilingan miqdorda).
  - Agar `soldQuantity` > `totalQuantity` bo‘lib ketsa, xato qaytarish (over-sell oldini olish).

3. **GET** `/api/orders` – **Buyurtmalar ro‘yxati**

- **Admin** barcha buyurtmalarni ko‘rishi mumkin.
- Oddiy foydalanuvchi esa faqat o‘z buyurtmalarini ko‘rishi mumkin.
- Query param bilan `status=pending` yoki `status=paid` ga filtr qilish.

4. **GET** `/api/orders/:orderId` – **Bitta buyurtma haqida ma’lumot**

- Agar `admin` bo‘lsa, istalgan orderni ko‘rishi mumkin.
- Oddiy `user` faqat o‘zining orderini ko‘rsin.

5. **PATCH** `/api/orders/:orderId/cancel` – **Buyurtmani bekor qilish**

- Faqat foydalanuvchi “pending” statusdagi buyurtmasini bekor qila olsin.
- Buyurtma “paid” bo‘lsa, bekor qilishga ruxsat yo‘q (yoki alohida siyosat).

> **Topshiriq**: To‘lovning real integratsiyasi uchun (Stripe):
>
> - `stripe` npm paketini o‘rnating.
> - `stripe.charges.create(...)` yoki `paymentIntents.create(...)` bilan test rejimida to‘lovni amalga oshiring.
> - Test rejimida **test kartalar** (4242 4242 4242 4242, h.k.) bilan sinab ko‘ring.

---

## 5. Qidirish (Search), Filtrlash (Filter), Saralash (Sort), Paginatsiya

**5.1.** `GET /api/tickets` ni murakkab filter, sort, pagination bilan boyitish.

- **search**: `?search=konsert` — `title` yoki `description` da so‘z qidirish (`$regex`).
- **category**: `?category=sport` — qaysi turdagi chiptalarni filter qilish.
- **date**: `?date[gte]=2025-01-01&date[lte]=2025-12-31` — oraliqda filter.
- **sort**: `?sort=-price` (minus narx demak kamayish tartibida) yoki `?sort=date` (o‘sish tartibida).
- **pagination**: `?page=2&limit=20`.

> **Topshiriq**: `ticketController.js` da query parametrlardan kelib chiqib dinamik `find()` so‘rovini shakllantiring. Kodni murakkab bo‘lib ketmasligi uchun ehtiyot bo‘ling.

---

3. **Global Error Handler**: `middlewares/errorMiddleware.js`

- Express app da `app.use(errorMiddleware)` orqali xatolarni tutish.
- Formati:

```js
module.exports = (err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Server Error",
  });
};
```

- `Talablar`: middlewares/errorMiddleware.js orqali xatolarni tutish va foydalanuvchiga tushunarli xabarlar qaytarish.
- `Topshiriq`: Validatsiya xatolarini yaxshilash va foydalanuvchi uchun aniq xabarlar yaratish.

---

## 8. Deploy (Joylashtirish)

3. **.env sozlamalar** va `process.env` dan foydalanish.

---

> **Topshiriq**: Kamida **auth** va **ticket** endpointlari uchun bir nechta test yozing. Masalan, `POST /api/auth/register` muvaffaqiyatli bo‘lsin, xato bo‘lsin, email takrorlansa xato berilsin h.k.

---

Ushbu **topshiriqlar**ni amalga oshirish orqali ancha keng ko‘lamli backend tajribasi to‘planadi.  
**Omad!**

### 2.3. JWT Tokenlar

- **Access Token**: qisqa muddatli token, foydalanuvchini autentifikatsiya qilish uchun ishlatiladi.
- **Refresh Token**: uzoq muddatli token, access tokenni yangilash uchun ishlatiladi.

### 2.4. Auth Controller: `controllers/authController.js`

```js
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const generateToken = (id, expiresIn) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn });
};

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.create({ username, email, password });
  const accessToken = generateToken(user._id, "15m");
  const refreshToken = generateToken(user._id, "7d");
  res.status(201).json({ user, accessToken, refreshToken });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const accessToken = generateToken(user._id, "15m");
    const refreshToken = generateToken(user._id, "7d");
    res.json({ user, accessToken, refreshToken });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
};

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user);
};
```

### 2.5. Middleware: `middlewares/authMiddleware.js`

```js
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};
```

### 2.6. Auth Router: `routes/authRoutes.js`

```js
const express = require("express");
const {
  register,
  login,
  getProfile,
} = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", protect, getProfile);

module.exports = router;
```

### 2.7. Talablar

- **Register** va **Login** endpointlari uchun:
  - `username`, `email`, `password` maydonlari to‘ldirilishi shart.
  - `email` noyob bo‘lishi kerak.
  - Parol kamida 6 ta belgidan iborat bo‘lishi kerak.
- **Barcha endpointlar** (register va login dan tashqari) uchun:
  - `authMiddleware` orqali autentifikatsiya talab qilinadi.

### 2.8. Refresh Token Endpoint: `routes/authRoutes.js`

```js
router.post("/token", async (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const accessToken = generateToken(decoded.id, "15m");
    res.json({ accessToken });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
});
```
