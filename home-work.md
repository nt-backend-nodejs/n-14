Albatta! Quyida siz so‘ragan beshta vazifaning har biri uchun aniq va tushunarli JavaScript **Promises** va **async/await** yordamida yechimlarni taqdim etaman. Har bir vazifa uchun vazifa tavsifi, yechim kodi va qisqacha tushuntirish keltirilgan.

---

## **Vazifa 1: Timer bilan Ishlash**

**Vazifa:** 3 soniyali kechikishdan so‘ng "Vaqt tugadi!" degan xabarni konsolga chiqaring.

### **Yo‘riqnoma:**

1. `setTimeout` funksiyasini `Promise` ichiga joylang.
2. `await` yordamida vaqt tugashini kuting.

### **Yechim:**

Bu vazifada biz `setTimeout` funksiyasini `Promise` ichida ishlatamiz va `async/await` sintaksisidan foydalangan holda 3 soniya kutamiz.

```javascript
// 1. Promise yaratish: 3 soniya kutish
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 2. Async funksiyani yaratish va await dan foydalanish
async function timer() {
  console.log("Kechikish boshlanmoqda...");
  await delay(3000); // 3 soniya kutish
  console.log("Vaqt tugadi!");
}

// 3. Funksiyani chaqirish
timer();
```

### **Tushuntirish:**

1. **`delay(ms)` Funksiyasi:**
   - Bu funksiya berilgan `ms` millisekund davomida kutish uchun `Promise` qaytaradi.
   - `setTimeout` funksiyasi orqali belgilangan vaqt o'tgach, `resolve` chaqiriladi.

2. **`timer()` Async Funksiyasi:**
   - `async` kalit so'zi yordamida funksiyani asinxron qilib belgilaymiz.
   - `console.log` bilan kechikish boshlanishini bildiradi.
   - `await delay(3000)` orqali 3 soniya kutamiz.
   - Kutish tugagach, "Vaqt tugadi!" xabarini chiqaramiz.

3. **Funksiyani Chaqirish:**
   - `timer()` funksiyasini chaqirib, natijani ko'ramiz.

### **Natija:**

```
Kechikish boshlanmoqda...
(Vaqt tugashidan keyin 3 soniya o'tadi)
Vaqt tugadi!
```

---

## **Vazifa 2: Matematika Amallarini Bajarish**

**Vazifa:** Ikkita sonni qo'shish va ko'paytirish uchun ikkita asinxron funksiya yarating. Har bir amalni bajarish uchun `await` dan foydalaning.

### **Yo‘riqnoma:**

1. Har bir amalni asinxron funksiya qilib yarating.
2. Barcha amallar tugagach, natijani konsolga chiqaring.

### **Yechim:**

Bu vazifada biz ikkita asinxron funksiyani yaratamiz: biri qo‘shish, ikkinchisi ko‘paytirish uchun. So‘ngra, `async/await` yordamida ularni ketma-ket bajarib, natijalarni chiqaramiz.

```javascript
// 1. Asinxron qo'shish funksiyasi
function add(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000); // 1 soniya kutish
  });
}

// 2. Asinxron ko'paytirish funksiyasi
function multiply(a, b) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(a * b);
    }, 1000); // 1 soniya kutish
  });
}

// 3. Async funksiyani yaratish va amallarni bajarish
async function performMathOperations() {
  console.log("Qo'shish amalini bajarish boshlanmoqda...");
  const sum = await add(5, 10);
  console.log(`Qo'shish natijasi: ${sum}`); // Qo'shish natijasi: 15

  console.log("Ko'paytirish amalini bajarish boshlanmoqda...");
  const product = await multiply(5, 10);
  console.log(`Ko'paytirish natijasi: ${product}`); // Ko'paytirish natijasi: 50
}

