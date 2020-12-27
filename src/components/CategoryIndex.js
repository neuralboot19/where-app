import React from 'react';
import { FlatList, TouchableHighlight, Image } from 'react-native';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Subtitle,
  Right,
  View,
  Text
} from 'native-base';

import { commerce } from '../data/dataArrays';

// Style
const styles = require('../../Styles');

export default class IndexCategory extends React.Component {

  renderCommerce = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.props.navigation.navigate('CommerceShow')} >
      <View style={styles.containerDashboardCommerce}>
        <Image style={styles.photoCommerce} source={{ uri: item.photo_url }} />
        <View style={{flexDirection:'row', alignItems:'center'}} >
          <View style={{marginHorizontal:5}}>
            <Icon type="AntDesign" name="calendar" />
          </View>
          <View>
            <Text>{item.name}</Text>
            <Text style={{color: '#fa7911'}} >Reserva</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );

  render(){
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Dashboard')}>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Categoria</Title>
            <Subtitle>Nombre Categoria</Subtitle>
          </Body>
          <Right />
        </Header>
        <View style={{flex:1}}>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            data={commerce}
            numColumns={2}
            renderItem={this.renderCommerce}
            keyExtractor={item => `${item.id}`}
          />
        </View>
      </Container>
    );
  }
}
