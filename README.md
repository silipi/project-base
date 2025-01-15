# Personal Project Starter Template

Welcome to my personal project starter template! This repository serves as a foundational setup for all my personal projects, incorporating technologies and tools that I prefer and find efficient.

These folders, `backend` and `webapp`, are meant to be used as a single project, but they can be used as separate projects if needed.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Strict syntactical superset of JavaScript that adds static typing.
- **Vite**: A fast build tool and development server.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **React Hook Form**: Performant, flexible, and extensible forms with easy-to-use validation.
- **Yup**: JavaScript schema builder for value parsing and validation.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **Zustand**: A fast and scalable bearbones state-management solution.
- **React Query**: Powerful data-fetching and state management library.
- **shadcn/ui**: A collection of accessible and customizable UI components.
- **ESLint**: Pluggable linting utility for JavaScript and TypeScript.
- **Prettier**: Opinionated code formatter.

### Backend

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeScript**: Ensures type safety and better tooling.
- **Prisma**: Next-generation ORM for Node.js and TypeScript.
- **PostgreSQL**: Powerful, open-source object-relational database system.
- **Passport.js**: Simple, unobtrusive authentication for Node.js.
  - **passport-github2**: GitHub authentication strategy for Passport.
  - **passport-google-oauth20**: Google OAuth 2.0 authentication strategy for Passport.
- **JWT (JSON Web Tokens)**: For secure token-based authentication.
- **Jest**: Delightful JavaScript Testing Framework.
- **Docker Compose**: Define and run multi-container Docker applications.

## Features

- **Authentication**:
  - Register and login using email and password.
  - Social authentication with GitHub and Google.
  - JWT-based secure authentication.
- **State Management**:
  - Front-end global state management with Zustand.
- **Form Handling**:
  - Front-end form handling and validation using React Hook Form and Yup.
- **API Integration**:
  - Axios for HTTP requests with automatic token handling.
- **Styling**:
  - Responsive and customizable UI using Tailwind CSS and shadcn/ui components.
- **Linting and Formatting**:
  - Consistent code quality with ESLint and Prettier.
- **Testing**:
  - Comprehensive testing setup with Jest.
- **Deployment**:
  - Docker Compose setup for easy deployment of backend services.

## Getting Started

### Prerequisites

- Node.js 18+
- Docker

### Installation

1. Clone the repository
2. Run `npm install` in both `backend` and `webapp` folders
3. Run `npm run dev` in both `backend` and `webapp` folders

Make sure to set the correct environment variables in the `.env` files for each project.
