import { StyleSheet,  } from 'react-native';

const styles = StyleSheet.create({
  

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15,
    marginTop:10,
    marginLeft:15,
    marginRight:15,
    backgroundColor:"#EFEFF4"

  },
  textTitle: {
    marginLeft: 15,
    marginBottom:0,
    marginTop:20,
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    
  },
  text: {
    margin: 3,
    color: "#000",
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "left",
    height:50,
    width:100,
    padding:12,
    borderRadius:13,
    textAlign:"center"

  },
  extrasmalltext: {
    marginLeft: 15,
    marginTop:20,
    marginBottom:10,
    color: "#444444",
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "left",
    textTransform:"uppercase"
  },
  smalltext: {
    marginLeft: 15,
    marginBottom:30,
    marginTop:0,
    color: "#444444",
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "left",
    
  },
  btnClickContain_right: {
    width:"90%",
    marginRight :10,
    backgroundColor: '#FFCC4E',
    marginLeft:15,
    height:60,
    borderRadius:15,
    padding:13,
    marginTop:45,
    marginBottom:20
  },

  
  btnText: {
    fontSize: 20,
    color: '#000',
    marginLeft: 10,
    marginTop: 2,
    textAlign: "center",
    
  }
  

 
 
  
});

export default styles;
