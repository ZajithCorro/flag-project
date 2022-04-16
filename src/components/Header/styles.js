import styled from 'styled-components';

export const HeaderWrapper = styled.header`
	background: var(--secondary);
	margin-bottom: 1em;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);
	margin-bottom: 3em;
	display: flex;
	justify-content: center;

	& > div {
		height: 80px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1312px;
		padding: 0 1rem;
		flex-grow: 1;

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
			background: transparent;
			border: none;
			color: var(--primary);

			i {
				transform: rotate(-20deg);
				margin-right: 10px;
			}
		}
	}

	@media screen and (min-width: 768px) {
		& > div {
			h1 {
				font-size: 24px;
			}

			.dark-mode {
				font-size: 1em;
			}
		}
	}
`;
