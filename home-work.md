Oddiy mehmonxona buyurtmasi simulyatsiyasini yarating (Promises yordamida).

1. Tayyorlash:

checkAvailability() nomli funksiya yarating, u mehmonxonada xonalar mavjudligini tekshirishni simulyatsiya qiladi. Bu funksiya 2 soniyadan keyin va'da (Promise) qaytarishi kerak. Agar xonalar mavjud bo'lsa, true, mavjud bo'lmasa false qiymatini qaytarsin.

2. Buyurtma jarayoni:

makeReservation() nomli yana bir funksiya yarating, u mavjudlik natijasini qabul qiladi. Agar xonalar mavjud bo'lsa, va'da (Promise) "Buyurtma tasdiqlandi!" kabi xabar bilan amalga oshadi (resolve). Agar mavjud bo'lmasa, va'da rad etiladi (reject) va "Kechirasiz, xonalar mavjud emas." xabarini qaytaradi.

3. Xatoliklarni boshqarish:

.then() va .catch() orqali promis natijalarini boshqaring. Agar buyurtma muvaffaqiyatli bo'lsa, tasdiqlash xabarini ko'rsating. Agar muvaffaqiyatsiz bo'lsa, rad etilgan xatoni ushlang va tegishli xabarni chiqaring.

Bir nechta mustaqil API so'rovlarini amalga oshiradigan va natijalarni yig'adigan simulyatsiya.

4. Tayyorlash:

3 ta funksiya yarating: getHotelDetails(), getFlightDetails(), va getWeatherDetails(). Har biri va'da (Promise) qaytaradi va bu va'da 2 soniyadan keyin tegishli ma'lumotlarni qaytaradi:
getHotelDetails() â€” "Mehmonxona ma'lumotlari olingan."
getFlightDetails() â€” "Parvoz ma'lumotlari olingan."
getWeatherDetails() â€” "Ob-havo ma'lumotlari olingan."

5. Promise.all() bilan ishlash:

bookTrip() nomli funksiya yarating va u Promise.all() yordamida yuqoridagi barcha funksiyalarni bir vaqtda chaqirsin. Ularning natijalari to'planOddiy mehmonxona buyurtmasi simulyatsiyasini yarating (Promises yordamida).

1. Tayyorlash:

checkAvailability() nomli funksiya yarating, u mehmonxonada xonalar mavjudligini tekshirishni simulyatsiya qiladi. Bu funksiya 2 soniyadan keyin va'da (Promise) qaytarishi kerak. Agar xonalar mavjud bo'lsa, true, mavjud bo'lmasa false qiymatini qaytarsin.

2. Buyurtma jarayoni:

makeReservation() nomli yana bir funksiya yarating, u mavjudlik natijasini qabul qiladi. Agar xonalar mavjud bo'lsa, va'da (Promise) "Buyurtma tasdiqlandi!" kabi xabar bilan amalga oshadi (resolve). Agar mavjud bo'lmasa, va'da rad etiladi (reject) va "Kechirasiz, xonalar mavjud emas." xabarini qaytaradi.

3. Xatoliklarni boshqarish:

.then() va .catch() orqali promis natijalarini boshqaring. Agar buyurtma muvaffaqiyatli bo'lsa, tasdiqlash xabarini ko'rsating. Agar muvaffaqiyatsiz bo'lsa, rad etilgan xatoni ushlang va tegishli xabarni chiqaring.

Bir nechta mustaqil API so'rovlarini amalga oshiradigan va natijalarni yig'adigan simulyatsiya.

4. Tayyorlash:

3 ta funksiya yarating: getHotelDetails(), getFlightDetails(), va getWeatherDetails(). Har biri va'da (Promise) qaytaradi va bu va'da 2 soniyadan keyin tegishli ma'lumotlarni qaytaradi:
getHotelDetails() â€” "Mehmonxona ma'lumotlari olingan."
getFlightDetails() â€” "Parvoz ma'lumotlari olingan."
getWeatherDetails() â€” "Ob-havo ma'lumotlari olingan."

5. Promise.all() bilan ishlash:

bookTrip() nomli funksiya yarating va u Promise.all() yordamida yuqoridagi barcha funksiyalarni bir vaqtda chaqirsin. Ularning natijalari to'plangach, sayohat ma'lumotlarini konsolga chiqaring.
Agar va'dalardan biri muvaffaqiyatsiz bo'lsa (masalan, biron-bir xato yoki rad etilgan holat), catch() orqali xatoni ushlang va xatolik xabarini chiqaring.
Natija: Agar barcha va'dalar muvaffaqiyatli bajarilsa, konsolda quyidagi ma'lumotlarni ko'rishingiz kerak:

"Mehmonxona ma'lumotlari olingan."
"Parvoz ma'lumotlari olingan."
"Ob-havo ma'lumotlari olingan."
Agar biror funksiya muvaffaqiyatsiz bo'lsa, bitta umumiy xato xabari chiqadi.gach, sayohat ma'lumotlarini konsolga chiqaring.
Agar va'dalardan biri muvaffaqiyatsiz bo'lsa (masalan, biron-bir xato yoki rad etilgan holat), catch() orqali xatoni ushlang va xatolik xabarini chiqaring.
Natija: Agar barcha va'dalar muvaffaqiyatli bajarilsa, konsolda quyidagi ma'lumotlarni ko'rishingiz kerak:

"Mehmonxona ma'lumotlari olingan."
"Parvoz ma'lumotlari olingan."
"Ob-havo ma'lumotlari olingan."
Agar biror funksiya muvaffaqiyatsiz bo'lsa, bitta umumiy xato xabari chiqadi.

# Shulardan 10 tani ishlash
### Promises Bilan Ishlash Bo‘yicha 30 Ta Vazifa (Batafsil Tavsiflar bilan)

Quyidagi vazifalar **JavaScript** dasturlash tilida **Promises** va asinxron operatsiyalar bilan ishlashni o‘rganishga yordam beradi. Har bir vazifa batafsil tavsiflangan bo‘lib, qanday turdagi ma’lumotlar bilan ishlashini ham tushuntirib beradi. Ushbu tavsiflar vazifalarni mustaqil ravishda yechishingiz uchun mo‘ljallangan.

---

#### **1. Xonalar Mavjudligini Tekshirish**
**Vazifa:** `checkAvailability()` nomli funksiya yarating. U mehmonxonada xonalar mavjudligini tekshiradi va 2 soniyadan keyin natijani qaytaradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** Hech qanday.
  - **Chiqish (Promise):** `boolean` (`true` yoki `false`).

- **Logic Tavsifi:**
  1. **Xonalar Ro‘yxatini Belgilash:** Avvalo, mehmonxonada mavjud bo‘lgan xonalar ro‘yxatini belgilash kerak. Bu ro‘yxat massiv (array) shaklida bo‘lishi mumkin, masalan, `[101, 102, 103]`.
  
  2. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` funksiyasi yordamida 2 soniyaga kutish simulyatsiya qilinadi. Bu haqiqiy serverdan ma’lumotlarni olish jarayonini taqlid qiladi.
  
  3. **Xonalar Mavjudligini Tekshirish:**
     - Agar xonalar ro‘yxati bo‘sh bo‘lmasa (`length > 0`), demak, xonalar mavjud. `resolve(true)` chaqiriladi.
     - Agar xonalar ro‘yxati bo‘sh bo‘lsa (`length === 0`), `reject(false)` chaqiriladi.

- **Natija:**
  - **Mavjud bo‘lsa:** `true`
  - **Mavjud bo‘lmasa:** `false`

**Misol:**
```javascript
checkAvailability()
  .then(isAvailable => console.log(isAvailable ? "Xonalar mavjud." : "Xonalar mavjud emas."))
  .catch(error => console.error(error));

// Agar xonalar mavjud bo'lsa konsolda:
// "Xonalar mavjud."

