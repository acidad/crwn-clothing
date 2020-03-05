import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

import {
	CollectionPageStyles,
	TitleSTyles,
	ItemsStyles,
} from './collection.styles';

const CollectionPage = ({ collection }) => {
	const { title, items } = collection;
	return (
		<CollectionPageStyles>
			<TitleSTyles>{title}</TitleSTyles>
			<ItemsStyles>
				{items.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
			</ItemsStyles>
		</CollectionPageStyles>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
