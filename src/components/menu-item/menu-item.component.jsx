import React from 'react';
import { withRouter } from 'react-router-dom';

// import './menu-item.styles.scss';
import {
	MenuItemStyles,
	BackgroundImageStyles,
	ContentStyles,
	TitleStyles,
	SubtitleStyles,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
	<MenuItemStyles
		size={size}
		onClick={() => history.push(`${match.url}${linkUrl}`)}
	>
		<BackgroundImageStyles
			style={{
				backgroundImage: `url(${imageUrl})`,
			}}
		/>
		<ContentStyles>
			<TitleStyles>{title.toUpperCase()}</TitleStyles>
			<SubtitleStyles>SHOP NOW</SubtitleStyles>
		</ContentStyles>
	</MenuItemStyles>
);

export default withRouter(MenuItem);
