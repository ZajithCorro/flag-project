import { createContext, useEffect } from 'react';

import { useDarkMode } from '../hooks/useDarkMode';

const ThemeContext = createContext();
const { Provider } = ThemeContext;

function ThemeProvider({ children }) {
	const [darkMode, switchTheme] = useDarkMode();

	useEffect(() => {
		const html = document.querySelector('html');
		html.classList.toggle('dark', darkMode);
	}, [darkMode]);

	return <Provider value={{ darkMode, switchTheme }}>{children}</Provider>;
}

export { ThemeProvider, ThemeContext };
