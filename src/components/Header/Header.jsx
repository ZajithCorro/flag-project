import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { HeaderWrapper } from './styles';

import { ThemeContext } from '../../context/ThemeContext';

import Mode from './Mode';

export default function Header() {
	const { darkMode, switchTheme } = useContext(ThemeContext);

	return (
		<HeaderWrapper>
			<div>
				<Link to='/'>
					<h1>Where in the world?</h1>
				</Link>
				<div className='dark-mode' onClick={switchTheme}>
					<Mode isDarkMode={darkMode} />
				</div>
			</div>
		</HeaderWrapper>
	);
}
