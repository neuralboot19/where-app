import React from 'react';
import { FlatList } from 'react-native';
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
  Thumbnail,
  Text,
  View
} from 'native-base';

import { Promotions } from '../data/dataArrays';

// Style
const styles = require('../../Styles');

export default class IndexPromotions extends React.Component {

  renderPromotions = ({ item }) => (
    <List>
      <ListItem thumbnail>
        <Left>
          <Thumbnail square source={{ uri: item.photo_url }} />
        </Left>
        <Body>
          <Text>{item.name}</Text>
          <Text note numberOfLines={1}>{item.description}</Text>
        </Body>
        <Right>
          <Button transparent onPress={() => this.props.navigation.navigate('CommerceShow')}>
            <Text>Reservar</Text>
          </Button>
        </Right>
      </ListItem>
    </List>
  )

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
            <Title>Promotiones</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.container} >
          <View style={{flex:1}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={Promotions}
              renderItem={this.renderPromotions}
              keyExtractor={item => `${item.id}`}
            />
          </View>
        </View>
      </Container>
    );
  }
}
