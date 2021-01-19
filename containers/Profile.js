import React, {useEffect, useState} from 'react';
import styles from '../assets/styles';

import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import ProfileItem from '../components/ProfileItem';
import Icon from '../components/Icon';
import Demo from '../assets/data/demo.js';
import {fetchUserProfile} from '../actions/user.js';
import {startChat} from '../actions/interaction.js'; 
const Profile = ({route, navigation}) => {
  
  const [user, setUser] = useState(null)
  const [match, setMatch] = useState(null)
 
  useEffect(() => {
    
    
    if (route.params != undefined) {
      const {userProfile} = route.params
      const {originalId} = route.params
      setUser(userProfile)
      setMatch(originalId)
      console.log(user)
    }
    
    
  }, [])

  const makeChat = () => {
    startChat(match, user.uuid)
    .then(() => {
      navigation.navigate("Detail", {"userId":match, "targetId":user.uuid})
    })
  }
  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      <ScrollView style={styles.containerProfile}>
   
        {user && <ImageBackground source={{uri:user.userinfo.image}} style={styles.photo}>
          <View style={styles.top}>
            <TouchableOpacity>
              <Text style={styles.topIconLeft}>
                <Icon name="chevronLeft" />
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.topIconRight}>
                <Icon name="optionsV" />
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>}

        {user && <ProfileItem
          matches={80}
          name={user.name}
          age={user.userinfo.age}
          location={user.userinfo.location}
          info1={user.userinfo.demographic}
          info2={user.userinfo.passions}
          info3={user.userinfo.places}
          info4={"last seen " + user.userinfo.lastseen + " hrs ago"}
          userId={match}
        />}
        {user.uuid != match &&
        <View style={styles.actionsProfile}>
          <TouchableOpacity style={styles.circledButton}>
            <Text style={styles.iconButton}>
              <Icon name="optionsH" />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.roundedButton} onPress={makeChat}>
            <Text style={styles.iconButton}>
              <Icon name="chat" />
            </Text>
            <Text style={styles.textButton}>Start chatting</Text>
          </TouchableOpacity>


        </View>
        }



      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;
