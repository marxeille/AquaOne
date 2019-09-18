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

export default class Login extends Component {
  static contextType = AuthContext;
  componentDidMount() {
    this.context.authenticate({name: 'Tạ Tốn', phone: '000000111111'});
  }

  handleLogin = () => {
    console.log('login');
  };

  render() {
    return (
      <React.Fragment>
        <Header
          headerTitle="Thu tiền nước SDWTP"
          navigation={this.props.navigation}
          headerRight={false}
        />
        <View style={styles.mainContainer}>
          <Image
            style={{marginBottom: 30}}
            source={require('../assets/logo.png')}
          />
          <View
            style={[
              styles.inputGroup,
              {borderTopLeftRadius: 5, borderTopRightRadius: 5},
            ]}
            ref="username">
            <View style={[styles.coverIcon]}>
              <Image
                style={{width: 14, height: 16}}
                source={require('../assets/icons/user3x.png')}
              />
            </View>

            <TextInput
              placeholderTextColor="#cccccc"
              placeholder="Số điện thoại"
              style={[styles.textInput]}
              enablesReturnKeyAutomatically={true}
              autoCorrect={false}
            />
          </View>
          <View
            style={[
              styles.inputGroup,
              {borderBottomEndRadius: 5, borderBottomLeftRadius: 5},
            ]}
            ref="passwrd">
            <View style={[styles.coverIcon]}>
              <Image
                style={{width: 14, height: 16}}
                source={require('../assets/icons/lock3x.png')}
              />
            </View>

            <TextInput
              placeholderTextColor="#cccccc"
              secureTextEntry={true}
              placeholder="Nhập mật khẩu"
              style={[styles.textInput]}
              enablesReturnKeyAutomatically={true}
              autoCorrect={false}
            />
          </View>
          <View style={{marginTop: 24}}>
            <ImageButton
              style={{width: 343, height: 50}}
              type={'login'}
              action={this.handleLogin}
            />
          </View>
          <View
            style={{
              alignSelf: 'center',
              marginTop: 50,
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack()}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                style={{width: 14, height: 16}}
                source={require('../assets/icons/arrow-left3x.png')}
              />
              <Text style={{marginLeft: 5, fontSize: 16, color: '#A1AAB1'}}>
                Quay lại trang người dùng
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignSelf: 'center',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <Text style={{fontSize: 16, color: '#A1AAB1'}}>
              Nếu quên mật khẩu, vui lòng{' '}
            </Text>
            <Text style={{fontSize: 16, color: '#A1AAB1'}}>
              liên hệ Hotline{' '}
              <Text style={{fontWeight: 'bold'}}>1900 9249</Text>
            </Text>
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
    alignItems: 'center',
  },
  TextStyle: {
    color: '#fff',
  },
});
