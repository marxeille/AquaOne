import React, {Component} from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Header from './Components/Header';
import {AuthContext} from './Context/Auth';
import ImageButton from './Components/ImageButton';

export default class InputPhone extends Component {
  static contextType = AuthContext;
  componentDidMount() {
    this.context.authenticate({name: 'Tạ Tốn', phone: '000000111111'});
  }

  render() {
    return (
      <React.Fragment>
        <Header
          headerTitle="Nhập số điện thoại"
          navigation={this.props.navigation}
          headerRight={false}
        />
        <View style={styles.mainContainer}>
          <Image
            style={{marginBottom: 30}}
            source={require('../assets/logo.png')}
          />
          <View style={[styles.inputGroup]} ref="username">
            <View style={[styles.coverIcon]}>
              <Image source={require('../assets/icons/user.png')} />
            </View>

            <TextInput
              placeholderTextColor="#cccccc"
              placeholder="Nhập mã khách hàng"
              style={[styles.textInput]}
              enablesReturnKeyAutomatically={true}
              autoCorrect={false}
            />
          </View>
          <TouchableOpacity
            style={{marginBottom: 30, marginTop: 10}}
            activeOpacity={0.5}>
            <Text style={styles.txtDecor}> Xem cách lấy mã khách hàng </Text>
          </TouchableOpacity>
          <View style={{marginTop: 10}}>
            <ImageButton
              style={{width: 343, height: 50}}
              type={'continue'}
              action={() => this.props.navigation.navigate('UnpaidList')}
            />
          </View>
          <View
            style={{
              alignSelf: 'center',
              marginTop: 50,
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../assets/icons/sign_in.png')} />
              <Text style={{marginLeft: 5, color: '#A1AAB1', fontSize: 16}}>
                Nhân viên đăng nhập
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtDecor: {
    textDecorationLine: 'underline',
    fontSize: 17,
    color: '#006CB4',
  },
  coverIcon: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  textInput: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
    fontSize: 16,
    color: '#A1AAB1',
  },
  btnStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006CB4',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    width: '90%',
    borderRadius: 5,
    margin: 5,
  },
  inputGroup: {
    flexDirection: 'row',
    height: 50,
    width: 343,
    borderWidth: 1,
    borderColor: '#E2E5E7',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 5,
  },
  TextStyle: {
    color: '#fff',
  },
});
