import {View,TouchableOpacity,Text} from 'react-native'
import styles from './Button.style'
export default function Button({text,theme = 'Primary',onPress}){

 
  return(
  theme  === 'Primary' ?  (
      <TouchableOpacity style = {styles.primary.container} onPress={onPress}>
      <Text style = {styles.primary.text}>{text}</Text>
    </TouchableOpacity>
 
    ):(
      <TouchableOpacity style = {styles.secondary.container} onPress={onPress}>
      <Text style = {styles.secondary.text}>{text}</Text>
    </TouchableOpacity>
 
    )
 )
}