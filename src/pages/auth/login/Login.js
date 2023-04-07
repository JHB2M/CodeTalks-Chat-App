import {View, Text,TextInput} from 'react-native';
import styles from './Login.style';
import { Formik } from 'formik';
import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import {showMessage} from 'react-native-flash-message'
import auth from '@react-native-firebase/auth'
import { useEffect, useState } from 'react';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

export default function Login({navigation}) {
  const [user,setUser]  =useState()
  const [initializing,setInitializing] = useState(true)
  const initialFormValues={
    userMail:'',
    password:'',
  }
  useEffect(()=>{
    auth().onAuthStateChanged(user =>{
      setUser(!!user)
      if(user){
        navigation.navigate('Home')
      }
      else{
        return
      }
    })
  },[])


async function handleFormSubmit(formValues){
  try {
    await auth().signInWithEmailAndPassword(formValues.userMail,formValues.password)
    navigation.navigate('Home')
  } catch (error) {
    console.log(error.code)
    showMessage({
      
      message:authErrorMessageParser(error.code),
      type:'danger',
    })
  }

}

  function navigateToSignUp(){
    navigation.navigate('SignUpPage')
  }
  return (
    <View style = {styles.container}>
     <View style = {styles.headerArea}>
      <Text style = {styles.header}>codetalks</Text>
     </View>
     <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit} >
      {({values,handleChange,handleSubmit}) =>(

      
      <>
      <View style = {styles.body}>
        <Input onType ={handleChange('userMail')}  value = {values.userMail}placeholder="e posta adresinizi giriniz.."/>
        <Input onType ={handleChange('password')}  value = {values.password} placeholder="sifrenizi giriniz.."/>
      </View>
      <Button text="Giris Yap" theme = 'Primary' onPress={handleSubmit}/>
      </>)}
     </Formik>


      <View style = {styles.footer}>

          <Button text  = 'Kayıt Ol' theme = 'Secondary' onPress={navigateToSignUp}/>
      </View>
    </View>
  );
}
