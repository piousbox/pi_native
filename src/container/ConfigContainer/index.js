/**
 * ConfigContainer / index.js
 */

// @flow
import * as React from "react"
import { 
  ScrollView, Dimensions,
} from 'react-native'
import { 
  Container, Header, Body,
  Title,
  CardItem,
  Button,
  Text, View,
} from 'native-base'
import { Card } from 'react-native-elements'
import { connect } from "react-redux"

import ConfigScreen from '../../stories/screens/Config'

class Config extends React.Component<Props, State> {
  componentDidMount() {
    let reportname = this.props.navigation.state.params.reportname
  }
  render () {
    // console.log('+++ ConfigContainer:', this.props, this.state)

    return (
      <ConfigScreen navigation={this.props.navigation} />
    )
  }
}

function bindAction(dispatch) {
  return {
    fetchReport: (i) => { dispatch(fetchReport(i)) },
  }
}

const mapStateToProps = state => ({
  report: state.homeReducer.report,
})

export default connect(mapStateToProps, bindAction)(Config)

