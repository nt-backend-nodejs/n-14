
### **Map  Misollari (JavaScript bilan)**

1. **Do'kon Mahsulotlari**
   - **Ma'lumotlar**: Mahsulot nomi → Narxi
   - **Misol**:
     ```javascript
     const products = new Map([
       ["Olma", 1200],
       ["Banan", 800],
       ["Uzum", 1500]
     ]);
     ```
   - **Hisob-kitob**: 5 ta olma xarid qilish → 1200 * 5 = 6000 so'm

2. **Talaba Baholari**
   - **Ma'lumotlar**: Talaba ismi → Bahosi
   - **Misol**:
     ```javascript
     const grades = new Map([
       ["Ali", 85],
       ["Vali", 90],
       ["Samiya", 78]
     ]);
     ```
   - **Hisob-kitob**: O'rtacha bahoni hisoblash

3. **Shahar Aholisi**
   - **Ma'lumotlar**: Shahar nomi → Aholi soni
   - **Misol**:
     ```javascript
     const population = new Map([
       ["Toshkent", 2700000],
       ["Samarqand", 520000],
       ["Buxoro", 300000]
     ]);
     ```
   - **Hisob-kitob**: Toshkent va Samarqand aholi yig'indisi

4. **Kitoblar Va Mualliflar**
   - **Ma'lumotlar**: Kitob nomi → Muallif
   - **Misol**:
     ```javascript
     const books = new Map([
       ["Harry Potter", "J.K. Rowling"],
       ["1984", "George Orwell"],
       ["Don Quixote", "Miguel de Cervantes"]
     ]);
     ```
   - **Hisob-kitob**: Mualliflar soni

5. **Avtomobil Modellari Va Narxlari**
   - **Ma'lumotlar**: Model → Narx
   - **Misol**:
     ```javascript
     const cars = new Map([
       ["Toyota Camry", 25000],
       ["Honda Civic", 22000],
       ["Ford Mustang", 30000]
     ]);
     ```
   - **Hisob-kitob**: 2 ta Ford Mustang sotib olish

6. **Kundalik Haroratlar**
   - **Ma'lumotlar**: Sana → Harorat
   - **Misol**:
     ```javascript
     const temperatures = new Map([
       ["2024-04-01", 20],
       ["2024-04-02", 22],
       ["2024-04-03", 19]
     ]);
     ```
   - **Hisob-kitob**: O'rtacha harorat

7. **Elektron Qurilmalar Va Ularning Xususiyatlari**
   - **Ma'lumotlar**: Qurilma nomi → Xususiyat
   - **Misol**:
     ```javascript
     const devices = new Map([
       ["Telefon", "iPhone 14"],
       ["Noutbuk", "MacBook Pro"],
       ["Planshet", "iPad Pro"]
     ]);
     ```
   - **Hisob-kitob**: Qurilmalar soni

8. **Restoran Taomlari Va Kaloriya**
   - **Ma'lumotlar**: Taom nomi → Kaloriya
   - **Misol**:
     ```javascript
     const menu = new Map([
       ["Pizza", 800],
       ["Salat", 300],
       ["Burger", 700]
     ]);
     ```
   - **Hisob-kitob**: Burger va Salat kaloriyalar yig'indisi

9. **Maktab Sinflari Va O'quvchilari**
   - **Ma'lumotlar**: Sinf → O'quvchilar soni
   - **Misol**:
     ```javascript
     const classes = new Map([
       ["5-A", 30],
       ["5-B", 28],
       ["5-C", 32]
     ]);
     ```
   - **Hisob-kitob**: Barcha sinflardagi o'quvchilar soni

10. **Sayohat Destinatsiyalari Va Narxlari**
    - **Ma'lumotlar**: Destinatsiya → Narx
    - **Misol**:
      ```javascript
      const destinations = new Map([
        ["Parij", 1500],
        ["Tokio", 2000],
        ["Nyu-York", 1800]
      ]);
      ```
    - **Hisob-kitob**: Parij va Nyu-York sayohat narxlari yig'indisi

### **Set (To'plam) Misollari (JavaScript bilan)**

1. **Do'kondagi Unikal Ranglar**
   - **Ma'lumotlar**: Ranglar to'plami
   - **Misol**:
     ```javascript
     const colors = new Set(["qizil", "yashil", "ko'k", "qizil"]);
     // Natija: Set(3) {"qizil", "yashil", "ko'k"}
     ```
   - **Hisob-kitob**: Unikal ranglar soni

2. **Kitobxonlikda O'qilgan Kitoblar**
   - **Ma'lumotlar**: O'qilgan kitoblar nomi
   - **Misol**:
     ```javascript
     const readBooks = new Set(["Harry Potter", "1984", "Don Quixote", "1984"]);
     // Natija: Set(3) {"Harry Potter", "1984", "Don Quixote"}
     ```
   - **Hisob-kitob**: O'qilgan unikal kitoblar soni

