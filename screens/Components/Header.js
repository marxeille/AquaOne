import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {DrawerActions} from 'react-navigation';
import styles from '../../assets/style';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  _onPressButton = () => {
    const {backTo, navigation} = this.props;
    backTo ? navigation.navigate(backTo) : navigation.goBack();
  };

  render() {
    const {navigation, headerTitle, headerRight = true} = this.props;
    return (
      // <SafeAreaView style={{}}>
      <ImageBackground
        source={require('../../assets/navigation/navigation_bar.png')}
        style={{
          width: '100%',
          height: 96,
          backgroundColor: 'blue',
          paddingTop: 32,
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{position: 'absolute', left: 16}}
            onPress={this._onPressButton}>
            <Image source={require('../../assets/icons/icon_back.png')} />
          </TouchableOpacity>
          <Text
            style={[
              {
                alignItems: 'center',
                fontSize: 17,
                color: '#fff',
                fontFamily: 'Helvetica',
              },
              styles.lightBold,
            ]}>
            {headerTitle ? headerTitle : 'Default Title'}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              right: 16,
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SearchAddress')}>
              <Image
                style={{marginRight: 20}}
                source={
                  headerRight ? require('../../assets/icons/search.png') : ''
                }
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
              <Image
                style={{marginTop: 2}}
                source={
                  headerRight ? require('../../assets/icons/bars.png') : ''
                }
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      // </SafeAreaView>
    );
  }
}
