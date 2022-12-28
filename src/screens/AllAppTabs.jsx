import React, {useContext} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  ImageBackground,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {AppContext} from '../context/Context';
import Home from './Home';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionic from 'react-native-vector-icons/Ionicons';
import BoxingIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';

import ChatScreen from './ChatScreen';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: Colors.light.tint,
        height: 50,
        // borderRadius: 50,
        justifyContent: 'center',
        // alignItems: 'center',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              // flex: label === 'CHATS'? 1: 0,
              alignItems: 'center',
              // backgroundColor: 'red',
              marginHorizontal: 3,
              // margin: 1,
              borderBottomWidth:
                (isFocused)
                  ? 4
                  : 0,
              borderBottomColor: 'white',
              width:
                label === 'CHATS' || label === 'STATUS' || label === 'CALLS'
                  ? '28%'
                  : '16%',
            }}>
            {label === 'CHATS' || label === 'STATUS' || label === 'CALLS' ? (
              <Text
                style={{
                  marginTop: 10,
                  fontWeight: 'bold',
                  color: isFocused ? 'white' : Colors.light.tabIconDefault,
                }}>
                {label}
              </Text>
            ) : (
              <Entypo
                name="camera"
                color={isFocused ? 'white' : Colors.light.tabIconDefault}
                size={20}
                style={{marginTop: 12}} 
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const AllAppTabs = () => {
  const {viewState, setViewState} = useContext(AppContext);

  return (
    <>
      <View style={styles.mainHeader}>
        <Text style={styles.whatsapp}>WhatsApp</Text>

        <View style={styles.headerSubContainer}>
          <Ionic
            name="search"
            color={'white'}
            size={24}
            style={styles.headerIcon}
          />
          <Entypo
            name="dots-three-vertical"
            color={'white'}
            size={24}
            style={styles.headerIcon}
          />
        </View>
      </View>
      <View style={{height: '90%'}}>
        <NavigationContainer>
          <Tab.Navigator
            tabBar={props => <MyTabBar {...props} />}
            initialRouteName="CHATS"
            screenOptions={{
              headerShown: true,
              tabBarActiveTintColor: 'white',
              tabBarIndicatorStyle: {
                backgroundColor: 'white',
                height: 3,
              },
              tabBarStyle: {
                backgroundColor: Colors.light.tint,
              },
            }}>
            <Tab.Screen
              name="Camera"
              component={HomeScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Entypo name="camera" color={color} size={20} />
                ),
                tabBarLabel: () => (
                  <View style={{textAlign: 'center', width: 20}}></View>
                ),
              }}
            />
            <Tab.Screen name="CHATS" component={ChatScreen} />
            <Tab.Screen name="STATUS" component={SettingsScreen} />
            <Tab.Screen name="CALLS" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainHeader: {
    height: '10%',
    backgroundColor: Colors.light.tint,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerSubContainer: {
    flexDirection: 'row',
  },
  headerIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  whatsapp: {
    color: 'white',
    fontSize: 22,
  },
});

export default AllAppTabs;
