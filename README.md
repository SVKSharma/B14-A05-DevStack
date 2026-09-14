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
| `Hero.tsx` | Displays the page hero section |
| `TechBoard.tsx` | Displays technology cards and manages the selected stack |
| `StackCard.tsx` | Displays a single technology and handles adding it to the stack |
| `YourStack.tsx` | Displays selected technologies and handles removal |
| `Navbar.tsx` | Displays the navigation bar |
| `Footer.tsx` | Displays the page footer |
| `FallbackSpinner.tsx` | Displays the loading state |
| `DevStackType.ts` | Defines the TypeScript structure for technology data |
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

```bash
JSX lets you write HTML-like syntax directly inside JavaScript. React
compiles it into function calls under the hood, but writing markup
this way is far more readable than building elements manually with
JS, which is why it's the standard way to write React components.
```

**2. What is the difference between props and state?**

```bash
Props are values passed down from a parent component to a child —
the child can read them but never modify them directly. State is
data owned by the component itself, which can change over time and
triggers a re-render whenever it's updated.
```

**3. What does the `useState` hook do, and where did you use it in this project?**

```bash
useState lets a component hold a value across renders and re-render
whenever that value changes. In this project, it stores the loaded
technology list and tracks which items are currently in the
"Your Stack" panel.
```

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

```bash
useEffect runs code after render in response to side effects, like
data fetching. Since loading Data.json is asynchronous, useEffect
was necessary to wait for the data to resolve before rendering it —
without it, the component would try to render a pending Promise
instead of the actual data.
```

**5. Why does every item in a `.map()` list need a unique `key` prop?**

```bash
React uses the key prop to track which specific item was added,
removed, or changed between renders. Without a unique key, React
can misidentify list items, leading to incorrect updates or
unnecessary re-renders.
```

**6. What is conditional rendering? Show one place you used it.**

```bash
Conditional rendering means displaying different UI based on a
condition, similar to an if-else check inside the markup. In this
project, the sidebar renders "Your stack is empty" when the stack
array has no items, and maps over the selected technologies
otherwise.
```

**7. How do you pass data from a parent component to a child, and how does a child send something back to the parent?**

```bash
Data flows down from parent to child through props. To send data
back up, the parent passes a function as a prop; the child calls
that function with the relevant data as an argument, and the parent
updates its own state accordingly.
```

---

<div align="center">

Built with 🧡 by Showvik

</div>