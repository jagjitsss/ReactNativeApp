import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    marginTop: 5,
    marginBottom: 5,
    bottom:0,
    marginLeft:5,
    marginRight:5,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    marginLeft: 10,
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    marginTop:15,
    
  },
  img_ :{
    color:'#000',
    marginTop:15,
    marginRight:10

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
    width:50,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
 
  
});

export default styles;
