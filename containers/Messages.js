import React, {useEffect, useState} from 'react';
import styles from '../assets/styles';
import {getChats} from '../actions/interaction.js'
import {
  ScrollView,
  Text,
  TouchableOpacity,
  ImageBackground,
  View,
  FlatList
} from 'react-native';
import Message from '../components/Message';
import Icon from '../components/Icon';
import Demo from '../assets/data/demo.js';



const Messages = ({navigation}) => {
  const [chats, setChats] = useState([])
  useEffect(() => {
    getChats("11111")
    .then((response) => {
      setChats(response)
      console.log(response)
    })
  }, [])
  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      <View style={styles.containerMessages}>
        <ScrollView>
          <View style={styles.top}>
            <Text style={styles.title}>Messages</Text>
            <TouchableOpacity>
              <Text style={styles.icon}>
                <Icon name="optionsV" />
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={chats}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => {navigation.navigate("Detail", {"userId":item.userId, "targetId":item.targetId})}}>
                <Message
                  image={item.image}
                  name={item.name}
                  lastMessage={item.lastMessage}
                />
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Messages;
