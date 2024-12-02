---
#### **1. Ma’lumotlarni Yuklash Simulyatsiyasi**
**Vazifa:** `fetchData()` nomli funksiya yarating, u ma’lumotlarni serverdan yuklashni simulyatsiya qiladi. 3 soniyadan keyin va’dani bajaradi va "Ma’lumotlar muvaffaqiyatli yuklandi." matnini qaytaradi.

---

#### **2. Foydalanuvchi Autentifikatsiyasi**

**Vazifa:** `authenticateUser(username, password)` funksiyasini yarating. 2 soniyadan keyin, agar `username` va `password` to‘g‘ri bo‘lsa, va’da (Promise) `resolve` bo‘lsin va "Foydalanuvchi muvaffaqiyatli autentifikatsiyalandi." xabarini qaytarsin. Aks holda, `reject` bo‘lsin va "Autentifikatsiya xatosi." xabarini qaytarsin.

---

#### **3. Kitob Qidiruvi**

**Vazifa:** `searchBooks(query)` funksiyasini yarating, u kitob qidiruvini simulyatsiya qiladi. 1.5 soniyadan keyin va’da bajarilib, topilgan kitoblar ro‘yxatini qaytarsin. Agar kitob topilmasa, `reject` bilan "Hech qanday kitob topilmadi." xabarini qaytarsin.

---

#### **4. Elektron Pochta Yuborish**

**Vazifa:** `sendEmail(recipient, subject, body)` funksiyasini yarating. 2.5 soniyadan keyin va’da `resolve` bilan "Elektron pochta muvaffaqiyatli yuborildi." xabarini qaytarsin. Agar `recipient` noto‘g‘ri bo‘lsa, `reject` bilan "Yuboriladigan manzil noto‘g‘ri." xabarini qaytarsin.

---

#### **5. Foydalanuvchi Ro‘yxatdan O‘tishi**

**Vazifa:** `registerUser(userInfo)` funksiyasini yarating. 3 soniyadan keyin va’da `resolve` bilan "Foydalanuvchi muvaffaqiyatli ro‘yxatdan o‘tdi." xabarini qaytarsin. Agar foydalanuvchi allaqachon mavjud bo‘lsa, `reject` bilan "Foydalanuvchi allaqachon mavjud." xabarini qaytarsin.

---

#### **6. To‘lovni Qabul Qilish**

**Vazifa:** `processPayment(amount)` funksiyasini yarating. 2 soniyadan keyin va’da `resolve` bilan "To‘lov muvaffaqiyatli amalga oshirildi." xabarini qaytarsin. Agar balans yetarli bo‘lmasa, `reject` bilan "Balans yetarli emas." xabarini qaytarsin.

---

#### **7. Rasm Yuklash**

**Vazifa:** `uploadImage(imageFile)` funksiyasini yarating. 4 soniyadan keyin va’da `resolve` bilan "Rasm muvaffaqiyatli yuklandi." xabarini qaytarsin. Agar fayl turi noto‘g‘ri bo‘lsa, `reject` bilan "Noto‘g‘ri fayl turi." xabarini qaytarsin.

---

#### **8. Video Qidiruvi**

**Vazifa:** `searchVideos(query)` funksiyasini yarating. 2 soniyadan keyin va’da bajarilib, topilgan videolar ro‘yxatini qaytarsin. Agar video topilmasa, `reject` bilan "Hech qanday video topilmadi." xabarini qaytarsin.

---

#### **9. O‘yin Rezervatsiyasi**

**Vazifa:** `reserveSeat(seatNumber)` funksiyasini yarating. 1 soniyadan keyin va’da `resolve` bilan "O‘rin muvaffaqiyatli rezerv qilindi." xabarini qaytarsin. Agar o‘rin band bo‘lsa, `reject` bilan "O‘rin band." xabarini qaytarsin.

---

#### **10. Mahsulot Qo‘shish**

**Vazifa:** `addProduct(product)` funksiyasini yarating. 2 soniyadan keyin va’da `resolve` bilan "Mahsulot muvaffaqiyatli qo‘shildi." xabarini qaytarsin. Agar mahsulot allaqachon mavjud bo‘lsa, `reject` bilan "Mahsulot allaqachon mavjud." xabarini qaytarsin.

---

#### **11. Ma’lumotlarni Yangilash**

