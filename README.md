# Group Project Repo

## Project Overview
This project is an API for user management with CRUD (Create, Read, Update, Delete) functionality. It allows users to be created, retrieved, updated, and deleted through a structured API.

## Members
- Marc Lawrence Magadan  
- Jairus Azer Andrade  
- John Clarence Palma  

## Table of Contents
- [Project Overview](#project-overview)
- [Members](#members)
- [Setup Instructions](#setup-instructions)
  - - [Clone the Repository](#1-clone-the-repository)
  -  - [Install Dependencies](#2-install-dependencies)
  - - [Configure Environment Variables](#3-configure-environment-variables)
  - - [Run the Project](#4-run-the-project)

## Setup Instructions

### 1. Clone the Repository
[Back to Top](#table-of-contents)

#### For Linux/macOS (sh)
```sh
git clone https://github.com/1mRen/group-project-repo
```

#### For Windows (cmd)
```cmd
git clone https://github.com/1mRen/group-project-repo
```

### 2. Install Dependencies
[Back to Top](#table-of-contents)

Navigate into the project directory and initialize npm:

#### For Linux/macOS (sh)
```sh
cd group-project-repo
npm init -y
```

#### For Windows (cmd)
```cmd
cd group-project-repo
npm init -y
```

Install required dependencies:

#### For Linux/macOS (sh)
```sh
npm i express dotenv helmet cors http-status-codes uuid bcryptjs joi typeorm reflect-metadata mysql2
```

#### For Windows (cmd)
```cmd
npm i express dotenv helmet cors http-status-codes uuid bcryptjs joi typeorm reflect-metadata mysql2
```

Install development dependencies:

#### For Linux/macOS (sh)
```sh
npm i -D nodemon typescript @types/express @types/dotenv @types/helmet @types/cors @types/uuid @types/bcryptjs
```

#### For Windows (cmd)
```cmd
npm i -D nodemon typescript @types/express @types/dotenv @types/helmet @types/cors @types/uuid @types/bcryptjs
```

### 3. Configure Environment Variables
[Back to Top](#table-of-contents)

Copy the example environment file and modify it according to your configuration:

#### For Linux/macOS (sh)
```sh
cp .env.example .env
```

#### For Windows (cmd)
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
[Back to Top](#table-of-contents)

#### For Development Mode
##### Linux/macOS (sh)
```sh
npm run dev
```
##### Windows (cmd)
```cmd
npm run dev
```

#### For Production Mode
##### Linux/macOS (sh)
```sh
npm start
```
##### Windows (cmd)
```cmd
npm start
```
