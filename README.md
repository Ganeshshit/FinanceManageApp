# Project name
This project is Finance Management and Prediction Using available or past  Data
# Backend Setup
## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)

## Prerequisites

Ensure you have the following installed on your machine:
- Node.js (version 14.x or later)
- npm (Node package manager, comes with Node.js)

## Installation
1. **Clone the repository:**

    ```bash
    git clone https://github.com/Ganeshshit/FinanceManageApp.git
    cd FinanceManageApp
    ```
  
2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory of the project and add your environment variables. For example:

    ```env
    PORT=3000
    MONGO_URI=mongodb://localhost:27017/your-database
    Or
    MONGO_URI="mongodb+srv://gsb021:45iRTFtLvIU0EuET@cluster0.ryemckw.mongodb.net/"
    PORT=1337
    ```
## Running the Application

1. **Start the development server:**

    ```bash
    npm run dev
    ```

    This will start the server using `nodemon`, which automatically restarts the server when file changes are detected.

   ## Project Structure

```plaintext

Server
   └──
    ├── data
    │     └──data.js
    ├── models
    │        ├── KPI.js
    │        ├── product.js
    │        └── Transaction.js
    ├── routes
    │       ├── daily-data.routes.js
    │       ├── kpi.routes.js
    │       ├── product.routes.js
    │       └── transaction.routes.js
    ├── node_modules
    ├── index.js
    ├── .env
    ├── .gitignore
    ├── package.json
    └── README.md
```
-[body-parser]: Middleware to parse incoming request bodies.
-[cors]: Middleware to enable Cross-Origin Resource Sharing.
-dotenv: Loads environment variables from a .env file.
-express: Fast, unopinionated, minimalist web framework for Node.js.
-helmet: Helps secure Express apps by setting various HTTP headers.
-mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
-mongoose-currency: Mongoose schema type for currency values.
-morgan: HTTP request logger middleware.
-nodemon: Utility that monitors for any changes in your source and automatically restarts your server.

### Frontend Setup
   
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
