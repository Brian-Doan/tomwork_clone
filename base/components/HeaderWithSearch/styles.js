import {StyleSheet} from 'react-native';

export const HeaderWithSearchStyles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#27528A',
    flexDirection: 'row',
  },
  searchWrapper: {
    flex: 0.85,
  },
  filterWrapper: {
    flex: 0.15,
    justifyContent: 'center',
  },
});
