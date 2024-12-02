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