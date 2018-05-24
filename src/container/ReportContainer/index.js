// @flow
import * as React from "react"
import { 
  ScrollView,
} from 'react-native'
import { 
  Container, Header, Body,
  Title,
  CardItem,
  Button,
  Text, View,
} from 'native-base'
import { Card } from 'react-native-elements'

class Report extends React.Component<Props, State> {
  render () {
    console.log('+++ Report:', this.props, this.state)

    return (
      <Container>
        <ScrollView>
          <Text>Look my report!</Text>
        </ScrollView>
      </Container>
    )
  }
}

export default Report 
