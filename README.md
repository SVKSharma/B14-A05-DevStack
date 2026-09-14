<div align="center">

# 🧱 DevStack
### B14-A05 · Development Stack Builder

## Build Your Ideal Development Stack

Compare frontend, backend, database, and tooling options side by side, then assemble the stack that fits your next project — all in one focused workspace.

</div>

---

## 🔗 Live Demo

👉 **[Check out the live demo here](https://b14-a05-devstackbuilder-svk.netlify.app/)**

---

## 📖 About the Project

Choosing a technology stack usually means comparing dozens of tools scattered across different sources. **DevStack** consolidates that research into a single, interactive interface.

The app presents a curated set of technologies, each with its category, rating, difficulty level, and description. Users can select the tools that fit their project, track them in a personal stack, remove individual selections, or clear the list entirely. Toast notifications confirm every action, and the layout is fully responsive across devices.

---

## ✨ Features

### 🧩 Explore and Compare
Browse technologies across Frontend, Backend, Database, Language, Styling, and DevOps categories. Each card displays an icon, category, description, difficulty level, rating, and badge for quick comparison.

### 🗂️ Build Your Own Stack
Add technologies to the **Your Stack** panel with a single click. Duplicate entries are blocked automatically, and selected cards update visually to reflect their state.

### 🧹 Manage Your Selection
Remove individual technologies or clear the entire stack at once. The sidebar tracks the selected count and displays an empty state when no technologies are selected.

### 🔔 Real-Time Feedback
React Toastify surfaces success, info, and error notifications for every action — adding, removing, clearing, and duplicate attempts.

### 🎨 Dynamic Badge Colors
`fast-average-color` extracts the dominant color from each technology's icon and applies it to the corresponding badge, keeping the interface visually connected to the content it represents.

### 📱 Fully Responsive
The technology grid, navigation, and stack panel all adapt across mobile, tablet, and desktop breakpoints.

### ⏳ Loading State
Technology data loads asynchronously from `public/Data.json`. React `Suspense` displays a fallback spinner while the data resolves.

---

## 🛠️ Tech Stack

Built on a modern React and TypeScript foundation, with Vite for fast development and Tailwind CSS + DaisyUI for styling.

**Core**
| Technology | Purpose |
|---|---|
| React 19 | Builds the UI using reusable components |
| TypeScript | Adds static typing and improves code reliability |
| Vite | Dev server, hot module replacement, and production build |

**Styling**
| Technology | Purpose |
|---|---|
| Tailwind CSS 4 | Utility-first styling |
| DaisyUI | Prebuilt Tailwind component library |

**Packages**
| Package | Purpose |
|---|---|
| React Icons | Icons for stars, close buttons, checkmarks, and menu toggles |
| React Toastify | Success, error, and info toast notifications |
| Fast Average Color | Extracts dominant color from tech icons for dynamic badge styling |

**Dev Tools**
| Tool | Purpose |
|---|---|
| Oxlint | JS/TS linting |
| React Compiler + Babel | Automatic React optimization |
| Vite React Plugin | React support in Vite |
| Tailwind Vite Plugin | Tailwind integration with Vite |

---

## 📂 Project Structure

```bash
src/
├── assets/
│   ├── banner-stack.png
│   └── logo-text.png
├── components/
│   ├── hero/
│   │   └── Hero.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── tech-board/
│   │   ├── StackCard.tsx
│   │   ├── TechBoard.tsx
│   │   └── YourStack.tsx
│   └── ui/
│       └── FallbackSpinner.tsx
├── types/
│   └── DevStackType.ts
├── App.css
├── App.tsx
├── index.css
└── main.tsx
```

### Key Files

| File | Responsibility |
|---|---|
| `App.tsx` | Loads technology data and composes the main page sections |
| `main.tsx` | Renders the app and configures Toastify |
| `components/hero/Hero.tsx` | Displays the page hero section |
| `components/tech-board/TechBoard.tsx` | Displays technology cards and manages the selected stack |
| `components/tech-board/StackCard.tsx` | Displays a single technology and handles adding it to the stack |
| `components/tech-board/YourStack.tsx` | Displays selected technologies and handles removal |
| `components/layout/Navbar.tsx` | Displays the navigation bar |
| `components/layout/Footer.tsx` | Displays the page footer |
| `components/ui/FallbackSpinner.tsx` | Displays the loading state |
| `types/DevStackType.ts` | Defines the TypeScript structure for technology data |
| `public/Data.json` | Stores the technology records used by the application |

---

## ⚙️ Getting Started

### Prerequisites
Node.js 18+, npm, and Git.

```bash
# Clone the repository using HTTPS
git clone https://github.com/SVKSharma/B14-A05-DevStack.git

# Or clone the repository using SSH
git clone git@github.com:SVKSharma/B14-A05-DevStack.git

# Move into the project folder
cd DevStack

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app runs at `http://localhost:5173` (or whichever port Vite assigns).

### Available Commands

```bash
npm run dev      # Start the development server
npm run build    # Type-check and create a production build
npm run lint     # Check the code with Oxlint
npm run preview  # Preview the production build locally
```

---

## 🤔 React Q&A

**1. What is JSX, and why is it used in React?**

JSX stands for JavaScript XML. It is a syntax extension created by React that allows us to write HTML/XML-like markup directly inside our JavaScript files. Under the hood, React compiles this JSX into standard JavaScript function calls (like `React.createElement`). We use it because writing complex UI structures using pure JavaScript objects is incredibly tedious and hard to read. JSX gives us the visual clarity of HTML while keeping the full programming power and logic of JavaScript right there in the component.

**2. What is the difference between props and state?**

The main difference lies in who owns and controls the data. Props (short for properties) are strictly for passing data down from a parent component to a child. We can think of passing props exactly like passing arguments into a normal JavaScript function—it is the same core concept in React. They are read-only, meaning the child cannot modify its own props. State, on the other hand, is the component's internal, personal memory. A component completely owns and manages its state, and whenever this state is updated (using a setter function), React automatically re-renders that specific component to reflect the new data on the screen.

**3. What does the `useState` hook do, and where did you use it in this project?**

The `useState` hook allows functional components to remember and manage data across multiple renders. When the state value changes, it triggers the component to re-render and update the UI. In this DevStack project, I used it in a few crucial places. For example, I used it to store the main array of technology data after fetching it from the JSON file. I also used `useState` to maintain the "Your Stack" list, keeping track of which specific tools the user has added or removed during their session.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

The `useEffect` hook is used to handle side effects in React—operations that reach outside the normal component rendering cycle, like fetching data, manually changing the DOM, or setting up timers. I needed to use it for loading `Data.json` because fetching data is an asynchronous process. If I tried to load it directly in the component body without `useEffect`, React wouldn't wait for the data to arrive; it would try to render a pending Promise, causing an error. By wrapping the fetch call in `useEffect`, I ensured the data was fetched exactly once right after the component mounted.

**5. Why does every item in a `.map()` list need a unique `key` prop?**

When rendering a list dynamically using `.map()`, React uses the `key` prop as a unique identifier for each element. This helps React's virtual DOM diffing algorithm figure out exactly which items have been added, removed, or modified between renders. If we don't provide a unique key (or just use array indexes, which is a bad practice for dynamic lists), React gets confused when the list order changes. This can lead to weird UI bugs, incorrect state mapping, or completely unnecessary re-renders of the entire list instead of just the changed item.

**6. What is conditional rendering? Show one place you used it.**

Conditional rendering in React is the practice of dynamically displaying different UI elements based on certain conditions or state values, very much like using standard JavaScript if-else or ternary operators. It allows the interface to react to different scenarios. A clear example in my project is the "Your Stack" sidebar. I used a conditional check on the stack array's length. If the length is zero, the UI renders an empty state message saying "Your stack is empty." If there are items, it maps through the array and renders the selected technology cards instead.

**7. How do you pass data from a parent component to a child, and how does a child send something back to the parent?**

Passing data downwards from a parent to a child is straightforward: you pass it through props, similar to how you give attributes to standard HTML tags. However, because data flow in React is strictly one-way (top-down), a child cannot send data back up directly. To solve this, the parent must pass down a callback function as a prop to the child. When the child wants to send data back, it simply executes that function and passes the necessary data as arguments. The parent then receives this data and can use it to update its own state.

---

<div align="center">

Built with 🧡 by Showvik

</div>