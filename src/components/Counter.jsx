import { useContext } from "react";

import ThemeContext from "../context/ThemeContext";

const Counter = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div style={{background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#fff' : '#333'}}>
            <p>Theme actuel: {theme}</p>
            <button onClick={toggleTheme} >Changer le theme</button>
        </div>
    )
}

export default Counter