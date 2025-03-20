# Group Project Repo

## Project Overview
This project is an API for user management with CRUD (Create, Read, Update, Delete) functionality. It allows users to be created, retrieved, updated, and deleted through a structured API.

## Members
- Marc Lawrence Magadan  
- Jairus Azer Andrade  
- John Clarence Palma  

## Setup Instructions

### 1. Clone the Repository
```sh or cmd
git clone https://github.com/1mRen/group-project-repo
```

### 2. Install Dependencies
Navigate into the project directory and initialize npm:
```sh or cmd
npm init -y
```

Install required dependencies:
```sh or cmd
npm i express dotenv helmet cors http-status-codes uuid bcryptjs joi typeorm reflect-metadata mysql2
```

Install development dependencies:
```sh or cmd
npm i -D nodemon typescript @types/express @types/dotenv @types/helmet @types/cors @types/uuid @types/bcryptjs
```

### 3. Configure Environment Variables
Copy the example environment file and modify it according to your configuration:

```sh or cmd
cp .env.example .env
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
```sh or cmd
npm run dev
```