**Vazifa:** `updateData(id, newData)` funksiyasini yarating. 3 soniyadan keyin va’da `resolve` bilan "Ma’lumotlar muvaffaqiyatli yangilandi." xabarini qaytarsin. Agar ma’lumot topilmasa, `reject` bilan "Ma’lumot topilmadi." xabarini qaytarsin.

---

#### **12. Foydalanuvchi Ma’lumotlarini Olish**

**Vazifa:** `getUserData(userId)` funksiyasini yarating. 1.5 soniyadan keyin va’da bajarilib, foydalanuvchi ma’lumotlarini qaytarsin. Agar foydalanuvchi mavjud bo‘lmasa, `reject` bilan "Foydalanuvchi topilmadi." xabarini qaytarsin.

---

#### **13. Kitobni Qaytarish**

**Vazifa:** `returnBook(bookId)` funksiyasini yarating. 2 soniyadan keyin va’da `resolve` bilan "Kitob muvaffaqiyatli qaytarildi." xabarini qaytarsin. Agar kitob topilmasa, `reject` bilan "Kitob topilmadi." xabarini qaytarsin.

---

#### **14. Kursga Ro‘yxatdan O‘tish**

**Vazifa:** `enrollCourse(courseId)` funksiyasini yarating. 2.5 soniyadan keyin va’da `resolve` bilan "Kursga muvaffaqiyatli ro‘yxatdan o‘tdingiz." xabarini qaytarsin. Agar kurs to‘ldirilgan bo‘lsa, `reject` bilan "Kursga joy yo‘q." xabarini qaytarsin.

---

#### **15. Xaridni Tasdiqlash**

**Vazifa:** `confirmPurchase(cartItems)` funksiyasini yarating. 3 soniyadan keyin va’da `resolve` bilan "Xarid muvaffaqiyatli tasdiqlandi." xabarini qaytarsin. Agar ombor yetarli bo‘lmasa, `reject` bilan "Ba’zi mahsulotlar omborda yetarli emas." xabarini qaytarsin.

---

#### **16. Foydalanuvchi Profilini Yangilash**

**Vazifa:** `updateProfile(userId, profileData)` funksiyasini yarating. 2 soniyadan keyin va’da `resolve` bilan "Profil muvaffaqiyatli yangilandi." xabarini qaytarsin. Agar foydalanuvchi topilmasa, `reject` bilan "Foydalanuvchi topilmadi." xabarini qaytarsin.

---

#### **17. To‘lov Tarixini Olish**

**Vazifa:** `getPaymentHistory(userId)` funksiyasini yarating. 1.5 soniyadan keyin va’da bajarilib, foydalanuvchining to‘lov tarixini qaytarsin. Agar tarix bo‘lmasa, `reject` bilan "To‘lov tarixi topilmadi." xabarini qaytarsin.

---

#### **18. Xabar Yuborish**

**Vazifa:** `sendMessage(recipient, message)` funksiyasini yarating. 1.5 soniyadan keyin va’da `resolve` bilan "Xabar muvaffaqiyatli yuborildi." xabarini qaytarsin. Agar `recipient` noto‘g‘ri bo‘lsa, `reject` bilan "Xabar yuborishda xato." xabarini qaytarsin.

---

#### **19. Mahsulotni O‘chirish**

**Vazifa:** `deleteProduct(productId)` funksiyasini yarating. 2 soniyadan keyin va’da `resolve` bilan "Mahsulot muvaffaqiyatli o‘chirildi." xabarini qaytarsin. Agar mahsulot topilmasa, `reject` bilan "Mahsulot topilmadi." xabarini qaytarsin.

---

#### **20. Xaridni Bekor Qilish**

**Vazifa:** `cancelOrder(orderId)` funksiyasini yarating. 1.5 soniyadan keyin va’da `resolve` bilan "Xarid muvaffaqiyatli bekor qilindi." xabarini qaytarsin. Agar xarid topilmasa, `reject` bilan "Xarid topilmadi." xabarini qaytarsin.

---

#### **21. Foydalanuvchi Rolini O‘zgartirish**

**Vazifa:** `changeUserRole(userId, newRole)` funksiyasini yarating. 2.5 soniyadan keyin va’da `resolve` bilan "Foydalanuvchi roli muvaffaqiyatli o‘zgartirildi." xabarini qaytarsin. Agar foydalanuvchi topilmasa, `reject` bilan "Foydalanuvchi topilmadi." xabarini qaytarsin.

