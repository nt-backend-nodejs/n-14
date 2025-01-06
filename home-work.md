### Simplified Request and Response Examples

#### Authentication
- **Register**
  - **Request:** `POST /register`
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "yourpassword"
    }
    ```
  - **Response:**
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```

- **Login**
  - **Request:** `POST /login`
    ```json
    {
      "email": "john@example.com",
      "password": "yourpassword"
    }
    ```
  - **Response:**
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```

#### User (Foydalanuvchi)
- **Get All Users**
  - **Request:** `GET /users`
  - **Response:**
    ```json
    [
      {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com"
      }
    ]
    ```

- **Get User by ID**
  - **Request:** `GET /users/:userId`
  - **Response:**
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```

- **Update User**
  - **Request:** `PUT /users/:userId`
    ```json
    {
      "name": "Jane Doe",
      "email": "jane@example.com"
    }
    ```
  - **Response:**
    ```json
    {
      "id": 1,
      "name": "Jane Doe",
      "email": "jane@example.com"
    }
    ```

- **Delete User**
  - **Request:** `DELETE /users/:userId`
  - **Response:**
    ```json
    {
      "message": "User deleted"
    }
    ```

#### Board (Doskalar)
- **Get All Boards**
  - **Request:** `GET /boards`
  - **Response:**
    ```json
    [
      {
        "id": 1,
        "title": "Project Board",
        "columns": []
      }
    ]
    ```

- **Get Board by ID**
  - **Request:** `GET /boards/:boardId`
  - **Response:**
    ```json
    {
      "id": 1,
      "title": "Project Board",
      "columns": []
    }
    ```

- **Create Board**
  - **Request:** `POST /boards`
    ```json
    {
      "title": "New Board"
    }
    ```
  - **Response:**
    ```json
    {
      "id": 1,
      "title": "New Board",
      "columns": []
    }
    ```

- **Update Board**
  - **Request:** `PUT /boards/:boardId`
    ```json
    {
      "title": "Updated Board"
    }
    ```
  - **Response:**
    ```json
    {
      "id": 1,
      "title": "Updated Board",
      "columns": []
    }
    ```

- **Delete Board**
  - **Request:** `DELETE /boards/:boardId`
  - **Response:**
    ```json
    {
      "message": "Board deleted"
    }
    ```

#### Task (Vazifalar)
- **Get All Tasks**
  - **Request:** `GET /boards/:boardId/tasks`
  - **Response:**
    ```json
    [
      {
        "id": 1,
        "title": "Task 1",
        "order": 1,
        "description": "Task description",
        "userId": 1,
        "boardId": 1,
        "columnId": 1
      }
    ]
    ```

- **Get Task by ID**
  - **Request:** `GET /boards/:boardId/tasks/:taskId`
  - **Response:**
    ```json
    {
      "id": 1,
      "title": "Task 1",
      "order": 1,
      "description": "Task description",
      "userId": 1,
      "boardId": 1,
      "columnId": 1
    }
    ```

- **Create Task**
  - **Request:** `POST /boards/:boardId/tasks`
    ```json
    {
      "title": "New Task",
      "order": 1,
      "description": "Task description",
      "userId": 1,
      "columnId": 1
    }
    ```
  - **Response:**
    ```json
    {
      "id": 1,
      "title": "New Task",
      "order": 1,
      "description": "Task description",
      "userId": 1,
      "boardId": 1,
      "columnId": 1
    }
    ```

- **Update Task**
  - **Request:** `PUT /boards/:boardId/tasks/:taskId`
    ```json
    {
      "title": "Updated Task",
      "order": 1,
      "description": "Updated description",
      "userId": 1,
      "columnId": 1
    }
    ```
  - **Response:**
    ```json
    {
      "id": 1,
      "title": "Updated Task",
      "order": 1,
      "description": "Updated description",
      "userId": 1,
      "boardId": 1,
      "columnId": 1
    }
    ```

- **Delete Task**
  - **Request:** `DELETE /boards/:boardId/tasks/:taskId`
  - **Response:**
    ```json
    {
      "message": "Task deleted"
    }
    ```

### Qo'shimcha Talablar
- **Board** o'chirilganda, uning barcha **Task**lari ham o'chirilishi kerak.
- **User** o'chirilganda, uning barcha **Task**lari uchun `userId` `null`ga o'zgartirilishi kerak.
- Endpointlar faqat ma'lumotlar bazasi bilan ishlashi kerak.
- `application/json` formati so'rov va javoblar uchun ishlatilishi kerak.
- Kodni alohida fayllarga ajrating (ilova yaratish, routerlar, database va biznes mantiqi).
- Projectni ishga tushirish uchun `npm start` buyrug'ini ishlating.
- Xizmat 4000-portda tinglash kerak.

### Ma'lumotlar Bazasi
- Ma'lumotlar bazasi sifatida PostgreSQLdan foydalaning.
- `pg` modulini o'rnating.
- User passwordini `bcrypt` bilan hashlab joylash kerak.
- Bazaga ulaning va CRUD operatsiyalarni amalga oshiring.

### Vaqt:
- Imtihon muddati: 4 soat

### BONUS:
- Yukoridagi tasklarni tugatgandan so'ng, qo'shimcha function qo'shing va `README.md` da qisqacha tavsif qoldiring.

You can find the updated file [here](https://github.com/nt-backend-nodejs/N14/blob/0bb65f413c3dbaba7b75a38f8f1d6acdf1fe3d1f/home-work.md).