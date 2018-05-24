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

class Newsitems extends React.Component<Props, State> {
  render () {
    console.log('+++ Newsitems:', this.props, this.state)
    if (this.props.items.length === 0) { return (null) }

    let newsitems = this.props.items.map((i, idx) => {
      return (
        <View key={idx}>
          <Card >
            <View style={{paddingBottom: 10}} >
              <Text >{i.name}</Text>
            </View>
          </Card>
        </View>
      )
    })

    console.log('+++ n:', newsitems)

    return (
      <Container>
        { /* <Header>
          <Body>
            <Title>This title 2</Title>
          </Body>
        </Header> */ }

        <ScrollView>{ newsitems }</ScrollView>

      </Container>
    )
  }
}

class NewsitemReport extends React.Component<Props, State> {
  render () {
    console.log('+++ NewsitemReport:', this.props, this.state)

    return (
      <View style={{ backgroundColor: 'yellow' }}>
        <Text>A report: {this.props.item.name}</Text>
      </View>
    )
  }
}

export { Newsitems, NewsitemReport }
