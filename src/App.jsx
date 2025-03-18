import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import Landing from "./components/Landing";
import ListPage from "./components/ListPage";
import Navigation from "./components/Navigation";

function App() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);

    return (
        <>
            <div className="App">
                <header className="App-header card">
                    <Navigation />
                </header>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route
                        path="/launches/pages"
                        element={<ListPage type="launches" />}
                    />
                    <Route
                        path="/launches/pages/:page"
                        element={<ListPage type="launches" />}
                    />
                </Routes>
            </div>
        </>
    );
}

export default App;
