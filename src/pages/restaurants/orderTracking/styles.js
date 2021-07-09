import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  copyText:{
    backgroundColor:"#FFCC4E",
    color:"#000",
    height:40,
    width:80,
    padding:10,
    textAlign:"center",
    textTransform:"uppercase",
    borderRadius:15,
    fontSize:17
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15,
    marginTop:50,
    marginLeft:15,
    marginRight:15,
    padding:10,
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
    height:40,
    width:100,
    padding:12,
    borderRadius:13,
    textAlign:"center"
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
    marginLeft: 36,
    marginBottom:1,
    marginTop:0,
    color: "#444444",
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "left",
  },
  extrasmalltext1:{
    color: "#444444",
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "left",
    marginLeft:5,
  },
  smalltext1: {
    marginTop:5,
    marginLeft:5,
    color: "#444444",
    fontSize: 18,
    fontWeight: "normal",
    textAlign: "left",
  },
  icon_:{
    marginRight:0,
    
  },
  photo: {
    height:50,
    width:50,
  }

  
});

export default styles;
