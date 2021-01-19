import React, {useEffect, useState} from 'react';
import styles from '../assets/styles';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList
} from 'react-native';
import CardItem from '../components/CardItem';
import Icon from '../components/Icon';
import Demo from '../assets/data/demo.js';
import {fetchUsers} from '../actions/user.js';
import {addMatch, addSpecial, getMatches} from '../actions/interaction.js';

const Matches = ({navigation}) => {

  const userId = "11111"
  const [matches, setMatches] = useState(null)
  useEffect(() => {
    if (matches == null) {
      getMatches(userId)
      .then((response) => {

        console.log(response)
        setMatches(response)
      })
    }
  })

  
  return (
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      <View style={styles.containerMatches}>
        <ScrollView>
          <View style={styles.top}>
            <Text style={styles.title}>Matches</Text>
            <TouchableOpacity>
              <Text style={styles.icon}>
                <Icon name="optionsV" />
              </Text>
            </TouchableOpacity>
          </View>
        { matches &&
          <FlatList
            numColumns={2}
            data={matches}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate("InsideProfile", {userProfile:item})}>
                <CardItem
                  image={item.userinfo.image}
                  name={item.name}
                  status={item.userinfo.status}
                  
                  variant
                />
              </TouchableOpacity>
            )}
          />
        }
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Matches;