// Agar xonalar mavjud bo'lmasa konsolda:
// "Xonalar mavjud emas."
```

---

#### **2. Buyurtma Qilish**
**Vazifa:** `makeReservation(isAvailable)` nomli funksiya yarating. U `checkAvailability()` dan olingan natijani qabul qiladi va xonalar mavjud bo‘lsa buyurtmani tasdiqlaydi, aks holda rad etadi.

- **Ma’lumot Turlari:**
  - **Kiritish:** `boolean` (`true` yoki `false`)
  - **Chiqish (Promise):** `string` ("Buyurtma tasdiqlandi!" yoki "Kechirasiz, xonalar mavjud emas.")

- **Logic Tavsifi:**
  1. **Buyurtma Qilish Jarayoni:**
     - Agar `isAvailable` `true` bo‘lsa, demak xonalar mavjud va buyurtma muvaffaqiyatli tasdiqlanadi. `resolve("Buyurtma tasdiqlandi!")` chaqiriladi.
     - Agar `isAvailable` `false` bo‘lsa, demak xonalar mavjud emas va buyurtma rad etiladi. `reject("Kechirasiz, xonalar mavjud emas.")` chaqiriladi.
  
  2. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 1 soniyaga kutish amalga oshiriladi, bu buyurtma jarayonini taqlid qiladi.

- **Natija:**
  - **Mavjud bo‘lsa:** "Buyurtma tasdiqlandi!"
  - **Mavjud bo‘lmasa:** "Kechirasiz, xonalar mavjud emas."

**Misol:**
```javascript
checkAvailability()
  .then(isAvailable => makeReservation(isAvailable))
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Agar xonalar mavjud bo'lsa konsolda:
// "Buyurtma tasdiqlandi!"

// Agar xonalar mavjud bo'lmasa konsolda:
// "Kechirasiz, xonalar mavjud emas."
```

---

#### **3. Ma’lumotlarni Yuklash**
**Vazifa:** `fetchData()` nomli funksiya yarating. U serverdan ma’lumotlarni yuklashni simulyatsiya qiladi va 3 soniyadan keyin natijani qaytaradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** Hech qanday.
  - **Chiqish (Promise):** `object` yoki `string` (masalan, `{ data: "Sample Data" }` yoki "Ma’lumotlarni yuklashda xato yuz berdi.")

- **Logic Tavsifi:**
  1. **Ma’lumotlar Manbasini Belgilash:** Serverdan olingan ma’lumotlar uchun namunaviy obyekt yoki xato xabari belgilash kerak.
  
  2. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 3 soniyaga kutish amalga oshiriladi.
  
  3. **Ma’lumotlarni Qaytarish:**
     - Agar ma’lumotlar muvaffaqiyatli yuklansa, `resolve({ data: "Sample Data" })` chaqiriladi.
     - Agar ma’lumotlarni yuklashda xato yuz bersa, `reject("Ma’lumotlarni yuklashda xato yuz berdi.")` chaqiriladi.

- **Natija:**
  - **Muvaffaqiyatli:** `{ data: "Sample Data" }`
  - **Xato:** "Ma’lumotlarni yuklashda xato yuz berdi."

**Misol:**
```javascript
fetchData()
  .then(data => console.log("Ma’lumotlar:", data))
  .catch(error => console.error(error));

// Agar ma'lumotlar muvaffaqiyatli yuklansa konsolda:
// "Ma’lumotlar: { data: 'Sample Data' }"

// Agar xato yuz bersa konsolda:
// "Ma’lumotlarni yuklashda xato yuz berdi."
```

---

#### **4. Foydalanuvchi Autentifikatsiyasi**
**Vazifa:** `authenticateUser(username, password)` funksiyasini yarating. Foydalanuvchi ma’lumotlarini tekshiradi va autentifikatsiyani tasdiqlaydi yoki rad etadi.

- **Ma’lumot Turlari:**
  - **Kiritish:** 
    - `string` (`username`)
    - `string` (`password`)
  - **Chiqish (Promise):** 
    - `string` ("Foydalanuvchi muvaffaqiyatli autentifikatsiyalandi.")
    - `string` ("Autentifikatsiya xatosi.")

- **Logic Tavsifi:**
  1. **Foydalanuvchi Ma’lumotlarini Tekshirish:**
     - Ma’lumotlar bazasida (masalan, massiv yoki obyekt) mavjud foydalanuvchilarni saqlash.
     - Kiritilgan `username` va `password` ni mavjud foydalanuvchilar ro‘yxati bilan taqqoslash.
  
  2. **Autentifikatsiyani Tasdiqlash:**
     - Agar `username` va `password` mos kelsa, autentifikatsiya muvaffaqiyatli hisoblanadi va `resolve("Foydalanuvchi muvaffaqiyatli autentifikatsiyalandi.")` chaqiriladi.
     - Agar mos kelmasa, autentifikatsiya rad etiladi va `reject("Autentifikatsiya xatosi.")` chaqiriladi.
  
  3. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 2 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **To‘g‘ri ma’lumotlar:** "Foydalanuvchi muvaffaqiyatli autentifikatsiyalandi."
  - **Noto‘g‘ri ma’lumotlar:** "Autentifikatsiya xatosi."

**Misol:**
```javascript
authenticateUser("admin", "password123")
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Agar ma'lumotlar to'g'ri bo'lsa konsolda:
// "Foydalanuvchi muvaffaqiyatli autentifikatsiyalandi."

// Agar ma'lumotlar noto'g'ri bo'lsa konsolda:
// "Autentifikatsiya xatosi."
```

---

#### **5. Kitob Qidiruvi**
**Vazifa:** `searchBooks(query)` funksiyasini yarating. U kitob qidiruvini simulyatsiya qiladi va qidiruv natijalarini qaytaradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** `string` (`query`)
  - **Chiqish (Promise):** 
    - `array` (topilgan kitoblar ro‘yxati)
    - `string` ("Hech qanday kitob topilmadi.")

- **Logic Tavsifi:**
  1. **Kitoblar Ro‘yxatini Belgilash:** Mavjud kitoblar ro‘yxatini massiv (array) shaklida saqlash, masalan, `["JavaScript Asoslari", "HTML va CSS", "Python Dasturlash"]`.
  
  2. **Qidiruv So‘rovini Qabul Qilish:** Foydalanuvchi tomonidan kiritilgan `query` ni oladi.
  
  3. **Kitoblarni Filtrlash:**
     - `query` so‘zini kichik harflarda (`toLowerCase()`) aylantirib, kitob nomlari bilan taqqoslash.
     - Mos keladigan kitoblarni topish uchun `filter` metodidan foydalanish.
  
  4. **Natijani Qaytarish:**
     - Agar mos keladigan kitoblar mavjud bo‘lsa, `resolve(results)` chaqiriladi.
     - Agar hech qanday kitob topilmasa, `reject("Hech qanday kitob topilmadi.")` chaqiriladi.
  
  5. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 1.5 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Kitoblar topilsa:** `["JavaScript Asoslari", "HTML va CSS"]`
  - **Kitob topilmasa:** "Hech qanday kitob topilmadi."

**Misol:**
```javascript
searchBooks("JavaScript")
  .then(results => console.log("Topilgan kitoblar:", results))
  .catch(error => console.error(error));

// Agar kitoblar topilsa konsolda:
// "Topilgan kitoblar: [ 'JavaScript Asoslari', 'Advanced JavaScript' ]"

