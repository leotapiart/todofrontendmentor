import { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SoonIcon from "./icons/SoonIcon";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const TodoHeader = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto px-4 pt-8 md:max-w-xl">
            <div className="flex justify-between">
                <h1 className="align-middle text-2xl font-bold uppercase tracking-[0.3em] text-white">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <SoonIcon /> : <MoonIcon />}
                </button>
            </div>
        </header>
    );
};

export default TodoHeader;
