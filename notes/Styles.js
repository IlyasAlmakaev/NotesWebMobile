import {
    StyleSheet
  } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    flatContainer :{
      // Setting up View inside content in Vertically center.
      justifyContent: 'center',
      flex:1,
      margin: 10
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    textField: {
      borderBottomColor: '#000000',
      borderBottomWidth: 1,
    },
    horisontalContent: {
      flex: 1, 
      flexDirection: 'row', 
      justifyContent: 'flex-start',
    }
  });