// Agar kitob topilmasa konsolda:
// "Hech qanday kitob topilmadi."
```

---

#### **6. Elektron Pochta Yuborish**
**Vazifa:** `sendEmail(recipient, subject, body)` funksiyasini yarating. Elektron pochta yuborishni simulyatsiya qiladi va natijani qaytaradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** 
    - `string` (`recipient`)
    - `string` (`subject`)
    - `string` (`body`)
  - **Chiqish (Promise):** 
    - `string` ("Elektron pochta yuborildi.")
    - `string` ("Manzil noto‘g‘ri.")

- **Logic Tavsifi:**
  1. **Elektron Pochta Ma’lumotlarini Qabul Qilish:** Foydalanuvchi tomonidan yuborilgan `recipient` (oluvchi manzil), `subject` (mavzu) va `body` (matn) ni oladi.
  
  2. **Manzilning To‘g‘riligini Tekshirish:**
     - `recipient` stringida `@` belgisi mavjudligini tekshirish orqali manzilning to‘g‘riligini aniqlash.
  
  3. **Natijani Qaytarish:**
     - Agar `recipient` to‘g‘ri bo‘lsa (`@` belgisi mavjud), `resolve("Elektron pochta yuborildi.")` chaqiriladi.
     - Agar `recipient` noto‘g‘ri bo‘lsa (`@` belgisi mavjud emas), `reject("Manzil noto‘g‘ri.")` chaqiriladi.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 2.5 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **To‘g‘ri manzil:** "Elektron pochta yuborildi."
  - **Noto‘g‘ri manzil:** "Manzil noto‘g‘ri."

**Misol:**
```javascript
sendEmail("user@example.com", "Salom", "Bu test xabari.")
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Agar manzil to'g'ri bo'lsa konsolda:
// "Elektron pochta yuborildi."

// Agar manzil noto'g'ri bo'lsa konsolda:
// "Manzil noto‘g‘ri."
```

---

#### **7. Foydalanuvchi Ro‘yxatdan O‘tishi**
**Vazifa:** `registerUser(userInfo)` funksiyasini yarating. Yangi foydalanuvchini ro‘yxatdan o‘tkazadi yoki mavjud foydalanuvchini aniqlaydi.

- **Ma’lumot Turlari:**
  - **Kiritish:** `object` (`userInfo`, masalan, `{ username: "john", password: "12345" }`)
  - **Chiqish (Promise):** 
    - `string` ("Ro‘yxatdan o‘tildi.")
    - `string` ("Foydalanuvchi mavjud.")

- **Logic Tavsifi:**
  1. **Mavjud Foydalanuvchilar Ro‘yxatini Belgilash:** Mavjud foydalanuvchilarni massiv (array) shaklida saqlash, masalan, `["alice", "bob"]`.
  
  2. **Yangi Foydalanuvchini Tekshirish:**
     - `userInfo.username` ni mavjud foydalanuvchilar ro‘yxati bilan taqqoslash.
  
  3. **Ro‘yxatdan O‘tishni Bajarish:**
     - Agar foydalanuvchi nomi ro‘yxatda mavjud bo‘lmasa, yangi foydalanuvchini ro‘yxatga qo‘shish va `resolve("Ro‘yxatdan o‘tildi.")` chaqirish.
     - Agar foydalanuvchi nomi ro‘yxatda mavjud bo‘lsa, `reject("Foydalanuvchi mavjud.")` chaqirish.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 3 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Yangi foydalanuvchi qo‘shilsa:** "Ro‘yxatdan o‘tildi."
  - **Mavjud foydalanuvchi bo‘lsa:** "Foydalanuvchi mavjud."

**Misol:**
```javascript
registerUser({ username: "charlie", password: "password456" })
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Agar foydalanuvchi ro'yxatdan o'tsa konsolda:
// "Ro‘yxatdan o‘tildi."

// Agar foydalanuvchi mavjud bo'lsa konsolda:
// "Foydalanuvchi mavjud."
```

---

#### **8. To‘lovni Qabul Qilish**
**Vazifa:** `processPayment(amount)` funksiyasini yarating. Foydalanuvchi to‘lovini qabul qiladi yoki rad etadi.

- **Ma’lumot Turlari:**
  - **Kiritish:** `number` (`amount`)
  - **Chiqish (Promise):** 
    - `string` ("To‘lov amalga oshirildi.")
    - `string` ("Balans yetarli emas.")

- **Logic Tavsifi:**
  1. **Foydalanuvchi Balansini Belgilash:** Foydalanuvchining balansini `number` shaklida saqlash, masalan, `let userBalance = 100;`.
  
  2. **To‘lovni Tekshirish:**
     - Kiritilgan `amount` foydalanuvchining balansidan kam yoki teng bo‘lsa, to‘lovni qabul qilish.
     - Aks holda, to‘lovni rad etish.
  
  3. **To‘lovni Bajarish yoki Rad Etish:**
     - Agar balans yetarli bo‘lsa, balansni kamaytirish va `resolve("To‘lov amalga oshirildi.")` chaqirish.
     - Agar balans yetarli bo‘lmasa, `reject("Balans yetarli emas.")` chaqirish.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 2 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Balans yetarli bo‘lsa:** "To‘lov amalga oshirildi."
  - **Balans yetarli bo‘lmasa:** "Balans yetarli emas."

**Misol:**
```javascript
let userBalance = 100;

processPayment(50)
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Agar balans yetarli bo'lsa konsolda:
// "To‘lov amalga oshirildi."

// Agar balans yetarli bo'lmasa konsolda:
// "Balans yetarli emas."
```

---

#### **9. Rasm Yuklash**
**Vazifa:** `uploadImage(imageFile)` funksiyasini yarating. Rasm faylini yuklashni simulyatsiya qiladi va natijani qaytaradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** `string` (`imageFile`, masalan, "photo.jpg")
  - **Chiqish (Promise):** 
    - `string` ("Rasm yuklandi.")
    - `string` ("Fayl turi noto‘g‘ri.")

- **Logic Tavsifi:**
  1. **Yaroqli Fayl Turlarini Belgilash:** Yaroqli fayl turlarini massiv (array) shaklida belgilash, masalan, `["jpg", "png", "gif"]`.
  
  2. **Fayl Turi Tekshirish:**
     - `imageFile` ni `.` belgisi bo‘yicha bo‘lib, oxirgi qismini (fayl kengaytmasi) olish.
     - Fayl kengaytmasi yaroqli turlar ro‘yxatida mavjudligini tekshirish.
  
  3. **Natijani Qaytarish:**
     - Agar fayl turi yaroqli bo‘lsa, `resolve("Rasm yuklandi.")` chaqiriladi.
     - Agar fayl turi yaroqli bo‘lmasa, `reject("Fayl turi noto‘g‘ri.")` chaqiriladi.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 4 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **To‘g‘ri fayl turi:** "Rasm yuklandi."
  - **Noto‘g‘ri fayl turi:** "Fayl turi noto‘g‘ri."

**Misol:**
```javascript
uploadImage("photo.jpg")
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Agar fayl turi to'g'ri bo'lsa konsolda:
// "Rasm yuklandi."

// Agar fayl turi noto'g'ri bo'lsa konsolda:
// "Fayl turi noto‘g‘ri."
```

---

#### **10. Video Qidiruvi**
**Vazifa:** `searchVideos(query)` funksiyasini yarating. Video qidiruvini amalga oshiradi va natijalarni qaytaradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** `string` (`query`)
  - **Chiqish (Promise):** 
    - `array` (topilgan videolar ro‘yxati)
    - `string` ("Hech qanday video topilmadi.")

- **Logic Tavsifi:**
  1. **Videolar Ro‘yxatini Belgilash:** Mavjud videolar ro‘yxatini massiv (array) shaklida saqlash, masalan, `["JavaScript Tutorial", "CSS Tricks", "HTML Basics"]`.
  
  2. **Qidiruv So‘rovini Qabul Qilish:** Foydalanuvchi tomonidan kiritilgan `query` ni oladi.
  
  3. **Videolarni Filtrlash:**
     - `query` so‘zini kichik harflarda (`toLowerCase()`) aylantirib, video nomlari bilan taqqoslash.
     - Mos keladigan videolarni topish uchun `filter` metodidan foydalanish.
  
  4. **Natijani Qaytarish:**
     - Agar mos keladigan videolar mavjud bo‘lsa, `resolve(results)` chaqiriladi.
     - Agar hech qanday video topilmasa, `reject("Hech qanday video topilmadi.")` chaqiriladi.
  
  5. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 2 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Videolar topilsa:** `["CSS Tutorial", "JavaScript Basics"]`
  - **Videolar topilmasa:** "Hech qanday video topilmadi."

**Misol:**
```javascript
searchVideos("css")
  .then(results => console.log("Topilgan videolar:", results))
  .catch(error => console.error(error));

