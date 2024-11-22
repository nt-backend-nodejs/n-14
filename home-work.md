Albatta, har bir masalani batafsil tushuntirib beraman, JavaScript'da sinflardan foydalanib, qadam-baqadam kod yozib chiqamiz.

---

### 1. **"Student" nomli sinf yaratish**

**Vazifa**: "Student" sinfini yarating, u ism, yosh va kurs xususiyatlariga ega bo'lsin. Talabaning ma'lumotlarini ko'rsatish uchun metod qo'shing. "Student" sinfidan ikkita nusxa yarating va ularning ma'lumotlarini ko'rsating.

#### Qadamlar:

1. **"Student" sinfini yaratish**:
   * **Izoh**:
     - `class Student` bilan sinfni yaratdik.
     - `constructor` metodi orqali xususiyatlarni (`name`, `age`, `course`) o'rnatamiz.
     - `displayInfo()` metodi talabaning ma'lumotlarini konsolga chiqaradi.

2. **Ikki nusxa yaratish va ma'lumotlarini ko'rsatish**:
   ```javascript
   const student1 = new Student('Ali', 20, 'Matematika');
   const student2 = new Student('Laylo', 22, 'Fizika');
   
   student1.displayInfo();
   student2.displayInfo();
   ```
   * **Izoh**:
     - `student1` va `student2` nomli ikkita obyekt yaratdik.
     - Har bir obyekt uchun `displayInfo()` metodini chaqirib, ma'lumotlarini ko'rsatdik.

---

### 2. **"Circle" sinfini yaratish**

**Vazifa**: "Circle" sinfini yarating, radius xususiyatiga ega bo'lsin. Aylanani yuzasi va perimetrini hisoblash uchun metodlar qo'shing. "Circle" sinfidan nusxa yarating va uning yuzasi va perimetrini hisoblang.

#### Qadamlar:

1. **"Circle" sinfini yaratish**:
   * **Izoh**:
     - `class Circle` bilan sinfni yaratdik.
     - `radius` xususiyatini konstruktor orqali o'rnatamiz.
     - `getArea()` metodi yuzani hisoblaydi.
     - `getCircumference()` metodi perimetrni (aylana uzunligini) hisoblaydi.

2. **Nusxa yaratish va hisoblash**:
   ```javascript
   const circle = new Circle(5);
   
   console.log(`Yuza: ${circle.getArea().toFixed(2)}`);
   console.log(`Perimetr: ${circle.getCircumference().toFixed(2)}`);
   ```
   * **Izoh**:
     - `circle` nomli obyekt yaratdik, radiusi 5 ga teng.
     - Yuzani va perimetrni hisoblab, natijani konsolga chiqardik.
     - `.toFixed(2)` natijani 2 xonali kasr qismiga qadar yuvarlaydi.

---

### 3. **"Vehicle" va "Motorcycle" sinflari**

**Vazifa**: "Vehicle" sinfini yarating, marka, model va yil xususiyatlariga ega bo'lsin. Mashinaning ma'lumotlarini ko'rsatish uchun metod qo'shing. "Vehicle" sinfidan "Motorcycle" nomli subklass yarating, u qo'shimcha ravishda tur xususiyatiga ega bo'lsin. Ma'lumotlarni ko'rsatish metodini tur bilan birga ko'rsatish uchun qayta yozing.

#### Qadamlar:

1. **"Vehicle" sinfini yaratish**:
2. **"Motorcycle" subklassini yaratish**:
   * **Izoh**:
     - `extends` kalit so'zi orqali meros oldik.
     - `super()` bilan ota sinfning konstruktorini chaqirdik.
     - `displayInfo()` metodini qayta yozdik va `super.displayInfo()` orqali ota sinf metodini chaqirdik.

3. **Nusxa yaratish va ma'lumotlarni ko'rsatish**:
   ```javascript
   const moto = new Motorcycle('Yamaha', 'YZF-R3', 2020, 'Sport');
   moto.displayInfo();
   ```
   * **Izoh**:
     - `moto` nomli obyekt yaratdik.
     - Ma'lumotlarni konsolga chiqarish uchun `displayInfo()` metodini chaqirdik.

