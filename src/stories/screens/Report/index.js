/**
 * screens / Report / index.js
 */

import * as React from "react"
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base"
import { 
  ScrollView, Dimensions,
} from 'react-native'
export interface Props {
  navigation: any;
  list: any;
}
import HTML from 'react-native-render-html'
import styles from "./styles"

class ReportScreen extends React.Component<Props, State> {
  render() {
    let r = this.props.item

    return (
      <Container style={styles.container} >
        <Header>
          <Left style={{ flex: 1, flexDirection: 'row' }}>
            <Button transparent
              onPress={() => {
                  console.log('+++ drawer open from Report', this.props)
                  this.props.navigation.navigate("DrawerOpen")
                }}>
              <Icon active name="menu" />
            </Button>
            <Button transparent
              onPress={() => {
                  console.log('navigating pizza', this.props)
                  this.props.navigation.navigate("DrawerOpen")
                }}>
              <Icon active name="pizza" />
            </Button>
          </Left>
          <Body>
            <Title>Report... </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <ScrollView>
            <Text 
              style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', flex: 1 }}
            >{r.name}</Text>
            <HTML html={r.description} imagesMaxWidth={Dimensions.get('window').width} />
          </ScrollView>
          { this.props.children }
        </Content>
      </Container>
    )
  } 
}

export default ReportScreen