// Agar videolar topilsa konsolda:
// "Topilgan videolar: [ 'CSS Tutorial', 'Advanced CSS Techniques' ]"

// Agar videolar topilmasa konsolda:
// "Hech qanday video topilmadi."
```

---

#### **11. O‘yin Rezervatsiyasi**
**Vazifa:** `reserveSeat(seatNumber)` funksiyasini yarating. O‘rin rezervatsiyasini amalga oshiradi yoki o‘rin bandligini bildiradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** `number` (`seatNumber`)
  - **Chiqish (Promise):** 
    - `string` ("O‘rin rezerv qilindi.")
    - `string` ("O‘rin band.")

- **Logic Tavsifi:**
  1. **Rezervatsiya Qilingan O‘rinlarni Belgilash:** Rezervatsiya qilingan o‘rinlarni massiv (array) shaklida saqlash, masalan, `const reservedSeats = [1, 2, 3];`.
  
  2. **O‘rin Mavjudligini Tekshirish:**
     - `seatNumber` ni `reservedSeats` massivida bor yoki yo‘qligini tekshirish.
  
  3. **Rezervatsiyani Bajarish yoki Rad Etish:**
     - Agar o‘rin band bo‘lmasa (`!reservedSeats.includes(seatNumber)`), `seatNumber` ni `reservedSeats` ga qo‘shish va `resolve("O‘rin rezerv qilindi.")` chaqirish.
     - Agar o‘rin band bo‘lsa, `reject("O‘rin band.")` chaqirish.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 1 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **O‘rin rezerv qilinsa:** "O‘rin rezerv qilindi."
  - **O‘rin band bo‘lsa:** "O‘rin band."

**Misol:**
```javascript
reserveSeat(4)
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Agar o‘rin band bo'lmasa konsolda:
// "O‘rin rezerv qilindi."

// Agar o‘rin band bo'lsa konsolda:
// "O‘rin band."
```

---

#### **12. Mahsulot Qo‘shish**
**Vazifa:** `addProduct(product)` funksiyasini yarating. Yangi mahsulot qo‘shadi yoki mavjud mahsulotni aniqlaydi.

- **Ma’lumot Turlari:**
  - **Kiritish:** `string` (`product`)
  - **Chiqish (Promise):** 
    - `string` ("Mahsulot qo‘shildi.")
    - `string` ("Mahsulot mavjud.")

- **Logic Tavsifi:**
  1. **Mahsulotlar Inventarini Belgilash:** Mavjud mahsulotlarni massiv (array) shaklida saqlash, masalan, `const products = ["Telefon", "Kompyuter", "Planshet"];`.
  
  2. **Mahsulotni Tekshirish:**
     - `product` ni `products` massivida bor yoki yo‘qligini tekshirish.
  
  3. **Mahsulotni Qo‘shish yoki Rad Etish:**
     - Agar mahsulot mavjud bo‘lmasa (`!products.includes(product)`), `product` ni `products` ga qo‘shish va `resolve("Mahsulot qo‘shildi.")` chaqirish.
     - Agar mahsulot mavjud bo‘lsa, `reject("Mahsulot mavjud.")` chaqirish.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 2 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Mahsulot qo‘shilsa:** "Mahsulot qo‘shildi."
  - **Mahsulot mavjud bo‘lsa:** "Mahsulot mavjud."

**Misol:**
```javascript
addProduct("Noutbuk")
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Agar mahsulot qo'shilsa konsolda:
// "Mahsulot qo‘shildi."

// Agar mahsulot mavjud bo'lsa konsolda:
// "Mahsulot mavjud."
```

---

#### **13. Ma’lumotlarni Yangilash**
**Vazifa:** `updateData(id, newData)` funksiyasini yarating. Ma’lumotlarni yangilaydi yoki mavjud ma’lumotni aniqlaydi.

- **Ma’lumot Turlari:**
  - **Kiritish:** 
    - `number` (`id`)
    - `string` yoki `object` (`newData`)
  - **Chiqish (Promise):** 
    - `string` ("Ma’lumot yangilandi.")
    - `string` ("Ma’lumot topilmadi.")

- **Logic Tavsifi:**
  1. **Ma’lumotlar Bazasini Belgilash:** Ma’lumotlar bazasini obyekt (object) shaklida saqlash, masalan:
     ```javascript
     const database = {
       1: "Data1",
       2: "Data2",
       3: "Data3"
     };
     ```
  
  2. **Ma’lumotni Tekshirish:**
     - `id` ni `database` obyektida mavjudligini tekshirish.
  
  3. **Ma’lumotni Yangilash yoki Rad Etish:**
     - Agar `id` mavjud bo‘lsa, `database[id] = newData` qilib yangilash va `resolve("Ma’lumot yangilandi.")` chaqirish.
     - Agar `id` mavjud bo‘lmasa, `reject("Ma’lumot topilmadi.")` chaqirish.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 3 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Ma’lumot yangilansa:** "Ma’lumot yangilandi."
  - **Ma’lumot topilmasa:** "Ma’lumot topilmadi."

**Misol:**
```javascript
updateData(2, "Yangi Data2")
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Agar ma'lumot yangilansa konsolda:
// "Ma’lumot yangilandi."

// Agar ma'lumot topilmasa konsolda:
// "Ma’lumot topilmadi."
```

---

#### **14. Foydalanuvchi Ma’lumotlarini Olish**
**Vazifa:** `getUserData(userId)` funksiyasini yarating. Foydalanuvchi ma’lumotlarini oladi yoki topilmaganini bildiradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** `number` (`userId`)
  - **Chiqish (Promise):** 
    - `object` (`{ name: "Alice", age: 25 }`)
    - `string` ("Foydalanuvchi topilmadi.")

- **Logic Tavsifi:**
  1. **Foydalanuvchilar Ma’lumotlarini Belgilash:** Foydalanuvchilarni obyekt (object) shaklida saqlash, masalan:
     ```javascript
     const users = {
       1: { name: "Alice", age: 25 },
       2: { name: "Bob", age: 30 },
       3: { name: "Charlie", age: 28 }
     };
     ```
  
  2. **Foydalanuvchini Topish:**
     - `userId` ni `users` obyektida mavjudligini tekshirish.
  
  3. **Natijani Qaytarish:**
     - Agar foydalanuvchi mavjud bo‘lsa, `resolve(users[userId])` chaqiriladi.
     - Agar foydalanuvchi mavjud bo‘lmasa, `reject("Foydalanuvchi topilmadi.")` chaqiriladi.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 1.5 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Foydalanuvchi mavjud bo‘lsa:** `{ name: "Alice", age: 25 }`
  - **Foydalanuvchi mavjud bo‘lmasa:** "Foydalanuvchi topilmadi."

**Misol:**
```javascript
getUserData(2)
  .then(user => console.log("Foydalanuvchi ma’lumotlari:", user))
  .catch(error => console.error(error));

// Agar foydalanuvchi mavjud bo'lsa konsolda:
// "Foydalanuvchi ma’lumotlari: { name: 'Bob', age: 30 }"

// Agar foydalanuvchi mavjud bo'lmasa konsolda:
// "Foydalanuvchi topilmadi."
```

---

#### **15. Kitobni Qaytarish**
**Vazifa:** `returnBook(bookId)` funksiyasini yarating. Kitobni qaytaradi yoki mavjud emasligini bildiradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** `number` (`bookId`)
  - **Chiqish (Promise):** 
    - `string` ("Kitob qaytarildi.")
    - `string` ("Kitob topilmadi.")

- **Logic Tavsifi:**
  1. **Qarzga Olingan Kitoblarni Belgilash:** Qarzga olingan kitoblarni obyekt (object) shaklida saqlash, masalan:
     ```javascript
     const borrowedBooks = {
       101: "JavaScript Asoslari",
       102: "HTML va CSS",
       103: "Python Dasturlash"
     };
     ```
  
  2. **Kitobni Tekshirish:**
     - `bookId` ni `borrowedBooks` obyektida mavjudligini tekshirish.
  
  3. **Kitobni Qaytarish yoki Rad Etish:**
     - Agar kitob mavjud bo‘lsa, `delete borrowedBooks[bookId]` orqali kitobni o‘chiradi va `resolve("Kitob qaytarildi.")` chaqiradi.
     - Agar kitob mavjud bo‘lmasa, `reject("Kitob topilmadi.")` chaqiradi.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 2 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Kitob qaytarilsa:** "Kitob qaytarildi."
  - **Kitob topilmasa:** "Kitob topilmadi."

**Misol:**
```javascript
returnBook(102)
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Agar kitob qaytarilsa konsolda:
// "Kitob qaytarildi."

