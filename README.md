# Group Project Repo

## Table of Contents  
- [Project Overview](#project-overview)  
- [Members](#members)  
- [Setup Instructions](#setup-instructions)  
- [API Documentation](#api-documentation)
- [Testing](#testing)

## Project Overview  
This project is an API for user management with CRUD (Create, Read, Update, Delete) functionality. It allows users to be created, retrieved, updated, and deleted through a structured API.  

## Members  
- Marc Lawrence Magadan  
- Jairus Azer Andrade  
- John Clarence Palma  

## [Setup Instructions](#table-of-contents)

### 1. Clone the Repository  
```cmd
git clone https://github.com/1mRen/group-project-repo
```  

### 2. Install Dependencies  
Navigate into the project directory and initialize npm:  
```cmd
cd group-project-repo
npm init -y
```  

Install required dependencies:  
```cmd
npm i express dotenv helmet cors http-status-codes uuid bcryptjs joi typeorm reflect-metadata mysql2
```  

Install development dependencies:  
```cmd
npm i -D nodemon typescript ts-node @types/express @types/dotenv @types/helmet @types/cors @types/uuid @types/bcryptjs
```  

### 3. Configure Environment Variables  
Copy the example environment file and modify it according to your configuration:  
```cmd
copy .env.example .env
```  

Then, edit the `.env` file with your preferred settings:  
```
PORT=your_port

DB_HOST=your_db_host
DB_PORT=3306 (your_db_port)
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
```  

### 4. Run the Project  
To start the development server, run:  
```cmd
npm run dev
```

## [API Documentation](#table-of-contents)
### User Endpoints

#### 1. Get All Users
**Endpoint:** `GET /users`  
**Description:** Retrieves a list of all users.

#### 2. Get User by ID
**Endpoint:** `GET /users/:id`  
**Description:** Retrieves a single user by their unique ID.

#### 3. Create a New User
**Endpoint:** `POST /users`  
**Description:** Creates a new user with the provided details.
**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword",
  "username": "user123",
  "title": "Mr.",
  "firstName": "John",
  "lastName": "Doe",
  "role": "admin"
}
```

#### 4. Update User
**Endpoint:** `PUT /users/:id`  
**Description:** Updates an existing user's details.
**Request Body:** (Only include fields to update)
```json
{
  "username": "newUsername",
  "password": "newSecurePassword"
}
```

#### 5. Delete User
**Endpoint:** `DELETE /users/:id`  
**Description:** Deletes a user by their ID.

## [Testing](#table-of-contents)

This section provides instructions on how to test the API using **Thunder Client** and **cURL**.

### 1. Testing with Thunder Client  
Thunder Client is a lightweight API testing extension for VS Code.  

#### Steps:  
1. Open **VS Code** and install the **Thunder Client** extension.  
2. Open Thunder Client and create a new request.  
3. Use the following configurations to test different endpoints:  

- **Get All Users** (GET request to `/users`)  
<img src="https://github.com/1mRen/group-project-repo/blob/main/README_assets/GET_allUsers.png" alt="GET_allUsers.png" style="width: auto; height: auto;">

- **Get User by ID** (GET request to `/users/:id`)  
<img src="https://github.com/1mRen/group-project-repo/blob/main/README_assets/GET_userById.png" alt="GET_userById" style="width: auto; height: auto;">

- **Create User** (POST request to `/users` with JSON body)  
<img src="https://github.com/1mRen/group-project-repo/blob/main/README_assets/POST.png" alt="Create User" style="width: auto; height: auto;">

- **Update User** (PUT request to `/users/:id` with updated JSON body)  
<img src="https://github.com/1mRen/group-project-repo/blob/main/README_assets/PUT.png" alt="Update User" style="width: auto; height: auto;">

- **Delete User** (DELETE request to `/users/:id`)  
<img src="https://github.com/1mRen/group-project-repo/blob/main/README_assets/DELETE.png" alt="Delete User" style="width: auto; height: auto;">

4. Click **Send** to execute the request and check the response.

---

### 2. Testing with cURL  
cURL is a command-line tool for making HTTP requests.

#### Examples:

- **Get All Users**  
  ```sh
  curl -X GET http://localhost:your_port/users
  ```

- **Get User by ID**  
  ```sh
  curl -X GET http://localhost:your_port/users/{id}
  ```

- **Create a User**  
  ```sh
  curl -X POST http://localhost:your_port/users \
       -H "Content-Type: application/json" \
       -d '{
         "email": "user@example.com",
         "password": "securepassword",
         "username": "user123",
         "title": "Mr.",
         "firstName": "John",
         "lastName": "Doe",
         "role": "admin"
       }'
  ```

- **Update User**  
  ```sh
  curl -X PUT http://localhost:your_port/users/{id} \
       -H "Content-Type: application/json" \
       -d '{
         "username": "newUsername",
         "password": "newSecurePassword"
       }'
  ```

- **Delete User**  
  ```sh
  curl -X DELETE http://localhost:your_port/users/{id}
  ```

Replace `{id}` with an actual user ID and `your_port` with the running port of your API.