---

### 4. **"BankAccount" sinfi**

**Vazifa**: "BankAccount" sinfini yarating, hisob raqami va balans xususiyatlariga ega bo'lsin. Hisobga pul qo'shish va yechish uchun metodlar qo'shing. "BankAccount" sinfidan bir nechta nusxa yarating, pul qo'shing va yeching.

#### Qadamlar:

1. **"BankAccount" sinfini yaratish**:
2. **Nusxalar yaratish va operatsiyalarni bajarish**:
   ```javascript
   const account1 = new BankAccount('1234567890');
   account1.deposit(500000);
   account1.withdraw(200000);
   
   const account2 = new BankAccount('0987654321', 1000000);
   account2.withdraw(1500000); // Yetarli mablag' mavjud emas
   account2.withdraw(500000);
   ```
   * **Izoh**:
     - `account1` va `account2` nomli hisoblar yaratdik.
     - Hisoblar bo'yicha pul qo'shish va yechish operatsiyalarini bajardik.

---

### 5. **"Shape", "Rectangle" va "Triangle" sinflari**

**Vazifa**: "Shape" sinfini yarating, yuzani hisoblash uchun metodga ega bo'lsin. "Rectangle" va "Triangle" nomli ikki subklass yarating, ular "Shape" sinfidan meros olsin va yuzani hisoblash metodini qayta yozsin. "Rectangle" va "Triangle" sinflaridan nusxalar yarating va ularning yuzalarini hisoblang.

#### Qadamlar:

1. **"Shape" sinfini yaratish**:

2. **"Rectangle" sinfini yaratish**:

3. **"Triangle" sinfini yaratish**:

