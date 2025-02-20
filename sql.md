Quyida SQL bo‘yicha berilgan mavzularni chuqurroq o‘rganish uchun 20 ta amaliy topshiriq keltirilgan. Har bir topshiriqda aniq vazifa va yo‘riqnoma berilgan. Ushbu topshiriqlarni bosqichma-bosqich bajarish orqali o‘quvchilar SQLning asosiy buyruqlarini puxta o‘zlashtirishlari mumkin.

---

1. **Jadval yaratish (CREATE TABLE) va asosiy ustunlar bilan tanishish**
   - Topshiriq: `students` nomli jadval yarating. Jadvalda quyidagi ustunlar bo‘lsin:
     1. `student_id` (PRIMARY KEY, INT, AUTO_INCREMENT)
     2. `first_name` (VARCHAR(50), NOT NULL)
     3. `last_name` (VARCHAR(50), NOT NULL)
     4. `birth_date` (DATE)
   - Talab: Asosiy kalitni (PRIMARY KEY) to‘g‘ri e’lon qilishga e’tibor bering.
   - Maqsad: Jadval yaratish sintaksisini mustahkamlash.

2. **Ma’lumot qo‘shish (INSERT) va ma’lumotlarni tekshirish (SELECT)**
   - Topshiriq: `students` jadvaliga kamida 3 ta o‘quvchi haqidagi ma’lumotni INSERT orqali kiriting. Har biriga first_name, last_name, birth_date kabi qiymatlarni bering.
   - Talab: Ma’lumotlar kiritilgandan so‘ng, SELECT yordami bilan kiritilgan yozuvlarni tekshiring.
   - Maqsad: INSERT va SELECT buyruqlarini amalda qo‘llash.

3. **UPDATE bilan ma’lumotlarni yangilash**
   - Topshiriq: `students` jadvalidagi bitta yozuvning `last_name` ustunini yangilang (masalan, “Aliyev”ni “Aliev”ga o‘zgartiring).
   - Talab: O‘zgartirilgan yozuvni SELECT orqali qayta ko‘rib, yangilanishni tasdiqlang.
   - Maqsad: UPDATE va WHERE sharti bilan ishlashni mustahkamlash.

4. **DELETE bilan yozuvlarni o‘chirish**
   - Topshiriq: `students` jadvalida bitta o‘quvchining yozuvini DELETE orqali o‘chiring.
   - Talab: Qayta SELECT qilganda o‘chirilgan yozuv mavjud emasligiga ishonch hosil qiling.
   - Maqsad: DELETEdan foydalanishni va ma’lumotlar butligini tushunish.

5. **WHERE sharti bilan ma’lumot qidirish**
   - Topshiriq: `students` jadvalidan WHERE sharti orqali `first_name`i “Ali” bo‘lgan barcha yozuvlarni tanlang.
   - Talab: Kamida ikki xil o‘quvchi “Ali” ismini ishlatgan holatni sinab ko‘ring (agar bo‘lmasa, ma’lumot qo‘shing).
   - Maqsad: WHERE bilan filtrlash amaliyotini o‘zlashtirish.

6. **ORDER BY bilan tartiblash**
   - Topshiriq: `students` jadvalidagi barcha yozuvlarni `last_name` bo‘yicha alifbo tartibida saralang.
   - Talab: O‘quvchilarni oson ko‘rish uchun SELECT natijalarini `first_name, last_name` ustunlari bo‘yicha ko‘rsating.
   - Maqsad: Ma’lumotlarni kerakli tartibda ko‘rishni o‘rganish.

7. **LIMIT bilan cheklash**
   - Topshiriq: `students` jadvalidagi ma’lumotlardan faqat 2 ta yozuvni olish uchun SELECTdan foydalaning.
   - Talab: ORDER BY bilan birgalikda LIMITdan foydalanib, ma’lumotlarni kerakli tartibda cheklang.
   - Maqsad: LIMIT yordamida katta jadvallardan faqat kerakli bo‘lagini tanlashni o‘rganish.

8. **AS bilan ustun nomlariga laqab berish**
   - Topshiriq: `students` jadvalidan `first_name` ustunini “Ism” va `last_name` ustunini “Familiya” sifatida AS bilan qayta nomlab SELECT qiling.
   - Talab: Natijaviy ustun nomlari “Ism” va “Familiya” bo‘lib chiqsin.
   - Maqsad: Ustunlarni shartli nomlar bilan ko‘rsatishni bilish.

9. **UNION orqali bir nechta tanlovlarni birlashtirish**
   - Topshiriq: 2 ta turli SELECT yozing — masalan, birinchisi `students` jadvalidan `first_name`ni, ikkinchisi o‘xshash strukturaga ega boshqa jadvaldan (o‘zingiz yarating, masalan `teachers`) `first_name`ni tanlasin. Keyin UNION yordamida ikkisini birlashtiring.
   - Talab: Bir xil turdagi ustunlar bo‘lishini ta’minlang.
   - Maqsad: UNION sintaksisi va birlashtirish jarayonini tushunish.

10. **Xorijiy kalit (FOREIGN KEY) bilan ishlash**
    - Topshiriq: `groups` nomli jadval yarating. Jadvalda `group_id` (PRIMARY KEY) va `group_name` (VARCHAR) bo‘lsin. `students` jadvaliga `group_id` ustuni qo‘shing (ALTER TABLE orqali), va uni FOREIGN KEY qilib e’lon qiling, `groups.group_id`ga bog‘lang.
    - Talab: FOREIGN KEY ustuni NOT NULL bo‘lishi yoki bo‘lmasligini o‘zingiz hal qiling, mos ravishda jadval strukturasini qo‘llang.
    - Maqsad: Bog‘langan jadvallar, FOREIGN KEY va referential integrity tushunchalarini mustahkamlash.

