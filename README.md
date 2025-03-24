# SpaceX Explorer 🚀

This is a React + Vite Single Page Application (SPA) that fetches and displays data from the public [SpaceX API](https://github.com/r-spacex/SpaceX-API).  
It allows users to explore launches, rockets, ships, payloads, launchpads, and cores using dynamic routing via React Router.

All pages are rendered using proper JSX, and related data (like rocket IDs or payload IDs) link to their detailed view.

---

## Tech Stack

-   React (with functional components)
-   React Router
-   Axios
-   Vite
-   SpaceX REST API

---

## Available Routes

-   `/` – Project description & SpaceX summary
-   `/launches/pages/:page`
-   `/payloads/pages/:page`
-   `/cores/pages/:page`
-   `/rockets/pages/:page`
-   `/ships/pages/:page`
-   `/launchpads/pages/:page`
-   ...and detail pages like `/launches/:id`, etc.

---

## React + Vite Template Info

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules.  
Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
