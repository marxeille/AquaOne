import React, {useCallback, useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  Image,
} from 'react-native';
import Header from './Components/Header';
import ActionButton from './Components/ActionButton';
import {WINDOW_WIDTH} from '../constant';
import styles from '../assets/style';
import Listing from './Components/Listing';
import UnpaidCard from './Components/UnpaidCard';

const CustomerScreen = props => {
  const [guest, setGuest] = useState(false);
  const [customer, setCustomer] = useState({});

  const handleAction = useCallback(() => {
    props.navigation.navigate('NumberReport', {customer: customer});
  });

  const handleReport = useCallback(() => {
    props.navigation.navigate('TakeReport');
  });

  useEffect(() => {
    fetch(
      `https://aquaone-d7d3c.firebaseio.com/entities/${props.navigation.state.params.id}.json`,
    )
      .then(res => res.json())
      .then(res => {
        setCustomer(res);
      })
      .catch(err => console.log(err.message));
  }, [props.navigation.state.params.id]);

  return (
    <React.Fragment>
      <Header
        backTo={props.navigation.state.params.from}
        headerTitle="Thông tin hộ gia đình"
        navigation={props.navigation}
        headerRight={false}
      />
      <ScrollView>
        {guest ? null : (
          <ImageBackground
            style={[{width: WINDOW_WIDTH, height: 130}, styles.center]}
            source={require('../assets/background.png')}>
            <Text style={[styles.txt, styles.bigTxt]}>MÃ KHÁCH HÀNG</Text>
            <Text style={[styles.txt, styles.bigTxt, styles.bold]}>
              KH12345669
            </Text>
          </ImageBackground>
        )}
        <View style={[styles.justifyCenter, styles.bottomBorder]}>
          <View style={styles.marginChild}>
            <Text style={[styles.standardTxt, styles.bold, {marginBottom: 6}]}>
              {customer.name}
            </Text>
            <View style={styles.flexRow}>
              <Image
                style={styles.standardIcon}
                source={require('../assets/icons/map-marker-alt3x.png')}
              />
              <Text style={[styles.lightTxt, {marginBottom: 12}]}>
                {customer.address}
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={[
              styles.bold,
              styles.standardTxt,
              {marginTop: 24, alignSelf: 'center'},
            ]}>
            Ngày chốt số nước: {customer.date}
          </Text>
          <Text
            style={[
              styles.lightTxt,
              styles.marginChild,
              {fontSize: 17, marginTop: 10},
            ]}>
            Vui lòng thanh toán trong vòng 10 ngày sau Ngày chốt số nước. Xin
            cảm ơn!
          </Text>
        </View>
        <View
          style={[
            styles.flexRow,
            styles.center,
            {
              marginBottom: 24,
              marginTop: 20,
            },
          ]}>
          <ActionButton
            action={handleAction}
            title={'Nộp tiền'}
            iconWidth={20}
            icon={require(`../assets/icons/money-check-alt3x.png`)}
          />
          <ActionButton
            action={handleReport}
            // inactive
            iconWidth={12}
            title={'Báo số nước'}
            icon={require(`../assets/icons/watch3x.png`)}
          />
        </View>
        <View style={[styles.flexRow, styles.center]}>
          <View style={{width: WINDOW_WIDTH / 2 - 16, marginLeft: 16}}>
            <Text style={styles.lightTxt}>TÍNH TỪ NGÀY</Text>
            <Text style={[styles.labelTxt, styles.bold]}>01/07/2019</Text>
            <Text style={[styles.lightTxt, {marginTop: 10}]}>KỲ NÀY</Text>
            <Text style={[styles.labelTxt, styles.bold]}>{customer.last}</Text>
            <Text style={[styles.lightTxt, {marginTop: 10}]}>SỬ DỤNG</Text>
            <Text style={[styles.labelTxt, styles.bold]}>01/07/2019</Text>
          </View>
          <View style={{width: WINDOW_WIDTH / 2}}>
            <Text style={styles.lightTxt}>ĐẾN NGÀY</Text>
            <Text style={[styles.labelTxt, styles.bold]}>30/07/2019</Text>
            <Text style={[styles.lightTxt, {marginTop: 10}]}>KỲ TRƯỚC</Text>
            <Text style={[styles.labelTxt, styles.bold]}>{customer.first}</Text>
            <Text style={[styles.lightTxt, {marginTop: 10}]}>THÀNH TIỀN</Text>
            <Text style={[styles.totalTxt, styles.bold]}>= {customer.fee}</Text>
          </View>
        </View>
        <View
          style={[
            {
              width: WINDOW_WIDTH - 32,
            },
            styles.center,
            styles.status,
            styles.borderBox,
          ]}>
          <Text style={[styles.bold, styles.normalTxt, {color: '#417505'}]}>
            Đã thu tiền tháng 07/2019
          </Text>
        </View>
        {guest ? null : (
          <View>
            <View
              style={[
                {height: 40, backgroundColor: '#F1F1F1'},
                styles.justifyCenter,
              ]}>
              <Text style={[styles.standardTxt, styles.bold, {marginLeft: 16}]}>
                Lịch sử thu tiền
              </Text>
            </View>
            <SafeAreaView>
              <Listing
                resourcePath={`https://aquaone-d7d3c.firebaseio.com/entities.json`}
                notRenderAddress={true}
                unClickable={true}
                card={UnpaidCard}
              />
            </SafeAreaView>
          </View>
        )}
      </ScrollView>
    </React.Fragment>
  );
};

export default CustomerScreen;
