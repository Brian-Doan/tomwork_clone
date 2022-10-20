import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Home} from '../../../Home/components';
import {QuyTrinh} from '../../../QuyTrinh/components';
import {LichHen} from '../../../LichHen/components';
import {ThongTinCaNhan} from '../../../ThongTinCaNhan/components';

const BottomTabNavigator = createBottomTabNavigator();

const TabNavigators = () => {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Của tôi') {
            iconName = focused ? 'home-filled' : 'home-filled';
            return <MaterialIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Quy trình') {
            iconName = focused ? 'workflow' : 'workflow';
            return <Octicons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Lịch hẹn') {
            iconName = focused ? 'clockcircleo' : 'clockcircleo';
            return <AntDesign name={iconName} size={size} color={color} />;
          } else if (route.name === 'User') {
            iconName = focused ? 'user-circle-o' : 'user-circle-o';
            return <FontAwesome name={iconName} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: '#27528A',
        tabBarInactiveTintColor: 'gray',
        tabBarItemStyle: {
          paddingVertical: 5,
        },
        tabBarStyle: {
          height: 60,
        },
        headerTitleAlign: 'center',
      })}
      initialRouteName="Của tôi">
      <BottomTabNavigator.Screen
        name="Của tôi"
        component={Home}
        options={{headerStyle: {height: 0}}}
      />
      <BottomTabNavigator.Screen
        name="Quy trình"
        component={QuyTrinh}
        options={{
          title: 'Quản lý quy trình',
          headerStyle: {
            height: 50,
            backgroundColor: '#27528A',
          },
          headerTitleStyle: {
            color: '#fff',
            fontWeight: '700',
          },
        }}
      />
      <BottomTabNavigator.Screen
        name="Lịch hẹn"
        component={LichHen}
        options={{
          title: 'Danh sách lịch hẹn',
          headerStyle: {height: 50, backgroundColor: '#27528A'},
          headerTitleStyle: {
            color: '#fff',
            fontWeight: '700',
          },
        }}
      />
      <BottomTabNavigator.Screen
        name="User"
        component={ThongTinCaNhan}
        options={{
          title: 'Thông tin cá nhân',
          headerStyle: {height: 50, backgroundColor: '#27528A'},
          headerTitleStyle: {
            color: '#fff',
            fontWeight: '700',
          },
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};

export default TabNavigators;
