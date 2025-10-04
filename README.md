# 🏢 OrgInsight – Companies Directory

A responsive and modern **React.js** application that allows users to browse, search, filter, and sort company data easily.  

---

## 🚀 Features

### 🎨 Frontend
- Built with **React.js**, **Tailwind CSS**, and **ShadCN UI** for clean, responsive design.
- Dynamic **Hero Section** with animated text and smooth transitions.
- Displays companies in elegant **card layout** with hover animations (Framer Motion).
- Includes **Navbar**, **Pagination**, and graceful **loading/error/empty states**.

### 🔍 Filters & Sorting
- Filter companies by:
  - **Name** (search bar)
  - **Industry**
  - **Location**
- Sort results by:
  - **Company Name** (A–Z / Z–A)
  - **Location**

### ⚙️ State Management
- Managed using **Redux Toolkit** (slices + thunks).
- Includes real-time updates for search, filters, and sort options.
- Clean separation of concerns with a `companiesSlice` and a reusable `applyFilters` utility.

### 🌐 API Integration
- Mocked API using a local JSON file (`/public/data/companies.json`).
- Async thunk (`fetchCompanies`) simulates API delay for realistic loading behavior.

### 💎 Bonus Features
- **Pagination** with smooth page transitions.
- **Skeleton loading** components for improved UX.
- **Responsive layout** (mobile, tablet, desktop).
- **Animations** using Framer Motion.

---

## 🧩 Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | React.js (Vite) |
| Styling | Tailwind CSS + ShadCN UI |
| Animations | Framer Motion |
| State Management | Redux Toolkit |
| Type Safety | TypeScript |
| Mock API | Static JSON File (`/data/companies.json`) |
