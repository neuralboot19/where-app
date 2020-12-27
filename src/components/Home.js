import React from 'react';
import { ImageBackground, Image } from 'react-native';
import { View, Title, Subtitle, Text, Button } from 'native-base';

// Style
const styles = require('../../Styles');

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    return (
      <ImageBackground source={require('../../assets/background.jpg')} style={styles.imageBackgroundHome}>
        <View style={styles.container}>
          <View style={styles.contentHome}>
            <Title style={styles.title}>Where...</Title>
            <Subtitle>Is a place</Subtitle>
          </View>
          <Button full rounded onPress={() => this.props.navigation.navigate('Dashboard')} style={{backgroundColor:'#1977f2', margin: 10}}>
            <Image source={require('../../assets/logo_facebook.png')} style={{width: 35, height: 35}} />
            <Text>Continua con facebook</Text>
          </Button>
        </View>
      </ImageBackground>
    );
  }
}
