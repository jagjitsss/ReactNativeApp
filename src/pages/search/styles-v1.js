
import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 160;
const RECIPE_ITEM_MARGIN = 20;

const styles = StyleSheet.create({

title: {
    //flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 10,
    marginRight: 5,
    marginLeft: 5,
    },

  container: {
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 20,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 10,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 10,
    backgroundColor:"#fff",
    justifyContent: 'center',
    alignItems: 'center',
  },

  photo: {
  
    borderRadius: 5,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },


  serachInput:{
      backgroundColor:"#fff"
  },

  text: {
    marginLeft: 20,
    marginTop:10,
    fontSize: 16,
  }

  
  
});

export default styles;
