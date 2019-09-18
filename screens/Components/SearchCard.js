import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const SearchCard = ({item}) => (
  <View
    style={[
      {
        width: '100%',
        height: 55,
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 15,
      },
      item.item.checked ? styles.checked : null,
    ]}>
    <Text
      style={{
        color: '#4A4A4A',
        fontSize: 17,
      }}>
      Khu Chợ Hai Tầng - P. Thượng Thanh
    </Text>
    {item.item.checked ? (
      <Image
        style={{width: 13, height: 13, position: 'absolute', right: 12}}
        source={require('../../assets/icons/checked_3x.png')}
      />
    ) : null}
  </View>
);

export default SearchCard;

const styles = StyleSheet.create({
  checked: {
    backgroundColor: '#EBEBEB',
  },
});
