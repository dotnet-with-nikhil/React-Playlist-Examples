import useLocalStorage from "./hook/useLocalStorage";

function UserPreference() {

    const [theme, setTheme] = useLocalStorage('theme', 'light');
    return (
        <div>
            <h2>{theme}</h2>
            <button onClick = {() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Change Theme
            </button>
        </div>

    )

}

export default UserPreference;