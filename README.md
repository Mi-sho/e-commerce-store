# Antique E-Commerce Store

A modern e-commerce platform for antique and vintage items, featuring a responsive design, user authentication, product browsing, shopping cart functionality, and a blog section.

## Project Structure

The project is divided into two main parts:

### Client
- Built with React 19
- Uses Vite as the build tool
- Responsive UI with CSS modules
- React Router for navigation
- Context API for state management

### Server
- practice server for development
- RESTful API endpoints for authentication and data operations
- Handles products, blog articles, user data, and orders

## Features

- **User Authentication**: Register, login, and logout functionality
- **Product Catalog**: Browse, filter, and sort products
- **Shopping Cart**: Add, remove, and checkout items
- **Order History**: View past orders
- **Blog Section**: Read articles and posts about antiques
- **Admin Panel**: Create and manage products and blog content
- **Responsive Design**: Works on mobile, tablet, and desktop


### Installation

1. Clone the repository
   ```
   git clone https://github.com/Mi-sho/e-commerce-store.git
   cd e-commerce-store
   ```

2. Install dependencies for client
   ```
   cd client
   npm install
   ```

3. Start the development server for client
   ```
   npm run dev
   ```

4. In a separate terminal, start the mockup server
   ```
   cd ../server
   node server.js
   ```

## Development Commands

### Client
- `npm run dev` - Start development server

### Server
- `node server.js` - Start the practice server

## Project Structure

```
e-commerce-store/
├── client/                 # React frontend
│   ├── public/             # Static assets
│   └── src/
│       ├── api/            # API integration
│       ├── components/     # React components
│       ├── context/        # React context
│       ├── hooks/          # Custom hooks
│       ├── providers/      # Context providers
│       └── utils/          # Utility functions
└── server/                 # practice backend server
```



