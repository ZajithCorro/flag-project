import { createContext } from 'react';

import { useDarkMode } from '../hooks/useDarkMode';

const ThemeContext = createContext();
const { Provider } = ThemeContext;

function ThemeProvider({ children }) {
	const [darkMode, themeClass, switchTheme] = useDarkMode();

	return <Provider value={{ darkMode, themeClass, switchTheme }}>{children}</Provider>;
}

export { ThemeProvider, ThemeContext };
