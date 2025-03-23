# Folder Structure (Frontend - Next.js & React)

``` md
/frontend
│── /src
│   ├── /components      # Reusable UI components
│   │   ├── InterviewChat.js
│   │   ├── CodeEditor.js
│   │   ├── AIResponse.js
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │
│   ├── /pages           # Next.js Pages
│   │   ├── index.js      # Homepage
│   │   ├── login.js      # Login page
│   │   ├── register.js   # Signup page
│   │   ├── interview.js  # AI mock interview interface
│   │   ├── dashboard.js  # User progress & past interviews
│   │
│   ├── /hooks           # Custom React hooks (state management, API calls)
│   │   ├── useAuth.js
│   │   ├── useInterview.js
│   │
│   ├── /context         # Global context (Auth, Theme, etc.)
│   │   ├── AuthContext.js
│   │   ├── InterviewContext.js
│   │
│   ├── /lib             # API calls & utilities
│   │   ├── api.js        # Axios-based API calls
│   │   ├── socket.js     # WebSockets for real-time chat
│   │
│   ├── /styles          # Tailwind CSS styles
│   │   ├── global.css
│   │
│   ├── /public          # Static assets (logos, images)
│
├── .env.local           # Frontend environment variables
├── next.config.js       # Next.js config
├── package.json         # Dependencies & scripts
```