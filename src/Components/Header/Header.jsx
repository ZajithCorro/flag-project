import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { HeaderWrapper } from './styles';

import { ThemeContext } from '../../context/ThemeContext';

export default function Header() {
	const { switchTheme } = useContext(ThemeContext);
	return (
		<HeaderWrapper>
			<div>
				<Link to='/'>
					<h1>Where in the world?</h1>
				</Link>
				<div className='dark-mode' onClick={switchTheme}>
					<span>
						<i className='far fa-moon'></i> Dark Mode
					</span>
				</div>
			</div>
		</HeaderWrapper>
	);
}
