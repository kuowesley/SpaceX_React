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
import ItemDetails from "./components/ItemDetails";

function App() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);

    return (
        <>
            <div className="App">
                <header>
                    <Navigation />
                </header>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route
                        path="/launches/pages/"
                        element={<ListPage type="launches" />}
                    />
                    <Route
                        path="/launches/pages/:page"
                        element={<ListPage type="launches" />}
                    />
                    <Route
                        path="/launches/:id"
                        element={<ItemDetails type="launches" />}
                    />

                    <Route
                        path="/payloads/pages/"
                        element={<ListPage type="payloads" />}
                    />
                    <Route
                        path="/payloads/pages/:page"
                        element={<ListPage type="payloads" />}
                    />
                    <Route
                        path="/payloads/:id"
                        element={<ItemDetails type="payloads" />}
                    />

                    <Route
                        path="/cores/pages/"
                        element={<ListPage type="cores" />}
                    />
                    <Route
                        path="/cores/pages/:page"
                        element={<ListPage type="cores" />}
                    />
                    <Route
                        path="/cores/:id"
                        element={<ItemDetails type="cores" />}
                    />

                    <Route
                        path="/rockets/pages/"
                        element={<ListPage type="rockets" />}
                    />
                    <Route
                        path="/rockets/pages/:page"
                        element={<ListPage type="rockets" />}
                    />
                    <Route
                        path="/rockets/:id"
                        element={<ItemDetails type="rockets" />}
                    />

                    <Route
                        path="/ships/pages/"
                        element={<ListPage type="ships" />}
                    />
                    <Route
                        path="/ships/pages/:page"
                        element={<ListPage type="ships" />}
                    />
                    <Route
                        path="/ships/:id"
                        element={<ItemDetails type="ships" />}
                    />

                    <Route
                        path="/launchpads/pages/"
                        element={<ListPage type="launchpads" />}
                    />
                    <Route
                        path="/launchpads/pages/:page"
                        element={<ListPage type="launchpads" />}
                    />
                    <Route
                        path="/launchpads/:id"
                        element={<ItemDetails type="launchpads" />}
                    />
                </Routes>
            </div>
        </>
    );
}

export default App;
