import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import store from './redux';
import {Provider} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {ChiTietNhiemVu} from './ChiTietNhiemVu/components';
import {TabNavigators} from './base/components';

// const TopTabNavigator = createMaterialTopTabNavigator();
const Root = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Root.Navigator screenOptions={{headerShown: false}}>
          <Root.Screen name="Home" component={TabNavigators} />
          <Root.Screen
            name="ChiTietNhiemVu"
            component={ChiTietNhiemVu}
            options={({navigation}) => ({
              headerShown: true,
              headerStyle: {
                backgroundColor: '#27528A',
              },
              title: 'Chi tiết nhiệm vụ',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: '#fff',
                fontSize: 24,
                fontWeight: ' 700',
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <FontAwesome
                    name="chevron-left"
                    size={24}
                    color="#fff"
                    style={{
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                    }}
                  />
                </TouchableOpacity>
              ),
            })}
          />
        </Root.Navigator>
      </NavigationContainer>
      {/* <TabNavigators /> */}
    </Provider>
  );
};

export default App;
