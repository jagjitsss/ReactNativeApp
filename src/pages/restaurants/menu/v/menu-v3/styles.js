import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 1;
// item size
const RECIPE_ITEM_HEIGHT = 160;
const RECIPE_ITEM_MARGIN = 20;

const styles = StyleSheet.create({
 


    title:{
      fontWeight:"bold"
    },

  text: {
    marginLeft: 10,
    marginBottom:20,
    marginTop:40,
    color: "#000",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    
  },
  img_ :{
    marginTop:25,
    marginRight:10,
    color:'#000'

  },
  button_ :{
    borderRadius: 15,
    backgroundColor: "#F2F3F5",
    marginLeft:10,
    marginBottom: 6,
    textAlign: "center",
    padding:10,
    fontWeight: "normal",
    fontSize:19
  },
  row_: {
    position: 'absolute', 
    right: 0,
    width:80,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  btnClickContain_left: {
    flexDirection: "row",
    justifyContent:"space-around",
    width:"55%",
    backgroundColor: '#F2F3F5',
    marginLeft:0,
    height:50,
    borderRadius:10,
    padding:12,
    marginTop:20
    
  },


  container: {
    flex: 1,
    marginTop:10,
    backgroundColor:"#F6F6F6"
    
  },
  listItem:{
    margin:10,
    padding:20,
    width:"100%",
    height:150,
    flex:1,
    alignSelf:"center",
    flexDirection:"row",
    borderColor: '#EAEBEF',
    borderBottomWidth:0.5,
    justifyContent:"space-between",
    backgroundColor:"#fff"
  },

  price:{
      marginTop:35,
      marginLeft:5
  }
 
  
});

export default styles;
