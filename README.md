# Group Project Repo

## Table of Contents  
- [Project Overview](#project-overview)  
- [Members](#members)  
- [Setup Instructions](#setup-instructions)  
  - [Clone the Repository](#1-clone-the-repository)  
  - [Install Dependencies](#2-install-dependencies)  
  - [Configure Environment Variables](#3-configure-environment-variables)  
  - [Run the Project](#4-run-the-project)  
- [API Documentation](#api-documentation)

## Project Overview  
This project is an API for user management with CRUD (Create, Read, Update, Delete) functionality. It allows users to be created, retrieved, updated, and deleted through a structured API.  

## Members  
- Marc Lawrence Magadan  
- Jairus Azer Andrade  
- John Clarence Palma  

## Setup Instructions  

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
npm i -D nodemon typescript @types/express @types/dotenv @types/helmet @types/cors @types/uuid @types/bcryptjs
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

## API Documentation
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

Each request and response follows standard HTTP status codes to indicate success or errors.

