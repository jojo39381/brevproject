import React, {useEffect, useState} from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from "./assets/styles";
import HomeScreen from "./containers/Home";
import MatchesScreen from "./containers/Matches";
import MessagesScreen from "./containers/Messages";
import MessageDetail from "./containers/MessageDetail";
import ProfileScreen from "./containers/Profile";
import Icon from "./components/Icon";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {fetchUserProfile} from './actions/user.js';
// const MatchesStack = createStackNavigator()
// function MatchesStacks(){
// 	return(
// 	  <MatchesStack.Navigator>
// 		<MatchesStack.Screen name={"Matches"}  component={MatchesScreen} options={{headerShown: false}}/>
// 	  </MatchesStack.Navigator>
// 	);
  
//   }

const Tab = createBottomTabNavigator()
const MatchesStack = createStackNavigator();
const MessagesStack = createStackNavigator();
const Stack = createStackNavigator();
const MatchesStackScreen = () => {
  return (
    <MatchesStack.Navigator>
      <MatchesStack.Screen name="Matches" component={MatchesScreen} />
      <MatchesStack.Screen name="Profile" component={ProfileScreen} />
    </MatchesStack.Navigator>
  )
}

const MessagesStackScreen = () => {
  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen name="Chat" component={MessagesScreen} />
      <MessagesStack.Screen name="Detail" component={MessageDetail} />
    </MessagesStack.Navigator>
    
  )
}
const getTabBarVisibility = (route) => {
  console.log("here")
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : '';

  if (routeName === 'Detail') {
    return false;
  }

  return true;
}
const BottomTab = (user) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{
				tabBarIcon: ({ focused }) => {    
          const iconFocused = focused ? "#7444C0" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
							<Icon name="explore" />
						</Text>
					);
        }
        }
			} initialParams={{userId:user.uuid}}/>

    <Tab.Screen name="Matches" component={MatchesScreen} options={{
				
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#7444C0" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
							<Icon name="heart" />
						</Text>
					);
				}
			}
			}/>

    <Tab.Screen name="Chat" component={MessagesScreen} options={{
			
       
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#7444C0" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
							<Icon name="chat" />
						</Text>
					);
				}
			}
			}/>

    <Tab.Screen name="Profile" component={ProfileScreen} options={{
				
			
			
				tabBarIcon: ({ focused }) => {
					const iconFocused = focused ? "#7444C0" : "#363636";
					return (
						<Text style={[styles.iconMenu, { color: iconFocused }]}>
							<Icon name="user" />
						</Text>
					);
				}
			
			}
			} initialParams={{userProfile:user, originalId:user.uuid}}/>










    </Tab.Navigator>
  )
}
// const BottomNavigation = createBottomTabNavigator(
// 	{
// 		Explore: {
// 			screen: HomeScreen,
// 			navigationOptions: {
// 				tabBarIcon: ({ focused }) => {
// 					const iconFocused = focused ? "#7444C0" : "#363636";
// 					return (
// 						<Text style={[styles.iconMenu, { color: iconFocused }]}>
// 							<Icon name="explore" />
// 						</Text>
// 					);
// 				}
// 			}
// 		},
// 		Matches: {
// 			screen: MatchesScreen,
// 			navigationOptions: {
// 				tabBarIcon: ({ focused }) => {
// 					const iconFocused = focused ? "#7444C0" : "#363636";
// 					return (
// 						<Text style={[styles.iconMenu, { color: iconFocused }]}>
// 							<Icon name="heart" />
// 						</Text>
// 					);
// 				}
// 			}
// 		},
// 		Chat: {
// 			screen: MessagesScreen,
// 			navigationOptions: {
// 				tabBarIcon: ({ focused }) => {
// 					const iconFocused = focused ? "#7444C0" : "#363636";
// 					return (
// 						<Text style={[styles.iconMenu, { color: iconFocused }]}>
// 							<Icon name="chat" />
// 						</Text>
// 					);
// 				}
// 			}
// 		},
// 		Profile: {
// 			screen: ProfileScreen,
// 			navigationOptions: {
// 				tabBarIcon: ({ focused }) => {
// 					const iconFocused = focused ? "#7444C0" : "#363636";
// 					return (
// 						<Text style={[styles.iconMenu, { color: iconFocused }]}>
// 							<Icon name="user" />
// 						</Text>
// 					);
// 				}
// 			}
// 		}
// 	},
// 	{
// 		tabBarOptions: {
// 			activeTintColor: "#7444C0",
// 			inactiveTintColor: "#363636",
// 			labelStyle: {
// 				fontSize: 14,
// 				textTransform: "uppercase",
// 				paddingTop: 10
// 			},
// 			style: {
// 				backgroundColor: "#FFF",
// 				borderTopWidth: 0,
// 				paddingVertical: 30,
// 				height: 60,
// 				marginBottom: 0,
// 				shadowOpacity: 0.05,
// 				shadowRadius: 10,
// 				shadowColor: "#000",
// 				shadowOffset: { height: 0, width: 0 }
// 			}
// 		}
// 	}
// );




// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }




function App() {
  const userId = "11111"
  const [user, setUser] = useState(null)
  useEffect(() => {
    fetchUserProfile(userId)
    .then((response) => {
      setUser(response)
      console.log(response)
    })
  }, [])
  const getBottom = () => {
    return BottomTab(user)
  }
  return (
    
    <NavigationContainer>
    {user ?
      <Stack.Navigator>
        <Stack.Screen name="HomeTab" component={getBottom} />
        <Stack.Screen name="Detail" component={MessageDetail} />
        <Stack.Screen name="InsideProfile" component={ProfileScreen} initialParams={{originalId:userId}} />
      </Stack.Navigator>
    : null}
    </NavigationContainer>
  );
}

export default App;