// Agar kitob topilmasa konsolda:
// "Kitob topilmadi."
```

---

#### **16. Kursga Ro‘yxatdan O‘tish**
**Vazifa:** `enrollCourse(courseId)` funksiyasini yarating. Kursga ro‘yxatdan o‘tadi yoki joy yo‘qligini bildiradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** `number` (`courseId`)
  - **Chiqish (Promise):** 
    - `string` ("Ro‘yxatdan o‘tdingiz.")
    - `string` ("Joy yo‘q.")

- **Logic Tavsifi:**
  1. **Kurslar Ro‘yxatini Belgilash:** Kurslarni obyekt (object) shaklida saqlash, masalan:
     ```javascript
     const courses = {
       201: { name: "JavaScript", seats: 2 },
       202: { name: "Python", seats: 0 },
       203: { name: "HTML & CSS", seats: 5 }
     };
     ```
  
  2. **Kursni Tekshirish:**
     - `courseId` ni `courses` obyektida mavjudligini va uning `seats` sonini tekshirish.
  
  3. **Ro‘yxatdan O‘tishni Bajarish yoki Rad Etish:**
     - Agar kurs mavjud bo‘lsa va `seats > 0` bo‘lsa, `seats` sonini 1 ga kamaytirish va `resolve("Ro‘yxatdan o‘tdingiz.")` chaqirish.
     - Agar kurs mavjud bo‘lmasa yoki `seats === 0` bo‘lsa, `reject("Joy yo‘q.")` chaqirish.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 2.5 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Ro‘yxatdan o‘tgan bo‘lsa:** "Ro‘yxatdan o‘tdingiz."
  - **Joy yo‘qligida:** "Joy yo‘q."

**Misol:**
```javascript
enrollCourse(201)
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Agar kursga ro'yxatdan o'tsa konsolda:
// "Ro‘yxatdan o‘tdingiz."

// Agar kursga joy yo'q bo'lsa konsolda:
// "Joy yo‘q."
```

---

#### **17. Xaridni Tasdiqlash**
**Vazifa:** `confirmPurchase(cartItems)` funksiyasini yarating. Xaridni tasdiqlaydi yoki omborda mahsulot yetarli emasligini bildiradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** `array` (`cartItems`, masalan, `["Telefon", "Kompyuter"]`)
  - **Chiqish (Promise):** 
    - `string` ("Xarid tasdiqlandi.")
    - `string` ("Mahsulot yetarli emas.")

- **Logic Tavsifi:**
  1. **Inventarni Belgilash:** Omborda mavjud mahsulotlarni obyekt (object) shaklida saqlash, masalan:
     ```javascript
     const inventory = {
       "Telefon": 10,
       "Kompyuter": 5,
       "Planshet": 0
     };
     ```
  
  2. **Mahsulotlarni Tekshirish:**
     - Har bir `cartItem` ni `inventory` obyektida mavjudligini va uning mavjudligini (`inventory[item] > 0`) tekshirish.
  
  3. **Xaridni Tasdiqlash yoki Rad Etish:**
     - Agar barcha mahsulotlar omborda yetarli bo‘lsa, har bir mahsulotni ombordan kamaytirish (`inventory[item]--`) va `resolve("Xarid tasdiqlandi.")` chaqirish.
     - Agar birorta mahsulot omborda yetarli bo‘lmasa, `reject("Mahsulot yetarli emas.")` chaqirish.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 3 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Xarid tasdiqlansa:** "Xarid tasdiqlandi."
  - **Mahsulot yetarli bo‘lmasa:** "Mahsulot yetarli emas."

**Misol:**
```javascript
confirmPurchase(["Telefon", "Kompyuter"])
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Agar xarid tasdiqlansa konsolda:
// "Xarid tasdiqlandi."

// Agar omborda yetarli bo'lmasa konsolda:
// "Mahsulot yetarli emas."
```

---

#### **18. Foydalanuvchi Profilini Yangilash**
**Vazifa:** `updateProfile(userId, profileData)` funksiyasini yarating. Foydalanuvchi profilini yangilaydi yoki topilmaganini bildiradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** 
    - `number` (`userId`)
    - `object` (`profileData`, masalan, `{ age: 26 }`)
  - **Chiqish (Promise):** 
    - `string` ("Profil yangilandi.")
    - `string` ("Foydalanuvchi topilmadi.")

- **Logic Tavsifi:**
  1. **Foydalanuvchilar Profilini Belgilash:** Foydalanuvchi profillarini obyekt (object) shaklida saqlash, masalan:
     ```javascript
     const userProfiles = {
       1: { name: "Alice", age: 25 },
       2: { name: "Bob", age: 30 }
     };
     ```
  
  2. **Foydalanuvchini Topish:**
     - `userId` ni `userProfiles` obyektida mavjudligini tekshirish.
  
  3. **Profilni Yangilash yoki Rad Etish:**
     - Agar foydalanuvchi mavjud bo‘lsa, uning profilini yangilash (`userProfiles[userId] = { ...userProfiles[userId], ...profileData }`) va `resolve("Profil yangilandi.")` chaqirish.
     - Agar foydalanuvchi mavjud bo‘lmasa, `reject("Foydalanuvchi topilmadi.")` chaqirish.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 2 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Profil yangilansa:** "Profil yangilandi."
  - **Foydalanuvchi topilmasa:** "Foydalanuvchi topilmadi."

**Misol:**
```javascript
updateProfile(1, { age: 26 })
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Agar profil yangilansa konsolda:
// "Profil yangilandi."

// Agar foydalanuvchi topilmasa konsolda:
// "Foydalanuvchi topilmadi."
```

---

#### **19. To‘lov Tarixini Olish**
**Vazifa:** `getPaymentHistory(userId)` funksiyasini yarating. Foydalanuvchining to‘lov tarixini oladi yoki mavjud emasligini bildiradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** `number` (`userId`)
  - **Chiqish (Promise):** 
    - `array` (`["2023-01-10: $50", "2023-02-15: $75"]`)
    - `string` ("To‘lov tarixi topilmadi.")

- **Logic Tavsifi:**
  1. **To‘lov Tarixlarini Belgilash:** Foydalanuvchilarning to‘lov tarixlarini obyekt (object) shaklida saqlash, masalan:
     ```javascript
     const paymentHistories = {
       1: ["2023-01-10: $50", "2023-02-15: $75"],
       2: []
     };
     ```
  
  2. **Tarixni Tekshirish:**
     - `userId` ni `paymentHistories` obyektida mavjudligini va uning to‘lov tarixining bo‘sh emasligini tekshirish.
  
  3. **Natijani Qaytarish:**
     - Agar to‘lov tarixi mavjud bo‘lsa, `resolve(paymentHistories[userId])` chaqiriladi.
     - Agar to‘lov tarixi bo‘sh bo‘lsa yoki foydalanuvchi mavjud bo‘lmasa, `reject("To‘lov tarixi topilmadi.")` chaqiriladi.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 1.5 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Tarix mavjud bo‘lsa:** `["2023-01-10: $50", "2023-02-15: $75"]`
  - **Tarix mavjud bo‘lmasa:** "To‘lov tarixi topilmadi."

**Misol:**
```javascript
getPaymentHistory(1)
  .then(history => console.log("To‘lov tarixi:", history))
  .catch(error => console.error(error));

