import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import {
	CollectionPreviewContainer,
	TitleStyles,
	PreviewStyles,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => (
	<CollectionPreviewContainer>
		<TitleStyles>{title.toUpperCase()}</TitleStyles>
		<PreviewStyles>
			{items
				.filter((item, idx) => idx < 4)
				.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
		</PreviewStyles>
	</CollectionPreviewContainer>
);

export default CollectionPreview;