11. **Ma’lumotlar butligini nazorat qilish (Integrity Constraints)**
    - Topshiriq: `students` jadvalining `birth_date` ustuniga cheklov qo‘ying (masalan, 2010-yildan keyingi tug‘ilgan o‘quvchilar kiritilmasin). Bu uchun CHECK constraint-dan foydalanish yoki boshqa usulni tanlang.
    - Talab: Bir nechta test INSERTlari orqali constraint ishlashini tekshiring.
    - Maqsad: Integrity constraints haqida amaliy tajribaga ega bo‘lish.

12. **ALTER TABLE bilan ustun qo‘shish/o‘zgartirish**
    - Topshiriq: `students` jadvaliga `gender` (CHAR(1) yoki VARCHAR(10)) ustunini qo‘shing. Keyin ustunning turini yoki default qiymatini o‘zgartiring.
    - Talab: Bir necha bosqichda ustun qo‘shing, ma’lumot kiriting, so‘ngra ustunning turini o‘zgartiring (masalan, CHAR(1)dan VARCHAR(10)ga).
    - Maqsad: ALTER TABLE bilan tanishish va amaliyotga tadbiq etish.

13. **GROUP BY bilan guruhlash**
    - Topshiriq: `students` jadvalida `group_id` bo‘yicha guruhlang va har bir guruhda qancha talaba borligini COUNT(*) bilan chiqaring.
    - Talab: SELECTda `group_id` va `COUNT(*) AS student_count` ustunlarini ko‘rsating.
    - Maqsad: GROUP BY bilan bir nechta yozuvlarni bitta guruhga birlashtirishni o‘rganish.

14. **HAVING bilan guruhlangan natijani filtrlash**
    - Topshiriq: Oldingi GROUP BY misolingizdan foydalanib, faqat kamida 2 ta talaba ega bo‘lgan guruhlarni ko‘rsating.
    - Talab: Buning uchun `HAVING COUNT(*) >= 2` sharti bilan foydalaning.
    - Maqsad: GROUP BY va HAVING ni birgalikda qo‘llash.

15. **CROSS JOIN**
    - Topshiriq: `students` va `groups` jadvallari o‘rtasida CROSS JOIN amalga oshiring.
    - Talab: CROSS JOIN natijasida yozuvlar soni `students` dagi yozuvlar soni × `groups` dagi yozuvlar soni bo‘lishini tasdiqlang.
    - Maqsad: CROSS JOIN mantig‘ini tushunish va natijani tahlil qilish.

16. **INNER JOIN (ichki qo‘shilish)**
    - Topshiriq: `students` va `groups` jadvallarini INNER JOIN orqali bog‘lang.
    - Talab: JOIN sharti sifatida `students.group_id = groups.group_id` dan foydalaning.
    - Maqsad: Ichki bog‘lanish natijasida faqat mos keladigan yozuvlar chiqishini ko‘rish.

17. **LEFT JOIN**
    - Topshiriq: `students` jadvali bilan `groups` jadvalini LEFT JOIN yordamida bog‘lang.
    - Talab: Ma’lumotlar mavjud bo‘lmagan holatlarda `students` tarafidan hamma yozuvlar chiqishini kuzating.
    - Maqsad: Jadvaldagi mos yozuvlar bo‘lmasa ham chap jadvaldagi barcha yozuvlar kelishini tushunish.

18. **RIGHT JOIN**
    - Topshiriq: Avvalgi misolni RIGHT JOINda takrorlang, ammo bu safar `groups` tomoni asos bo‘ladi.
    - Talab: `groups` jadvalidagi yozuvlar hammasi chiqib, `students` dagi mos ma’lumot bo‘lmasa, NULL ko‘rinsin.
    - Maqsad: RIGHT JOIN ish mexanizmini tushunish.

19. **Bir nechta JOINlardan foydalanish (Multiple JOIN)**
    - Topshiriq: Uchta yoki undan ortiq jadval yaratib (masalan, `students`, `groups`, `teachers`), ularni bir nechta JOIN bilan bog‘lab SELECT qiling. Har bir jadvalda kamida 3 tadan yozuv bo‘lsin.
    - Talab: Jadval biriktirishda INNER JOIN, LEFT JOIN kabi turli JOINlarni birgalikda ishlating.
    - Maqsad: Katta so‘rovlar tuzish va ma’lumotlarni turli jadvallardan yig‘ishni o‘rganish.

20. **Funksiyalar bilan tanishish (MIN, MAX, AVG, SUM va boshqalar)**
    - Topshiriq: Agar `students` jadvalida tug‘ilgan sanaga qarab eng keksa yoki eng yosh o‘quvchini topish kerak bo‘lsa, `MIN(birth_date)` yoki `MAX(birth_date)`dan foydalaning. Yoki ma’lumot izchil bo‘lsa, `GROUP BY groups.group_id` bilan har bir guruhdagi o‘quvchilarning o‘rtacha yoshini `AVG()` yordamida toping.
    - Talab: Bir nechta funksiyalarni sinab ko‘ring (MIN, MAX, AVG, COUNT va hokazo).
    - Maqsad: Aggregation funksiyalarini ishlatish ko‘nikmasini rivojlantirish.

---
