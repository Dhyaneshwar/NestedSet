# NestedSet - The Hierarchical Visualiser

Welcome to the **NestedSet** project! This is a modern, fast, and efficient web application built with **React** and **Tailwind**. This README file will guide you through the process of installing and running the project.

---

## Features

- **Blazing Fast Development**: Powered by Vite for lightning-fast build and hot module replacement.
- **Modern React**: Built with the latest React features, including Redux, hooks and functional components.
- **Modern Styling**: Styled with Tailwind CSS.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Project Structure](#project-structure)

---

## Prerequisites

Before installing and running the project, make sure your system has the following:

- **Node.js** (v16 or higher)
- **npm** (v7 or higher) or **yarn**
- A modern web browser

---

## Installation

Follow these clear and simple steps to get started:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Dhyaneshwar/NestedSet.git
   ```
   
2. **Navigate to the project directory**:
   ```bash
   cd NestedSet
   ```
   
3. **Install dependencies**:
   Using npm:
   ```bash
   npm install
   ```
   Or, using yarn:
   ```bash
   yarn install
   ```

4. **Run the development server**:
   Using npm:
   ```bash
   npm run dev
   ```
   Or, using yarn:
   ```bash
   yarn dev
   ```

5. **Open in browser**:
   Once the development server is running, open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## Project Structure

The project follows a clean and modular folder structure:

```
├── node_modules        # Installed dependencies
├── public              # Static assets like index.html and public files
├── src                 # Main source code
│   ├── components      # React components for the UI
│   │   ├── Dashboard.jsx       # Dashboard component for displaying table
│   │   ├── Home.jsx            # Main home page component
│   │   ├── Title.jsx           # Title and header component
│   │   ├── Visualise.jsx       # Component for data visualization
│   ├── const           # Constants and static data
│   │   └── tableData.js        # Column Structure for table rendering
│   ├── customHooks     # Custom React hooks
│   │   └── useFetch.jsx        # Custom hook for fetching data from API
│   ├── redux           # Redux setup for state management
│   │   ├── dataSelectors.js    # Selectors for state access
│   │   ├── dataSlice.js        # Slice for managing data-related state
│   │   └── store.js            # Redux store configuration
│   ├── utils           # Utility functions and reusable components
│   │   ├── CustomPack.jsx      # Helper for data packing - Visualise data in circular packs
│   │   ├── CustomTable.jsx     # Component for rendering tables - Visualise data in Table Format
│   │   ├── CustomTree.jsx      # Component for rendering tree structures - Visualise data in Tree format
│   │   ├── ModalContainer.js   # Modal container for pop-ups
│   │   └── transformer.js      # Helper for data transformation
│   ├── App.css         # Global styles
│   ├── App.jsx         # Root app component
│   ├── index.css       # Additional global styles
│   ├── index.html      # Entry HTML file
│   └── main.jsx        # Main React entry point
├── .gitignore          # Git ignore configuration
├── .prettierrc         # Prettier configuration for code formatting
├── package.json        # Project dependencies and scripts
├── postcss.config.js   # PostCSS configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

---

## Home Page

![image](https://github.com/user-attachments/assets/f0912c53-2d9d-459e-bb03-0762d7cf9b37)

The **Home Page** introduces the **Nested Set Viewer Application**, a tool for visualizing hierarchical data using the Nested Set Model. It highlights:

- **Features**: Interactive visualizations, real-time node data display, and efficient nested set rendering.
- **Technologies**: React, Tailwind CSS, Material UI, Styled Components, and D3.js.
- **How It Works**: Fetch data, display hierarchy, enable user interaction, and provide visual insights.

This page provides a concise overview of the app's purpose, functionality, and technologies, inviting users to explore hierarchical data seamlessly.

---

## Dashboard Page

<div>
  <img src="https://github.com/user-attachments/assets/e9831b9d-8297-47a3-92de-92a2c9871cde" alt="image 1" width="500">
</div>

This page displays hierarchical data fetched from an API in a **Material UI Data Grid Table**, which is highly customizable and user-friendly. The table shows critical columns such as:

- **ID**: Unique identifier for each node.
- **Node**: The name of the node.
- **Left/Right**: Indicators for the nested set structure.
- **Depth**: The depth of each node in the hierarchy.

At the bottom, there is a clickable link: **"Click Here To Visualize the Data"**, which navigates users to the **Visualize Page** for graphical representations of the data. This page acts as a starting point for analyzing the dataset in a structured tabular format.

---

## Visualise Page
<div>
  <img src="https://github.com/user-attachments/assets/722c6ae7-1a16-45f8-be44-1e5c4bf3a588" alt="image 1" width="500">
</div>

The **Visualize Page** presents hierarchical data through interactive, custom-built visualizations developed entirely without the use of third-party libraries. It features:

1. **Tree View**: A dynamic tree diagram that visually represents the hierarchical structure, offering a clear and intuitive understanding of parent-child relationships and the overall data hierarchy.

At the bottom of the page, a clickable link **"Click Here To View the Table"** allows users to navigate back to the Dashboard page. This page combines interactivity and clarity to enhance data exploration.

<div>
  <img src="https://github.com/user-attachments/assets/46c92ace-a71d-4f17-b351-9919751dc8de" alt="image 1" width="500">
</div>

The tree nodes are fully interactive. When a user clicks on any node, a modal is triggered to display comprehensive details about the selected node, enhancing the user experience with clear and contextual information.

---

### Happy coding! 🚀

For any questions or issues, feel free to reach out to me.
