import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import Header from './Components/Header';
import ListingTemplate from './Components/ListingTemplate';
import UnpaidCard from './Components/UnpaidCard';
import {WINDOW_WIDTH} from '../constant';

export default class UnpaidList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
      filter: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      filter: nextProps.navigation.state.params.filter,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header
          headerTitle="Thu tiền nước SDWTP"
          navigation={this.props.navigation}
        />
        <SafeAreaView style={styles.mainContainer}>
          <TouchableOpacity
            onPress={() => this.setState({refresh: !this.state.refresh})}
            style={{
              bottom: 109,
              right: 16,
              zIndex: 999,
              alignSelf: 'flex-end',
              position: 'absolute',
            }}>
            <Image
              style={{
                width: 43,
                height: 43,
              }}
              source={require('../assets/icons/btn-refresh3x.png')}
            />
          </TouchableOpacity>
          <ScrollView>
            <ListingTemplate
              title={'Danh sách chưa thu tiền tháng 7/2019'}
              middleSection={
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('SelectGland')}
                  style={[
                    styles.selectStyle,
                    {
                      width: WINDOW_WIDTH - 32,
                      alignSelf: 'center',
                    },
                  ]}
                  activeOpacity={0.5}>
                  <Text style={styles.inputTxt}>
                    Đường Lý Sơn, Long Biên, Hà Nội
                  </Text>
                  <Image
                    style={{
                      width: 11,
                      height: 6,
                    }}
                    source={require('../assets/icons/arrow-dropdown-3x.png')}
                  />
                </TouchableOpacity>
              }
              resourcePath={`https://aquaone-d7d3c.firebaseio.com/entities${this.state.filter}.json`}
              navigation={this.props.navigation}
              refresh={this.state.refresh}
              card={UnpaidCard}
            />
          </ScrollView>
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
    position: 'relative',
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
  selectStyle: {
    flex: 1,
    height: 54,
    borderColor: '#D8D8D8',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    justifyContent: 'space-between',
  },
  TextBtnStyle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  TextStyle: {
    color: '#4A4A4A',
    fontSize: 17,
    paddingBottom: 10,
    paddingTop: 10,
  },
  bold: {
    fontWeight: 'bold',
  },
  inputTxt: {
    fontSize: 16,
    color: '#62727D',
  },
});
