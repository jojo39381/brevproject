import React, { Component, useState, useEffect } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  PermissionsAndroid
} from 'react-native';


import { ChatScreen } from 'react-native-easy-chat-ui'
import { GiftedChat } from 'react-native-gifted-chat'
import {getMessages} from '../actions/messages.js'
import {addMessage} from '../actions/messages.js'
const MessageDetails = ({navigation, route}) => {

  const [state, setState] = useState([])
  
  const {userId, targetId} = route.params 
  
useEffect(() => {
    
    if (state.length == 0) {
        
        getMessages(userId, targetId)
        .then((response) => {
            setState(response)
            console.log(response)
        })
    }
}, [])
  
  const onSend = (messages = []) => {
    
    
    setState(previousState => (
        GiftedChat.prepend(previousState, messages[0])
      
    ))
    
    
    addMessage(messages, targetId)


  }

    return (
        <GiftedChat
          messages={state}
          onSend={messages => onSend(messages)}
          user={{
            _id: userId, name:"Joseph", avatar: "https://source.unsplash.com/1600x900/?person"
          }}
          inverted={false}
        />
      )
//     state = {
//         messages: [
//                {
//                  id: `1`,
//                  type: 'text',
//                  content: 'hello world',
//                  targetId: '12345678',
//                  chatInfo: {
//                    avatar: "https://source.unsplash.com/1600x900/?person",
//                    id: '12345678',
//                    nickName: 'Test'
//                  },
//                  renderTime: true,
//                  sendStatus: 0,
//                  time: '1542006036549'
//                },
//                {
//                  id: `2`,
//                  type: 'text',
//                  content: 'hi/{se}',
//                  targetId: '12345678',
//                  chatInfo: {
//                    avatar: "https://source.unsplash.com/1600x900/?person",
//                    id: '12345678',
//                    nickName: 'Test'
//                  },
//                  renderTime: true,
//                  sendStatus: 0,
//                  time: '1542106036549'
//                },
//                {
//                  id: `3`,
//                  type: 'image',
//                  content: {
//                    uri: 'https://upload-images.jianshu.io/upload_images/11942126-044bd33212dcbfb8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
//                    width: 100,
//                    height: 80,
//                  } ,
//                  targetId: '12345678',
//                  chatInfo: {
//                    avatar: "https://source.unsplash.com/1600x900/?person",
//                    id: '12345678',
//                    nickName: 'Test'
//                  },
//                  renderTime: false,
//                  sendStatus: 0,
//                  time: '1542106037000'
//                },
//                {
//                  id: `4`,
//                  type: 'text',
//                  content: '你好/{weixiao}',
//                  targetId: '88886666',
//                  chatInfo: {
//                    avatar: "https://source.unsplash.com/1600x900/?person",
//                    id: '12345678'
//                  },
//                  renderTime: false,
//                  sendStatus: 1,
//                  time: '1542177036549'
//                }
//              ],
//              // chatBg: require('../../source/bg.jpg'),
//              inverted: false,  // require
//              voiceHandle: true,
//              currentTime: 0,
//              recording: false,
//              paused: false,
//              stoppedRecording: false,
//              finished: false,
//              audioPath: '',
//              voicePlaying: false,
//              voiceLoading: false
//      }

//      const sendMessage = (type, content, isInverted) => {
//         console.log(type, content, isInverted, 'msg')
//       }
//     return (
//         <ChatScreen
//         ref={(e) => this.chat = e}
//         messageList={this.state.messages}
//         sendMessage={this.sendMessage}
//         isIPhoneX={true}
//       />
//     )
// }





 
    
  


}

export default MessageDetails;
