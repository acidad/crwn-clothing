import styled from 'styled-components';

export const CollectionItemContainer = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;

	& > button {
		width: 80%;
		opacity: 0.7;
		position: absolute;
		top: 255px;
		display: none;
	}

	&:hover {
		& > button {
			opacity: 0.85;
			display: flex;
		}
	}
`;

export const ImageSyles = styled.div`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;

	${CollectionItemContainer}:hover & {
		opacity: 0.8;
	}
`;

export const CollectionFooterContainer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const NamedStyles = styled.span`
	width: 90%;
	margin-bottom: 15px;
`;

export const PriceStyles = styled.span`
	width: 10%;
`;
