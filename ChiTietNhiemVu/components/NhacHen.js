import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const NhacHen = () => {
  const scheduleList = [
    {
      id: 1,
      name: 'Tên lịch hẹn 1',
      task: 'Tên nhiệm vụ 1',
      date: '19/10/2022',
      time: '17:30',
    },
    {
      id: 2,
      name: 'Tên lịch hẹn 2',
      task: 'Tên nhiệm vụ 2',
      date: '19/10/2022',
      time: '17:30',
    },
    {
      id: 3,
      name: 'Tên lịch hẹn 3',
      task: 'Tên nhiệm vụ 3',
      date: '19/10/2022',
      time: '17:30',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: 5,
            height: 80,
            backgroundColor: '#4165E3',
            marginRight: 10,
          }}
        />

        <FontAwesome
          name="user-circle-o"
          size={50}
          color="#000"
          style={{marginRight: 10}}
        />

        <View style={{flex: 1}}>
          <Text
            style={[
              {fontSize: 18, fontWeight: '700'},
              scheduleStyles.marginBottom,
            ]}>
            {item.name}
          </Text>
          <Text style={scheduleStyles.marginBottom}>{item.task}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>{item.date}</Text>
            <Text style={{marginLeft: 5}}>{item.time}</Text>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.7} style={{padding: 10}}>
          <FontAwesome name="trash" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text
        style={{
          fontSize: 17,
          fontWeight: '700',
          backgroundColor: '#EAEAEA',
          padding: 10,
        }}>
        Danh sách nhắc hẹn
      </Text>
      <FlatList
        data={scheduleList}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Không có lịch hẹn nào</Text>
          </View>
        }
        renderItem={renderItem}
        ItemSeparatorComponent={
          <View style={{flex: 1, borderWidth: 1, borderColor: '#00000010'}} />
        }
      />
    </View>
  );
};

const scheduleStyles = StyleSheet.create({
  marginBottom: {
    marginBottom: 6,
  },
});

export default NhacHen;
