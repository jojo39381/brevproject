import React, {useEffect, useState} from 'react';
import { View, ImageBackground } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import City from '../components/City';
import Filters from '../components/Filters';
import CardItem from '../components/CardItem';
import styles from '../assets/styles';
import Demo from '../assets/data/demo.js';
import {fetchUsers} from '../actions/user.js';
import {addMatch, addSpecial} from '../actions/interaction.js';
const Home = ({navigation, route}) => {
  const {userId} = route.params
  const [users,setUsers] = useState([])
  const [special, setSpecial] = useState(false)
  useEffect(() => {
    
    
    
    
    if (users.length == 0) {
      console.log("asdasd")
      fetchUsers(userId)
      .then((response) => {
        
        setUsers(response)
      
      })
    }
   
    


  }, [])




  return ( 
    <ImageBackground
      source={require('../assets/images/bg.png')}
      style={styles.bg}
    >
      <View style={styles.containerHome}>
        <View style={styles.top}>
          <City />
          <Filters />
        </View>

        <CardStack
          loop={false}
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={swiper => (this.swiper = swiper)}
         
        >
        

           {users && users.map((item, index) => (
            <Card key={index} onSwipedRight={() => {
              if (special) {
                addSpecial(userId, item.uuid)
              }
              else {
                console.log("hahaha")
                console.log(item.uuid)
                addMatch(userId, item.uuid)
              }
              setSpecial(false)

              
            }}>
              <CardItem
                image={item.userinfo.image}
                name={item.name}
                description={item.description}
                
                status={item.userinfo.status}
                actions
                onPressLeft={()=> this.swiper.swipeLeft()}
                onPressRight={() => {
                  
                  this.swiper.swipeRight()
                  }}
                onSpecial={() => {
                  setSpecial(true)
                  this.swiper.swipeRight()
                }}

                
              />
            </Card>
          ))}
        </CardStack>
      </View>
    </ImageBackground>
  );
};

export default Home;
