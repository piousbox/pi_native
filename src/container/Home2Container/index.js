// @flow
import * as React from "react"
import { connect } from "react-redux"
import { Text } from 'native-base'
import Home from "../../stories/screens/Home"
import datas from "./data"
import { fetchList } from "./actions"
export interface Props {
	navigation: any,
	fetchList: Function,
	data: Object,
}
export interface State {}

// import { NewsitemReport } from 'react-native-newsitems'
import { NewsitemReport } from '../Newsitems'

class HomeContainer extends React.Component<Props, State> {
	componentDidMount() {
		this.props.fetchList(datas);
	}
	render() {
		return (
			<Home navigation={this.props.navigation} list={this.props.data} >
			  <NewsitemReport item={{ name: 'Report Name 2' }} />
			</Home>
		)
	}
}

function bindAction(dispatch) {
	return {
		fetchList: url => dispatch(fetchList(url)),
	};
}

const mapStateToProps = state => ({
	data: state.homeReducer.list,
	isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(HomeContainer);
