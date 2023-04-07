import {View,Text,TouchableOpacity} from 'react-native'
import styles from './ChatRoomCard.style'
export default function ChatRoomCard({item,onPress}){
  return(
    <TouchableOpacity style  ={styles.container} onPress={onPress}>
      <Text style = {styles.text}>{item.text}</Text>
    </TouchableOpacity>
  )
}