// 4. Funksiyani chaqirish
performMathOperations();
```

### **Tushuntirish:**

1. **`add(a, b)` Funksiyasi:**
   - Berilgan `a` va `b` sonlarini qo‘shadi.
   - 1 soniya kutgach, natijani `resolve` qiladi.

2. **`multiply(a, b)` Funksiyasi:**
   - Berilgan `a` va `b` sonlarini ko‘paytiradi.
   - 1 soniya kutgach, natijani `resolve` qiladi.

3. **`performMathOperations()` Async Funksiyasi:**
   - `add(5, 10)` funksiyasini chaqiradi va natijani kutadi (`await`).
   - Qo‘shish natijasini konsolga chiqaradi.
   - `multiply(5, 10)` funksiyasini chaqiradi va natijani kutadi (`await`).
   - Ko‘paytirish natijasini konsolga chiqaradi.

4. **Funksiyani Chaqirish:**
   - `performMathOperations()` funksiyasini chaqirib, amallarni bajarish va natijalarni ko'ramiz.

### **Natija:**

```
Qo'shish amalini bajarish boshlanmoqda...
(Qo'shish amalidan keyin 1 soniya)
Qo'shish natijasi: 15
Ko'paytirish amalini bajarish boshlanmoqda...
(Ko'paytirish amalidan keyin 1 soniya)
Ko'paytirish natijasi: 50
```

---

## **Vazifa 3: Random Raqam Bilan Ishlash**

**Vazifa:** Asinxron funksiya yarating, u 1 soniyadan keyin tasodifiy raqamni qaytarsin va uni konsolga chiqaring. Tasodifiy raqam 50 dan katta bo'lsa, "Katta raqam!", kichik bo'lsa "Kichik raqam!" deb chiqaring.

### **Yo‘riqnoma:**

1. Random raqamni `Math.random()` yordamida yarating.
2. Raqamni `await` yordamida qaytaring va uni tekshiring.

### **Yechim:**

Bu vazifada biz 1 soniya kutib, tasodifiy raqam yaratamiz va uning kattaligiga qarab mos xabarni chiqaramiz.

```javascript
// 1. Asinxron random raqam funksiyasi
function getRandomNumber() {
  return new Promise(resolve => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 100) + 1; // 1 dan 100 gacha raqam
      resolve(randomNum);
    }, 1000); // 1 soniya kutish
  });
}

// 2. Async funksiyani yaratish va raqamni tekshirish
async function handleRandomNumber() {
  console.log("Tasodifiy raqam yaratilmoqda...");
  const number = await getRandomNumber();
  console.log(`Tasodifiy raqam: ${number}`);
  
  if (number > 50) {
    console.log("Katta raqam!");
  } else {
    console.log("Kichik raqam!");
  }
}

