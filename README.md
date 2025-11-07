# E-commerce Web Application

This is a simple e-commerce web application built with Next.js and other modern web technologies.

## Features

*   User Authentication (Login/Register)
*   Product Listing
*   Shopping Cart
*   Checkout Process
*   Contact Page

## Technologies Used

*   [Next.js](https://nextjs.org/) - React framework for building server-side rendered and static web applications.
*   [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
*   [Redux Toolkit](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux development.
*   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
*   [Radix UI](https://www.radix-ui.com/) - A collection of unstyled, accessible UI components.
*   [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript that compiles to plain JavaScript.
*   [ESLint](https://eslint.org/) - A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder Structure

```
.
├── app/              # Main application folder (App Router)
│   ├── auth/         # Authentication pages
│   ├── contact/      # Contact page
│   └── shop/         # Shop pages (cart, checkout)
├── components/       # React components
│   ├── ui/           # UI components
│   ├── layout/       # Layout components (header, footer)
│   └── ...
├── features/         # Redux Toolkit slices
│   ├── auth/
│   ├── cart/
│   └── products/
├── lib/              # Libraries and utilities
│   ├── store.ts      # Redux store
│   └── utils.ts
├── public/           # Static assets
└── ...
```