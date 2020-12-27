import React from 'react';
import { Image, Dimensions, TouchableHighlight, FlatList, SafeAreaView, ScrollView } from 'react-native';
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
  View,
  Subtitle,
  Form,
  Item,
  Input
} from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
import 'moment/locale/es';

import { banners, dataServicesCommerce } from '../data/dataArrays';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// Style
const styles = require('../../Styles');
const { width } = Dimensions.get('window');

export default class CommerceShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      textDate: '',
      date: new Date(),
      mode: new Date(),
      show: false,
      person: 0
    };
  };

  renderBanners = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.banners}>
        <Image style={styles.photoBanners} source={{ uri: item.photo_url }} />
      </View>
    </TouchableHighlight>
  );

  servicesCommerce = ({ item }) => (
    <View key={item.id} style={{ alignItems: 'center', marginHorizontal: 5}}>
      <Icon type={item.typeIcon} name={item.icon} />
      <Text note>{item.name}</Text>
    </View>
  );

  onChangeInputPerson = (e) => {
    if (e >= 1) {
      this.setState({person: e})
    } else {
      this.setState({person: ''})
      alert('No es un caractar valido, ingrese solo número y mayor a cero(0), tampoco puede estar vacío');
    }
  };

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    const textTime = this.formatTime(selectedDate);
    const currentTime = this.formatTime(new Date());
    if (textTime == currentTime && this.state.mode == 'date') {
      this.setState({date: currentDate, textDate: currentDate, mode: 'time'});
    } else {
      this.setState({date: currentDate, textDate: currentDate, show: false})
    }
  };

  formatDate = (date) => {
    if(date != null) {
      const months = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
      ]
      const newDate = new Date(date), month = newDate.getMonth();
      var formattedDate = months[month] + " " + newDate.getDate() + " de " + newDate.getFullYear();
      return formattedDate;
    } else {
      return '';
    }
  };

  formatTime = (date) => {
    if(date != null) {
      const newDate = new Date(date);
      var formattedTime = newDate.getHours() + ":" + newDate.getMinutes() + "Hrs";
      return formattedTime;
    } else {
      return '';
    }
  };

  showMode = (currentMode) => {
    this.setState({
      show:true,
      mode:currentMode
    });
  };

  showDatepicker = () => {
    this.showMode('date')
  };

  showTimepicker = () => {
    this.showMode('time');
  };

  finalizeReservation = () => {
    if (this.validated()){
      this.props.navigation.navigate('Payment')
    }
  };

  validated = () => {
    let value = true
    let textTime = this.formatTime(this.state.textDate);
    let currentTime = this.formatTime(new Date());
    let currentTimeMoment = Moment().add(2, 'h').format('hh');
    let currentTimeSum = new Date(this.state.textDate);
    console.log('Necesito ver esto por la mañana ===>>>>>>', currentTimeSum.getHours(), " ==>>>>", currentTimeMoment)
    if (this.state.person < 1) {
      alert('Coloque cantidad de persona valida')
      value = false
    } else if (this.state.textDate == '') {
      alert('Seleccione Fecha y Hora')
      value = false
    } else if (textTime == currentTime) {
      alert('Debe seleccionar una hora diferente a la actual')
      value = false
    }
    // else if (currentTimeSum.getHours() < currentTimeMoment) {
    //   alert('Actualice su hora. Debe ser 2 horas despues de la actual')
    //   value = false
    // }
    return value
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
            <Title>Comercio</Title>
            <Subtitle>
              <Icon name='star' style={{fontSize: 14}} type='FontAwesome' />
              <Icon name='star' style={{fontSize: 14}} type='FontAwesome' />
              <Icon name='star' style={{fontSize: 14}} type='FontAwesome' />
              <Icon name='star-half-o' style={{fontSize: 14}} type='FontAwesome' />
              <Icon name='star-o' style={{fontSize: 14}} type='FontAwesome' />
            </Subtitle>
          </Body>
          <Right />
        </Header>
        <SafeAreaView style={styles.container}>
          <ScrollView>
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
            <Text style={{fontWeight:'bold', padding: 10, backgroundColor: '#eee'}}>Servicios</Text>
            <View style={{flexDirection:'row', margin:10}}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={dataServicesCommerce}
                renderItem={this.servicesCommerce}
                keyExtractor={item => `${item.id}`}
              />
            </View>
            <Text style={{fontWeight:'bold', padding: 10, backgroundColor: '#eee'}}>Ubicación</Text>
            <Text style={{padding: 10}}>Serctor La Punta, GUAYAS - MONTAÑITAS</Text>
            <Text style={{fontWeight:'bold', padding: 10, backgroundColor: '#eee'}}>Políticas</Text>
            <Text style={{padding: 10}}>Check-out: <Text note>Salida antes de las 10:00am</Text></Text>
            <Text style={{padding: 10}}>Información: <Text note>La tasa del complejo turístico deberá abonarse al realizar la entrada o la salida y puede incluir los siguientes cargos: tasa del servicio de portería, impuesto de servicio municipal, cargo de servicio y seguro del hotel.</Text></Text>
          </ScrollView>
        </SafeAreaView>
        <Form style={{backgroundColor: '#eee', margin: 5, borderRadius: 25}}>
          <View style={{flexDirection: 'row'}}>
            <Left>
              <Text note style={{marginLeft:20}}>Cuantas personas?</Text>
            </Left>
            <Right>
              <Item rounded>
                <Icon active name='person' />
                <Input
                  placeholder='Ingrese cantidad'
                  keyboardType='numeric'
                  maxLength={2}
                  onChangeText={text => this.onChangeInputPerson(text)}
                  value={this.state.person}
                />
              </Item>
            </Right>
          </View>
          <Text note style={{marginHorizontal: 22, marginTop: 10}} >Fecha y Hora de Entrada</Text>
          <View style={{flexDirection: 'row', margin: 5}}>
            <Left>
              <Button transparent onPress={this.showDatepicker}>
                <Text>{this.state.textDate == '' ? 'Seleccione Fecha' : this.formatDate(this.state.date)}</Text>
              </Button>
            </Left>
            {this.state.textDate != '' ?
              <Right>
                <Button transparent onPress={this.showTimepicker}>
                  <Text>{this.state.textDate == '' ? 'Seleccione Hora' : this.formatTime(this.state.date)}</Text>
                </Button>
              </Right>
            : null}
          </View>
          <Button full block rounded onPress={this.finalizeReservation} >
            <Text>Solicitar Reserva por $30</Text>
          </Button>
          {this.state.show ? 
            <DateTimePicker
              testID="dateTimePicker"
              value={this.state.date}
              mode={this.state.mode}
              display="default"
              minimumDate={new Date()}
              maximumDate={new Date(2099, 12, 31)}
              onChange={this.onChange}
              // is24Hour={true} 
            /> : null
          }
        </Form>
      </Container>
    );
  }
}
