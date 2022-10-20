import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {NhiemVuStyles} from './styles';

const ToiTheoDoi = () => {
  const navigation = useNavigation();

  const tasks = useSelector(
    state => {
      let data = state.TaskStoreReducer.tasks;
      return Object.values(data).length > 0 ? data : {};
    },
    (prev, next) => JSON.stringify(prev) === JSON.stringify(next),
  );
  const stages = useSelector(
    state => {
      let data = state.StageStoreReducer.stages;
      return Object.values(data).length > 0 ? data : {};
    },
    (prev, next) => JSON.stringify(prev) === JSON.stringify(next),
  );
  const workflows = useSelector(
    state => {
      let data = state.WorkflowStoreReducer.workflows;
      return Object.values(data).length > 0 ? data : {};
    },
    (prev, next) => JSON.stringify(prev) === JSON.stringify(next),
  );

  const tasksData = Object.values(tasks).map(task => task['task_id']);

  const renderItem = ({item, index}) => {
    const detailTask = tasks[item] ? tasks[item] : {};
    const detailStage = stages[detailTask['stage_id']]
      ? stages[detailTask['stage_id']]
      : {};
    const detailWorkflow = workflows[detailTask['workflow_id']]
      ? workflows[detailTask['workflow_id']]
      : {};

    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ChiTietNhiemVu', {
            task: detailTask,
            stage: detailStage,
            workflow: detailWorkflow,
          })
        }
        activeOpacity={0.7}>
        <View style={taskCard.container}>
          <View
            style={{
              width: 5,
              height: 80,
              backgroundColor: detailStage['is_done']
                ? '#40AA19'
                : detailStage['is_fail']
                ? '#EE55A0'
                : '#4165E3',
            }}
          />

          <View style={[taskCard.taskCardDetail]}>
            <Text style={[taskCard.textMarginBottom, taskCard.name]}>
              {detailTask.name}
            </Text>

            <View
              style={[
                taskCard.textMarginBottom,
                {flex: 0.6, flexDirection: 'row', alignItems: 'center'},
              ]}>
              <Text style={{color: '#000'}}>Mức độ ưu tiên: </Text>
              <Text
                style={{
                  backgroundColor: detailTask.priority
                    ? detailTask.priority === 'Important'
                      ? '#FCE7F2'
                      : detailTask.priority === 'Low'
                      ? '#E6F7FF'
                      : '#fff'
                    : '#fff',
                  fontWeight: '700',
                  marginLeft: 5,
                  paddingHorizontal: detailTask.priority ? 10 : 0,
                  borderRadius: 999,
                  paddingVertical: 2,
                  fontSize: detailTask.priority ? 11 : 13,
                  color:
                    detailTask.priority && detailTask.priority === 'Important'
                      ? '#FF4242'
                      : '#000',
                }}>
                {detailTask.priority ? detailTask.priority : 'Chưa có'}
              </Text>
            </View>

            <Text style={[{color: '#000'}, taskCard.textMarginBottom]}>
              Tên quy trình:{' '}
              <Text style={{fontWeight: '700'}}>{detailWorkflow.name}</Text>
            </Text>

            <View
              style={[
                taskCard.textMarginBottom,
                {flexDirection: 'row', alignItems: 'center'},
              ]}>
              <AntDesign
                name="clockcircleo"
                size={15}
                color="#000"
                style={{marginRight: 5}}
              />
              <Text style={{color: '#000'}}>{detailTask.deadline}</Text>
              <Text style={{color: '#000'}}> - Giai đoạn: </Text>
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={{flex: 0.65, fontWeight: '700'}}>
                {detailStage.name}
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 0.5,
              marginRight: 10,
              alignItems: 'center',
            }}>
            <Text
              style={{
                backgroundColor: detailStage['is_done']
                  ? '#40AA19'
                  : detailStage['is_fail']
                  ? '#FCE7F2'
                  : '#4165E3',
                color: detailStage['is_done']
                  ? '#fff'
                  : detailStage['is_fail']
                  ? '#EE55A0'
                  : '#fff',
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 8,
                fontWeight: '700',
                fontSize: 12,
                textAlign: 'center',
                marginBottom: 10,
                width: 120,
              }}>
              {detailStage['is_done']
                ? 'Hoàn thành'
                : detailStage['is_fail']
                ? 'Thất bại'
                : 'Đang tiến hành'}
            </Text>
            <FontAwesome name="user-circle-o" size={32} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      {/* <Text>ToiTheoDoi</Text> */}
      <FlatList
        style={NhiemVuStyles.container}
        data={tasksData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => {
          return <View style={{height: 1}}></View>;
        }}
      />
    </View>
  );
};

const taskCard = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  taskCardDetail: {
    flex: 1,
    marginLeft: 20,
  },
  name: {
    fontWeight: '700',
    fontSize: 18,
    color: '#000',
  },
  textMarginBottom: {
    marginBottom: 5,
  },
});

export default ToiTheoDoi;