// 3. Funksiyani chaqirish
handleRandomNumber();
```

### **Tushuntirish:**

1. **`getRandomNumber()` Funksiyasi:**
   - `Math.random()` yordamida 1 dan 100 gacha tasodifiy raqam yaratadi.
   - 1 soniya kutgach, raqamni `resolve` qiladi.

2. **`handleRandomNumber()` Async Funksiyasi:**
   - "Tasodifiy raqam yaratilmoqda..." deb konsolga chiqaradi.
   - `getRandomNumber()` funksiyasini chaqirib, natijani kutadi (`await`).
   - Yaralgan raqamni konsolga chiqaradi.
   - Raqam 50 dan katta yoki kichikligini tekshiradi va mos xabarni chiqaradi.

3. **Funksiyani Chaqirish:**
   - `handleRandomNumber()` funksiyasini chaqirib, natijani ko'ramiz.

### **Natija:**

```
Tasodifiy raqam yaratilmoqda...
(Tasodifiy raqam yaratilgach 1 soniya o'tadi)
Tasodifiy raqam: 73
Katta raqam!
```
(Yoki)
```
Tasodifiy raqam yaratilmoqda...
(Tasodifiy raqam yaratilgach 1 soniya o'tadi)
Tasodifiy raqam: 42
Kichik raqam!
```

---

## **Vazifa 4: Maxsus Va'da Yaratuvchi Funksiya**

**Vazifa:** Asinxron funksiya yarating, u tasodifiy vaqt ichida va'dani bajaradi (1 soniyadan 5 soniyagacha) va natijani konsolga chiqaradi.

### **Yo‘riqnoma:**

1. `setTimeout` orqali tasodifiy vaqt ichida va'dani bajaring.
2. `Math.random()` yordamida kechikish vaqtini o'rnating.

### **Yechim:**

Bu vazifada biz 1 dan 5 soniya gacha tasodifiy vaqt kutib, va'dani bajaruvchi funksiya yaratamiz.

```javascript
// 1. Asinxron maxsus va'da funksiyasi
function randomDelay() {
  return new Promise(resolve => {
    // 1 dan 5 soniya gacha kechikish
    const delayTime = Math.floor(Math.random() * 5000) + 1000;
    setTimeout(() => {
      resolve(`Va'da bajarildi! (${delayTime / 1000} soniya kutildi)`);
    }, delayTime);
  });
}

// 2. Async funksiyani yaratish va va'dani bajarish
async function executeRandomPromise() {
  console.log("Maxsus va'da bajarilmoqda...");
  const message = await randomDelay();
  console.log(message);
}

// 3. Funksiyani chaqirish
executeRandomPromise();
```

### **Tushuntirish:**

1. **`randomDelay()` Funksiyasi:**
   - `Math.random()` yordamida 1 dan 5 soniya gacha tasodifiy vaqt yaratadi.
   - Bu vaqt davomida `setTimeout` orqali kutadi.
   - Kutish tugagach, "Va'da bajarildi!" xabarini va kutish vaqtini `resolve` qiladi.

2. **`executeRandomPromise()` Async Funksiyasi:**
   - "Maxsus va'da bajarilmoqda..." deb konsolga chiqaradi.
   - `randomDelay()` funksiyasini chaqirib, natijani kutadi (`await`).
   - Bajarilgan va'dani konsolga chiqaradi.

3. **Funksiyani Chaqirish:**
   - `executeRandomPromise()` funksiyasini chaqirib, natijani ko'ramiz.

### **Natija:**

```
Maxsus va'da bajarilmoqda...
(Va'da bajarilgach 1 dan 5 soniya o'tadi)
Va'da bajarildi! (3 soniya kutildi)
```

---

## **Vazifa 5: Oddiy Login Tizimi (Simulyatsiya)**

**Vazifa:** Asinxron funksiya yarating, u foydalanuvchi nomi va parolni qabul qilib, 2 soniyadan keyin loginni muvaffaqiyatli yoki muvaffaqiyatsiz deb qaytarsin.

### **Yo‘riqnoma:**

1. Parolni tekshirish uchun oddiy shartlar qo'shing (masalan, `password === '12345'`).
2. Asinxron operatsiya orqali 2 soniya kechikishni qo‘shing va keyin natijani qaytaring.

### **Yechim:**

Bu vazifada biz foydalanuvchi nomi va parolni tekshiruvchi va 2 soniya kutib natijani qaytaruvchi asinxron funksiya yaratamiz.

```javascript
// 1. Asinxron login funksiyasi
function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Oddiy parol tekshiruvi
      if (password === '12345') {
        resolve("Login muvaffaqiyatli!");
      } else {
        reject("Login muvaffaqiyatsiz. Noto'g'ri parol.");
      }
    }, 2000); // 2 soniya kutish
  });
}

// 2. Async funksiyani yaratish va loginni bajarish
async function performLogin(username, password) {
  try {
    const result = await login(username, password);
    console.log(result); // "Login muvaffaqiyatli!"
  } catch (error) {
    console.error(error); // "Login muvaffaqiyatsiz. Noto'g'ri parol."
  }
}

// 3. Funksiyani chaqirish
performLogin("user1", "12345"); // Muvaffaqiyatli login
performLogin("user2", "wrongpassword"); // Muvaffaqiyatsiz login
```

### **Tushuntirish:**

1. **`login(username, password)` Funksiyasi:**
   - Foydalanuvchi nomi va parolni qabul qiladi.
   - `password === '12345'` bo'lsa, `resolve` orqali muvaffaqiyatli xabarni beradi.
   - Aks holda, `reject` orqali muvaffaqiyatsiz xabarni beradi.
   - 2 soniya kutib, natijani qaytaradi.

2. **`performLogin(username, password)` Async Funksiyasi:**
   - `try...catch` blokidan foydalanib, `login` funksiyasini chaqiradi va natijani kutadi (`await`).
   - Muvaffaqiyatli bo'lsa, natijani konsolga chiqaradi.
   - Muvaffaqiyatsiz bo'lsa, xatolikni ushlab, xabarni konsolga chiqaradi.

3. **Funksiyani Chaqirish:**
   - Birinchi chaqirishda to‘g‘ri parol bilan loginni bajaradi.
   - Ikkinchi chaqirishda noto‘g‘ri parol bilan loginni bajaradi.

### **Natija:**

```
(Login chaqirishidan keyin 2 soniya)
Login muvaffaqiyatli!

