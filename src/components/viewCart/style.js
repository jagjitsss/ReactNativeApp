import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    btnClickContain: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
       
        backgroundColor: '#FFCC4E',
        borderRadius: 15,
        padding: 13,
        marginTop: 5,
        marginBottom: 5,
        position:'absolute',
        bottom:0,
        width:"92%",
        marginLeft:15,
        marginRight:15,
      },
      btnText: {
        fontSize: 20,
        color: '#000',
        marginLeft: 10,
        marginTop: 0,
      }
  
});

export default styles;
