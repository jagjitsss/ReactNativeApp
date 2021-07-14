import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    marginLeft: 10,
    marginBottom:0,
    marginTop:20,
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    
  },
  smalltext: {
    marginLeft: 10,
    marginBottom:20,
    marginTop:0,
    color: "#444444",
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "left",
    
  },
  headingtext: {
    marginLeft: 10,
    marginBottom:15,
    marginTop:0,
    color: "#000",
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "left",
    
  },
  flexDirection_:{
    flexDirection: 'row',
    justifyContent:'space-between', 
    alignItems:'center',
  },

  btnClickContain_left: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width:"95%",
    marginRight :10,
    backgroundColor: '#C5C6C8',
    alignSelf: 'stretch',
    marginLeft:15,
    height:60,
    borderRadius:15,
    padding:20,
    marginBottom:10
    
  },
  btnClickContain_right: {
    flexDirection: "row",
    justifyContent: 'space-between',
    width:"90%",
    marginRight :10,
    backgroundColor: '#FFCC4E',
    alignSelf: 'stretch',
    marginLeft:15,
    height:60,
    borderRadius:15,
    padding:13,
    
  },
  btnText: {
    fontSize: 20,
    color: '#000',
    marginLeft: 10,
    marginTop: 2,
    
  }
  

 
 
  
});

export default styles;
