import styled from 'styled-components';

export const BorderCountryWrapper = styled.div`
	text-align: center;
	margin-top: 1.5em;

	.list-countries {
		margin-top: 1em;
	}
	.country {
		cursor: pointer;
		padding: 0.5em 2em;
		margin: 0 15px 15px 0;
		border-radius: 5px;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
		background: var(--secondary);
		display: inline-flex;
		transition: all 0.3s ease;

		&:hover {
			transform: translatey(-0.2rem);
		}
	}

	@media screen and (min-width: 900px) {
		text-align: left;
	}
`;
