import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {SearchBar} from '@rneui/themed';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {HeaderWithSearchStyles} from './styles';

const HeaderWithSearch = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearchValue = text => {
    setSearchValue(text);
  };

  return (
    <View style={HeaderWithSearchStyles.container}>
      <View style={HeaderWithSearchStyles.searchWrapper}>
        <SearchBar
          placeholder="Tìm kiếm"
          onChangeText={handleChangeSearchValue}
          value={searchValue}
          containerStyle={{
            backgroundColor: '#fff',
            height: 36,
            padding: 3,
            borderRadius: 12,
          }}
          inputContainerStyle={{backgroundColor: '#fff', height: 30}}
        />
      </View>
      <TouchableOpacity
        style={HeaderWithSearchStyles.filterWrapper}
        activeOpacity={0.8}>
        <MaterialIcons
          name="filter-alt"
          size={32}
          color="#fff"
          style={{alignSelf: 'center'}}
        />
      </TouchableOpacity>
      <View style={HeaderWithSearchStyles}></View>
    </View>
  );
};

export default HeaderWithSearch;