4. **Nusxalar yaratish va yuzalarni hisoblash**:
   ```javascript
   const rectangle = new Rectangle(5, 10);
   console.log(`To'rtburchak yuzasi: ${rectangle.getArea()}`);
   
   const triangle = new Triangle(4, 8);
   console.log(`Uchburchak yuzasi: ${triangle.getArea()}`);
   ```
   * **Izoh**:
     - Har bir sinfda `getArea()` metodini qayta yozdik.
     - Nusxalar yaratib, yuzalarni hisobladik.

---

### 6. **"Employee" va "Manager" sinflari**

**Vazifa**: "Employee" sinfini yarating, ism va maosh xususiyatlariga ega bo'lsin. Yillik maoshni hisoblash uchun metod qo'shing. "Manager" nomli subklass yarating, u "Employee" sinfidan meros olsin va qo'shimcha ravishda bo'lim xususiyatiga ega bo'lsin. Yillik maoshni hisoblash metodini menejerlar uchun bonuslarni qo'shish uchun qayta yozing. "Manager" sinfidan ikkita nusxa yarating va ularning yillik maoshlarini hisoblang.

#### Qadamlar:

1. **"Employee" sinfini yaratish**:

2. **"Manager" sinfini yaratish**:

3. **Nusxalar yaratish va yillik maoshlarni hisoblash**:
   ```javascript
   const manager1 = new Manager('Olim', 8000, 'Marketing');
   const manager2 = new Manager('Gulnoza', 9000, 'IT');
   
   console.log(`${manager1.name}ning yillik maoshi: ${manager1.getAnnualSalary()} so'm`);
   console.log(`${manager2.name}ning yillik maoshi: ${manager2.getAnnualSalary()} so'm`);
   ```
   * **Izoh**:
     - Menejerlar uchun yillik maoshga bonus qo'shib hisobladik.

---

### 7. **"Book" va "Ebook" sinflari**

**Vazifa**: "Book" sinfini yarating, nomi, muallifi va nashr yili xususiyatlariga ega bo'lsin. Kitobning ma'lumotlarini ko'rsatish uchun metod qo'shing. "Ebook" nomli subklass yarating, u "Book" sinfidan meros olsin va qo'shimcha ravishda narx xususiyatiga ega bo'lsin. Ma'lumotlarni ko'rsatish metodini narx bilan birga ko'rsatish uchun qayta yozing. "Ebook" sinfidan nusxa yarating va uning ma'lumotlarini ko'rsating.

#### Qadamlar:

1. **"Book" sinfini yaratish**:

2. **"Ebook" sinfini yaratish**:

3. **Nusxa yaratish va ma'lumotlarni ko'rsatish**:
   ```javascript
   const ebook = new Ebook('JavaScript Dasturlash', 'Ali Vali', 2021, 20000);
   ebook.displayInfo();
   ```
   * **Izoh**:
     - `displayInfo()` metodini qayta yozib, narxni ham ko'rsatdik.

---

### 8. **"Animal" va "Cat" sinflari**

**Vazifa**: "Animal" sinfini yarating, turi va ovoz xususiyatlariga ega bo'lsin. Hayvonning ovozini chiqarish uchun metod qo'shing. "Cat" nomli subklass yarating, u "Animal" sinfidan meros olsin va qo'shimcha ravishda rang xususiyatiga ega bo'lsin. Ovoz chiqarish metodini rang bilan birga ko'rsatish uchun qayta yozing. "Cat" sinfidan nusxa yarating va uning ovozini chiqaring.

#### Qadamlar:

1. **"Animal" sinfini yaratish**:

2. **"Cat" sinfini yaratish**:

3. **Nusxa yaratish va ovoz chiqarish**:
   ```javascript
   const cat = new Cat('Mushuk', 'Miyov', 'Oq');
   cat.makeSound();
   ```

   * **Izoh**:
     - `makeSound()` metodini qayta yozib, rangni qo'shdik.

---

### 9. **"Bank" sinfi**

**Vazifa**: "Bank" sinfini yarating, bank nomi va filiallari xususiyatlariga ega bo'lsin. Filial qo'shish, o'chirish va barcha filiallarni ko'rsatish uchun metodlar qo'shing. "Bank" sinfidan nusxa yarating va filiallarni qo'shish va o'chirishni bajaring.

#### Qadamlar:
1. **"Bank" sinfini yaratish**:
   ```

2. **Nusxa yaratish va operatsiyalarni bajarish**:
   ```javascript
   const bank = new Bank('Milliy Bank');
   bank.addBranch('Toshkent');
   bank.addBranch('Samarqand');
   bank.displayBranches();
   bank.removeBranch('Toshkent');
   bank.displayBranches();
   ```
   * **Izoh**:

     - `branches` massivida filiallarni saqladik.
     - Filiallarni qo'shish va o'chirishni amalga oshirdik.

---

### 10. **"Product" va "ElectronicProduct" sinflari**

**Vazifa**: "Product" sinfini yarating, mahsulot ID, nomi va narxi xususiyatlariga ega bo'lsin. Miqdor bilan narxni ko'paytirib, umumiy narxni hisoblash uchun metod qo'shing. "ElectronicProduct" nomli subklass yarating, u "Product" sinfidan meros olsin va qo'shimcha ravishda kafolat muddati xususiyatiga ega bo'lsin. Umumiy narxni kafolat muddatini hisobga olgan holda hisoblash uchun metodni qayta yozing. "ElectronicProduct" sinfidan nusxa yarating va uning umumiy narxini hisoblang.

#### Qadamlar:

---

### 11. **"BankAccount" sinfi bilan bir nechta operatsiyalar**

**Vazifa**: "BankAccount" sinfini yarating, hisob raqami, hisob egasi nomi va balans xususiyatlariga ega bo'lsin. Hisobga pul qo'shish, yechish va hisoblar orasida pul o'tkazish uchun metodlar qo'shing. "BankAccount" sinfidan bir nechta nusxa yarating va pul qo'shish, yechish va o'tkazish operatsiyalarini bajaring.
