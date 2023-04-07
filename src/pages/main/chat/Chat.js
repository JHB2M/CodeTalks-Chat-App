import {View, Text, Modal, FlatList} from 'react-native';
import styles from './Chat.style';
import FloatingButton from '../../../components/floatingButton/FloatingButton';
import ContentInputModal from '../../../components/modal/contentInput/ContentInputModal';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {useEffect, useState} from 'react';
import ChatRoomCard from '../../../components/chatRoomCard/ChatRoomCard';
import parseContentData from '../../../utils/parseContentData';

export default function Chat({navigation}) {
  const [inputModalVisible, setInputModalVisible] = useState();
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    database()
      .ref('rooms/')
      .on('value', snapshot => {
        const contentData = snapshot.val();

        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
        
      });
  }, []);
   
  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }
  function handleSendContent(content) {
    handleInputToggle();
    sendContentFireBase(content);
  }
  function sendContentFireBase(content) {
    const userMail = auth().currentUser.email;
    const contentObj = {
      text: content,
      username: userMail.split('@')[0],
      isHeader:false,
      messages:{
       
      }
    };
    database().ref('rooms/').push(contentObj);
    console.log(contentObj);
  }
  function navigateToChatRoom(item) {
    navigation.navigate('ChatDetailPage',item);
  }
  renderData = ({item}) => (
    <ChatRoomCard item={item} onPress={()=>navigateToChatRoom(item)} />
  );
  return contentList.length ? (
    <View style={styles.container}>
      <FlatList
        data={contentList}
        renderItem={renderData}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
      <FloatingButton onPress={handleInputToggle} />
      <ContentInputModal
        visible={inputModalVisible}
        onSend={handleSendContent}
        onClose={handleInputToggle}
      />
    </View>
  ) : (
    <View>
      <Text style={{fontSize: 25, marginLeft: 10}}>
        Uppsss Hiç Sohbet Odası Yok Hemen Bir Oda Olustur...
      </Text>
      <ContentInputModal
        placeholderButton="Olustur"
        placeholderContent='Oda Ismini Giriniz..'
        visible={inputModalVisible}
        onSend={handleSendContent}
        onClose={handleInputToggle}
      />
      <FloatingButton onPress={handleInputToggle} />
    </View>
  );
}
