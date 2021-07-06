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
    marginLeft: 12,
    fontSize: 16,
  },

  
});

export default styles;
