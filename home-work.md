# Home work

### **1. Fayl yaratish va matn yozish**

**Vazifa**: `fs` modulidan foydalanib, yangi matnli fayl yaratib, unga `"Salom, Dunyo!"` matnini yozish.

**Tushuntirish**: Node.js da fayllar bilan ishlash uchun `fs` (File System) moduli qo'llaniladi. Bu vazifada siz yangi fayl yaratib, uning ichiga matn yozishingiz kerak. Buning uchun `fs` modulining `writeFile` funksiyasidan foydalanasiz, u fayl nomini, yoziladigan matnni va bajarilgandan keyin nima qilish kerakligini bildiradigan funksiya qabul qiladi.

---

### **2. Faylni o'qish va konsolga chiqarish**

**Vazifa**: Berilgan matnli faylni o'qib, uning mazmunini konsolga chiqarish.

**Tushuntirish**: Faylni o'qish uchun `fs` modulining `readFile` funksiyasidan foydalanish kerak. Bu funksiya fayl nomini va o'qish tugagandan keyin bajariladigan funksiyani qabul qiladi. O'qilgan matnni konsolga chiqarish orqali siz faylning mazmunini ko'rishingiz mumkin.

---

### **3. Operatsion tizim nomini chiqarish**

**Vazifa**: `os` modulidan foydalanib, operatsion tizimingiz nomini konsolga chiqarish.

**Tushuntirish**: `os` moduli operatsion tizim haqida ma'lumot olish uchun ishlatiladi. Tizim nomini olish uchun `os.type()` funksiyasidan foydalaniladi, bu funksiya tizim turini, masalan, `'Windows_NT'`, `'Linux'` yoki `'Darwin'` kabi qiymatni qaytaradi.

---

### **4. Joriy ishchi katalogini olish**

**Vazifa**: `process.cwd()` funksiyasidan foydalanib, joriy ishchi katalogingiz yo'lini konsolga chiqarish.

**Tushuntirish**: `process.cwd()` funksiyasi Node.js ilovasi ishlayotgan katalogning to'liq yo'lini qaytaradi. Bu yo'lni konsolga chiqarish orqali siz hozirgi ishchi katalogingizni aniqlashingiz mumkin.

---

### **5. Katalogdagi fayllarni ro'yxatlash**

**Vazifa**: `fs` modulidan foydalanib, joriy katalogdagi barcha fayl va kataloglarni ro'yxatlash.

**Tushuntirish**: Katalog ichidagi fayllarni ro'yxatlash uchun `fs.readdir` funksiyasidan foydalaniladi. Bu funksiya katalog nomini va natijalarni qaytarish funksiyasini qabul qiladi. Natijada katalog ichidagi fayl va papkalar ro'yxatini olasiz.

---

### **6. Fayl mavjudligini tekshirish**

**Vazifa**: Berilgan fayl yoki katalog mavjudligini tekshirish va natijani konsolga chiqarish.

**Tushuntirish**: Fayl yoki katalogning mavjudligini tekshirish uchun `fs.access` funksiyasidan foydalaniladi. Agar fayl mavjud bo'lsa, funksiya xatolik chiqarmaydi, aks holda xatolik qaytaradi. Siz ushbu xatolikdan foydalanib, faylning mavjud yoki mavjud emasligini aniqlashingiz mumkin.

---

### **7. Fayl nomidan kengaytmasini ajratish**

**Vazifa**: `path` modulidan foydalanib, berilgan fayl nomining kengaytmasini ajratish va konsolga chiqarish.

**Tushuntirish**: `path.extname()` funksiyasi fayl nomidan uning kengaytmasini ajratib olish uchun ishlatiladi. Masalan, agar fayl nomi `'salom.txt'` bo'lsa, funksiya `'.txt'` ni qaytaradi.

---

### **8. Foydalanuvchi nomini olish**

**Vazifa**: `os` modulidan foydalanib, operatsion tizimdagi foydalanuvchi nomini konsolga chiqarish.

**Tushuntirish**: `os.userInfo()` funksiyasi hozirgi foydalanuvchi haqida ma'lumotlarni qaytaradi, jumladan foydalanuvchi nomini. Siz ushbu ma'lumotdan foydalanuvchi nomini olish uchun foydalanishingiz mumkin.

---

### **9. Yo'lni birlashtirish**

**Vazifa**: `path.join()` funksiyasidan foydalanib, yo'l qismlarini birlashtirib, to'liq yo'l yaratish va konsolga chiqarish.

**Tushuntirish**: `path.join()` funksiyasi yo'l qismlarini birlashtiradi va operatsion tizimga mos ravishda to'g'ri yo'lni hosil qiladi. Bu fayl yo'llarini yaratishda juda qulay.

---

### **10. Faylni qayta nomlash**

