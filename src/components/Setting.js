import React from 'react';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
  Text,
  Content,
  List,
  ListItem
} from 'native-base';

export default class Setting extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  };

  render(){
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Configuratión</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text style={{padding: 10, fontWeight:'bold', backgroundColor: '#eee'}}>Perfil</Text>
          <Text style={{padding: 10}}>José Castellanos</Text>
          <Text style={{padding: 10}}>neuralboot19@gmail.com</Text>
          <Text style={{padding: 10, fontWeight:'bold', backgroundColor: '#eee'}}>Forma de pago</Text>
          <List>
            <ListItem icon>
              <Left>
                <Button transparent >
                  <Icon active type='FontAwesome' name="credit-card" />
                </Button>
              </Left>
              <Body>
                <Text>XXX-3245</Text>
              </Body>
              <Right>
                <Icon active type='AntDesign' name="delete" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
