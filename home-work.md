### Adapted Request and Response Examples for Blog Backend using JSON


#### Authentication

- **Register**

  - **Request:** `POST /register`

    ```json
    {
      "username": "JohnDoe",
      "email": "john@example.com",
      "password": "yourpassword"
    }
    ```

  - **Response:**

    ```json
    {
      "id": 1,
      "username": "JohnDoe",
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
      "username": "JohnDoe",
      "email": "john@example.com"
    }
    ```

#### User

- **Get All Users**

  - **Request:** `GET /users`
  - **Response:**

    ```json
    [
      {
        "id": 1,
        "username": "JohnDoe",
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
      "username": "JohnDoe",
      "email": "john@example.com"
    }
    ```

- **Update User**

  - **Request:** `PUT /users/:userId`

    ```json
    {
      "username": "JaneDoe",
      "email": "jane@example.com"
    }
    ```

  - **Response:**

    ```json
    {
      "id": 1,
      "username": "JaneDoe",
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

#### Blog Post

- **Get All Posts**

  - **Request:** `GET /posts`
  - **Response:**

    ```json
    [
      {
        "id": 1,
        "title": "First Blog Post",
        "content": "Lorem ipsum dolor sit amet...",
        "authorId": 1
      }
    ]
    ```

- **Get Post by ID**

  - **Request:** `GET /posts/:postId`
  - **Response:**

    ```json
    {
      "id": 1,
      "title": "First Blog Post",
      "content": "Lorem ipsum dolor sit amet...",
      "authorId": 1
    }
    ```

- **Create Post**

  - **Request:** `POST /posts`

    ```json
    {
      "title": "First Blog Post",
      "content": "Lorem ipsum dolor sit amet...",
      "authorId": 1
    }
    ```

  - **Response:**

    ```json
    {
      "id": 1,
      "title": "First Blog Post",
      "content": "Lorem ipsum dolor sit amet...",
      "authorId": 1
    }
    ```

- **Update Post**

  - **Request:** `PUT /posts/:postId`

    ```json
    {
      "title": "Updated Blog Post",
      "content": "Updated content...",
      "authorId": 1
    }
    ```

  - **Response:**

    ```json
    {
      "id": 1,
      "title": "Updated Blog Post",
      "content": "Updated content...",
      "authorId": 1
    }
    ```

- **Delete Post**
  - **Request:** `DELETE /posts/:postId`
  - **Response:**

    ```json
    {
      "message": "Post deleted"
    }
    ```

#### Comment

- **Get All Comments**

  - **Request:** `GET /comments`
  - **Response:**

    ```json
    [
      {
        "id": 1,
        "postId": 1,
        "content": "Great post!",
        "authorId": 2
      }
    ]
    ```

- **Get Comment by ID**

  - **Request:** `GET /comments/:commentId`
  - **Response:**

    ```json
    {
      "id": 1,
      "postId": 1,
      "content": "Great post!",
      "authorId": 2
    }
    ```

- **Create Comment**

  - **Request:** `POST /comments`

    ```json
    {
      "postId": 1,
      "content": "Great post!",
      "authorId": 2
    }
    ```

  - **Response:**

    ```json
    {
      "id": 1,
      "postId": 1,
      "content": "Great post!",
      "authorId": 2
    }
    ```

- **Update Comment**

  - **Request:** `PUT /comments/:commentId`

    ```json
    {
      "content": "Updated comment"
    }
    ```

  - **Response:**

    ```json
    {
      "id": 1,
      "postId": 1,
      "content": "Updated comment",
      "authorId": 2
    }
    ```

- **Delete Comment**
  - **Request:** `DELETE /comments/:commentId`
  - **Response:**

    ```json
    {
      "message": "Comment deleted"
    }
    ```

### Additional Requirements

- When a **Post** is deleted, all its **Comments** should also be removed.
- When a **User** is deleted, all their **Posts** and **Comments** should also be removed.
- Endpoints should only interact with the database.
- `application/json` format should be used for requests and responses.
- Separate the code into different files (application creation, routers, database, and business logic).
- Use the `npm start` command to start the project.
- The service should listen on port 4000.
