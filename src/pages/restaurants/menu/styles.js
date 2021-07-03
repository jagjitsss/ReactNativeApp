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
    marginBottom:20,
    marginTop:40,
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    
  },
  img_ :{
    marginTop:10,
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
    width:80,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
 
  
});

export default styles;
