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
  Card,
  CardItem,
  Item,
  Label,
  Input,
  Text,
  Content,
  View
} from 'native-base';

export default class Payment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  };

  createdReservation = () => {
    this.props.navigation.navigate('BookingsIndex');
    alert('Reserva solicitada exitosamente')
  }

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
            <Title>Método de pago</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Text style={{fontWeight:'bold', padding: 10, backgroundColor: '#eee'}}>Detalles de tu reserva</Text>
          <Text style={{padding: 10}}>Comercio: <Text note>Hotel Sebastean</Text></Text>
          <Text style={{padding: 10}}>Personas: <Text note>3</Text></Text>
          <Text style={{padding: 10}}>Entrada: <Text note>Diciembre 22 de 2020 - 2:49Hrs</Text></Text>
          <Text style={{padding: 10}}>Check-out: <Text note>Salida antes de las 10:00am</Text></Text>
          <View style={{padding: 10, backgroundColor: '#eee', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontWeight:'bold',}}>Forma de pago</Text>
            <Text style={{fontWeight:'bold', color:'#fa7911'}} >TOTAL: $3000</Text>
          </View>
          <Card>
            <CardItem>
              <Left>
                <Icon active name="person" />
                <Body>
                  <Item floatingLabel>
                    <Label>Nombre completo</Label>
                    <Input />
                  </Item>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Icon active name="card" />
                <Body>
                  <Item floatingLabel>
                    <Label>Número de tarjeta</Label>
                    <Input />
                  </Item>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Item floatingLabel>
                  <Label>EXP</Label>
                  <Input />
                </Item>
              </Left>
              <Right>
                <Item floatingLabel>
                  <Label>CVS</Label>
                  <Input />
                </Item>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Button full rounded style={{margin: 5}} onPress={this.createdReservation}>
          <Text>Solicitar reserva</Text>
        </Button>
      </Container>
    );
  }
}
