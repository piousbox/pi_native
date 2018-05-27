/**
 * ReportContainer / index.js
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
import HTML from 'react-native-render-html'

import { fetchReport } from "./actions"
import ReportScreen from '../../stories/screens/Report'

class Report extends React.Component<Props, State> {
  componentDidMount() {
    let reportname = this.props.navigation.state.params.reportname
    this.props.fetchReport(reportname)
  }
  render () {
    console.log('+++ Report:', this.props, this.state)
    let r = this.props.report
    if (!r) { return (null) }

    return (
      <ReportScreen navigation={this.props.navigation} item={r} />
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

export default connect(mapStateToProps, bindAction)(Report)
