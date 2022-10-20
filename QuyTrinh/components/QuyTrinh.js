import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from 'react-native';
import {Avatar} from '@rneui/themed';

const QuyTrinh = () => {
  const workflows = [
    {
      id: 1,
      name: 'Quy trình 1',
      avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
      stage: 'Tên phòng ban',
      isActive: true,
    },
    {
      id: 2,
      name: 'Quy trình 2',
      avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
      stage: 'Tên phòng ban',
      isActive: true,
    },
    {
      id: 3,
      name: 'Quy trình 3',
      avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
      stage: 'Tên phòng ban',
      isActive: false,
    },
    {
      id: 4,
      name: 'Quy trình 4',
      avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
      stage: 'Tên phòng ban',
      isActive: true,
    },
    {
      id: 5,
      name: 'Quy trình 5',
      avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
      stage: 'Tên phòng ban',
      isActive: false,
    },
    {
      id: 6,
      name: 'Quy trình 6',
      avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
      stage: 'Tên phòng ban',
      isActive: false,
    },
  ];

  const switchesState = workflows.map(item => item.isActive);

  const [toggleSwitches, setToggleSwitches] = useState(switchesState);

  const handleToggleSwitch = position => {
    const updatedSwitches = toggleSwitches.map((item, index) =>
      index === position ? !item : item,
    );

    setToggleSwitches(updatedSwitches);
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity activeOpacity={0.7}>
        <View style={workflowCard.container}>
          <View
            style={{
              width: 5,
              height: 80,
              backgroundColor: item['isActive'] ? '#40AA19' : '#D54E30',
              borderRadius: 999,
            }}
          />

          <View style={workflowCard.workflowCardDetail}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <Avatar
                size={40}
                rounded
                source={{uri: item.avatar}}
                key={item.id}
                containerStyle={{marginRight: 10}}
              />
              <Text style={workflowCard.name}>{item.name}</Text>
            </View>
            <Text>
              Giai đoạn : <Text style={{fontWeight: '700'}}>{item.stage}</Text>
            </Text>
          </View>

          <View style={workflowCard.workflowCardActive}>
            {/* <SwitchComponent /> */}
            <Switch
              value={toggleSwitches[index]}
              onValueChange={() => handleToggleSwitch(index)}
            />
            <Text
              style={[
                workflowCard.activeText,
                {
                  backgroundColor: item.isActive ? '#40AA19' : '#D54E30',
                },
              ]}>
              {item.isActive ? 'Hoạt động' : 'Không hoạt động'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{backgroundColor: '#eaeaea'}}
        data={workflows}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: '#00000010',
              }}></View>
          );
        }}
        renderItem={renderItem}
        contentContainerStyle={{backgroundColor: '#fff', marginTop: 10}}
      />
    </View>
  );
};

const workflowCard = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingBottom: 10,
  },
  workflowCardDetail: {
    flex: 1,
    marginLeft: 20,
  },
  workflowCardActive: {
    flex: 1,
    marginLeft: 20,
    height: '80%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  name: {
    fontWeight: '700',
    fontSize: 21,
    color: '#000',
  },
  activeText: {
    color: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 999,
  },
});

export default QuyTrinh;
