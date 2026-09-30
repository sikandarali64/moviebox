# MovieBox – Movie Search App

A full-stack React movie discovery application built with TypeScript, Firebase, and the OMDb API. This portfolio project demonstrates frontend development skills including API integration, authentication, real-time database operations, and component-based architecture.

## ✨ Features

- **Movie Search**: Search for movies in real-time using the OMDb API
- **Random Discovery**: Load 20 random movies on app launch for discovery
- **User Authentication**: Sign up and login with Firebase Authentication
- **Save Favourites**: Add/remove movies from your personal favourites list (stored in Firestore)
- **Protected Routes**: Access to favourites requires authentication
- **Type-Safe**: Built entirely with TypeScript
- **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Routing**: React Router DOM
- **Authentication**: Firebase Authentication
- **Database**: Firebase Cloud Firestore
- **External API**: OMDb Movie Database API
- **Styling**: Custom CSS with responsive design
- **Build Tool**: Vite
- **Code Quality**: TypeScript, ESLint (oxlint)

## 📁 Project Structure

```
moviebox/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Header/          # Navigation header with search
│   │   └── MovieCard/       # Movie display card
│   ├── pages/               # Page components (MVVM pattern)
│   │   ├── Home/            # Movie discovery & search
│   │   ├── Auth/            # Login & registration
│   │   └── Favourites/      # Saved movies
│   ├── services/            # API & Firebase service layer
│   │   ├── omdbMovieService.ts
│   │   ├── firebaseService.ts
│   │   └── authService.ts
│   ├── context/             # React Context (Auth state)
│   ├── types/               # TypeScript interfaces
│   ├── App.tsx              # Main app component with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── .env.example             # Environment variables template
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- An OMDb API key (get one free at: https://www.omdbapi.com/apikey.aspx)
- A Firebase project (create at: https://console.firebase.google.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sikandarali64/moviebox.git
   cd moviebox
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` and add your keys:
   - `VITE_OMDB_API_KEY`: Your OMDb API key
   - `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, etc.: Your Firebase web app config

4. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173)

## 📦 Scripts

```bash
npm run dev       # Start dev server (Vite)
npm run build     # Build for production
npm run lint      # Run linter (oxlint)
npm run preview   # Preview production build locally
```

## 🔧 Development Notes

### Architecture
- **MVVM Pattern**: Each page has Model (business logic), ViewModel (state), and View (UI)
- **Service Layer**: API calls and Firebase operations are abstracted in services
- **Context API**: Authentication state is managed globally via React Context
- **TypeScript**: All code is fully typed for type safety and IDE support

### Key Components
- `Header`: Navigation and search input (state lifted to App level)
- `MovieCard`: Reusable card displaying movie details and favourite button
- `HomeView`: Movie discovery with random load and search
- `AuthView`: Login/registration form with toggle between modes
- `FavouritesView`: Protected page showing user's saved movies

### API Integration
The app connects to two external services:
1. **OMDb API**: For movie search data (`omdbMovieService.ts`)
2. **Firebase**: For auth and favorites storage (`firebaseService.ts`, `authService.ts`)

## 🔐 Authentication Flow
1. User registers/logs in via `AuthView`
2. Firebase Authentication creates a user session
3. `AuthContext` subscribes to auth state changes
4. Protected routes check if user exists via `RequireAuth` wrapper
5. Favourites are stored under `/users/{userId}/favourites/` in Firestore

## 📱 Responsive Design
- Mobile-first approach with media queries
- Flexible grid layout for movie cards
- Touch-friendly buttons and inputs
- Header adapts on smaller screens

## 🚢 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Deploy to GitHub Pages
1. Add `homepage` to package.json: `"homepage": "https://sikandarali64.github.io/moviebox"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add deploy scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`

**Note**: GitHub Pages hosts static sites only. For Firebase and API to work, you'll need a backend proxy or serverless functions.

## 📝 Environment Variables

Create `.env.local` in the root directory:

```env
# OMDb API
VITE_OMDB_API_KEY=your-omdb-api-key

# Firebase Web App Config
VITE_FIREBASE_API_KEY=your-firebase-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

Do NOT commit `.env.local` to version control.

## 🎓 Learning Outcomes

This project demonstrates proficiency in:
- ✅ React hooks (useState, useEffect, useContext)
- ✅ API integration and data fetching
- ✅ Firebase integration (Auth + Firestore)
- ✅ Client-side routing with React Router
- ✅ TypeScript for type-safe development
- ✅ Component composition and reusability
- ✅ Error handling and user feedback
- ✅ State management patterns (MVVM)
- ✅ Responsive and accessible UI
- ✅ Environment variables and secrets management

## 📄 License

MIT License - feel free to use this project for learning and portfolio purposes.

## 🤝 Credits

- Built during FlyRank internship (Week 3-4)
- Movie data via [OMDb API](https://www.omdbapi.com/)
- Backend services via [Firebase](https://firebase.google.com/)
- Built with [React](https://react.dev/) and [Vite](https://vitejs.dev/)

---

**Portfolio Ready**: This app is a complete, production-quality example of frontend development skills. Deploy it, share the link, and use it in interviews to demonstrate your capabilities!
