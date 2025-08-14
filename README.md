# **Resource Explorer**

**Resource Explorer** is a Next.js 15 application built to efficiently browse and manage resources. It leverages modern React features, state management, and utility libraries for a highly performant and scalable solution.

---

## **Table of Contents**

1. [Project Setup](#project-setup)
2. [Available Scripts](#available-scripts)
3. [Architecture Overview](#architecture-overview)
4. [Trade-offs](#trade-offs)
5. [Future Improvements](#future-improvements)

---

## **Project Setup**

### **Prerequisites**

Make sure you have the following installed:

* **Node.js ≥ 20**
* **npm** or **yarn**
* **Git**

### **Clone Repository**

```bash
git clone https://github.com/Daniyal-Aslam/resource-explorer.git
cd resource-explorer
```

### **Install Dependencies**

```bash
npm install
```

### **Run in Development Mode**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### **Build for Production**

```bash
npm run build
npm start
```

### **Linting**

```bash
npm run lint
```

---

## **Architecture Overview**

**Resource Explorer** follows a modern **Next.js 15 architecture** with **Turbopack** for faster development and builds.

### **Key Highlights**

* **Framework:** Next.js 15 with App Router (assumed from folder structure)
* **State Management:** zustand for global state and lightweight management
* **Server State:** @tanstack/react-query for caching API data and queries
* **Styling:** TailwindCSS v4 with utility-first styling; tailwind-merge for merging class names dynamically
* **UI Components:**

  * lucide-react for icons
* **Utilities:** query-string for handling query params
* **Type Safety:** TypeScript for type safety and maintainability

### **Folder Structure (high-level)**

```
/app                # Next.js App Router pages
/components         # Reusable UI components
/features           # Domain-specific features with hooks and queries
/lib                # Utility functions and helpers
/public             # Static assets
/styles             # Global Tailwind/SCSS styles
```
 