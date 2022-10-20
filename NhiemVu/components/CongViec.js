import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

import {NhiemVuStyles} from './styles';

const CongViec = () => {
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

  // console.group('=== Task reducer ===');
  // console.log('tasks :', tasks);
  // console.log('tasksData :', tasksData);
  // console.log('stages :', stages);
  // console.log('workflows :', workflows);
  // console.log('======================');
  // console.groupEnd();

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
              borderRadius: 999,
            }}
          />

          <View style={[taskCard.taskCardDetail, {position: 'relative'}]}>
            <Text style={[taskCard.textMarginBottom, taskCard.name]}>
              {detailTask.name}
            </Text>

            <Text style={[{color: '#000'}, taskCard.textMarginBottom]}>
              Tên quy trình:{' '}
              <Text style={{fontWeight: '700'}}>{detailWorkflow.name}</Text>
            </Text>

            <View
              style={[
                taskCard.textMarginBottom,
                {flexDirection: 'row', alignItems: 'center'},
              ]}>
              <Text style={{color: '#000'}}>Deadline: </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '700',
                  color: detailStage['is_done']
                    ? '#000'
                    : detailStage['is_fail']
                    ? '#EE5555'
                    : '#000',
                }}>
                {detailTask.deadline}
              </Text>
            </View>

            <View
              style={[
                taskCard.textMarginBottom,
                {flexDirection: 'row', alignItems: 'center'},
              ]}>
              <Text style={{color: '#000'}}>Giai đoạn: </Text>
              <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={{flex: 0.65, fontWeight: '700', color: '#000'}}>
                {detailStage.name}
              </Text>
            </View>

            <Text
              style={[
                NhiemVuStyles.progress,
                {
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
                },
              ]}>
              {detailStage['is_done']
                ? 'Hoàn thành'
                : detailStage['is_fail']
                ? 'Trễ hẹn'
                : 'Đang tiến hành'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
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

export default CongViec;
