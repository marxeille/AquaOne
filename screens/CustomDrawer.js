import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../assets/style';
import * as Progress from 'react-native-progress';
import {AuthContext} from './Context/Auth';

export default class CustomDrawer extends Component {
  constructor(props) {
    super(props);
  }

  handleFilter = opt => {
    const {navigation} = this.props;
    navigation.closeDrawer();
    navigation.navigate('UnpaidList', {filter: opt});
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
        <ScrollView style={[{marginTop: 31, marginLeft: 16}]}>
          <Text style={[styles.standardTxt, {fontWeight: '500'}]}>
            Nhân viên thu tiền
          </Text>
          <Text
            style={[
              styles.normalTxt,
              {fontWeight: 'bold', color: '#4A90E2', marginTop: 12},
            ]}>
            <AuthContext.Consumer>
              {context => context.user.name}
            </AuthContext.Consumer>
          </Text>
          <Text
            style={[
              styles.normalTxt,
              {fontWeight: '400', color: '#787778', marginTop: 5},
            ]}>
            <AuthContext.Consumer>
              {context => context.user.phone}
            </AuthContext.Consumer>
          </Text>
          <View style={{marginTop: 16}}>
            <Text style={[styles.normalTxt, {color: '#787778'}]}>
              Số hộ đã thu
            </Text>
            <View
              style={[
                {
                  marginTop: 6,
                  flexDirection: 'row',
                },
                styles.center,
              ]}>
              <View>
                <Progress.Bar
                  progress={57 / 83}
                  height={10}
                  color={'#0091FF'}
                  borderColor={'#E2E5E7'}
                  backgroundColor={'#E2E5E7'}
                  width={233}
                />
              </View>
              <Image
                source={require('../assets/icons/house3x.png')}
                style={{width: 30, height: 30, marginLeft: -9}}
              />
            </View>
            <Text
              style={{
                fontSize: 15,
                color: '#4A4A4A',
                fontWeight: 'bold',
                marginTop: 6,
              }}>
              57/83 hộ gia đình
            </Text>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={[styles.normalTxt, {color: '#787778'}]}>
              Tổng tiền đã thu
            </Text>
            <View
              style={[
                {
                  marginTop: 6,
                  flexDirection: 'row',
                },
                styles.center,
              ]}>
              <View>
                <Progress.Bar
                  progress={45320000 / 87250000}
                  height={10}
                  color={'#0091FF'}
                  borderColor={'#E2E5E7'}
                  backgroundColor={'#E2E5E7'}
                  width={233}
                />
              </View>
              <Image
                source={require('../assets/icons/card3x.png')}
                style={{width: 30, height: 30, marginLeft: -9}}
              />
            </View>
            <Text
              style={{
                fontSize: 15,
                color: '#4A4A4A',
                fontWeight: 'bold',
                marginTop: 6,
              }}>
              45.320.000đ/87.250.000đ
            </Text>
          </View>
          <View style={{marginTop: 16}}>
            <Text style={[styles.standardTxt, {fontWeight: '500'}]}>
              Bộ lọc danh sách
            </Text>
            {/* A block of touchable */}
            <View style={{marginTop: 10}}>
              <TouchableOpacity
                onPress={() => this.handleFilter('')}
                style={[styles.greyBtn]}>
                <Image
                  source={require('../assets/icons/clipboard-list3x.png')}
                  style={{
                    width: 17,
                    height: 22,
                    marginLeft: 12,
                    marginRight: 12,
                  }}
                />
                <Text
                  style={[
                    styles.standardTxt,
                    {marginLeft: 10, fontWeight: '600'},
                  ]}>
                  Tất cả khách hàng
                </Text>
              </TouchableOpacity>
            </View>
            {/* End a block of touchable */}
            {/* A block of touchable */}
            <View style={{marginTop: 10}}>
              <TouchableOpacity
                onPress={() => this.handleFilter('unpaid')}
                style={[styles.greyBtn]}>
                <Image
                  source={require('../assets/icons/funnel-dollar3x.png')}
                  style={{
                    width: 23,
                    height: 18,
                    marginLeft: 12,
                    marginRight: 12,
                  }}
                />
                <Text
                  style={[
                    styles.standardTxt,
                    {marginLeft: 4, fontWeight: '600'},
                  ]}>
                  Chưa thu tiền
                </Text>
              </TouchableOpacity>
            </View>
            {/* End a block of touchable */}
          </View>
        </ScrollView>
        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#62727D',
                textDecorationLine: 'underline',
              }}>
              Đăng xuất tài khoản
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
