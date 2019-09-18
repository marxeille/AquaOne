import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import Header from './Components/Header';
import ListingTemplate from './Components/ListingTemplate';
import UnpaidCard from './Components/UnpaidCard';
import styles from '../assets/style';
import {WINDOW_WIDTH} from '../constant';

const SearchAddress = props => {
  return (
    <React.Fragment>
      <Header
        headerTitle="Tìm kiếm địa chỉ"
        backTo={'UnpaidList'}
        navigation={props.navigation}
        headerRight={false}
      />
      <SafeAreaView style={styles.mainContainer}>
        <ScrollView>
          <ListingTemplate
            title={'Nhập địa chỉ nhà'}
            from={'SearchAddress'}
            resourcePath={`https://aquaone-d7d3c.firebaseio.com/entities.json`}
            navigation={props.navigation}
            middleSection={
              <View style={[styles.inputGroup, {width: WINDOW_WIDTH - 32}]}>
                <TextInput
                  placeholderTextColor="#cccccc"
                  placeholder="Số nhà - ngõ ngách - tên đường..."
                  style={[styles.textInput, {paddingHorizontal: 10}]}
                  enablesReturnKeyAutomatically={true}
                  autoCorrect={false}
                />
              </View>
            }
            card={UnpaidCard}
          />
        </ScrollView>
      </SafeAreaView>
    </React.Fragment>
  );
};

export default SearchAddress;
