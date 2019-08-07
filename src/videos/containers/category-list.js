import React , {Component} from 'react'
import {
	FlatList,
	Text
} from 'react-native'
import {connect} from 'react-redux'
import Layout from '../components/category-list-layout'
import Empty from '../components/empty'
import HorizontalSeparator from '../../sections/components/horizontal-separator'
import VerticalSeparator from '../components/vertical-separator'
import Suggestion from '../components/suggestion'
import Category from '../components/category'


class CategoryList extends Component {

	keyExtractor  = item => item.id.toString()
	renderEmpty   = () => <Empty text="No hay categorias"></Empty>
	itemSeparator = () => <HorizontalSeparator />
	renderItem    = ({item}) => {
		return (
			<Category {...item} />
		)
	}

	render() {
		return (
			<Layout title="Categorías" >
				<FlatList
					horizontal
					keyExtractor={this.keyExtractor}
					data={this.props.list}
					ListEmptyComponent={this.renderEmpty}
					ItemSeparatorComponent={this.itemSeparator}
					renderItem={this.renderItem}
				/>
			</Layout>
		)
	}
}

function mapStateToProps(state) {
	return {
		list: state.categoryList
	}
}

export default connect(mapStateToProps)(CategoryList)