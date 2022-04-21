import styled from 'styled-components';

export const CountryDescriptionWrapper = styled.div`
	margin-top: 2em;
	text-align: center;

	img {
		width: 100%;
		margin-bottom: 2em;
		border-radius: 10px;
		width: 600px;
		height: 400px;
		object-fit: cover;
	}

	.details {
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		h1 {
			margin-bottom: 1.5rem;
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
		grid-column-gap: 3rem;
		margin-top: 2em;
		text-align: left;
		margin-bottom: 1rem;

		img {
			margin-bottom: 0;
		}

		.grid {
			grid-template-columns: 50% 50%;
			gap: 0 10px;
		}
	}
`;