// Agar to'lov tarixi mavjud bo'lsa konsolda:
// "To‘lov tarixi: [ '2023-01-10: $50', '2023-02-15: $75' ]"

// Agar to'lov tarixi mavjud bo'lmasa konsolda:
// "To‘lov tarixi topilmadi."
```

---

#### **20. Xabar Yuborish**
**Vazifa:** `sendMessage(recipient, message)` funksiyasini yarating. Xabar yuborishni amalga oshiradi yoki xatolikni bildiradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** 
    - `string` (`recipient`)
    - `string` (`message`)
  - **Chiqish (Promise):** 
    - `string` ("Xabar yuborildi.")
    - `string` ("Xabar yuborishda xato.")

- **Logic Tavsifi:**
  1. **Xabar Yuborish Shartlarini Tekshirish:**
     - `recipient` stringida `@` belgisining mavjudligini tekshirish (masalan, Twitter username formatiga mos kelishini aniqlash).
  
  2. **Natijani Qaytarish:**
     - Agar `recipient` `@` bilan boshlansa, `resolve("Xabar yuborildi.")` chaqiriladi.
     - Agar `recipient` `@` bilan boshlamasa, `reject("Xabar yuborishda xato.")` chaqiriladi.
  
  3. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 1.5 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Xabar yuborilsa:** "Xabar yuborildi."
  - **Xatolik bo‘lsa:** "Xabar yuborishda xato."

**Misol:**
```javascript
sendMessage("@john_doe", "Salom!")
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Agar manzil to'g'ri bo'lsa konsolda:
// "Xabar yuborildi."

// Agar manzil noto'g'ri bo'lsa konsolda:
// "Xabar yuborishda xato."
```

---

#### **21. Mahsulotni O‘chirish**
**Vazifa:** `deleteProduct(productId)` funksiyasini yarating. Mahsulotni o‘chiradi yoki topilmaganini bildiradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** `number` (`productId`)
  - **Chiqish (Promise):** 
    - `string` ("Mahsulot o‘chirildi.")
    - `string` ("Mahsulot topilmadi.")

- **Logic Tavsifi:**
  1. **Mahsulotlar Inventarini Belgilash:** Mahsulotlarni obyekt (object) shaklida saqlash, masalan:
     ```javascript
     const productsInventory = {
       301: "Telefon",
       302: "Kompyuter",
       303: "Planshet"
     };
     ```
  
  2. **Mahsulotni Tekshirish:**
     - `productId` ni `productsInventory` obyektida mavjudligini tekshirish.
  
  3. **Mahsulotni O‘chirish yoki Rad Etish:**
     - Agar mahsulot mavjud bo‘lsa, `delete productsInventory[productId]` orqali mahsulotni o‘chiradi va `resolve("Mahsulot o‘chirildi.")` chaqiriladi.
     - Agar mahsulot mavjud bo‘lmasa, `reject("Mahsulot topilmadi.")` chaqiriladi.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 2 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Mahsulot o‘chirilsa:** "Mahsulot o‘chirildi."
  - **Mahsulot topilmasa:** "Mahsulot topilmadi."

**Misol:**
```javascript
deleteProduct(302)
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Agar mahsulot o'chirilsa konsolda:
// "Mahsulot o‘chirildi."

// Agar mahsulot topilmasa konsolda:
// "Mahsulot topilmadi."
```

---

#### **22. Xaridni Bekor Qilish**
**Vazifa:** `cancelOrder(orderId)` funksiyasini yarating. Xaridni bekor qiladi yoki mavjud emasligini bildiradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** `number` (`orderId`)
  - **Chiqish (Promise):** 
    - `string` ("Xarid bekor qilindi.")
    - `string` ("Xarid topilmadi.")

- **Logic Tavsifi:**
  1. **Buyurtmalar Ro‘yxatini Belgilash:** Buyurtmalarni obyekt (object) shaklida saqlash, masalan:
     ```javascript
     const orders = {
       401: "Xarid1",
       402: "Xarid2"
     };
     ```
  
  2. **Buyurtmani Tekshirish:**
     - `orderId` ni `orders` obyektida mavjudligini tekshirish.
  
  3. **Buyurtmani Bekor Qilish yoki Rad Etish:**
     - Agar buyurtma mavjud bo‘lsa, `delete orders[orderId]` orqali buyurtmani bekor qiladi va `resolve("Xarid bekor qilindi.")` chaqiriladi.
     - Agar buyurtma mavjud bo‘lmasa, `reject("Xarid topilmadi.")` chaqiriladi.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 1.5 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Buyurtma bekor qilinsa:** "Xarid bekor qilindi."
  - **Buyurtma topilmasa:** "Xarid topilmadi."

**Misol:**
```javascript
cancelOrder(401)
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Agar buyurtma bekor qilinsa konsolda:
// "Xarid bekor qilindi."

// Agar buyurtma topilmasa konsolda:
// "Xarid topilmadi."
```

---

#### **23. Foydalanuvchi Rolini O‘zgartirish**
**Vazifa:** `changeUserRole(userId, newRole)` funksiyasini yarating. Foydalanuvchi rolini o‘zgartiradi yoki topilmaganini bildiradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** 
    - `number` (`userId`)
    - `string` (`newRole`)
  - **Chiqish (Promise):** 
    - `string` ("Rol o‘zgartirildi.")
    - `string` ("Foydalanuvchi topilmadi.")

- **Logic Tavsifi:**
  1. **Foydalanuvchi Rollarini Belgilash:** Foydalanuvchi rollarini obyekt (object) shaklida saqlash, masalan:
     ```javascript
     const userRoles = {
       1: "User",
       2: "Admin"
     };
     ```
  
  2. **Foydalanuvchini Tekshirish:**
     - `userId` ni `userRoles` obyektida mavjudligini tekshirish.
  
  3. **Rolni O‘zgartirish yoki Rad Etish:**
     - Agar foydalanuvchi mavjud bo‘lsa, uning rolini `newRole` bilan yangilash va `resolve("Rol o‘zgartirildi.")` chaqirish.
     - Agar foydalanuvchi mavjud bo‘lmasa, `reject("Foydalanuvchi topilmadi.")` chaqirish.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 2.5 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Rol o‘zgartirilsa:** "Rol o‘zgartirildi."
  - **Foydalanuvchi topilmasa:** "Foydalanuvchi topilmadi."

**Misol:**
```javascript
changeUserRole(1, "Moderator")
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Agar rol o'zgartirilsa konsolda:
// "Rol o‘zgartirildi."

// Agar foydalanuvchi topilmasa konsolda:
// "Foydalanuvchi topilmadi."
```

---

#### **24. Xizmat Subskriptsiyasini Yaratish**
**Vazifa:** `createSubscription(userId, plan)` funksiyasini yarating. Subskriptsiya yaratadi yoki tanlangan plan mavjud emasligini bildiradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** 
    - `number` (`userId`)
    - `string` (`plan`)
  - **Chiqish (Promise):** 
    - `string` ("Subskriptsiya yaratildi.")
    - `string` ("Reja mavjud emas.")

- **Logic Tavsifi:**
  1. **Mavjud Rejalarni Belgilash:** Mavjud rejalarning massiv (array) shaklida saqlash, masalan, `const availablePlans = ["Basic", "Premium", "Pro"];`.
  
  2. **Subskriptsiyani Tekshirish:**
     - `plan` ni `availablePlans` massivida mavjudligini tekshirish.
  
  3. **Subskriptsiyani Yaratish yoki Rad Etish:**
     - Agar `plan` mavjud bo‘lsa, foydalanuvchining subskriptsiyasini belgilash (`userSubscriptions[userId] = plan`) va `resolve("Subskriptsiya yaratildi.")` chaqirish.
     - Agar `plan` mavjud bo‘lmasa, `reject("Reja mavjud emas.")` chaqirish.
  
  4. **Subskriptsiyalarni Saqlash:** Foydalanuvchilarning subskriptsiyalarini obyekt (object) shaklida saqlash, masalan, `const userSubscriptions = {};`.
  
  5. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 3 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Subskriptsiya yaratilsa:** "Subskriptsiya yaratildi."
  - **Reja mavjud bo‘lmasa:** "Reja mavjud emas."

**Misol:**
```javascript
createSubscription(1, "Premium")
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Agar subskriptsiya yaratilsa konsolda:
// "Subskriptsiya yaratildi."

