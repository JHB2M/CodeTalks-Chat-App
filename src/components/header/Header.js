import {View,TouchableOpacity,Text,Image} from 'react-native'

import styles from './Header.style'
export default function Header({text,onPressBack,onPressOut}){
  const url1 = 'https://i.hizliresim.com/se67jxt.png'
  const url2 ='https://i.hizliresim.com/s2ks892.png'
  return(
    <View style = {styles.container}>
      <TouchableOpacity style = {styles.backArea} onPress={onPressBack} >
        <Image style = {styles.image1} source={{uri:url1}}/>
        <Text style   ={styles.backTitle}>Odalar</Text>
      </TouchableOpacity>
      <View style = {styles.headerArea}>
      <Text style = {styles.header}>{text}</Text>
      </View>
      <TouchableOpacity style = {styles.signOut} onPress={onPressOut}>
      <Image style = {styles.image2} source={{uri:url2}}/>
      
      </TouchableOpacity>
    </View>
  )
}