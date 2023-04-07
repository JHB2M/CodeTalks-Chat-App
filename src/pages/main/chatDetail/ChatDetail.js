import {View, Text, FlatList} from 'react-native';
import styles from './ChatDetail.style';
import {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import Header from '../../../components/header/Header';
import FloatingButton from '../../../components/floatingButton/FloatingButton';
import ContentInputModal from '../../../components/modal/contentInput/ContentInputModal';
import auth from '@react-native-firebase/auth';
import parseContentData from '../../../utils/parseContentData';
import MessageCard from '../../../components/messageCard/MessageCard';
export default function ChatDetail({route,navigation}) {
  const item = route.params;
  const [isVisible, setIsVisible] = useState(false);
  const [contentList, setContentList] = useState([]);
  console.log(item.text);

  function sendContentFireBase(content) {
    const contentObj = {
      userName: auth().currentUser.email.split('@')[0],
      text: content,
      date: new Date().toISOString(),
    };
    database()
      .ref('rooms/' + item.id + '/messages')
      .push(contentObj);
  }
  function handleInputToggle() {
    setIsVisible(!isVisible);
  }
  function handleSendContent(content) {
    handleInputToggle();
    sendContentFireBase(content);
  }
  async function getData() {
    await database()
      .ref('rooms/' + item.id + '/messages')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  function navigateToBack(){
    navigation.goBack()
  }
  function signOut(){
    auth().signOut()
    navigation.navigate('Auth')
  }
  const renderData = ({item}) =><MessageCard  item={item}/>
  return (
    <View style={styles.container}>
      <Header text={item.text} onPressBack={navigateToBack} onPressOut={signOut}/>
      <View style={styles.body}>
        <View style={styles.welcomeView}>
          <Text style={styles.welcomeText}>{item.text}</Text>
          <Text style={styles.welcomeText}> odası kuruldu!</Text>
        </View>
        <FlatList 
        data={contentList}
        renderItem={renderData}
        />
        <FloatingButton onPress={handleInputToggle} />
        <ContentInputModal
          placeholderButton='Gönder'
          placeholderContent='Yorumunuzu Giriniz..'
          visible={isVisible}
          onSend={handleSendContent}
          onClose={handleInputToggle}
        />
      </View>
    </View>
  );
}
