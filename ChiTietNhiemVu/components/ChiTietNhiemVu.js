import React, {useEffect, useState, createContext} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Dimensions,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Avatar} from '@rneui/themed';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// import {TongQuat, TruongDuLieu, ChiTietCongViec, DinhKem, NhacHen} from '.';
import TongQuat from './TongQuat';
import TruongDuLieu from './TruongDuLieu';
import ChiTietCongViec from './CongViec';
import DinhKem from './DinhKem';
import NhacHen from './NhacHen';
import {ChiTietNhiemVuStyles} from './styles';

const TopTabNavigator = createMaterialTopTabNavigator();
const ChiTietNhiemVuContext = createContext();

const ChiTietNhiemVu = ({route, navigation}) => {
  const optionList = [
    {
      id: 1,
      name: 'Chỉnh sửa tên và mô tả',
    },
    {
      id: 2,
      name: 'Chỉnh sửa ngày bắt đầu',
    },
    {
      id: 3,
      name: 'Chỉnh sửa ngày kết thúc',
    },
    {
      id: 4,
      name: 'Chuyển người phụ trách',
    },
    {
      id: 5,
      name: 'Đánh dấu thất bại',
    },
  ];

  const {task, stage, workflow} = route.params;

  const [showModal, setShowModal] = useState(false);

  const onPressHandleShowModal = () => {
    setShowModal(prev => !prev);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onPressHandleShowModal}>
          <MaterialIcons
            name="more-vert"
            size={24}
            color="#fff"
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const {name: taskName, deadline} = task;
  const {name: stageName, is_done, is_fail} = stage;
  const {name: workflowName} = workflow;

  // console.group('===== Chi Tiet Nhiem Vu =====');
  // console.log('taskName :', taskName);
  // console.log('deadline :', deadline);
  // console.log('priority :', priority);
  // console.log('stageName :', stageName);
  // console.log('is_done :', is_done);
  // console.log('is_fail :', is_fail);
  // console.log('workflowName :', workflowName);
  // console.groupEnd();

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* Option Modal displays when tap on the top right menu icon */}
      <Modal
        animationType="slide"
        visible={showModal}
        transparent={true}
        onRequestClose={onPressHandleShowModal}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onPressHandleShowModal}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000030',
          }}>
          <TouchableWithoutFeedback>
            <View
              style={{
                borderRadius: 20,
                alignItems: 'center',
                paddingVertical: 10,
                backgroundColor: '#fff',
                elevation: 5,
                position: 'absolute',
                bottom: -10,
                width: Dimensions.get('screen').width,
              }}>
              <View
                style={{
                  width: 50,
                  height: 5,
                  backgroundColor: '#CBC9C9',
                }}
              />
              <FlatList
                data={optionList}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                  <View
                    style={{
                      width: Dimensions.get('screen').width,
                      padding: 20,
                      borderBottomWidth: 1,
                      borderColor: '#00000010',
                    }}>
                    <Text style={{textAlign: 'left'}}>{item.name}</Text>
                  </View>
                )}
              />
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>

      {/* Screen header */}
      <View
        style={[
          ChiTietNhiemVuStyles.headerContainer,
          ChiTietNhiemVuStyles.divider,
        ]}>
        <Text style={ChiTietNhiemVuStyles.taskName}>{taskName}</Text>
        <Text
          style={[
            ChiTietNhiemVuStyles.progress,
            {
              backgroundColor: is_done
                ? '#40AA19'
                : is_fail
                ? '#FCE7F2'
                : '#0D99FF',
              color: is_done ? '#fff' : is_fail ? '#EE55A0' : '#fff',
            },
          ]}>
          {is_done ? 'Hoàn thành' : is_fail ? 'Trễ hẹn' : 'Đang tiến hành'}
        </Text>
      </View>

      {/* Person in Charge & Deadline */}
      <View
        style={[
          ChiTietNhiemVuStyles.deadlineContainer,
          ChiTietNhiemVuStyles.divider,
        ]}>
        <View style={{flexDirection: 'row'}}>
          <Avatar
            size={40}
            rounded
            source={{uri: 'https://randomuser.me/api/portraits/men/36.jpg'}}
            containerStyle={{marginRight: 10}}
            key={taskName}
          />
          <View>
            <Text style={{fontSize: 15}}>Giao cho:</Text>
            <Text style={{fontWeight: '700', fontSize: 15}}>Quang</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome name="calendar" size={32} style={{marginRight: 10}} />
          <View style={{marginRight: 10}}>
            <Text style={{fontSize: 15}}>Hạn chót:</Text>
            <Text style={{fontSize: 15, fontWeight: '700'}}>{deadline}</Text>
          </View>
          <View>
            <AntDesign name="caretup" size={10} />
            <AntDesign name="caretdown" size={10} />
          </View>
        </View>
      </View>

      {/* Tab navigator */}
      <View style={{flex: 1}}>
        <ChiTietNhiemVuContext.Provider
          value={{task, stage, workflow, styles: ChiTietNhiemVuStyles}}>
          <TopTabNavigator.Navigator
            initialRouteName="Tổng quát"
            screenOptions={{
              tabBarLabelStyle: {textTransform: 'none'},
              tabBarItemStyle: {padding: 0, width: 95},
              swipeEnabled: true,
              tabBarScrollEnabled: true,
            }}>
            <TopTabNavigator.Screen
              name="Overall"
              component={TongQuat}
              options={{
                tabBarLabel: 'Tổng quát',
              }}
            />
            <TopTabNavigator.Screen
              name="Trường dữ liệu"
              component={TruongDuLieu}
              options={{tabBarLabel: 'Trường dữ liệu'}}
            />
            <TopTabNavigator.Screen
              name="Công việc"
              component={ChiTietCongViec}
              options={{headerTitleStyle: {fontSize: 15}}}
            />
            <TopTabNavigator.Screen
              name="Đính kèm"
              component={DinhKem}
              options={{headerTitleStyle: {fontSize: 15}}}
            />
            <TopTabNavigator.Screen
              name="Nhắc hẹn"
              component={NhacHen}
              options={{headerTitleStyle: {fontSize: 15}}}
            />
          </TopTabNavigator.Navigator>
        </ChiTietNhiemVuContext.Provider>
      </View>
    </View>
  );
};

export {ChiTietNhiemVuContext};
export default ChiTietNhiemVu;
