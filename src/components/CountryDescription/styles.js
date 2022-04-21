import styled from 'styled-components';

export const CountryDescriptionWrapper = styled.div`
	margin-top: 3em;
	padding-bottom: 3em;
	text-align: center;

	img {
		width: 100%;
		margin-bottom: 2em;
	}

	.details {
		h1 {
			margin-bottom: 2em;
		}

		p {
			margin-bottom: 1em;
		}
	}

	.grid {
		display: grid;
		gap: 10px 0;
	}

	@media screen and (min-width: 900px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 120px;
		margin-top: 5em;
		text-align: left;

		.grid {
			grid-template-columns: 50% 50%;
			gap: 0 10px;
		}
	}
`;
