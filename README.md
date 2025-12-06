# Good Hamburger 🍔

A modern web application for managing and displaying a hamburger menu. This project implements an interactive ordering system with shopping cart and product administration features.

## 📋 Table of Contents

- [Technologies Used](#-technologies-used)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Available Commands](#-available-commands)
- [Project Structure](#-project-structure)
- [Features](#-features)
- [Known Limitations](#-known-limitations)

## 🛠️ Technologies Used

### Frontend

- **React 19.2.0**: Main library for building user interfaces
- **TypeScript 5.9.3**: JavaScript superset that adds static typing
- **React Router DOM 7.10.1**: Client-side routing for navigation between pages
- **Vite 7.2.4**: Fast and modern build tool for development

### Development Tools

- **SWC**: Ultra-fast JavaScript compiler integrated with Vite via `@vitejs/plugin-react-swc`
- **ESLint 9.39.1**: Code analysis tool to maintain quality standards
- **TypeScript Compiler**: TypeScript to JavaScript compilation
- **Node.js**: JavaScript runtime required to run the project

## 📦 Prerequisites

- **Node.js**: Version 16 or higher (recommended: 18+)
- **npm**: Version 8 or higher (included with Node.js)

Verify your installation by running:

```bash
node --version
npm --version
```

## 🚀 Installation

1. Clone or download the repository
2. Navigate to the project folder:

   ```bash
   cd good_Hamburger
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## 🎯 Available Commands

### Development

Start the development server with hot reload:

```bash
npm run dev
```

The project will be available at `http://localhost:5173` (Vite's default port)

### Build (Production)

Compile the project for production:

```bash
npm run build
```

This command:
- Compiles TypeScript to JavaScript (`tsc -b`)
- Optimizes and bundles the application with Vite
- Generates the `dist/` folder ready for deployment


## 📁 Project Structure

```
good_Hamburger/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Card.tsx        # Component to display products
│   │   ├── CardDetail.tsx  # Expanded product detail view
│   │   ├── Cart.tsx        # Shopping cart
│   │   ├── FilterButton.tsx # Filter buttons
│   │   ├── Menu.tsx        # Main product menu
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── OrderContext.tsx # Context API for global order management
│   ├── pages/              # Main pages
│   │   ├── Home.tsx        # Home page
│   │   └── Admin.tsx       # Administration panel
│   ├── api/
│   │   └── menu.json       # Menu data in JSON format
│   ├── assets/             # Static resources (images, icons)
│   ├── App.tsx             # Root component of the application
│   ├── App.css             # Global styles
│   ├── index.css           # Base styles
│   └── main.tsx            # Application entry point
├── public/                 # Static files served directly
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # Base TypeScript configuration
├── tsconfig.app.json       # TypeScript configuration for the app
├── tsconfig.node.json      # TypeScript configuration for Node scripts
├── eslint.config.js        # ESLint configuration
└── package.json            # Project metadata and dependencies
```

## ✨ Features

- 🍔 Interactive hamburger catalog
- 🛒 Functional shopping cart
- 🔍 Product filtering
- 📱 Responsive design
- 🎨 Modern and clean interface
- 📊 Administration panel
- ⚡ Fast loading thanks to Vite

## ⚠️ Known Limitations

1. **No Database**: The project currently uses local JSON data (`menu.json`). For a production application, integrating a database like MongoDB, PostgreSQL, or Firebase is recommended.

2. **No Backend API**: The application is entirely client-side. For features such as:
   - Order persistence
   - Payment processing
   - User authentication
   - Order history
   
   A backend will need to be developed (e.g., Node.js/Express, Python/Flask, etc.)

3. **No Payment System**: There is no integration with payment gateways (Stripe, PayPal, etc.)

4. **No Authentication**: The system does not have user authentication or differentiated roles.

5. **Limited Local Storage**: Cart data is lost on page reload if localStorage or a persistent solution is not implemented.

6. **No Testing**: No automated tests are configured (Jest, Vitest, etc.). It is recommended to add unit and integration tests.

7. **API Documentation**: Communication with the menu is only through static JSON files without formal documentation.

## 🔄 Recommended Future Improvements

- [ ] Implement unit and integration tests
- [ ] Integrate a database
- [ ] Develop a backend API
- [ ] Add user authentication
- [ ] Implement payment gateway
- [ ] Improve state management with Redux or Zustand
- [ ] Add PWA capabilities for offline usage
- [ ] Document components with Storybook

## 💡 Development Notes

- The project uses **React 19**, make sure you are familiar with Hooks and React's new syntax.
- TypeScript is configured to ensure type safety throughout the code.
- ESLint is configured to maintain code quality standards.
- Vite provides automatic hot reloads during development.

## 📝 License

This project is under MIT license. Feel free to use it as a base for your own projects.

---

Need additional help? Check the official documentation:
- [React Docs](https://react.dev)
- [Vite Guide](https://vite.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [React Router Docs](https://reactrouter.com)
