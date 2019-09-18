import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Header from './Components/Header';
import ListingTemplate from './Components/ListingTemplate';
import SearchCard from './Components/SearchCard';
import {WINDOW_WIDTH} from '../constant';

export default class SelectGland extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Header
          headerTitle="Chọn tuyến đường"
          navigation={this.props.navigation}
          headerRight={false}
          backTo={'UnpaidList'}
        />
        <SafeAreaView style={styles.mainContainer}>
          <ScrollView>
            <ListingTemplate
              middleSection={
                <View style={[styles.inputGroup]} ref="username">
                  <TextInput
                    placeholderTextColor="#cccccc"
                    placeholder="Tìm tên khu vực"
                    style={[styles.textInput]}
                    enablesReturnKeyAutomatically={true}
                    autoCorrect={false}
                  />
                  <View style={[styles.coverIcon]}>
                    <Image
                      style={{width: 20, height: 21}}
                      source={require('../assets/icons/search_icon3x.png')}
                    />
                  </View>
                </View>
              }
              card={SearchCard}
              listStyle={{
                width: WINDOW_WIDTH - 32,
                alignSelf: 'center',
                marginTop: 16,
              }}
            />
          </ScrollView>
          <TouchableOpacity
            onPress={this.clicked}
            style={[
              styles.btnStyle,
              {
                flexDirection: 'row',
                alignSelf: 'center',
              },
            ]}
            activeOpacity={0.5}>
            <Image
              style={{
                width: 16,
                height: 16,
                marginRight: 15,
              }}
              source={require('../assets/icons/sync-alt3x.png')}
            />
            <Text style={styles.TextBtnStyle}>Lựa chọn</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  coverIcon: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006CB4',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: '40%',
    borderRadius: 35,
    margin: 5,
  },
  TextBtnStyle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  checked: {
    backgroundColor: '#EBEBEB',
  },
  textInput: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    marginLeft: 16,
    color: '#56575a',
  },
  inputGroup: {
    flexDirection: 'row',
    height: 50,
    width: WINDOW_WIDTH - 32,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#E2E5E7',
    borderRadius: 50,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 5,
  },
});
