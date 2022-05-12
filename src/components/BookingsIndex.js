import React from 'react';
import { FlatList, Modal } from 'react-native';
// Rating
import { AirbnbRating } from 'react-native-ratings';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
  List,
  ListItem,
  Item,
  Thumbnail,
  Text,
  View,
  Tabs,
  Tab,
  Input
} from 'native-base';

import { Bookings } from '../data/dataArrays';

export default class IndexBookings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalReview: false,
      reviewText: '',
      sendReviewStar: 4
    };
  };

  renderBookings = ({ item }) => (
    <List key={item.id} >
      <ListItem thumbnail >
        <Left>
          <Thumbnail square source={{ uri: item.photo_url }} />
        </Left>
        <Body>
          <Text>{item.name}</Text>
          <Text numberOfLines={1}>Personas <Text note>{item.person}</Text></Text>
          <Text numberOfLines={1}>Entrada <Text note>{item.date_time_arrival}</Text></Text>
        </Body>
        <Right>
          <Button transparent onPress={() => this.props.navigation.navigate('CommerceShow')}>
            <Text>Ver detalles</Text>
          </Button>
        </Right>
      </ListItem>
    </List>
  )

  renderBookingsFinished= ({ item }) => (
    <List key={item.id} >
      <ListItem thumbnail >
        <Left>
          <Thumbnail square source={{ uri: item.photo_url }} />
        </Left>
        <Body>
          <Text>{item.name}</Text>
          <Text numberOfLines={1}>Personas <Text note>{item.person}</Text></Text>
          <Text numberOfLines={1}>Entrada <Text note>{item.date_time_arrival}</Text></Text>
        </Body>
        <Right>
          <Button full block rounded info onPress={() => this.setState({modalReview: true})}>
            <Text>Calificar</Text>
          </Button>
        </Right>
      </ListItem>
    </List>
  );

  ratingCompleted = (rating) => (
    this.setState({ sendReviewStar: rating })
  );

  onChangeInputReview = (text) => (
    this.setState({reviewText: text})
  );

  bookingsFinishedModal = () => (
    console.log('==== Aqui envia a la API ====', this.state.sendReviewStar),
    console.log('==== Aqui envia a la API ====', this.state.reviewText),
    this.props.navigation.navigate('Dashboard'),
    alert('Gracias por tu calificación')
  );

  render(){
    return (
      <Container>
        <Header hasTabs >
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Dashboard')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Tus Reservas</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab heading="Activas">
            <View style={{flex:1}}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={Bookings}
                renderItem={this.renderBookings}
                keyExtractor={item => `${item.id}`}
              />
            </View>
          </Tab>
          <Tab heading="Finalizadas">
            <View style={{flex:1}}>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={Bookings}
                renderItem={this.renderBookingsFinished}
                keyExtractor={item => `${item.id}`}
              />
            </View>
          </Tab>
        </Tabs>
        <Modal animated transparent visible={this.state.modalReview} >
          <View style={{flex:1, backgroundColor:'rgba(0,0,0,0.5)', padding:10, justifyContent:'center',alignItems:'center'}} >
            <View style={{backgroundColor:'#fff', borderRadius:5}}>
              <View style={{alignItems:'center', marginTop:10}}>
                <Thumbnail source={{ uri: 'https://tentulogo.com/wp-content/uploads/2017/07/mcdonalds-logo.jpg' }} />
                <Text>McDonalds</Text>
              </View>
              <AirbnbRating
                count={5}
                reviews={['Terrible', 'Malo', 'Regular', 'Bueno', 'Excelente']}
                defaultRating={4}
                onFinishRating={this.ratingCompleted}
              />
              <View style={{margin: 10}}>
                <Item rounded>
                  <Input
                    placeholder='Que opinas de McDonalds?'
                    keyboardType='default'
                    maxLength={50}
                    onChangeText={text => this.onChangeInputReview(text)}
                    value={this.state.reviewText}
                  />
                </Item>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Button full transparent block rounded style={{margin: 5}} onPress={() => this.setState({modalReview: false})} >
                  <Text>Cerrar</Text>
                </Button>
                <Button full transparent block rounded style={{margin: 5}} onPress={() => this.bookingsFinishedModal()} >
                  <Text>Enviar Calificación</Text>
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </Container>
    );
  }
}
