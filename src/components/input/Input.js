import {View,TextInput,Text} from 'react-native'
import styles from './Input.style'
export default function Input({placeholder,onType,value}){
  return(
    <View style = {styles.container}>
      <TextInput style = {styles.input} onChangeText={onType} value={value} placeholder={placeholder}/>
     
    </View>
  )
}




