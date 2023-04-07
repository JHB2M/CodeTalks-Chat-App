import {StyleSheet} from 'react-native';
import colors from '../../style/colors';
export default StyleSheet.create({
  container: {
    margin: 20,
    height: 200,
    width: 150,
    borderWidth:0.5,
    borderColor:'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:colors.darkGreen,
    fontSize:35
  }
});
