import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  useContext,
} from 'react';
import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../assets/style';
import {WINDOW_WIDTH} from '../constant';
import Header from './Components/Header';
import {RNCamera} from 'react-native-camera';
import ImageButton from './Components/ImageButton';
import Modal from 'react-native-modal';
import {AuthContext} from './Context/Auth';

const NumberReport = props => {
  const [camera, useCamera] = useState(false);
  const [modal, openModal] = useState(false);
  const {customer} = props.navigation.state.params;
  const cameraRef = useRef(null);
  const authContext = useContext(AuthContext);
  const handleAction = useCallback(() => {
    openModal(false);
  });
  const handleConfirn = useCallback(() => {
    openModal(true);
  });

  return camera ? (
    <View style={[styles.center, {width: WINDOW_WIDTH, height: '100%'}]}>
      <RNCamera ref={cameraRef}>
        <TouchableOpacity
          onPress={() => {
            useCamera(false);
          }}>
          <Text>Back</Text>
        </TouchableOpacity>
      </RNCamera>
    </View>
  ) : (
    <React.Fragment>
      <Header
        backTo={'CustomerScreen'}
        headerTitle="Báo số nước"
        navigation={props.navigation}
        headerRight={false}
      />
      <View>
        <View style={[styles.justifyCenter, styles.bottomBorder]}>
          <View style={styles.marginChild}>
            <Text style={[styles.standardTxt, styles.bold, {marginBottom: 6}]}>
              {authContext.user.name}
            </Text>
            <View style={styles.flexRow}>
              <Image
                style={styles.standardIcon}
                source={require('../assets/icons/map-marker-alt3x.png')}
              />
              <Text style={[styles.lightTxt, {marginBottom: 12}]}>
                Số 11, Ngách 87/35 Đường Lý Sơn
              </Text>
            </View>
          </View>
          {/* <TouchableOpacity onPress={() => useCamera(true)}>
          <Text>camera</Text>
        </TouchableOpacity> */}
        </View>
        <View style={[styles.flexRow, styles.center, styles.topMargin]}>
          <View style={{width: WINDOW_WIDTH / 2 - 16, marginLeft: 16}}>
            <Text style={[styles.lightTxt]}>KỲ NÀY</Text>
            <Text style={[styles.labelTxt, styles.bold]}>{customer.last}</Text>
            <Text style={[styles.lightTxt, {marginTop: 10}]}>SỬ DỤNG</Text>
            <Text style={[styles.labelTxt, styles.bold]}>01/07/2019</Text>
          </View>
          <View style={{width: WINDOW_WIDTH / 2}}>
            <Text style={[styles.lightTxt]}>KỲ TRƯỚC</Text>
            <Text style={[styles.labelTxt, styles.bold]}>{customer.first}</Text>
            <Text style={[styles.lightTxt, {marginTop: 10}]}>THÀNH TIỀN</Text>
            <Text style={[styles.totalTxt, styles.bold]}>= {customer.fee}</Text>
          </View>
        </View>
        <View style={styles.topMargin}>
          <ImageBackground
            style={{height: 281, justifyContent: 'flex-end'}}
            source={require('../assets/receipt_2x.png')}>
            <View style={[{flexDirection: 'row'}, styles.center]}>
              <Image
                style={{width: 50, height: 50}}
                source={require('../assets/icons/camera3x.png')}
              />
              <Text
                style={{
                  fontSize: 16,
                  color: '#fff',
                  fontWeight: '500',
                  marginLeft: 11,
                }}>
                Chụp ảnh hóa đơn
              </Text>
            </View>
            <Text
              style={[
                styles.topMargin,
                {
                  fontSize: 14,
                  color: '#fff',
                  marginBottom: 20,
                  alignSelf: 'center',
                },
              ]}>
              Hãy chụp lại hóa đơn như hình ảnh mẫu
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.topMargin}>
          <ImageButton type={'confirm'} action={handleConfirn} />
        </View>
      </View>
      <Modal isVisible={modal}>
        <View style={[styles.center, styles.modalContainer]}>
          <Text
            style={[
              {
                color: '#4A90E2',
                fontSize: 22,
                alignSelf: 'center',
                fontWeight: 'bold',
              },
              styles.topMargin,
            ]}>
            Xác nhận thu tiền
          </Text>
          <View style={[{marginLeft: 6, marginRight: 6}]}>
            <Text
              style={[styles.topMargin, {color: '#62727D'}, styles.normalTxt]}>
              Bạn chắc chắn là đã thu tiền của khách hàng này rồi?
            </Text>
          </View>
          <View
            style={[
              styles.topMargin,
              {flexDirection: 'row', alignItems: 'center', marginBottom: 24},
            ]}>
            <TouchableOpacity
              style={[{width: 155, height: 46}, styles.center]}
              onPress={useCallback(() => openModal(false))}>
              <Text
                style={[
                  styles.normalTxt,
                  {color: '#9B9B9B', fontWeight: '500'},
                ]}>
                Hủy bỏ
              </Text>
            </TouchableOpacity>
            <ImageButton
              type={'ok'}
              style={{width: 155, height: 46}}
              action={handleAction}
            />
          </View>
        </View>
      </Modal>
    </React.Fragment>
  );
};

export default NumberReport;
