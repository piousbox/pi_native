// @flow
import * as React from "react"
import { 
  Container, Header, Body,
  Title,
  Card, CardItem,
  Button,
  Text, View,
} from 'native-base'

class Newsitems extends React.Component<Props, State> {
  render () {
    console.log('+++ Newsitems:', this.props, this.state)
    if (this.props.items.length === 0) { return (null) }

 // wut

    let newsitems = this.props.items.map((i, idx) => {
      return (
        <View key={idx}>
          <Text>sample text</Text>
          <Card title={"some-timte"} >
            <View style={{ width: 960, height: 400, backgroundColor: idx%2==0?'powderblue':'skyblue' }} >
              <Text >{i.name}</Text>
            </View>
          </Card>
        </View>
      )
    })

    console.log('+++ n:', newsitems)

    return (
      <Container>
        <Header>
          <Body>
            <Title>This title 2</Title>
          </Body>
        </Header>

        { newsitems }

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
