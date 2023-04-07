import {View,Text} from 'react-native'
import styles from './MessageCard.style'
import {formatDistance,parseISO} from 'date-fns'
import {tr} from 'date-fns/locale'
export default function MessageCard({item}){
  const formatDate = formatDistance(parseISO(item.date),new Date(),{
    addSuffix:true,
    locale:tr,
  })
  return(
    <View style = {styles.container}>
      <View style ={styles.topArea}>
        <Text style = {styles.name}>{item.userName}</Text>
        <Text style = {styles.date}>{formatDate}</Text>
      </View>
      <Text style = {styles.text}>{item.text}</Text>
    </View>
  )
}