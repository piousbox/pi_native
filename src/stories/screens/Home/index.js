/**
 * screens / Home
 */

import * as React from "react";
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
import { Image, ScrollView, } from 'react-native'

import styles from "./styles"
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
  render() {
    console.log('+++ HomeScreen:', this.props)
    return (
      <Container style={styles.container}>
        <Header>
          <Left style={{ flex: 0, flexDirection: 'row' }} >
            <Button transparent
              onPress={() => {
                  this.props.navigation.navigate("DrawerOpen")
                }}>
              <Icon
                active
                name="menu"
              />
            </Button>
          </Left>
          <Body style={{ width: '100%' }} >
            <Title>Piousbox News</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <ScrollView>{ this.props.children }</ScrollView>
          <Text>&nbsp;</Text>
        </Content>
      </Container>
    );
  }
}

export default Home;
