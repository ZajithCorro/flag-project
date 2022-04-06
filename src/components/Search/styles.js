import styled from 'styled-components';

export const SearchWrapper = styled.div`
	display: flex;
	position: relative;
	width: 90%;
	margin: 0 auto;
	margin-bottom: 1.5em;

	.close {
		position: absolute;
		right: 1em;
		top: 1em;
		border-radius: 50%;
		border: none;
		box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
	}

	@media screen and (min-width: 768px) {
		width: 50%;
	}
`;

export const Label = styled.label`
	display: inline-flex;
	background: var(--secondary);
	align-items: center;
	box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
	padding: 0 2rem;
	border-radius: 5px;
	flex: 1;

	i {
		margin-right: 1em;
		color: #c4c4c4;
	}

	input {
		flex: 1;
		border: none;
		height: 48px;
		line-height: 48px;
		font-size: 0.7em;
		outline: 0;
		color: var(--primary);
		background: var(--secondary);
		&::-webkit-input-placeholder {
			color: #c4c4c4;
		}
	}
`;
