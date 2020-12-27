import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 140;
const RECIPE_ITEM_MARGIN = 10;

module.exports = StyleSheet.create({
  container: { // Used in various component
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  // Home
  imageBackgroundHome: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  logo: {
    width: '100%',
    height: 200
  },
  contentHome: {
    backgroundColor: '#000000a0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingTop: 30
  },
  title: {
    fontSize: 38
  },
  // End Home
  // Dashboard
  banners: {
    justifyContent: 'center',
    width: width,
    height: 140
  },
  photoBanners: {
    height: 140,
    width: width,
    resizeMode: 'cover'
  },
  containerDashboard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: RECIPE_ITEM_MARGIN,
    // margin: 10,
    // width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    // height: RECIPE_ITEM_HEIGHT + 60,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 8
  },
  containerDashboardCommerce: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginVertical: 10,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    // height: RECIPE_ITEM_HEIGHT - 10,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 8
  },
  photoCommerce: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT - 30,
    borderRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  titleDashboard: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  paginationContainer: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'center',
    paddingVertical: 8,
    marginTop: 110
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0
  },
});
