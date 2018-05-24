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
      <Container>
        <ScrollView>
          <Text 
            style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', flex: 1 }}
          >{r.name}</Text>
          <HTML html={r.description} imagesMaxWidth={Dimensions.get('window').width} />
        </ScrollView>
      </Container>
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
