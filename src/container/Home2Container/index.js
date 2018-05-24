// @flow
import * as React from "react"
import { connect } from "react-redux"
import { Text } from 'native-base'
import Home from "../../stories/screens/Home"
import datas from "./data"
import { fetchList, fetchNewsitems } from "./actions"
export interface Props {
  navigation: any,
  fetchList: Function,
  data: Object,
}
export interface State {}

// import { NewsitemReport } from 'react-native-newsitems'
import { Newsitems, NewsitemReport } from '../Newsitems'

class Home2Container extends React.Component<Props, State> {
  componentDidMount() {
    // this.props.fetchList(datas)
    this.props.fetchNewsitems()
  }
  render() {
    console.log('+++ Home2Container:', this.props, this.state)
    return (
      <Home navigation={this.props.navigation} list={[]} >
        { /* <Newsitems /> */ }
      </Home>
    )
  }
}

function bindAction(dispatch) {
  return {
    fetchList: url => dispatch(fetchList(url)),
    fetchNewsitems: () => { dispatch(fetchNewsitems()) },
  };
}

const mapStateToProps = state => ({
  data: state.homeReducer.list,
  isLoading: state.homeReducer.isLoading,
});
export default connect(mapStateToProps, bindAction)(Home2Container);
