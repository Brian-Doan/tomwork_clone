import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

const LichHen = () => {
  const scheduleList = [
    {
      id: 1,
      name: 'Tên lịch hẹn 1',
      task: 'Tên nhiệm vụ 1',
      date: '19/10/2022',
      time: '17:30',
      isIgnore: true,
    },
    {
      id: 2,
      name: 'Tên lịch hẹn 2',
      task: 'Tên nhiệm vụ 2',
      date: '19/10/2022',
      time: '17:30',
      isIgnore: false,
    },
    {
      id: 3,
      name: 'Tên lịch hẹn 3',
      task: 'Tên nhiệm vụ 3',
      date: '19/10/2022',
      time: '17:30',
      isIgnore: false,
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity activeOpacity={0.7}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
          }}>
          <View
            style={{
              width: 5,
              height: 80,
              backgroundColor: item.isIgnore ? '#D54E30' : '#40AA19',
              borderRadius: 999,
              marginRight: 10,
            }}
          />
          <View style={{flex: 1}}>
            <Text
              style={[
                scheduleCard.marginBottom,
                {fontSize: 18, fontWeight: '700', color: '#000'},
              ]}>
              {item.name}
            </Text>
            <Text style={scheduleCard.marginBottom}>{item.task}</Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={{marginRight: 8}}>{item.date}</Text>
              <Text>{item.time}</Text>
            </View>
          </View>
          <Text
            style={[
              scheduleCard.scheduleLabel,
              {
                color: item.isIgnore ? '#FF4242' : '#fff',
                backgroundColor: item.isIgnore ? '#FFDFDF' : '#40AA19',
              },
            ]}>
            {item.isIgnore ? 'Bỏ qua' : 'Tiến hành'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#e9e9e9'}}>
      <FlatList
        contentContainerStyle={{
          marginVertical: 10,
          backgroundColor: '#fff',
        }}
        data={scheduleList}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '50%',
            }}>
            <Text style={{fontSize: 18}}>Không có lịch hẹn nào</Text>
          </View>
        }
        ItemSeparatorComponent={
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#00000010',
            }}
          />
        }
      />
    </View>
  );
};

const scheduleCard = StyleSheet.create({
  marginBottom: {
    marginBottom: 6,
  },
  scheduleLabel: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    width: 100,
    textAlign: 'center',
  },
});

export default LichHen;
