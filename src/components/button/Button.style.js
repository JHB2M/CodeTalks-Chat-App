import {StyleSheet} from 'react-native';
import colors from '../../style/colors';
const base_style = StyleSheet.create({
  container: {
    borderRadius:7,
    height:40,
    padding:5,
    margin:10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: colors.darkGreen,
    height: 50,
  },
  text:{
    fontSize:21,
    color:'white',
    
    fontWeight:'bold',
  }
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.darkGreen,
    },
    text: {
      ...base_style.text,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container:{
      ...base_style.container,
      backgroundColor:'white',
      

    },
    text:{
      ...base_style.text,
      color:colors.darkGreen,
    }
  }),
};
