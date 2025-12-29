# 📝 React Todo Manager (Context API + LocalStorage)

A robust, high-performance Todo application built with **React** and **Tailwind CSS v4**. This project focuses on professional state management, data persistence, and clean component architecture.

---

## 🚀 Key Concepts Explained

### 1. Global State Management (Context API)
Instead of "Prop Drilling" (passing data manually through every level), we use the **Context API** to create a central data hub.
* **`createContext`**: Defines the "schema" of our data (todos) and the functions to manipulate it.
* **`Provider`**: A component wrapper that broadcasts the state and methods to the entire application.
* **Custom Hook (`useTodo`)**: A shortcut that allows any component to quickly "tune in" to the data stream without repetitive boilerplate code.



### 2. Data Persistence (LocalStorage)
To ensure tasks remain even after a browser refresh, we utilize the **LocalStorage API**.
* **Initial Load**: A `useEffect` hook runs once on mount to fetch saved strings and convert them back into JS objects using `JSON.parse`.
* **Automatic Saving**: A second `useEffect` hook monitors the `todos` array. Every time it changes, the data is stringified and saved to the browser's memory.

### 3. Component Communication
* **Controlled Components**: Form inputs are synchronized with React state via `value` and `onChange` to ensure a single source of truth.
* **Dynamic UI**: Tailwind classes are applied conditionally based on the task's state (e.g., changing background color or adding a line-through when `completed` is true).

---

## 🛠️ Step-by-Step Development Process

### Step 1: Context Definition (`TodoContext.js`)
We started by defining what a "Todo" looks like (ID, message, completion status) and listing the actions our app can perform (Add, Update, Delete, Toggle).

### Step 2: The Logic Engine (`App.jsx`)
This file serves as the "Brain." We implemented the core logic for the state:
* **Add**: Uses `Date.now()` to generate unique, timestamp-based IDs.
* **Update/Toggle**: Uses the `.map()` method to create a new array. It searches for the matching ID and replaces only that specific object using the Spread Operator `{...todo}`.
* **Delete**: Uses the `.filter()` method to create a new array that excludes the item with the target ID.



### Step 3: Input Capture (`TodoForm.jsx`)
We built a form that manages its own local "buffer" state. When submitted, it calls the global `addTodo` function and then clears itself for the next entry.

### Step 4: Individual Task Logic (`TodoItem.jsx`)
Each todo item is an isolated unit. It tracks its own "Edit Mode" via local state. It communicates with the global context only when the user wants to finalize a change or delete the task.

### Step 5: Tailwind v4 Configuration
Using the "New Way" of installing Tailwind, we configured the project in the CSS file:
* **`@theme` block**: Configured `--dark-mode: class` to allow manual theme toggling.
* **Direct Imports**: Used `@import "tailwindcss";` for a modern, CSS-first build process.

---

## 📦 Project Structure

```text
src/
├── components/
│   ├── TodoForm.jsx    # Input field logic
│   ├── TodoItem.jsx    # Individual task row logic
│   └── index.js        # Easy component exports
├── context/
│   ├── TodoContext.js  # Context blueprint & custom hook
│   └── index.js        # Easy context exports
├── App.jsx             # Main logic & State provider
└── index.css           # Tailwind v4 configuration