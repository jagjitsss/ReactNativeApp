import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({

  title: {
    marginLeft: 15,
    marginBottom:0,
    marginTop:20,
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    position:'absolute',
    top:0,
    right: 0,
    left:0
  },
  textTitle: {
    marginLeft: 15,
    marginBottom:20,
    marginTop:25,
    color: "#5E5E5E",
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "left",
    
  },
  extrasmalltext: {
    marginLeft: 15,
    marginTop:20,
    color: "#444444",
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "left",    
  },
  smalltext: {
    marginLeft: 42,
    marginBottom:1,
    marginTop:0,
    color: "#444444",
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "left",
  },
  icon_:{
    marginRight:0,
    marginTop:0,
        overflow: 'hidden',
     },
  btnClickContain_right: {
    width:"90%",
    marginRight :10,
    backgroundColor: '#FFCC4E',
    marginLeft:15,
    height:60,
    borderRadius:15,
    padding:13,
    marginTop:50,
    marginBottom:20,
    textAlign:'center'
  },
  btnText: {
    fontSize: 20,
    color: '#000',
    marginLeft: 10,
    marginTop: 2,
    textAlign: "center",
  },
  
 
  
});

export default styles;
