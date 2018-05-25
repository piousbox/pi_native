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

class ReportScreen extends React.Component<Props, State> {
  render() {
    let r = this.props.item

    return (
      <Container >
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => {
                  this.props.navigation.navigate("DrawerOpen")
                }}
              />
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
