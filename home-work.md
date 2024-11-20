1. **Avtomobil classini yaratish**:

   - `Car` nomli class yarating. Bu class avtomobilning markasi (`make`), modeli (`model`) va yili (`year`) kabi xususiyatlarni (`properties`) saqlasin.
   - `getAge()` nomli metod qo'shing, u avtomobilning yoshini hisoblab qaytarsin (joriy yil minus avtomobilning yili).
     **Izoh**: Bu class yordamida siz avtomobilning ma'lumotlarini saqlashingiz va uning yoshini osongina hisoblash imkoniga ega bo'lasiz.

2. **Talaba classi**:

   - `Student` nomli class yarating. U talabaning ismi (`name`) va baholari (`grades`) ro'yxatini saqlasin.
   - `calculateAverage()` metodini yozing, u baholar o'rtachasini hisoblab qaytarsin.
     **Izoh**: Ushbu class talabaning baholarini tahlil qilish va o'rtacha bahosini aniqlash uchun qulay.

3. **Bank hisobi classi**:

   - `BankAccount` nomli class yarating. U hisob raqami (`accountNumber`) va balansni (`balance`) saqlasin.
   - `deposit(amount)` va `withdraw(amount)` metodlarini qo'shing, ular balansni mos ravishda oshirsin yoki kamaytirsin.
   - **Misol**:
     **Izoh**: Bu class orqali bank hisobingizni boshqarish, pul qo'shish va yechish imkoniyatiga ega bo'lasiz.

4. **Kitob classi**:

   - `Book` nomli class yarating. U kitobning nomi (`title`), muallifi (`author`) va sahifalar sonini (`pages`) saqlasin.
   - `isLong()` metodini yozing, u agar kitob 300 sahifadan ko'p bo'lsa `true`, aks holda `false` qaytarsin.
   - **Misol**:
     **Izoh**: Kitobning uzun yoki qisqa ekanligini aniqlash uchun foydali class.

5. **Restoran menyusi**:

   - `Restaurant` nomli class yarating. U restoran nomi (`name`) va menyusini (`menu`) saqlasin.
   - `addDish(dish)` va `showMenu()` metodlarini yozing, menyuga taom qo'shish va barcha taomlarni ko'rsatish uchun.
   - **Misol**:
     **Izoh**: Restoran menyusini boshqarish va yangilash uchun qulay vosita.

6. **Telefon kontaktlari**:

   - `Contact` nomli class yarating. U kontaktning ismi (`name`) va telefon raqamini (`phoneNumber`) saqlasin.
   - `display()` metodini yozing, u kontakt ma'lumotlarini formatlangan tarzda chiqaradi (masalan, "Ismi: Ali, Telefon: +998901234567").
     **Izoh**: Kontakt ma'lumotlarini saqlash va ko'rsatish uchun mo'ljallangan.

7. **Soat classi**:

   - `Clock` nomli class yarating. Soat (`hours`) va daqiqalarni (`minutes`) saqlasin.
   - `displayTime()` metodini yozing, u vaqtni "HH:MM" formatida ko'rsatadi.
     **Izoh**: Vaqtni to'g'ri formatda ko'rsatish uchun ishlatiladi.

8. **Film classi**:

   - `Movie` nomli class yarating. U film nomi (`title`), janri (`genre`) va davomiyligini (`duration`) saqlasin.
   - `getDescription()` metodini yozing, u film haqida to'liq ma'lumotni qaytaradi (masalan, "Avengers, Janr: Aksiya, Davomiyligi: 120 daqiqa").
     **Izoh**: Filmlar haqidagi ma'lumotlarni saqlash va chiqarish uchun foydali.

9. **Savatcha classi**:

   - `ShoppingCart` nomli class yarating. Mahsulotlar (`items`) ro'yxatini saqlasin.
   - `addItem(item)`, `removeItem(item)`, va `getTotalPrice()` metodlarini yozing.
     **Izoh**: Onlayn xarid qilish savatchasini boshqarish uchun.

