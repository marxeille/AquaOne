import React, {useState, useCallback, useEffect} from 'react';
import {Text, View, AsyncStorage, Image} from 'react-native';
import CheckBox from 'react-native-check-box';
import Header from './Components/Header';
import styles from '../assets/style';
import ImageButton from './Components/ImageButton';

const TakeReport = props => {
  const [undestood, setUnderstood] = useState(false);
  const [checker, setChecker] = useState(false);

  useEffect(() => {
    async function getItem() {
      const userUnderstood = await AsyncStorage.getItem('understood');
      setUnderstood(userUnderstood);
    }
    getItem();
  }, []);

  const saveUndestood = useCallback(async () => {
    await AsyncStorage.setItem('understood', checker);
    setUnderstood(true);
  });

  return undestood > 0 ? (
    <Text>Unsertand</Text>
  ) : (
    <React.Fragment>
      <Header
        backTo={'CustomerScreen'}
        headerTitle="Hướng dẫn ghi số nước"
        navigation={props.navigation}
        headerRight={false}
      />
      <View style={[styles.center, {padding: 16}]}>
        <Image
          style={{width: 311, height: 299}}
          source={require('../assets/shotwithhand2x.png')}
        />
      </View>
      <View>
        <Text
          style={[
            styles.normalTxt,
            {
              color: '#4A4A4A',
              paddingLeft: 16,
              paddingRight: 16,
              fontWeight: '400',
            },
          ]}>
          Hãy chụp mặt đồng hồ gần và rõ nét nhất có thể để phần mềm nhận diện
          tốt hơn.
        </Text>
        <Text
          style={[
            styles.normalTxt,
            {color: '#4A90E2', padding: 16, fontWeight: '600'},
          ]}>
          Chú ý: Số nước bạn gửi lên là số dự kiến để tính cước. Số tiền cuối
          cùng sẽ được thông báo vào ngày chốt của tháng.
        </Text>
        <View
          style={[
            {
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 16,
              marginBottom: 27,
            },
          ]}>
          <CheckBox
            onClick={() => setChecker(!checker)}
            checkBoxColor={'#4A90E2'}
            isChecked={checker}
          />
          <Text style={[{marginLeft: 4}, styles.standardTxt]}>
            Không hiện lại nữa
          </Text>
        </View>
        <ImageButton action={saveUndestood} type={'understood'} />
      </View>
    </React.Fragment>
  );
};

export default TakeReport;