(Login chaqirishidan keyin yana 2 soniya)
Login muvaffaqiyatsiz. Noto'g'ri parol.
```

---

## **Qo'shimcha: Vaqtni Boshqarish va Async/Await**

Agar siz `async/await` bilan ko'proq mashq qilmoqchi bo'lsangiz, quyidagi qo'shimcha masalalarni yechishingiz mumkin.

### **Vazifa 6: Ma'lumotlarni Olish va Qayta Ishlash**

**Vazifa:** Asinxron funksiya yarating, u 2 soniyadan keyin ma'lumotlarni oladi va ularni konsolga chiqaradi. Agar ma'lumotlar bo'sh bo'lsa, "Ma'lumot mavjud emas." degan xabarni chiqaradi.

### **Yo‘riqnoma:**

1. `fetchData()` nomli asinxron funksiya yarating, u va’da (`Promise`) qaytaradi.
2. Ma'lumotlarni tekshirib, mos ravishda xabarni chiqarish.

### **Yechim:**

```javascript
// 1. Asinxron ma'lumotlarni olish funksiyasi
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = ["Element1", "Element2"]; // Ma'lumotlar ro'yxati
      if (data.length > 0) {
        resolve(data);
      } else {
        reject("Ma'lumot mavjud emas.");
      }
    }, 2000); // 2 soniya kutish
  });
}

// 2. Async funksiyani yaratish va ma'lumotlarni chiqarish
async function getData() {
  try {
    const data = await fetchData();
    console.log("Olingan ma'lumotlar:", data);
  } catch (error) {
    console.error(error);
  }
}

// 3. Funksiyani chaqirish
getData();
```

### **Natija:**

```
(Olingan ma'lumotlardan keyin 2 soniya)
Olingan ma'lumotlar: [ 'Element1', 'Element2' ]
```
(Yoki ma'lumotlar bo'sh bo'lsa)
```
Ma'lumot mavjud emas.
```

---

## **Vazifa 7: Xarajatlarni Hisoblash**

**Vazifa:** Asinxron funksiya yarating, u xarajatlar ro‘yxatini qabul qilib, ularni hisoblaydi va umumiy summani qaytaradi. Agar ro‘yxat bo'sh bo'lsa, "Xarajatlar mavjud emas." degan xabarni chiqaradi.

### **Yo‘riqnoma:**

1. `calculateTotal(expenses)` nomli asinxron funksiya yarating.
2. Xarajatlarni hisoblash va natijani qaytarish.

### **Yechim:**

```javascript
// 1. Asinxron xarajatlarni hisoblash funksiyasi
function calculateTotal(expenses) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (expenses.length > 0) {
        const total = expenses.reduce((acc, curr) => acc + curr, 0);
        resolve(total);
      } else {
        reject("Xarajatlar mavjud emas.");
      }
    }, 2000); // 2 soniya kutish
  });
}

// 2. Async funksiyani yaratish va xarajatlarni hisoblash
async function getTotalExpenses() {
  try {
    const expenses = [100, 200, 300]; // Xarajatlar ro'yxati
    const total = await calculateTotal(expenses);
    console.log(`Umumiy xarajatlar: $${total}`);
  } catch (error) {
    console.error(error);
  }
}

// 3. Funksiyani chaqirish
getTotalExpenses();
```

### **Natija:**

```
(Umumiy xarajatlarni hisoblashdan keyin 2 soniya)
Umumiy xarajatlar: $600
```
(Yoki xarajatlar ro'yxati bo'sh bo'lsa)
```
Xarajatlar mavjud emas.
```

---

## **Vazifa 8: Foydalanuvchi Ma'lumotlarini Olish**

**Vazifa:** Asinxron funksiya yarating, u foydalanuvchi ID sini qabul qilib, ma'lumotlarni oladi va konsolga chiqaradi. Agar foydalanuvchi topilmasa, "Foydalanuvchi topilmadi." degan xabarni chiqaradi.

### **Yo‘riqnoma:**

1. `getUserInfo(userId)` nomli asinxron funksiya yarating.
2. Foydalanuvchini tekshirib, ma'lumotlarni chiqarish yoki xatolikni ushlash.

### **Yechim:**

```javascript
// 1. Asinxron foydalanuvchi ma'lumotlarini olish funksiyasi
function getUserInfo(userId) {
  const users = {
    1: { name: "Alice", age: 25 },
    2: { name: "Bob", age: 30 }
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (users[userId]) {
        resolve(users[userId]);
      } else {
        reject("Foydalanuvchi topilmadi.");
      }
    }, 2000); // 2 soniya kutish
  });
}

