import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const inicialStateDarkmode = localStorage.getItem("theme") === "dark";
const Header = () => {
    const [darkMode, setDarkMode] = useState(inicialStateDarkmode);

    {
        //useEffect detetcta cambios de estado de un botton y va ligado a useState
        useEffect(() => {
            if (darkMode) {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
            }
        }, [darkMode]);
    }
    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.3em]">
                    TODO
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconMoon /> : <IconSun />}
                </button>
            </div>
        </header>
    );
};

export default Header;