---

#### **22. Xizmat Subskriptsiyasini Yaratish**

**Vazifa:** `createSubscription(userId, plan)` funksiyasini yarating. 3 soniyadan keyin va’da `resolve` bilan "Subskriptsiya muvaffaqiyatli yaratilgan." xabarini qaytarsin. Agar plan mavjud bo‘lmasa, `reject` bilan "Tanlangan plan mavjud emas." xabarini qaytarsin.

---

#### **23. Xarajatlarni Hisoblash**

**Vazifa:** `calculateExpenses(expenses)` funksiyasini yarating. 2 soniyadan keyin va’da bajarilib, umumiy xarajatlarni qaytarsin. Agar xarajatlar ro‘yxati bo‘sh bo‘lsa, `reject` bilan "Xarajatlar mavjud emas." xabarini qaytarsin.

---

#### **24. Kurs Materiallarini Yuklash**

**Vazifa:** `loadCourseMaterials(courseId)` funksiyasini yarating. 2 soniyadan keyin va’da bajarilib, kurs materiallarini qaytarsin. Agar kurs topilmasa, `reject` bilan "Kurs topilmadi." xabarini qaytarsin.

---

#### **25. Foydalanuvchi Sharhini Qo‘shish**

**Vazifa:** `addReview(userId, review)` funksiyasini yarating. 1.5 soniyadan keyin va’da `resolve` bilan "Sharh muvaffaqiyatli qo‘shildi." xabarini qaytarsin. Agar foydalanuvchi mavjud bo‘lmasa, `reject` bilan "Foydalanuvchi topilmadi." xabarini qaytarsin.

---

#### **26. Ma’lumotlarni Arxivlash**

**Vazifa:** `archiveData(dataId)` funksiyasini yarating. 3 soniyadan keyin va’da `resolve` bilan "Ma’lumot muvaffaqiyatli arxivlandi." xabarini qaytarsin. Agar ma’lumot topilmasa, `reject` bilan "Ma’lumot topilmadi." xabarini qaytarsin.

---

#### **27. To‘lovni Qaytarish**

**Vazifa:** `refundPayment(paymentId)` funksiyasini yarating. 2 soniyadan keyin va’da `resolve` bilan "To‘lov muvaffaqiyatli qaytarildi." xabarini qaytarsin. Agar to‘lov topilmasa, `reject` bilan "To‘lov topilmadi." xabarini qaytarsin.

---

#### **28. Statistik Ma’lumotlarni Olish**

**Vazifa:** `getStatistics()` funksiyasini yarating. 1 soniyadan keyin va’da bajarilib, statistik ma’lumotlarni qaytarsin. Agar ma’lumotlar mavjud bo‘lmasa, `reject` bilan "Statistik ma’lumotlar mavjud emas." xabarini qaytarsin.

---

#### **29. Foydalanuvchi Seansini Tugatish**

**Vazifa:** `logoutUser(userId)` funksiyasini yarating. 1.5 soniyadan keyin va’da `resolve` bilan "Foydalanuvchi muvaffaqiyatli tizimdan chiqdi." xabarini qaytarsin. Agar foydalanuvchi topilmasa, `reject` bilan "Foydalanuvchi topilmadi." xabarini qaytarsin.

---

#### **30. Ma’lumotlarni Export Qilish**

**Vazifa:** `exportData(format)` funksiyasini yarating. 2 soniyadan keyin va’da `resolve` bilan "Ma’lumotlar muvaffaqiyatli eksport qilindi: [format]." xabarini qaytarsin. Agar format qo‘llab-quvvatlanmasa, `reject` bilan "Noto‘g‘ri eksport formati." xabarini qaytarsin.

---

### Har Bir Masalaning Qisqacha Tavsifi

