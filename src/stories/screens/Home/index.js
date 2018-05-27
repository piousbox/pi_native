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
} from "native-base";

import styles from "./styles"
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
class Home extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left style={{ flex: 0, flexDirection: 'row' }} >
            <Button transparent
              onPress={() => {
                  this.props.navigation.navigate("DrawerOpen")
                  // this.props.navigation.navigate("Sidebar")
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
          <List>
            {this.props.list.map((item, i) => (
              <ListItem
                key={i}
                onPress={() =>
                  this.props.navigation.navigate("Report", {
                    name: { item }
                  })}
              >
                <Text>{item}</Text>
              </ListItem>
            ))}
          </List>
          { this.props.children }
        </Content>
      </Container>
    );
  }
}

export default Home;
