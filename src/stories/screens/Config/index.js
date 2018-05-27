/**
 * screens / Config / index.js
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
import { NavigationActions } from 'react-navigation'
import styles from "./styles"

class ConfigScreen extends React.Component<Props, State> {
  render() {
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
            <Title>Config</Title>
          </Body>
          <Right />
        </Header>
        <Content style={{ padding: 10 }} >
          <ScrollView>
            <Text 
              style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', flex: 1 }}
            >Some config property</Text>
          </ScrollView>
          <Text>&nbsp;</Text>
        </Content>
      </Container>
    )
  } 
}

export default ConfigScreen
