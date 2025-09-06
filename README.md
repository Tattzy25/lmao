# 🌟 Scoovio - Premium Equipment Rental Platform

> **A luxury, elderly-friendly equipment rental marketplace connecting Partners and Renters with seamless booking experiences.**

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)](https://www.typescriptlang.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC)](https://tailwindcss.com/) [![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-black)](https://ui.shadcn.com/)

## 📋 Table of Contents

- [🎯 Project Overview](#-project-overview)
- [✨ Key Features](#-key-features)
- [🏗️ Architecture & Tech Stack](#️-architecture--tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🔧 Environment Setup](#-environment-setup)

---

## 🎯 Project Overview

Scoovio is a **premium equipment rental platform** designed specifically with **elderly accessibility** in mind. The platform aims to connect equipment Partners (hosts) with Renters through an intuitive, mobile-first interface featuring large touch targets, clear navigation, and seamless booking experiences.

### **Target Audience**
-   **Primary**: Elderly users requiring mobility equipment (wheelchairs, scooters, etc.)
-   **Secondary**: Caregivers and family members booking on behalf of others
-   **Partners**: Equipment rental businesses and individual hosts

### **Core Value Proposition**
-   **Accessible Design**: Large buttons, clear text, simple navigation.
-   **Premium Experience**: A luxury UI/UX with seamless interactions.
-   **AI-Powered Support**: Plans for 24/7 assistance through an AI assistant.

---

## ✨ Key Features

-   **Public-Facing Pages**: A mobile-first landing page, equipment search, and informational pages.
-   **Unified Dashboard**: An Airbnb-style layout planned for role-based navigation (Renter, Partner).
-   **Advanced Search**: Functionality for date-based availability and filtering.
-   **AI Assistant**: A planned feature for 24/7 AI-powered support and booking assistance.

---

## 🏗️ Architecture & Tech Stack

This project is built with a modern, component-driven architecture.

### **Core Technologies**
-   **Framework**: **Next.js 15** (App Router)
-   **Language**: **TypeScript**
-   **Styling**: **Tailwind CSS**
-   **Component Library**: **shadcn/ui** built on top of Radix UI headless components.
-   **Icons**: **Lucide React**
-   **Tables / Data Grids**: **TanStack React Table**
-   **Charts / Visualization**: **Recharts**
-   **Drag & Drop**: **DND Kit**
-   **Schema Validation**: **Zod**
-   **Git Hooks**: **Husky**

### **Key Design Patterns**
-   **Mobile-First Responsive Design**
-   **Component-Driven Development**
-   **Directory Structure by Feature**

---

## 🚀 Quick Start

### **Prerequisites**
-   Node.js 18.0 or higher
-   npm or your preferred package manager
-   Git

### **Installation**

1.  **Clone the repository**
    ```bash
    git clone <your-repository-url>
    cd <repository-name>
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Set up environment variables**
    ```bash
    cp .env.example .env.local
    ```
    *Note: No critical environment variables are required to run the frontend locally based on the current setup.*

4.  **Run the development server**
    ```bash
    npm run dev
    ```

5.  **Open your browser** to `http://localhost:3000`.

### **Available Development Commands**
```bash
# Start the development server
npm run dev

# Create a production-ready build
npm run build

# Start the production server
npm run start

# Check for build errors without creating an output
npm run check

# Run TypeScript type-checking
npm run type-check
```

---

## 📁 Project Structure

The project follows a feature-based structure within the Next.js App Router.

```
c:\Users\relay\Downloads\lmao\
├── src\
│   ├── app\
│   │   ├── api\
│   │   ├── ask-scoovio\
│   │   ├── browse\
│   │   ├── cars\[id]\
│   │   ├── dashboard\
│   │   ├── equipment\[id]\n│   │   ├── login\
│   │   ├── signup\
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components\
│   │   ├── custom\
│   │   ├── registry\
│   │   └── ui\
│   ├── hooks\
│   └── lib\
├── .env.example
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

---

## 🔧 Environment Setup

While not required for local development, the project is configured to use the following environment variables for full functionality (e.g., loading images from external sources). Create a `.env.local` file in the root directory to add them.

```bash
# Example for Next/Image domains
# No API keys are needed for the current setup.
```