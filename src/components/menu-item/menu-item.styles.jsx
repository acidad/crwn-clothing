import styled, { css } from 'styled-components';

const BackgroundImageHoverStyles = css`
	transform: scale(1.1);
	transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

const OpacityHoverStyles = css`
	opacity: 0.9;
`;

const LargeStyles = css`
	height: 380px;
`;

const getLargeStyles = props => {
	if (props.size) {
		return LargeStyles;
	}
};

export const MenuItemStyles = styled.div`
	min-width: 30%;
	height: 240px;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	position: relative;
	overflow: hidden;

	&:hover {
		cursor: pointer;
		${OpacityHoverStyles}
	}

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}

	${getLargeStyles}
`;

export const BackgroundImageStyles = styled.div`
	width: 100%;
	height: 100%;
	background-position: center;
	background-size: cover;

	${MenuItemStyles}:hover & {
		${BackgroundImageHoverStyles}
	}
`;

export const ContentStyles = styled.div`
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: white;
	opacity: 0.7;
	position: absolute;
`;

export const TitleStyles = styled.h1`
	font-weight: bold;
	margin-bottom: 6px;
	font-size: 22px;
	color: #4a4a4a;
`;

export const SubtitleStyles = styled.span`
	font-weight: lighter;
	font-size: 16px;
`;