import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ThongTinCaNhan = () => {
  const userInfoList = [
    {
      id: 1,
      info: 'Tên cá nhân',
      icon: <AntDesign name="user" size={25} color="#03A713" />,
      isEditable: true,
    },
    {
      id: 2,
      info: 'abc@gmail.com',
      icon: <AntDesign name="mail" size={25} color="#FF0000" />,
      isEditable: false,
    },
    {
      id: 3,
      info: 'Công ty TomahoSoft',
      icon: <AntDesign name="home" size={25} color="#FF8E3D" />,
      isEditable: false,
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: '#EAEAEA', paddingVertical: 10}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          backgroundColor: '#fff',
          marginBottom: 10,
          height: 120,
        }}>
        <FontAwesome name="user-circle-o" size={80} color="#000" />
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            padding: 5,
            backgroundColor: '#ccc',
            borderRadius: 999,
            position: 'absolute',
            bottom: 15,
            right: '50%',
            transform: [{translateX: 30}],
          }}>
          <AntDesign name="edit" size={15} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={{marginBottom: 10, backgroundColor: '#fff'}}>
        {userInfoList.map(item => (
          <View
            key={item.id}
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderBottomWidth: 1,
              borderColor: '#00000020',
              alignItems: 'center',
            }}>
            {item.icon}
            <Text style={{marginLeft: 20, color: '#000'}}>{item.info}</Text>
            {item.isEditable && (
              <TouchableOpacity
                activeOpacity={0.7}
                style={{position: 'absolute', right: 10}}>
                <AntDesign
                  name="edit"
                  size={15}
                  color="#03A713"
                  style={{padding: 10}}
                />
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>

      <TouchableOpacity activeOpacity={0.7}>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingHorizontal: 20,
            backgroundColor: '#fff',
          }}>
          <MaterialIcons name="logout" size={25} color="#FF0000" />
          <Text style={{marginLeft: 20, color: '#000'}}>Đăng xuất</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ThongTinCaNhan;
