import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  
  title: {
    marginLeft: 15,
    marginBottom:0,
    marginTop:20,
    color: "#000",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "left",
    position:'absolute',
    top:0,
    right: '40%'
  },
  textb:{
   fontWeight:"bold",
   textAlign:"center",
   fontSize:17
  }, 
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
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15,
    marginTop:10,
    marginLeft:15,
    marginRight:15

  },
  text: {
    fontSize: 16,
  },
  
});

export default styles;
