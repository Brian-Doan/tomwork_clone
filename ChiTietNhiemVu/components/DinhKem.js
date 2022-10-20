import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {Icon} from '@rneui/themed';

const DinhKem = () => {
  const attachmentList = [
    {
      id: 1,
      file: 'tailieuthamkhao.docx',
    },
    {
      id: 2,
      file: 'danhsachkhachhang.xlsx',
    },
    {
      id: 3,
      file: 'tomaho_logo.png',
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <View style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name="link"
          size={30}
          type="antdesign"
          style={{marginRight: 20}}
        />
        <Text>{item.file}</Text>
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
        Tài liệu đính kèm
      </Text>
      <FlatList
        data={attachmentList}
        keyExtractor={item => item.id.toString()}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Không có file đính kèm nào</Text>
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

export default DinhKem;