**Vazifa**: `fs` modulidan foydalanib, mavjud fayl nomini o'zgartirish (masalan, `'eski.txt'` dan `'yangi.txt'` ga).

**Tushuntirish**: Fayl nomini o'zgartirish uchun `fs.rename` funksiyasidan foydalaniladi. Bu funksiya eski fayl nomini va yangi fayl nomini qabul qiladi va faylni qayta nomlaydi.

---

### **11. Faylni o'chirish**

**Vazifa**: `fs` modulidan foydalanib, berilgan faylni o'chirib tashlash va natijani konsolga chiqarish.

**Tushuntirish**: Faylni o'chirish uchun `fs.unlink` funksiyasidan foydalaniladi. Bu funksiya fayl nomini qabul qiladi va uni tizimdan o'chiradi.

---

### **12. Katalog yaratish**

**Vazifa**: `fs.mkdir()` funksiyasidan foydalanib, yangi katalog yaratish.

**Tushuntirish**: Yangi katalog yaratish uchun `fs.mkdir` funksiyasidan foydalaniladi. Bu funksiya katalog nomini qabul qiladi va agar katalog mavjud bo'lmasa, uni yaratadi.

---

### **13. Faylning absolyut yo'lini olish**

**Vazifa**: `path.resolve()` funksiyasidan foydalanib, berilgan faylning absolyut yo'lini olish va konsolga chiqarish.

**Tushuntirish**: `path.resolve()` funksiyasi berilgan yo'lni absolyut yo'lga aylantiradi. Bu, ayniqsa, faylning to'liq yo'lini aniqlash kerak bo'lganda foydali.

---

### **14. Matnni faylga qo'shish**

**Vazifa**: Mavjud faylning oxiriga yangi matn qo'shish.

**Tushuntirish**: Fayl oxiriga matn qo'shish uchun `fs.appendFile` funksiyasidan foydalaniladi. Bu funksiya fayl nomini va qo'shiladigan matnni qabul qiladi.

---

### **15. Fayl hajmini aniqlash**

**Vazifa**: Berilgan faylning hajmini baytlarda aniqlab, konsolga chiqarish.

**Tushuntirish**: Fayl haqida ma'lumot olish uchun `fs.stat` funksiyasidan foydalaniladi. Bu funksiya fayl hajmi, yaratilgan va o'zgartirilgan vaqtlari kabi ma'lumotlarni qaytaradi.

---

### **16. Faylni nusxalash**

**Vazifa**: `fs.copyFile()` funksiyasidan foydalanib, faylni boshqa nom yoki katalogga nusxalash.

**Tushuntirish**: Faylni nusxalash uchun `fs.copyFile` funksiyasidan foydalaniladi. Bu funksiya manba fayl nomini va nusxa olinadigan fayl nomini qabul qiladi.

---

### **17. Operatsion tizim arxitekturasini olish**

**Vazifa**: `os.arch()` funksiyasidan foydalanib, tizimingiz arxitekturasini konsolga chiqarish.

**Tushuntirish**: `os.arch()` funksiyasi tizim arxitekturasini qaytaradi, masalan, `'x64'` yoki `'arm'`. Bu ma'lumot ba'zi dasturlarda muhim bo'lishi mumkin.

---

### **18. Fayl yo'lidan katalog nomini olish**

**Vazifa**: `path.dirname()` funksiyasidan foydalanib, berilgan fayl yo'lidan katalog nomini olish va konsolga chiqarish.

**Tushuntirish**: `path.dirname()` funksiyasi berilgan yo'ldan katalog qismini ajratib oladi. Masalan, fayl yo'li `/home/user/dokumentlar/salom.txt` bo'lsa, katalog nomi `/home/user/dokumentlar` bo'ladi.

---

### **19. Fayl yaratish va vaqt tamg'asini olish**

**Vazifa**: Fayl yarating, so'ngra uning yaratilgan vaqtini aniqlab, konsolga chiqarish.

**Tushuntirish**: Fayl yaratish uchun `fs.writeFile` funksiyasidan foydalanishingiz mumkin. So'ngra, `fs.stat` funksiyasi yordamida faylning yaratilgan vaqti (`birthtime` xususiyati) ni olishingiz mumkin.

---

### **20. JSON faylni o'qish va ob'ektga aylantirish**

**Vazifa**: JSON formatidagi faylni o'qib, uning mazmunini JavaScript ob'ektiga aylantirish va konsolga chiqarish.

**Tushuntirish**: JSON faylni o'qish uchun `fs.readFile` funksiyasidan foydalanasiz. O'qilgan matnni JavaScript ob'ektiga aylantirish uchun `JSON.parse()` funksiyasidan foydalaniladi. Bu sizga fayldagi ma'lumotlar bilan obyekt sifatida ishlash imkonini beradi.

---