// Agar reja mavjud bo'lmasa konsolda:
// "Reja mavjud emas."
```

---

#### **25. Xarajatlarni Hisoblash**
**Vazifa:** `calculateExpenses(expenses)` funksiyasini yarating. Xarajatlar ro‘yxatini hisoblaydi yoki ro‘yxat bo‘shligini bildiradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** `array` (`expenses`, masalan, `[50, 75, 100]`)
  - **Chiqish (Promise):** 
    - `number` (umumiy xarajatlar)
    - `string` ("Xarajatlar mavjud emas.")

- **Logic Tavsifi:**
  1. **Xarajatlar Ro‘yxatini Tekshirish:**
     - `expenses` massivida kamida bitta xarajat borligini tekshirish (`expenses.length > 0`).
  
  2. **Umumiy Xarajatlarni Hisoblash:**
     - Agar xarajatlar mavjud bo‘lsa, `reduce` metodidan foydalanib, ularning umumiy summasini hisoblash.
  
  3. **Natijani Qaytarish:**
     - Agar xarajatlar mavjud bo‘lsa, `resolve(total)` chaqiriladi, bu yerda `total` hisoblangan umumiy xarajatlar soni.
     - Agar xarajatlar ro‘yxati bo‘sh bo‘lsa, `reject("Xarajatlar mavjud emas.")` chaqiriladi.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 2 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Xarajatlar mavjud bo‘lsa:** 225
  - **Xarajatlar bo‘sh bo‘lsa:** "Xarajatlar mavjud emas."

**Misol:**
```javascript
calculateExpenses([50, 75, 100])
  .then(total => console.log(total))
  .catch(error => console.error(error));

// Agar xarajatlar mavjud bo'lsa konsolda:
// "Umumiy xarajatlar: $225"

// Agar xarajatlar bo'sh bo'lsa konsolda:
// "Xarajatlar mavjud emas."
```

---

#### **26. Kurs Materiallarini Yuklash**
**Vazifa:** `loadCourseMaterials(courseId)` funksiyasini yarating. Kurs materiallarini yuklaydi yoki kurs topilmaganini bildiradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** `number` (`courseId`)
  - **Chiqish (Promise):** 
    - `array` (`["Module1.pdf", "Module2.pdf"]`)
    - `string` ("Kurs topilmadi.")

- **Logic Tavsifi:**
  1. **Kurs Materiallarini Belgilash:** Kurs materiallarini obyekt (object) shaklida saqlash, masalan:
     ```javascript
     const courseMaterials = {
       501: ["Module1.pdf", "Module2.pdf"],
       502: ["Lesson1.docx", "Lesson2.docx"]
     };
     ```
  
  2. **Kursni Tekshirish:**
     - `courseId` ni `courseMaterials` obyektida mavjudligini tekshirish.
  
  3. **Materiallarni Yuklash yoki Rad Etish:**
     - Agar kurs mavjud bo‘lsa, `resolve(courseMaterials[courseId])` chaqiriladi.
     - Agar kurs mavjud bo‘lmasa, `reject("Kurs topilmadi.")` chaqiriladi.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 2 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Materiallar mavjud bo‘lsa:** `["Module1.pdf", "Module2.pdf"]`
  - **Materiallar topilmasa:** "Kurs topilmadi."

**Misol:**
```javascript
loadCourseMaterials(501)
  .then(materials => console.log("Kurs materiallari:", materials))
  .catch(error => console.error(error));

// Agar kurs materiallari mavjud bo'lsa konsolda:
// "Kurs materiallari: [ 'Module1.pdf', 'Module2.pdf' ]"

// Agar kurs topilmasa konsolda:
// "Kurs topilmadi."
```

---

#### **27. Foydalanuvchi Sharhini Qo‘shish**
**Vazifa:** `addReview(userId, review)` funksiyasini yarating. Foydalanuvchiga sharh qo‘shadi yoki topilmaganini bildiradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** 
    - `number` (`userId`)
    - `string` (`review`)
  - **Chiqish (Promise):** 
    - `string` ("Sharh qo‘shildi.")
    - `string` ("Foydalanuvchi topilmadi.")

- **Logic Tavsifi:**
  1. **Foydalanuvchi Sharhlarini Belgilash:** Foydalanuvchilarning sharhlarini obyekt (object) shaklida saqlash, masalan:
     ```javascript
     const userReviews = {
       1: ["Yaxshi kurs!", "Foydali materiallar."],
       2: []
     };
     ```
  
  2. **Foydalanuvchini Tekshirish:**
     - `userId` ni `userReviews` obyektida mavjudligini tekshirish.
  
  3. **Sharhni Qo‘shish yoki Rad Etish:**
     - Agar foydalanuvchi mavjud bo‘lsa, uning sharhlar ro‘yxatiga yangi sharhni qo‘shish (`userReviews[userId].push(review)`) va `resolve("Sharh qo‘shildi.")` chaqirish.
     - Agar foydalanuvchi mavjud bo‘lmasa, `reject("Foydalanuvchi topilmadi.")` chaqirish.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 1.5 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Sharh qo‘shilsa:** "Sharh qo‘shildi."
  - **Foydalanuvchi topilmasa:** "Foydalanuvchi topilmadi."

**Misol:**
```javascript
addReview(2, "Ajoyib darslar!")
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Agar sharh qo'shilsa konsolda:
// "Sharh qo‘shildi."

// Agar foydalanuvchi topilmasa konsolda:
// "Foydalanuvchi topilmadi."
```

---

#### **28. Ma’lumotlarni Arxivlash**
**Vazifa:** `archiveData(dataId)` funksiyasini yarating. Ma’lumotlarni arxivlaydi yoki topilmaganini bildiradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** `number` (`dataId`)
  - **Chiqish (Promise):** 
    - `string` ("Ma’lumot arxivlandi.")
    - `string` ("Ma’lumot topilmadi.")

- **Logic Tavsifi:**
  1. **Ma’lumotlarni Saqlash:** Ma’lumotlarni obyekt (object) shaklida saqlash, masalan:
     ```javascript
     const dataStorage = {
       601: "Data1",
       602: "Data2",
       603: "Data3"
     };
     ```
  
  2. **Ma’lumotni Tekshirish:**
     - `dataId` ni `dataStorage` obyektida mavjudligini tekshirish.
  
  3. **Ma’lumotni Arxivlash yoki Rad Etish:**
     - Agar ma’lumot mavjud bo‘lsa, `resolve("Ma’lumot arxivlandi.")` chaqiriladi.
     - Agar ma’lumot mavjud bo‘lmasa, `reject("Ma’lumot topilmadi.")` chaqiriladi.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 3 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Ma’lumot arxivlansa:** "Ma’lumot arxivlandi."
  - **Ma’lumot topilmasa:** "Ma’lumot topilmadi."

**Misol:**
```javascript
archiveData(601)
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Agar ma'lumot arxivlansa konsolda:
// "Ma’lumot arxivlandi."