10. **Kurs classi**:

    - `Course` nomli class yarating. Kurs nomi (`courseName`) va talabalarning ro'yxatini (`students`) saqlasin.
    - `addStudent(student)` va `listStudents()` metodlarini yozing.
      **Izoh**: Kursga talabalarni qo'shish va ro'yxatini ko'rish imkonini beradi.

11. **Musiqa pleyeri**:

    - `MusicPlayer` nomli class yarating. Qo'shiqlar (`songs`) ro'yxatini saqlasin.
    - `addSong(song)`, `removeSong(song)`, va `showPlaylist()` metodlarini yozing.
      **Izoh**: Musiqa pleylistini yaratish va boshqarish uchun.

12. **Hayvon classi**:

    - `Animal` nomli class yarating. Turi (`type`) va yoshi (`age`) haqida ma'lumot saqlasin.
    - `makeSound()` metodini yozing, u hayvonning ovozini chiqaradi (masalan, "Mushuk miyovlaydi").
      **Izoh**: Har xil hayvonlarning ovozlarini aniqlash uchun.

13. **Ishchi classi**:

    - `Employee` nomli class yarating. Ismi (`name`), lavozimi (`position`) va oylik maoshini (`salary`) saqlasin.
    - `getAnnualSalary()` metodini yozing, u yillik maoshni hisoblab qaytarsin.
      **Izoh**: Ishchining yillik daromadini hisoblash uchun.

14. **Kalendariya voqeasi**:

    - `CalendarEvent` nomli class yarating. Voqea nomi (`eventName`), sanasi (`date`) va vaqti (`time`) haqida ma'lumot saqlasin.
    - `getEventDetails()` metodini yozing, u voqeaning qachon bo'lishini formatlangan tarzda qaytaradi.
      **Izoh**: Tadbirlar jadvalini tuzish va kuzatish uchun.

15. **Matn analizatori**:

    - `TextAnalyzer` nomli class yarating. Berilgan matnni (`text`) saqlasin.
    - `wordCount()` va `letterCount()` metodlarini yozing, ular so'zlar sonini va harflar sonini hisoblab qaytaradi.
      **Izoh**: Matn tahlili uchun foydali vosita.

16. **Mahsulot classi**:

    - `Product` nomli class yarating. Nomi (`name`), narxi (`price`) va miqdorini (`quantity`) saqlasin.
    - `getTotalCost()` metodini yozing, u jami qiymatini (narx * miqdor) hisoblab qaytaradi.
      **Izoh**: Xaridlar umumiy narxini hisoblash uchun.

17. **Harorat classi**:

    - `Temperature` nomli class yarating. Selsiyda haroratni (`celsius`) saqlasin.
    - `toFahrenheit()` metodini yozing, u haroratni Farengeytga aylantiradi.
      **Izoh**: Haroratni turli o'lchov birliklariga aylantirish uchun.

18. **O'yinchi classi**:

    - `Player` nomli class yarating. Ismi (`name`) va ochkolarini (`score`) saqlasin.
    - `addScore(points)` va `getScore()` metodlarini yozing, ochkolarni qo'shish va hozirgi ochkolarni ko'rsatish uchun.
      **Izoh**: O'yinlarda o'yinchining ochkolarini kuzatish uchun.

19. **Valyuta konvertori**:

    - `CurrencyConverter` nomli class yarating. Konvertatsiya kursini (`exchangeRate`) saqlang.
    - `convert(amount)` metodini yozing, u dollardan boshqa valyutaga aylantiradi.
      **Izoh**: Valyutalar o'rtasida hisob-kitob qilish uchun qulay vosita.

20. **Rang classi**:

    - `Color` nomli class yarating. Qizil (`red`), yashil (`green`) va ko'k (`blue`) qiymatlarini saqlasin.
    - `toHex()` metodini yozing, u rangni HEX formatiga aylantiradi (masalan, `#FFFFFF`).
