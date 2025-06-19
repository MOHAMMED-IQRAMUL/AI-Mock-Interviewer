# API Routes Plan

## (Express.js Backend)

### **Auth Routes (`/api/auth`)**

| Method | Endpoint      | Description |
|--------|--------------|-------------|
| POST   | `/register`  | Register new user |
| POST   | `/login`     | Authenticate user & return JWT |
| GET    | `/me`        | Get logged-in user details |

### **User Routes (`/api/user`)**
    
| Method | Endpoint      | Description |
|--------|--------------|-------------|
| GET    | `/profile`   | Get user profile |
| PUT    | `/profile`   | Update user profile |

### **Interview Routes (`/api/interview`)**

| Method | Endpoint      | Description |
|--------|--------------|-------------|
| POST   | `/start`     | Start a new AI mock interview |
| GET    | `/questions` | Fetch coding/behavioral questions |
| POST   | `/submit`    | Submit interview response & get AI feedback |
| GET    | `/history`   | Fetch past interview records |

### **AI Routes (`/api/ai`)**

| Method | Endpoint      | Description |
|--------|--------------|-------------|
| POST   | `/ask`       | AI-generated follow-up questions |
| POST   | `/evaluate`  | AI evaluates code & explanations |
| POST   | `/feedback`  | AI provides insights on performance |

### **Code Execution Routes (`/api/code`)**

| Method | Endpoint      | Description |
|--------|--------------|-------------|
| POST   | `/run`       | Execute submitted code securely in a sandbox |
| POST   | `/debug`     | AI-assisted debugging |