// 2. Async funksiyani yaratish va foydalanuvchi ma'lumotlarini chiqarish
async function displayUserInfo(id) {
  try {
    const user = await getUserInfo(id);
    console.log(`Foydalanuvchi: ${user.name}, Yoshi: ${user.age}`);
  } catch (error) {
    console.error(error);
  }
}

// 3. Funksiyani chaqirish
displayUserInfo(1); // Mavjud foydalanuvchi
displayUserInfo(3); // Mavjud bo'lmagan foydalanuvchi
```

### **Natija:**

```
(Foydalanuvchi ma'lumotlarini olgach 2 soniya)
Foydalanuvchi: Alice, Yoshi: 25

(Foydalanuvchi topilmagach 2 soniya)
Foydalanuvchi topilmadi.
```

---

## **Vazifa 9: Xaridni Tasdiqlash**

**Vazifa:** Asinxron funksiya yarating, u xarid ro'yxatini qabul qilib, uni tasdiqlaydi yoki omborda yetarli emasligini bildiradi.

### **Yo‘riqnoma:**

1. `confirmOrder(cart)` nomli asinxron funksiya yarating.
2. Ombordagi mahsulotlarni tekshirib, tasdiqlash yoki rad etish.

### **Yechim:**

```javascript
// 1. Asinxron xaridni tasdiqlash funksiyasi
function confirmOrder(cart) {
  const inventory = {
    "Telefon": 10,
    "Kompyuter": 5,
    "Planshet": 0
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let item of cart) {
        if (!inventory[item] || inventory[item] <= 0) {
          reject(`Mahsulot yetarli emas: ${item}`);
          return;
        }
      }
      // Agar barcha mahsulotlar yetarli bo'lsa
      cart.forEach(item => inventory[item]--);
      resolve("Xarid tasdiqlandi.");
    }, 3000); // 3 soniya kutish
  });
}

// 2. Async funksiyani yaratish va xaridni tasdiqlash
async function processOrder() {
  try {
    const cart = ["Telefon", "Kompyuter"];
    const message = await confirmOrder(cart);
    console.log(message); // "Xarid tasdiqlandi."
  } catch (error) {
    console.error(error); // "Mahsulot yetarli emas: Planshet"
  }
}

// 3. Funksiyani chaqirish
processOrder();
```

### **Tushuntirish:**

1. **`confirmOrder(cart)` Funksiyasi:**
   - Xarid ro'yxatini (`cart`) qabul qiladi.
   - Har bir mahsulotni omborda borligini va yetarli miqdorda borligini tekshiradi.
   - Agar biror mahsulot yetarli bo'lmasa, `reject` orqali xatolikni beradi.
   - Barcha mahsulotlar yetarli bo'lsa, ombordagi mahsulot miqdorini kamaytirib, `resolve` orqali tasdiqlash xabarini beradi.

2. **`processOrder()` Async Funksiyasi:**
   - Xarid ro'yxatini belgilaydi (`cart`).
   - `confirmOrder(cart)` funksiyasini chaqirib, natijani kutadi (`await`).
   - Muvaffaqiyatli bo'lsa, xabarni chiqaradi.
   - Muvaffaqiyatsiz bo'lsa, xatolikni ushlab, xabarni chiqaradi.

3. **Funksiyani Chaqirish:**
   - `processOrder()` funksiyasini chaqirib, natijani ko'ramiz.

### **Natija:**

```
(Xaridni tasdiqlashdan keyin 3 soniya)
Xarid tasdiqlandi.
```
(Yoki omborda yetarli bo'lmagan mahsulot bo'lsa)
```
Mahsulot yetarli emas: Planshet
```

---

## **Xulosa**

Yuqorida taqdim etilgan beshta vazifa orqali siz **Promises** va **async/await** yordamida JavaScriptda asinxron operatsiyalarni qanday boshqarishni o‘rganishingiz mumkin. Har bir vazifa real hayotdagi scenario'larni simulyatsiya qilish orqali amaliyotda qo‘llashni osonlashtiradi. 

Agar qo‘shimcha savollaringiz yoki boshqa masalalar bo‘lsa, bemalol so‘rashingiz mumkin!
