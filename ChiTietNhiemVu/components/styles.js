import {StyleSheet} from 'react-native';

export const ChiTietNhiemVuStyles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskName: {
    fontSize: 25,
    fontWeight: '700',
  },
  progress: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 12,
  },
  deadlineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#00000010',
  },
  stageContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  actionButton: {
    fontSize: 17,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 8,
    textAlign: 'center',
  },
  descriptionContainer: {
    padding: 10,
  },
  descriptionBox: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#00000010',
    borderRadius: 8,
    marginTop: 10,
    marginHorizontal: 10,
    height: '100%',
  },
});