1. **Ma’lumotlarni Yuklash Simulyatsiyasi:** Serverdan ma’lumotlarni yuklashni Promises bilan simulyatsiya qilish.
2. **Foydalanuvchi Autentifikatsiyasi:** Foydalanuvchini autentifikatsiyalash jarayonini Promises yordamida amalga oshirish.
3. **Kitob Qidiruvi:** Kitob qidiruv funksiyasini yaratish va natijalarni Promises orqali boshqarish.
4. **Elektron Pochta Yuborish:** Elektron pochta yuborish jarayonini Promises bilan simulyatsiya qilish.
5. **Foydalanuvchi Ro‘yxatdan O‘tishi:** Foydalanuvchini ro‘yxatdan o‘tish jarayonini Promises yordamida amalga oshirish.
6. **To‘lovni Qabul Qilish:** To‘lovni qabul qilish jarayonini Promises bilan boshqarish.
7. **Rasm Yuklash:** Rasm yuklash funksiyasini Promises yordamida yaratish va boshqarish.
8. **Video Qidiruvi:** Video qidiruv jarayonini Promises bilan simulyatsiya qilish.
9. **O‘yin Rezervatsiyasi:** O‘rin rezervatsiyasini Promises orqali amalga oshirish.
10. **Mahsulot Qo‘shish:** Mahsulot qo‘shish jarayonini Promises yordamida boshqarish.
11. **Ma’lumotlarni Yangilash:** Ma’lumotlarni yangilash funksiyasini Promises bilan yaratish.
12. **Foydalanuvchi Ma’lumotlarini Olish:** Foydalanuvchi ma’lumotlarini Promises yordamida olish.
13. **Kitobni Qaytarish:** Kitobni qaytarish jarayonini Promises orqali boshqarish.
14. **Kursga Ro‘yxatdan O‘tish:** Kursga ro‘yxatdan o‘tish funksiyasini Promises bilan amalga oshirish.
15. **Xaridni Tasdiqlash:** Xaridni tasdiqlash jarayonini Promises yordamida boshqarish.
16. **Foydalanuvchi Profilini Yangilash:** Profilni yangilash funksiyasini Promises bilan yaratish.
17. **To‘lov Tarixini Olish:** To‘lov tarixini Promises yordamida olish.
18. **Xabar Yuborish:** Xabar yuborish jarayonini Promises bilan simulyatsiya qilish.
19. **Mahsulotni O‘chirish:** Mahsulotni o‘chirish funksiyasini Promises yordamida amalga oshirish.
20. **Xaridni Bekor Qilish:** Xaridni bekor qilish jarayonini Promises orqali boshqarish.
21. **Foydalanuvchi Rolini O‘zgartirish:** Foydalanuvchi rolini Promises yordamida o‘zgartirish.
22. **Xizmat Subskriptsiyasini Yaratish:** Subskriptsiya yaratish funksiyasini Promises bilan amalga oshirish.
23. **Xarajatlarni Hisoblash:** Xarajatlarni hisoblash jarayonini Promises orqali boshqarish.
24. **Kurs Materiallarini Yuklash:** Kurs materiallarini Promises yordamida yuklash.
25. **Foydalanuvchi Sharhini Qo‘shish:** Sharh qo‘shish funksiyasini Promises bilan yaratish.
26. **Ma’lumotlarni Arxivlash:** Ma’lumotlarni arxivlash jarayonini Promises yordamida boshqarish.
27. **To‘lovni Qaytarish:** To‘lovni qaytarish funksiyasini Promises bilan amalga oshirish.
28. **Statistik Ma’lumotlarni Olish:** Statistik ma’lumotlarni Promises yordamida olish.
29. **Foydalanuvchi Seansini Tugatish:** Foydalanuvchi seansini tugatish jarayonini Promises orqali boshqarish.
30. **Ma’lumotlarni Export Qilish:** Ma’lumotlarni eksport qilish funksiyasini Promises bilan yaratish.

---

### Masalalarni Yechish Bo‘yicha Qo‘llanma

Har bir masalani yechishda quyidagi qadamlarni bajarishingiz mumkin:

1. **Funksiyani Yarating:** Masala tavsifiga mos ravishda kerakli funksiyani yaratish.
2. **Promises Qo‘llang:** Funksiya ichida `new Promise` konstruktori yordamida asinxron operatsiyani simulyatsiya qilish.
3. **Resolve va Reject:** Shartlarga qarab `resolve` yoki `reject` chaqiring.
4. **Test Qiling:** Funksiyani chaqirib, `.then()` va `.catch()` metodlari bilan natijalarni boshqaring.
5. **Kodni Tozalang:** Kodni o‘qilishi oson va optimallashtirilgan holga keltiring.
