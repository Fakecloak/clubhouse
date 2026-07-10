# Members Only

A simple authentication-based web application built as part of **The Odin Project - Members Only** assignment. The project focuses on learning user authentication, authorization, sessions, and PostgreSQL integration using Node.js and Express.

# Folder Structure 

```js
members-only/
│
├── app.js                                                      # Main entry point of the application
├── package.json                                                # Dependencies and project scripts
├── passport.js                                                 # authentication strategy configuration
│
├── db/
│   ├── pool.js                                                 # PostgreSQL connection pool configuration
│   └── queries.js                                              # Database SQL queries (CRUD actions)
│
├── routes/
│   ├── indexRouter.js                                          # Main index/home routes
│   ├── authRouter.js                                           # Authentication routes (Sign Up, Log In, Log Out)
│   └── messageRouter.js                                        # Message routes (Create, Delete messages)
│
├── controllers/
│   ├── indexController.js                                      # Handles logic for rendering the home/index views
│   ├── authController.js                                       # Handles Sign Up, Log In, and Log Out actions
│   └── messageController.js                                    # Handles message creating and deletion logic
│
├── middleware/
│   ├── auth.js                                                 # Custom authentication checks (e.g., isAuth, isMember, isAdmin)
│   └── validation.js                                           # Form validation (express-validator setup)
│
├── views/                                                      # User interface template files (.ejs)
│
└── public/                                                     # Static assets (CSS styles, images, client-side JS)
```

## Features

- User registration and login
- Password hashing with bcrypt
- Authentication using Passport.js
- Session management with connect-pg-simple
- PostgreSQL database
- Protected routes based on user authentication

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Passport.js
- express-session
- connect-pg-simple
- bcrypt
- EJS

## Purpose

This project was built **for learning purposes** while following **The Odin Project** curriculum. It is intended to practice backend authentication concepts and is not a production-ready application.

## Run Locally

```bash
npm install
npm start
```