// Agar ma'lumot topilmasa konsolda:
// "Ma’lumot topilmadi."
```

---

#### **29. To‘lovni Qaytarish**
**Vazifa:** `refundPayment(paymentId)` funksiyasini yarating. To‘lovni qaytaradi yoki topilmaganini bildiradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** `number` (`paymentId`)
  - **Chiqish (Promise):** 
    - `string` ("To‘lov qaytarildi.")
    - `string` ("To‘lov topilmadi.")

- **Logic Tavsifi:**
  1. **To‘lovlarni Belgilash:** To‘lovlarni obyekt (object) shaklida saqlash, masalan:
     ```javascript
     const payments = {
       701: "$50",
       702: "$75"
     };
     ```
  
  2. **To‘lovni Tekshirish:**
     - `paymentId` ni `payments` obyektida mavjudligini tekshirish.
  
  3. **To‘lovni Qaytarish yoki Rad Etish:**
     - Agar to‘lov mavjud bo‘lsa, `delete payments[paymentId]` orqali to‘lovni o‘chiradi va `resolve("To‘lov qaytarildi.")` chaqiriladi.
     - Agar to‘lov mavjud bo‘lmasa, `reject("To‘lov topilmadi.")` chaqiriladi.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 2 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **To‘lov qaytarilsa:** "To‘lov qaytarildi."
  - **To‘lov topilmasa:** "To‘lov topilmadi."

**Misol:**
```javascript
refundPayment(702)
  .then(message => console.log(message))
  .catch(error => console.error(error));

// Agar to'lov qaytarilsa konsolda:
// "To‘lov qaytarildi."

// Agar to'lov topilmasa konsolda:
// "To‘lov topilmadi."
```

---

#### **30. Statistik Ma’lumotlarni Olish**
**Vazifa:** `getStatistics()` funksiyasini yarating. Statistik ma’lumotlarni oladi yoki mavjud emasligini bildiradi.

- **Ma’lumot Turlari:**
  - **Kiritish:** Hech qanday.
  - **Chiqish (Promise):** 
    - `object` (`{ users: 150, sales: 3000, products: 50 }`)
    - `string` ("Statistik ma’lumotlar mavjud emas.")

- **Logic Tavsifi:**
  1. **Statistik Ma’lumotlarni Belgilash:** Statistik ma’lumotlarni obyekt (object) shaklida saqlash, masalan:
     ```javascript
     const statistics = {
       users: 150,
       sales: 3000,
       products: 50
     };
     ```
  
  2. **Statistik Ma’lumotlarni Tekshirish:**
     - `statistics` obyektida kamida bitta kalit mavjudligini tekshirish (`Object.keys(statistics).length > 0`).
  
  3. **Natijani Qaytarish:**
     - Agar statistik ma’lumotlar mavjud bo‘lsa, `resolve(statistics)` chaqiriladi.
     - Agar statistik ma’lumotlar mavjud bo‘lmasa, `reject("Statistik ma’lumotlar mavjud emas.")` chaqiriladi.
  
  4. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` yordamida 1 soniyaga kutish amalga oshiriladi.

- **Natija:**
  - **Ma’lumotlar mavjud bo‘lsa:** `{ users: 150, sales: 3000, products: 50 }`
  - **Ma’lumotlar mavjud bo‘lmasa:** "Statistik ma’lumotlar mavjud emas."

**Misol:**
```javascript
getStatistics()
  .then(stats => console.log("Statistik ma’lumotlar:", stats))
  .catch(error => console.error(error));

// Agar statistik ma'lumotlar mavjud bo'lsa konsolda:
// "Statistik ma’lumotlar: { users: 150, sales: 3000, products: 50 }"

// Agar statistik ma'lumotlar mavjud bo'lmasa konsolda:
// "Statistik ma’lumotlar mavjud emas."
```

---

### **Masalalarni Yechishda E’tibor Qilishingiz Kerak Bo‘lgan Narsalar**

1. **Asinxron Operatsiyalar:** Promises asinxron operatsiyalarni boshqarish uchun qulay vositadir. Vazifalarda odatda ma’lumotlarni olish, yuborish yoki yangilash kabi jarayonlar mavjud.

2. **Xatoliklarni Boshqarish:** `.catch()` metodi yordamida xatoliklarni ushlash va ularga mos ravishda javob qaytarish muhimdir. Har bir Promise uchun muvaffaqiyat (`resolve`) va muvaffaqiyatsizlik (`reject`) holatlarini aniq belgilash zarur.

3. **Promise Chaining:** Bir nechta Promises ketma-ketligini yaratish va ularni boshqarish orqali murakkab asinxron operatsiyalarni amalga oshirish mumkin. Masalan, avval xonalar mavjudligini tekshirish, keyin buyurtma qilish.

4. **Promise.all():** Bir nechta Promises ni bir vaqtda bajarish va ularning natijalarini birgalikda boshqarish uchun ishlatiladi. Bu bir nechta ma’lumotlarni parallel tarzda olishda foydalidir.

5. **Kod Tozaligi:** Kodni o‘qilishi oson va samarali qilish uchun funksiyalarni to‘g‘ri tashkil etish zarur. Har bir vazifa uchun alohida funksiyalar yaratish va ularni lozim joyda chaqirish muhimdir.

---

### **Qo‘shimcha Masalalar Yechish Bo‘yicha Qo‘llanma**

Har bir vazifani yechishda quyidagi qadamlarni bajarishingiz mumkin:

1. **Funksiyani Yarating:** Vazifa tavsifiga mos ravishda kerakli funksiyani yaratish. Masalan, `checkAvailability()` funksiyasini yaratish.

2. **Promises Qo‘llang:** Funksiya ichida `new Promise` konstruktori yordamida asinxron operatsiyani simulyatsiya qilish. `setTimeout` kabi funksiyalar yordamida vaqtni kutish mumkin.

3. **Resolve va Reject:** Shartlarga qarab `resolve` yoki `reject` chaqirish. Masalan, xonalar mavjud bo‘lsa `resolve(true)`, yo‘q bo‘lsa `reject(false)`.

4. **Test Qiling:** Funksiyani chaqirib, `.then()` va `.catch()` metodlari bilan natijalarni boshqarish. `console.log` yordamida natijalarni konsolga chiqarish.

5. **Kodni Tozalang:** Kodni o‘qilishi oson va optimallashtirilgan holga keltirish. Keraksiz kodlardan qochish va funksiyalarni mantiqan tartibga solish.

---

### **Misol: Xonalar Mavjudligini Tekshirish**

**Vazifa:** `checkAvailability()` funksiyasini yaratish.

**Tavsif:** Bu funksiya mehmonxonada xonalar mavjudligini tekshiradi. 2 soniyadan keyin va’da (`Promise`) qaytariladi. Agar xonalar mavjud bo‘lsa, `resolve(true)` chaqiriladi, yo‘q bo‘lsa `reject(false)` chaqiriladi.

- **Ma’lumot Turlari:**
  - **Chiqish (Promise):** `boolean` (`true` yoki `false`)

**Logic Tavsifi:**
1. **Xonalar Ro‘yxatini Belgilash:** Mehmonxonada mavjud bo‘lgan xonalar ro‘yxatini massiv (array) shaklida belgilash, masalan, `const rooms = [101, 102, 103];`.
  
2. **Asinxron Operatsiyani Simulyatsiya Qilish:** `setTimeout` funksiyasi yordamida 2 soniyaga kutish simulyatsiya qilinadi.
  
3. **Xonalar Mavjudligini Tekshirish:**
   - Agar `rooms.length > 0` bo‘lsa, demak, xonalar mavjud. `resolve(true)` chaqiriladi.
   - Agar `rooms.length === 0` bo‘lsa, `reject(false)` chaqiriladi.

**Natija:**
- **Mavjud bo‘lsa:** `true`
- **Mavjud bo‘lmasa:** `false`

**Misol:**
```javascript
function checkAvailability() {
  const rooms = [101, 102, 103]; // Mavjud xonalar ro'yxati

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rooms.length > 0) {
        resolve(true); // Xonalar mavjud
      } else {
        reject(false); // Xonalar mavjud emas
      }
    }, 2000); // 2 soniya kutish
  });
}

checkAvailability()
  .then(isAvailable => console.log(isAvailable ? "Xonalar mavjud." : "Xonalar mavjud emas."))
  .catch(error => console.error(error));

// Agar xonalar mavjud bo'lsa konsolda:
// "Xonalar mavjud."

// Agar xonalar mavjud bo'lmasa konsolda:
// "Xonalar mavjud emas."
```

---