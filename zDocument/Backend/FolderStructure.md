# Folder Structure (Backend - Node.js & Express.js)

```md
/backend
│── /src
│   ├── /config         # Configuration files (DB, env, etc.)
│   │   ├── db.js       # Database connection (PostgreSQL with Prisma)
│   │   ├── dotenv.js   # Environment variable config
│   │   ├── logger.js   # Logging configuration (Winston/Pino)
│   │
│   ├── /controllers    # Handles API request logic
│   │   ├── authController.js
│   │   ├── interviewController.js
│   │   ├── userController.js
│   │   ├── aiController.js
│   │
│   ├── /routes         # API route definitions
│   │   ├── authRoutes.js
│   │   ├── interviewRoutes.js
│   │   ├── userRoutes.js
│   │   ├── aiRoutes.js
│   │
│   ├── /models         # Database models (Prisma/PostgreSQL)
│   │   ├── User.js
│   │   ├── Interview.js
│   │   ├── Question.js
│   │
│   ├── /middleware     # Middleware (authentication, error handling)
│   │   ├── authMiddleware.js
│   │   ├── errorHandler.js
│   │
│   ├── /services       # Business logic (AI, scoring, etc.)
│   │   ├── aiService.js
│   │   ├── codeExecutionService.js
│   │   ├── evaluationService.js
│   │
│   ├── /utils          # Helper functions
│   │   ├── generateToken.js
│   │   ├── responseFormatter.js
│   │
│   ├── /sandbox        # Secure code execution (Docker, Judge0 API)
│   │   ├── executePython.js
│   │   ├── executeJavaScript.js
│   │
│   ├── app.js          # Express app initialization
│   ├── server.js       # Main entry point (starts server)
│
├── /tests              # Unit tests for API routes
│   ├── auth.test.js
│   ├── interview.test.js
│   ├── user.test.js
│
├── .env                # Environment variables (DB credentials, API keys)
├── package.json        # Dependencies & scripts
```