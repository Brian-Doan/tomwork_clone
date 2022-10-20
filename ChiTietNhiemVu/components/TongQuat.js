import React, {useContext, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CheckBox} from '@rneui/themed';

import * as ActionType from '../controllers/actionTypes';
import {ChiTietNhiemVuContext} from './ChiTietNhiemVu';
import {Avatar} from '@rneui/base';

const TongQuat = () => {
  const {task, stage, workflow, styles} = useContext(ChiTietNhiemVuContext);
  const [toggleVisibleModal, setToggleVisibleModal] = useState(false);
  const [toggleSuccessMessageModal, setToggleSuccessMessageModal] =
    useState(false);
  const [fieldValue, setFieldValue] = useState('');
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const dispatch = useDispatch();

  const tasks = useSelector(state => state.TaskStoreReducer.tasks);
  const stages = useSelector(
    state => state.StageStoreReducer.stages,
    (prev, next) => JSON.stringify(prev) === JSON.stringify(next),
  );

  const currentTask = tasks[task['task_id']];
  const currentStage = stages[currentTask['stage_id']];

  // Phần tính toán này để tự động hiển thị stage tiếp theo trong Modal
  const currentStageId = currentStage['id'].split('_')[1];
  const nextStage = Object.values(stages)
    .sort()
    .filter(
      item => Number(item['id'].split('_')[1]) === Number(currentStageId) + 1,
    )[0];

  // console.group('===== Tong Quat =====');
  // console.log('task :', task);
  // console.log('task list:', tasks);
  // console.log('currentTask :', currentTask);
  // console.log('currentStage :', currentStage);
  // console.log('nextStage :', nextStage);
  // console.log('stage list:', Object.values(stages));
  // console.log('workflow :', workflow);
  // console.log('styles :', styles);
  // console.groupEnd();

  const handleToggleModal = () => {
    setToggleVisibleModal(prev => !prev);
  };

  const handleToggleSuccessMessageModal = () => {
    setToggleSuccessMessageModal(prev => !prev);
  };

  const onPressHandleChuyenTiepGiaiDoan = () => {
    const currentTaskId = currentTask['task_id'];
    const currentStageId = currentStage['id'];

    dispatch({
      type: ActionType.MOVE_NEXT_STAGE,
      data: {
        task_id: currentTaskId ? currentTaskId : '',
        stage_id: currentStageId ? currentStageId : '',
      },
    });

    setToggleVisibleModal(prev => !prev);
    setToggleSuccessMessageModal(prev => !prev);
  };

  const onPressHandleKeoNguocGiaiDoan = () => {
    const currentTaskId = currentTask['task_id'];
    const currentStageId = currentStage['id'];
    const prevStage = Object.values(stages).filter(
      item =>
        Number(item['id'].split('_')[1]) ===
        Number(currentStageId.split('_')[1]) - 1,
    )[0];

    // Nếu không có stage trước đó thì popup một Alert
    if (!prevStage) {
      Alert.alert(
        'Thông báo',
        'Không thể kéo ngược vì không có giai đoạn trước đó',
      );
    } else {
      dispatch({
        type: ActionType.MOVE_PREV_STAGE,
        data: {
          task_id: currentTaskId ? currentTaskId : '',
          stage_id: currentStageId ? currentStageId : '',
        },
      });

      setToggleSuccessMessageModal(prev => !prev);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <KeyboardAvoidingView behavior="padding">
        <Modal
          animationType="slide"
          visible={toggleVisibleModal}
          onRequestClose={handleToggleModal}>
          <ScrollView style={{flex: 1}}>
            {/* Thông tin giai đoạn chuyển tiếp */}
            <View style={{flex: 1, paddingHorizontal: 30}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 30,
                  paddingBottom: 20,
                }}>
                <Text style={{fontSize: 23, fontWeight: '700'}}>
                  Chuyển tiếp
                </Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={handleToggleModal}>
                  <Text style={{padding: 10, fontSize: 20}}>X</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#00000010',
                  paddingBottom: 15,
                }}>
                <Text style={{fontSize: 15, marginBottom: 6}}>
                  Giai đoạn chuyển tiếp đến
                </Text>
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 15,
                    marginBottom: 6,
                    color: nextStage ? '#000' : '#ff0000',
                  }}>
                  {nextStage?.name && nextStage.name}
                  {!nextStage?.name && 'Chưa có giai đoạn tiếp theo'}
                </Text>
                <Text style={{}}>Giao lại công việc</Text>
                <Text
                  style={{fontWeight: '700', fontSize: 15, marginBottom: 6}}>
                  Giữ nguyên người nhận việc giai đoạn trước
                </Text>
                <Text style={{fontSize: 15, marginBottom: 6}}>
                  Giao lại:
                  <Text
                    style={{fontWeight: '700', fontSize: 15, marginBottom: 6}}>
                    Quang
                  </Text>
                </Text>
                <Text style={{fontSize: 15, marginBottom: 6}}>
                  Thời gian hoàn thành thực tế
                </Text>
                <View
                  style={{
                    width: '60%',
                    height: 40,
                    backgroundColor: '#EFEFEF',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    paddingHorizontal: 10,
                    borderRadius: 8,
                    marginBottom: 6,
                  }}>
                  <AntDesign name="caretup" size={15} />
                  <AntDesign name="caretdown" size={15} />
                </View>
                <Text style={{fontSize: 15, marginBottom: 6}}>
                  Ngày hoàn thành thực tế
                </Text>
                <TouchableOpacity activeOpacity={0.7}>
                  <Text
                    style={{
                      paddingVertical: 3,
                      paddingHorizontal: 10,
                      borderRadius: 999,
                      backgroundColor: '#D9D9D9',
                      width: 100,
                      textAlign: 'center',
                      fontWeight: '500',
                    }}>
                    Chọn ngày
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Trường tuỳ chỉnh... */}
            <View style={{flex: 1, paddingHorizontal: 30}}>
              <Text
                style={{fontStyle: 'italic', fontSize: 14.5, marginBottom: 6}}>
                Trường tuỷ chỉnh cần nhập trước khi chuyển tiếp
              </Text>
              <Text style={{color: '#ff0000', marginBottom: 6}}>
                * <Text style={{color: '#000'}}>Tên trường dữ liệu</Text>
              </Text>
              <TextInput
                placeholder="Nhập..."
                style={{
                  backgroundColor: '#EFEFEF',
                  borderRadius: 8,
                  paddingHorizontal: 10,
                  marginBottom: 6,
                }}
                value={fieldValue}
                onChangeText={text => setFieldValue(text)}
              />
              <Text
                style={{
                  fontStyle: 'italic',
                  fontSize: 14.5,
                  marginBottom: 6,
                }}>
                Công việc cần hoàn thành trước khi chuyển tiếp
              </Text>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox
                      checked={checked1}
                      onPress={() => setChecked1(prev => !prev)}
                    />
                    <Text>Tên công việc con 1</Text>
                  </View>
                  <Avatar
                    size={32}
                    rounded
                    source={{
                      uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                    }}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <CheckBox
                      checked={checked2}
                      onPress={() => setChecked2(prev => !prev)}
                    />
                    <Text>Tên công việc con 2</Text>
                  </View>
                  <Avatar
                    size={32}
                    rounded
                    source={{
                      uri: 'https://randomuser.me/api/portraits/men/36.jpg',
                    }}
                  />
                </View>
              </View>
            </View>

            {/* Action buttons */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                borderTopWidth: 1,
                borderStyle: 'solid',
                borderColor: '#00000010',
                paddingVertical: 20,
                marginTop: 80,
              }}>
              <TouchableOpacity onPress={handleToggleModal}>
                <Text
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    borderRadius: 999,
                    backgroundColor: '#D9D9D9',
                    color: '#000',
                    width: 120,
                    textAlign: 'center',
                  }}>
                  Huỷ
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onPressHandleChuyenTiepGiaiDoan}
                // Disable nút "Chuyển tiếp" nếu không có stage tiếp theo
                style={{display: nextStage ? 'flex' : 'none'}}>
                <Text
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 5,
                    borderRadius: 999,
                    backgroundColor: '#00367C70',
                    color: '#fff',
                    width: 120,
                    textAlign: 'center',
                  }}>
                  Chuyển tiếp
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>
      </KeyboardAvoidingView>

      <Modal
        animationType="slide"
        visible={toggleSuccessMessageModal}
        transparent={true}
        onRequestClose={handleToggleSuccessMessageModal}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={handleToggleSuccessMessageModal}
          style={{
            flex: 1,
            backgroundColor: '#00000030',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View>
            <TouchableWithoutFeedback>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 8,
                  paddingHorizontal: 15,
                  backgroundColor: '#fff',
                  borderRadius: 8,
                }}>
                <AntDesign
                  name="check"
                  size={20}
                  color="#00B03C"
                  style={{marginRight: 10}}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '700',
                    color: '#00B03C',
                  }}>
                  Cập nhật thành công
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableOpacity>
      </Modal>

      <View style={[styles.stageContainer, styles.divider]}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/3207/3207593.png',
          }}
          style={{width: 22, height: 22, marginRight: 5}}
        />
        <Text style={{fontWeight: '700', fontSize: 16}}>
          Giai đoạn: <Text>{currentStage.name}</Text>
        </Text>
      </View>

      {/* Chuyển tiếp - Kéo ngược */}
      <View
        style={[
          {
            flexDirection: 'row',
            paddingHorizontal: 10,
            paddingVertical: 15,
            justifyContent: 'space-between',
          },
          styles.divider,
        ]}>
        <TouchableOpacity
          style={{flex: 0.48}}
          activeOpacity={0.7}
          onPress={handleToggleModal}>
          <Text
            style={[
              styles.actionButton,
              {color: '#fff', backgroundColor: '#40AA19'},
            ]}>
            Chuyển tiếp
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 0.48}}
          activeOpacity={0.7}
          onPress={onPressHandleKeoNguocGiaiDoan}>
          <Text
            style={[
              styles.actionButton,
              {color: '#FF0000', backgroundColor: '#FF9F81'},
            ]}>
            Kéo ngược
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={{fontSize: 15, fontWeight: '700'}}>Mô tả</Text>
        <View style={styles.descriptionBox}></View>
      </View>
    </View>
  );
};

export default TongQuat;
