import React, { Component } from 'react';
import { Image, Dimensions, FlatList, TouchableHighlight, Linking } from 'react-native';
import {
  Drawer,
  Container,
  Content,
  Header,
  Body,
  Title,
  Subtitle,
  Right,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  View,
  Thumbnail,
  ActionSheet,
  List,
  ListItem,
  Left
} from 'native-base';

import { banners, categories, commerce, BUTTONS } from '../data/dataArrays';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// Style
const styles = require('../../Styles');
const { width } = Dimensions.get('window');
const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  // main: {paddingLeft: 3},
}

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      activeSlideCategories: 0,
      activeFab: false,
      clicked: ''
    };
  };

  renderBanners = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.banners}>
        <Image style={styles.photoBanners} source={{ uri: item.photo_url }} />
      </View>
    </TouchableHighlight>
  );

  renderCategories = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.props.navigation.navigate('CategoryIndex')} >
      <View style={{height: 60, marginVertical: 5}}>
        <View style={styles.containerDashboard}>
          <Icon name={item.icon} />
          <Text style={styles.titleDashboard}>{item.name}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );

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

  closeDrawer = () => {
    this.drawer._root.close()
  };

  goLinksNavigation = (params) => {
    if (params == 'IndexTerms') {
      Linking.openURL('http://www.technologynic.com/')
    } else if (params == 'setting') {
      this.props.navigation.navigate('Setting')
    } else if (params == 'exit') {
      this.props.navigation.navigate('Home')
    } else if (params == 'WhatsApp') {
      Linking.openURL(`whatsapp://send?phone=+593978973576`)
    } else if (params == 'Profile') {
      this.drawer._root.open()
    } else if (params == 'Bookings') {
      this.props.navigation.navigate('BookingsIndex')
    } else if (params == 'Promotions') {
      this.props.navigation.navigate('PromotionsIndex')
    }
  }
  
  render(){
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={
          <Container style={{backgroundColor: '#000000f0'}}>
            <Content style={{padding: 10}}>
              <Body>
                <Thumbnail source={{ uri: 'https://tentulogo.com/wp-content/uploads/2017/07/mcdonalds-logo.jpg' }} />
                <Title>José Castellanos</Title>
                <Subtitle>cj.netdecastellanosjose@gmail.com</Subtitle>
              </Body>
              <List style={{marginTop:10}}>
                <ListItem icon onPress={() => this.goLinksNavigation('setting')} >
                  <Left>
                    <Button style={{ backgroundColor: "#FF9501" }}>
                      <Icon active type='AntDesign' name="setting" />
                    </Button>
                  </Left>
                  <Body>
                    <Text note>Configuración</Text>
                  </Body>
                  <Right />
                </ListItem>
                <ListItem icon onPress={() => this.goLinksNavigation('exit')}>
                  <Left>
                    <Button style={{ backgroundColor: "#007AFF" }}>
                      <Icon active name="exit" />
                    </Button>
                  </Left>
                  <Body>
                    <Text note>Cerrar sesión</Text>
                  </Body>
                  <Right />
                </ListItem>
              </List>
            </Content>
            <Button transparent iconLeft full block rounded style={{margin: 5}} onPress={() => this.goLinksNavigation('WhatsApp')} >
              <Icon type='FontAwesome' name='whatsapp' />
              <Text>Centro de ayuda</Text>
            </Button>
            <Button transparent full block rounded style={{margin: 5}} onPress={() => this.goLinksNavigation('IndexTerms')} >
              <Text style={{color: '#fff', textTransform: 'capitalize'}}>Versión: 1.0.0 Términos y condiciones</Text>
            </Button>
          </Container>
        }
        onClose={() => this.closeDrawer()}
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2.5-ratio)/2.5 }
        })}
      >
        <Container>
          <Header>
            <Body>
              <Title>Where...</Title>
              <Subtitle>Is a place</Subtitle>
            </Body>
            <Right>
              <Button
                transparent
                onPress={() =>
                ActionSheet.show(
                  {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                    title: "Búsqueda por Ciudad"
                  },
                  buttonIndex => {
                    this.setState({ clicked: BUTTONS[buttonIndex] });
                  }
                )}
              >
                <Icon name='search' />
              </Button>
            </Right>
          </Header>
          <View style={styles.container}>
            <View>
              <Carousel
                ref={c => {this.slider1Ref = c;}}
                data={banners}
                renderItem={this.renderBanners}
                sliderWidth={width}
                itemWidth={width}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                firstItem={0}
                loop={true}
                autoplay={true}
                autoplayDelay={300}
                autoplayInterval={5000}
                onSnapToItem={index => this.setState({ activeSlide: index })}
              />
              <Pagination
                dotsLength={banners.length}
                activeDotIndex={this.state.activeSlide}
                containerStyle={styles.paginationContainer}
                dotColor="rgba(255, 255, 255, 0.92)"
                dotStyle={styles.paginationDot}
                inactiveDotColor="white"
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                carouselRef={this.slider1Ref}
                tappableDots={!!this.slider1Ref}
              />
            </View>
            <View>
              <Text style={{padding: 10, backgroundColor: '#eee'}}>Categorias</Text>
              <Carousel
                layout={'default'}
                ref={c => {this.slider1Ref = c;}}
                data={categories}
                renderItem={this.renderCategories}
                sliderWidth={width}
                itemWidth={200}
                loop={true}
                onSnapToItem={index => this.setState({ activeSlideCategories: index })}
              />
            </View>
            <View style={{flex:1}}>
              {console.log('this.state.clicked',this.state.clicked.text)}
              <Text style={{padding: 10, backgroundColor: '#eee'}}>Comercios {this.state.clicked.text != undefined ? this.state.clicked.text != 'Cerrar' ? 'en ' + this.state.clicked.text : null : null }</Text>
              <FlatList
                vertical
                showsVerticalScrollIndicator={false}
                data={commerce}
                numColumns={2}
                renderItem={this.renderCommerce}
                keyExtractor={item => `${item.id}`}
              />
            </View>
          </View>
          <Footer>
            <FooterTab>
              <Button vertical onPress={() => this.goLinksNavigation('Profile')} >
                <Icon name="person" />
                <Text>Perfil</Text>
              </Button>
              <Button vertical onPress={() => this.goLinksNavigation('Bookings')} >
                <Icon type="FontAwesome5" name="calendar-check" />
                <Text>Reservas</Text>
              </Button>
              <Button vertical onPress={() => this.goLinksNavigation('Promotions')} >
                <Icon type="MaterialIcons" name="local-offer" />
                <Text>Promos</Text>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </Drawer>
    );
  }
}
