import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 1;
// item size
const RECIPE_ITEM_HEIGHT = 160;
const RECIPE_ITEM_MARGIN = 20;

export const HomeStyle = StyleSheet.create({


  headingcontainer: {
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 20,
    borderColor: '#cccccc',
    
  },
  headingings: {
    fontWeight: 'bold', 
    fontSize: 22,
    color:"#000"
    
  },
  topHeading: {
    fontWeight: 'bold', 
    fontSize: 18,
    color:"#FFCC4E"
    
  },
  CategoryContainer: {
    marginLeft: 10,
    marginTop: 20,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / 3,
    height: 110,
    borderColor: '#cccccc',
  },

  Promocontainer: {
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 20,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / 1.04,
    height: 165,
    marginRight: 2,
  },
  promImg: {
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 20,
  },

  container: {
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 20,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 60,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#444444',
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
  },
  fulltitle: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#444444',
    marginTop: 5,
    marginRight: 5,
  },
  category: {
    marginTop: 5,
    marginRight: 5,
    marginLeft: 5,
    marginBottom: 0,
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#6B6B6B',
  }
});
