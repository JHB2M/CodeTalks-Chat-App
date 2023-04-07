import {View,Text,TextInput} from 'react-native'
import styles from './ContentInputModal.style'
import Modal from 'react-native-modal'
import Button from '../../button/Button'
import {useState} from 'react'
export default function ContentInputModal({visible,onSend,onClose,placeholderContent,placeholderButton}){
  const [text,setText]  = useState()
  console.log(placeholderButton,placeholderContent)
  function handleSend(){
    if(!text){
      return
    }
    else{
      
      onSend(text)
      setText(null)
    }
  }

  return(
    <Modal 
    style = {styles.modal}
    swipeDirection='top'
    isVisible  ={visible}
    onSwipeComplete={onClose}
    onBackdropPress={onClose}
    onBackButtonPress={onClose}
    >
      <View style = {styles.container}>
        <View style = {styles.inputContainer}>
            <TextInput
            style = {styles.input}
            placeholder={placeholderContent}
            onChangeText={setText}
            
            />
        </View>
        <Button text={placeholderButton} onPress={handleSend}/>
      </View>
    </Modal>
  )
}