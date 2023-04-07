import {TouchableOpacity,Image} from 'react-native'
import styles from './FloatingButton.style'

url  = 'https://i.hizliresim.com/eh9z37l.png'
export default function FloatingButton({onPress}){
  return(
    <TouchableOpacity style  = {styles.container} onPress={onPress}>
      <Image style = {styles.image} source={{uri:url}}/>
    </TouchableOpacity>
  )
}