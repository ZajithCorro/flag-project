import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';
import { ThemeContext } from '../context/ThemeContext';

const HeaderStyled = styled.div`
	background: var(--secondary);
	margin-bottom: 1em;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
	margin-bottom: 3em;

	header {
		height: 80px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		h1 {
			font-size: 14px;
		}

		a {
			text-decoration: none;
			color: var(--dark);
		}

		.dark-mode {
			cursor: pointer;
			font-size: 12px;
			font-weight: 600;

			i {
				transform: rotate(-20deg);
				margin-right: 10px;
			}
		}
	}

	@media screen and (min-width: 768px) {
		header {
			h1 {
				font-size: 24px;
			}

			.dark-mode {
				font-size: 1em;
			}
		}
	}
`;

export default function Header() {
	const { switchTheme } = useContext(ThemeContext);
	return (
		<HeaderStyled>
			<Wrapper>
				<header>
					<Link to='/'>
						<h1>Where in the world?</h1>
					</Link>
					<div className='dark-mode' onClick={switchTheme}>
						<span>
							<i className='far fa-moon'></i> Dark Mode
						</span>
					</div>
				</header>
			</Wrapper>
		</HeaderStyled>
	);
}
