
**Umumiy Talablar:**

- Server `http` modulidan foydalangan holda yaratiladi va `localhost:3000` portida ishga tushadi.
- So‘rovlar va javoblar faqat JSON formatida (client → server: JSON, server → client: JSON) bo‘ladi, `Content-Type: application/json` bilan ishlashga e’tibor qaratiladi.
- Fayl tizimi yoki real baza o‘rniga in-memory massiv yoki obyektlardan foydalang. (Hamma data server xotirasida saqlanadi.)
- Har bir javobda status kodi to‘g‘ri o‘rnatilishi kerak (200 OK, 400 Bad Request, 404 Not Found, 405 Method Not Allowed, 500 Internal Server Error va hokazo).

**Ma’lumotlar tuzilmasi (Data Model):**

- **Telefonlar**: Har bir telefon obyektida quyidagi maydonlar bo‘lsin:
  - `id` (raqam yoki unique string)
  - `name` (masalan, “iPhone 14”)
  - `brand` (masalan, “Apple”)
  - `price` (raqam)
  - `stock` (qancha dona qolgan, raqam)
  
  Dastlab bir nechta telefonlar massivda oldindan bo‘lsin (masalan, `items = [ {id:1, name:"iPhone 14", brand:"Apple", price:1200, stock:10}, {...}, ...]`).

**Marshrutlar (Routes) va Funksionallik:**

1. **GET /phones**  
   - Barcha telefonlarni JSON formatida qaytaring.  
   - `?brand=Apple` query parameter orqali filtr berilsa, faqat `brand`i berilgan qiymatga teng telefonlarni qaytaring.  
   - `?maxPrice=1000` parametr bilan faqat narxi 1000 dan kichik yoki teng bo‘lgan telefonlarni qaytaring.  
   - Bir nechta query berilishi mumkin (`brand`, `maxPrice`), shunga mos filtr qiling.

2. **GET /phones/:id**  
   - URL path param (`:id`) bo‘yicha bitta telefonni topib, uni JSON formatda qaytaring.  
   - Agar topilmasa, `404 Not Found` qaytaring.

3. **POST /phones**  
   - Yangi telefon qo‘shish uchun ishlatiladi.  
   - `body` JSON formatda keladi (masalan: `{"name":"Galaxy S23","brand":"Samsung","price":900,"stock":5}`).  
   - Agar barcha kerakli maydonlar to‘liq bo‘lmasa, `400 Bad Request` qaytaring.  
   - Muvaffaqiyatli qo‘shilgach, yaratilgan obyektni qaytaring (`201 Created` status).

4. **PUT /phones/:id**  
   - Mavjud telefon ma’lumotlarini yangilash.  
   - `id` bo‘yicha telefon topiladi, agar topilmasa `404 Not Found`.  
   - `body` da kelgan ma’lumotlar asosida `name`, `brand`, `price`, `stock` o‘zgartiriladi.  
   - Kamida bitta maydon o‘zgarishi kerak, agar body bo‘sh bo‘lsa yoki noto‘g‘ri ma’lumotlar kelgan bo‘lsa, `400 Bad Request`.  
   - Yangilangan obyektni `200 OK` bilan qaytaring.

5. **DELETE /phones/:id**  
   - `id` bo‘yicha telefonni o‘chirish.  
   - Agar topilmasa `404 Not Found`, topilsa `200 OK` va o‘chirilgan obyektni qaytaring.

**Qo‘shimcha Funksionallik (ixtiyoriy, murakkabroq qilish uchun):**

6. **Savatcha (Cart) funksionalligi:**  
   - Har bir foydalanuvchi uchun session concept imitatsiya qilinishi mumkin. Masalan, `cart` - bu server xotirasida alohida massiv (yoki obyekt).
   - `POST /cart` – Body da `{"phoneId": 1, "quantity": 2}` kabi so‘rov kelsa, savatchaga shu telefon qo‘shiladi. Agar `stock` yetarli bo‘lmasa `400 Bad Request` qaytarish. Aks holda `200 OK` va savatchadagi yangilangan ro‘yxatni qaytaring.
   - `GET /cart` – Savatchadagi telefonlarni JSON formatda qaytarish. Har bir elementda `phoneId`, `quantity`, `totalPrice` (price * quantity) bo‘lsin.
   - `DELETE /cart?phoneId=1` – savatchadan ma’lum bir telefonni o‘chirish.
   - Savatcha bo‘sh bo‘lsa `[]` qaytaring.

7. **Zakazni tasdiqlash (Checkout) funksiyasi:**  
   - `POST /checkout` – savatchadagi barcha tovarlar uchun `stock`ni kamaytirsin. Agar `cart` bo‘sh bo‘lsa yoki `stock` yetmasa xato berilsin. Muvaffaqiyatli bo‘lsa, `200 OK` qaytarib, savatchani tozalasin va “Buyurtma qabul qilindi” kabi xabar qaytaring.

8. **Xatolarni to‘g‘ri qayta ishlash:**  
   - Notanish route: `404 Not Found`.  
   - Noto‘g‘ri method: `405 Method Not Allowed`.  
   - Noto‘g‘ri JSON format: `400 Bad Request` va ma’lumot.  
   - Server ichki xatolari uchun `500 Internal Server Error`.

9. **Optimallashtirish (ixtiyoriy):**  
   - `url` va `querystring` modulidan foydalangan holda query parametrlarini o‘qish.
   - Request body’ni `req.on('data')` va `req.on('end')` eventlari orqali o‘qish.  
   - JSON parse xatolariga e’tibor qaratish (try/catch bilan ushlash).

10. **Test variantlari:**  
    - `GET /phones` → barcha telefonlar.  
    - `GET /phones?brand=Apple` → faqat Apple brendli telefonlar.  
    - `GET /phones?maxPrice=1000` → narxi 1000 yoki undan past bo‘lganlar.  
    - `POST /phones` → yangi telefon qo‘shish.  
    - `PUT /phones/1` → mavjud telefonni yangilash.  
    - `DELETE /phones/2` → telefonni o‘chirish.  
    - `POST /cart` → savatchaga qo‘shish.  
    - `GET /cart` → savatchani ko‘rish.  
    - `POST /checkout` → zakazni tasdiqlash.

**Natija:**  
Ushbu talablar bo‘yicha ishlab chiqilgan mini “online telefon market” serveri sizga Node.js’ning oddiy `http` modulida RESTful xizmatlarni yaratishni o‘rgatadi. Bu tajriba kelajakda Express.js kabi frameworklar bilan ishlashni ancha osonlashtiradi.
