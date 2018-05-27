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
  Image,
} from 'react-native'
export interface Props {
  navigation: any;
  list: any;
}
import HTML from 'react-native-render-html'
import { NavigationActions } from 'react-navigation'
import styles from "./styles"

class ReportScreen extends React.Component<Props, State> {
  render() {
    let r = this.props.item
    // console.log('+++ ReportScreen:', this.props)

    return (
      <Container style={styles.container} >
        <Header>
          <Left style={{ flex: 0, flexDirection: 'row' }}>
            <Button transparent
              onPress={() => {
                  this.props.navigation.navigate("DrawerOpen")
                }}>
              <Icon active name="menu" />
            </Button>
          </Left>
          <Body>
            { /* <Title>Read Report</Title> */ }
          </Body>
          <Right />
        </Header>
        <Content style={{ padding: 10 }} >
          <ScrollView>
            <Text 
              style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', flex: 1 }}
            >{r.name}</Text>
            <Image source={{ uri: r.photo_url }} resizeMode={'contain'} 
              style={{ width: '100%', height: 250 }} />
            <HTML html={r.description} imagesMaxWidth={Dimensions.get('window').width} />
          </ScrollView>
          { this.props.children }
          <Text>&nbsp;</Text>
        </Content>
      </Container>
    )
  } 
}

export default ReportScreen
