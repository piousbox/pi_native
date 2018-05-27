/**
 * container / Newsitems / index.js
 */

// @flow
import * as React from "react"
import { 
  ScrollView, Image,
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
    // console.log('+++ Newsitems Container:', this.props)
    if (this.props.items.length === 0) { return (null) }

    let newsitems = this.props.items.map((i, idx) => {
      return (
        <View key={idx}>
          <Card >
            <View style={{paddingBottom: 10}} >
              <Text onPress={() => {
                this.props.navigation.navigate('Report', { reportname: i.reportname })
              }} >{i.name}</Text>
              <View style={{ flex: 1, flexDirection: 'row' }} >
                <Image source={{ uri: i.photo_url }} style={{ width: 100, height: 100 }} />
              
                <Text style={{ flex: 1, alignSelf: 'stretch', paddingLeft: 5 }} 
                  >On { i.created_at.substr(0, 10) } by {i.username}.</Text>
              </View>
            </View>
          </Card>
        </View>
      )
    })

    return (
      <ScrollView>{ newsitems }</ScrollView>
    )
  }
}

class NewsitemReport extends React.Component<Props, State> {
  render () {
    // console.log('+++ NewsitemReport:', this.props, this.state)

    return (
      <View style={{ backgroundColor: 'yellow' }}>
        <Text>A report: {this.props.item.name}</Text>
      </View>
    )
  }
}

export { Newsitems, NewsitemReport }