3. **Sinovdan O'tgan Talabalar**
   - **Ma'lumotlar**: Talabalar ismlari
   - **Misol**:
     ```javascript
     const passedStudents = new Set(["Ali", "Vali", "Samiya", "Ali"]);
     // Natija: Set(3) {"Ali", "Vali", "Samiya"}
     ```
   - **Hisob-kitob**: Sinovdan o'tgan unikal talabalar soni

4. **Uy Jihozlari Ranglari**
   - **Ma'lumotlar**: Jihoz ranglari
   - **Misol**:
     ```javascript
     const applianceColors = new Set(["oq", "qora", "oq", "kulrang"]);
     // Natija: Set(3) {"oq", "qora", "kulrang"}
     ```
   - **Hisob-kitob**: Unikal ranglar soni

5. **Boshqa Transport Vositalari**
   - **Ma'lumotlar**: Transport turlari
   - **Misol**:
     ```javascript
     const transports = new Set(["mashina", "velosiped", "mashina", "mototsikl"]);
     // Natija: Set(3) {"mashina", "velosiped", "mototsikl"}
     ```
   - **Hisob-kitob**: Unikal transport turlari soni

6. **Telefon Kontaktlari**
   - **Ma'lumotlar**: Kontakt ismlari
   - **Misol**:
     ```javascript
     const contacts = new Set(["Ali", "Vali", "Samiya", "Ali"]);
     // Natija: Set(3) {"Ali", "Vali", "Samiya"}
     ```
   - **Hisob-kitob**: Unikal kontaktlar soni

7. **Online Kurslar**
   - **Ma'lumotlar**: Kurs nomlari
   - **Misol**:
     ```javascript
     const courses = new Set(["Python", "JavaScript", "Python", "Data Science"]);
     // Natija: Set(3) {"Python", "JavaScript", "Data Science"}
     ```
   - **Hisob-kitob**: Unikal kurslar soni

8. **Kunlik Qilingan Vazifalar**
   - **Ma'lumotlar**: Vazifa nomlari
   - **Misol**:
     ```javascript
     const tasks = new Set(["non pishirish", "kitob o'qish", "sport", "kitob o'qish"]);
     // Natija: Set(3) {"non pishirish", "kitob o'qish", "sport"}
     ```
   - **Hisob-kitob**: Unikal vazifalar soni

9. **Film Janrlari**
   - **Ma'lumotlar**: Janrlar
   - **Misol**:
     ```javascript
     const genres = new Set(["aksiya", "komediya", "drama", "aksiya"]);
     // Natija: Set(3) {"aksiya", "komediya", "drama"}
     ```
   - **Hisob-kitob**: Unikal janrlar soni

10. **Sport Turlari**
    - **Ma'lumotlar**: Sport turlari
    - **Misol**:
      ```javascript
      const sports = new Set(["futbol", "basketbol", "voleybol", "futbol"]);
      // Natija: Set(3) {"futbol", "basketbol", "voleybol"}
      ```
    - **Hisob-kitob**: Unikal sport turlari soni

### **Qo'shimcha Hisob-kitob Misollari**

- **Map Misoli: Talabaning Baholarini Yangilash**
  ```javascript
  const grades = new Map([
    ["Ali", 85],
    ["Vali", 90],
    ["Samiya", 78]
  ]);

  grades.set("Samiya", 82); // Samiya bahosi yangilanadi

  // Yangi o'rtacha baho hisoblash
  ```

- **Set Misoli: Do'kondagi Unikal Mijozlar**
  ```javascript
  const customers = new Set(["Ali", "Vali", "Samiya", "Ali", "Diana"]);
  // Natija: Set(4) {"Ali", "Vali", "Samiya", "Diana"}
  ```

### **Map va Set Birgalikda**

- **Mahsulotlar va Ularning Ranglari**
  ```javascript
  const products = new Map([
    ["Olma", new Set(["qizil", "yashil"])],
    ["Banan", new Set(["sariq"])],
    ["Uzum", new Set(["ko'k", "yashil"])]
  ]);

  // Barcha unikal ranglarni olish
  // Natija: Set(4) {"qizil", "yashil", "sariq", "ko'k"}
  ```

- **Talabalar Va Ularning Fanlari**
  ```javascript
  const studentCourses = new Map([
    ["Ali", new Set(["Matematika", "Fizika"])],
    ["Vali", new Set(["Biologiya", "Matematika"])],
    ["Samiya", new Set(["Fizika", "Kimyo"])]
  ]);

  // Barcha unikal fanlarni olish
  // Natija: Set(4) {"Matematika", "Fizika", "Biologiya", "Kimyo"}
  ```