import React, {useState} from 'react';
import styles from '../assets/styles';

import { Text, View, TextInput} from 'react-native';
import Icon from './Icon';
import updateProfile from '../actions/user.js'
const ProfileItem = ({
  age,
  info1,
  info2,
  info3,
  info4,
  location,
  matches,
  name,
  userId,
}) => {
  const [text1, setText1] = useState(info1)
  const [text2, setText2] = useState(info2)
  const [text3, setText3] = useState(info3)
  
  const [editable, setEditable] = useState(true)

  return (
    <View style={styles.containerProfileItem}>
      <View style={styles.matchesProfileItem}>
        <Text style={styles.matchesTextProfileItem}>
          <Icon name="heart" /> {matches}% Match!
        </Text>
      </View>

      <Text style={styles.name}>{name}</Text>

      <Text style={styles.descriptionProfileItem}>
        {age} - {location}
      </Text>
      
      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon name="user" />
        </Text>
        
          <TextInput
        style={styles.infoContent}
        value={text1}
        onChangeText={input => setText1(input)}
        editable={editable}
        onBlue={() => {updateProfile(userId, "demographic", text1)}}
      />
      
        
        
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon name="circle" />
        </Text>
        <TextInput
        style={styles.infoContent}
        value={text2}
        onChangeText={input => setText2(input)}
        editable={editable}
        onBlue={() => {updateProfile(userId, "passions", text2)}}
      />
      
        
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon name="hashtag" />
        </Text>
        <TextInput
        style={styles.infoContent}
        value={text3}
        onChangeText={input => setText3(input)}
        editable={editable}
        onBlue={() => {updateProfile(userId, "places", text3)}}
      />
      </View>

      <View style={styles.info}>
        <Text style={styles.iconProfile}>
          <Icon name="calendar" />
        </Text>
        <Text style={styles.infoContent}>{info4}</Text>
      </View>
    </View>
  );
};

export default ProfileItem;
