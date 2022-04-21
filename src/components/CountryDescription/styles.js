import styled from 'styled-components';

export const CountryDescriptionWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 1.5rem;
	margin-top: 2rem;

	img {
		width: 100%;
		border-radius: 10px;
		max-width: 600px;
		max-height: 400px;
		object-fit: cover;
	}

	.details {
		display: flex;
		flex-direction: column;
		text-align: center;
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
		grid-template-columns: 1fr 1fr;
		gap: 3rem;
		margin-bottom: 1rem;

		img {
			margin-bottom: 0;
		}

		.details {
			text-align: left;
		}

		.grid {
			grid-template-columns: 50% 50%;
			gap: 0 10px;
		}
	}
`;
