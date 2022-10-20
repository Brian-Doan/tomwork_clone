import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {ListItem, Icon, CheckBox} from '@rneui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CongViec = () => {
  const stageDetailTask = [
    {
      id: 1,
      name: 'Tên công việc con 1',
      desc: 'Mô tả công việc con 1',
      date: '20/10/2022',
      time: '16:00',
      owner: <FontAwesome name="user-circle-o" size={40} color="#000" />,
    },
    {
      id: 2,
      name: 'Tên công việc con 2',
      desc: '',
      date: '20/10/2022',
      time: '16:00',
      owner: <FontAwesome name="user-circle-o" size={40} color="#000" />,
    },
    {
      id: 3,
      name: 'Tên công việc con 3',
      desc: 'Mô tả công việc con 3',
      date: '20/10/2022',
      time: '16:00',
      owner: <FontAwesome name="user-circle-o" size={40} color="#000" />,
    },
  ];

  const [expanded, setExpanded] = useState(false);
  const [checkedState, setCheckedState] = useState(
    new Array(stageDetailTask.length).fill(false),
  );

  const handleCheckedSubTask = position => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 10,
          backgroundColor: '#EAEAEA',
        }}>
        <Text style={{fontSize: 17, fontWeight: '700'}}>Công việc</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text
            style={{
              paddingVertical: 3,
              paddingHorizontal: 8,
              borderRadius: 8,
              backgroundColor: '#0D99FF',
              color: '#fff',
            }}>
            Thêm mới
          </Text>
        </TouchableOpacity>
      </View>

      <ListItem.Accordion
        bottomDivider={true}
        content={
          <>
            <Icon
              name="tago"
              size={30}
              type="antdesign"
              style={{marginRight: 20}}
            />
            <ListItem.Content>
              <ListItem.Title>Tên giai đoạn 1</ListItem.Title>
            </ListItem.Content>
          </>
        }
        icon={<Icon name="down" type="antdesign" />}
        isExpanded={expanded}
        onPress={() => {
          setExpanded(prev => !prev);
        }}>
        {stageDetailTask.map((item, index) => (
          <ListItem key={item.id.toString()} bottomDivider>
            <ListItem.Content
              style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                margin: 0,
              }}>
              <ListItem.Content
                style={{
                  padding: 0,
                  margin: 0,
                  flex: 0.5,
                }}>
                <CheckBox
                  center
                  checked={checkedState[index]}
                  onPress={() => handleCheckedSubTask(index)}
                  wrapperStyle={{padding: 0}}
                />
              </ListItem.Content>

              <ListItem.Content
                style={{
                  flex: 2.5,
                  marginHorizontal: 10,
                }}>
                <ListItem.Title style={{marginBottom: 5}}>
                  {item.name}
                </ListItem.Title>
                <ListItem.Subtitle style={{marginBottom: 5}}>
                  {item.desc ? item.desc : 'Chưa có mô tả'}
                </ListItem.Subtitle>
                <ListItem.Subtitle style={{marginBottom: 5}}>
                  {item.date}
                  <ListItem.Subtitle style={{marginLeft: 10}}>
                    {item.time}
                  </ListItem.Subtitle>
                </ListItem.Subtitle>
              </ListItem.Content>

              <ListItem.Content style={{flex: 0.5, marginLeft: 20}}>
                <Icon name="edit" type="antdesign" iconStyle={{fontSize: 20}} />
              </ListItem.Content>

              <ListItem.Content
                style={{
                  alignItems: 'center',
                  flex: 0.5,
                }}>
                {item.owner}
              </ListItem.Content>
            </ListItem.Content>
          </ListItem>
        ))}
      </ListItem.Accordion>
    </View>
  );
};

export default CongViec;
