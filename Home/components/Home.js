import React from 'react';
import {View, StatusBar} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {HeaderWithSearch} from '../../base/components';
import {NhiemVu, ToiTheoDoi, CongViec} from '../../NhiemVu/components';

const TopTabNavigator = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#27528A" />
      <HeaderWithSearch />

      <TopTabNavigator.Navigator
        initialRouteName="Nhiệm vụ"
        screenOptions={{tabBarLabelStyle: {textTransform: 'none'}}}>
        <TopTabNavigator.Screen name="Nhiệm vụ" component={NhiemVu} />
        <TopTabNavigator.Screen name="Tôi theo dõi" component={ToiTheoDoi} />
        <TopTabNavigator.Screen name="Công việc" component={CongViec} />
      </TopTabNavigator.Navigator>
    </View>
  );
};

export default Home;
