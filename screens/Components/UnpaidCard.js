import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import {WINDOW_WIDTH} from '../../constant';

export default class UnpaidCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {notRenderAddress, unClickable, item} = this.props;
    return (
      <TouchableOpacity
        disabled={unClickable}
        onPress={() =>
          this.props.navigation.navigate('CustomerScreen', {
            id: item.item.id,
            from: this.props.from,
          })
        }>
        <View style={{width: WINDOW_WIDTH}}>
          <View
            style={[
              styles.mainContainer,
              notRenderAddress ? {height: 56} : null,
            ]}>
            <View style={[styles.content, styles.paddingChild, styles.flexRow]}>
              <Text style={[styles.name, styles.txt]}>
                {notRenderAddress ? item.item.expriedDate : item.item.name}
              </Text>
              <Text style={[styles.price, styles.txt]}>
                {item.item.fee} VNĐ
              </Text>
            </View>
            {notRenderAddress ? null : (
              <View
                style={[
                  styles.paddingChild,
                  styles.flexRow,
                  styles.marginChild,
                ]}>
                <Image
                  style={{
                    width: 12,
                    height: 15,
                    marginRight: 6,
                  }}
                  source={require('../../assets/icons/map-marker-alt3x.png')}
                />
                <Text style={[styles.smallTxt]}>{item.item.address}</Text>
              </View>
            )}

            <View
              style={[styles.paddingChild, styles.flexRow, styles.marginChild]}>
              <Image
                style={{
                  width: 12,
                  height: 15,
                  marginRight: 5,
                }}
                source={require('../../assets/icons/calculator3x.png')}
              />
              <Text style={[styles.smallTxt]}>
                Cuối: <Text style={[styles.bold]}>{item.item.first}</Text> -
                Đầu:
                <Text style={[styles.bold]}>{item.item.last}</Text> ={' '}
                <Text style={[styles.bold]}>{90} số</Text>
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    height: 80,
    width: '100%',
    marginTop: 15,
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
  },
  paddingChild: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  content: {
    justifyContent: 'space-between',
  },
  flexRow: {
    flexDirection: 'row',
  },
  name: {
    color: '#4A4A4A',
  },
  price: {
    color: '#4A90E2',
  },
  txt: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  smallTxt: {
    fontSize: 15,
    color: '#787778',
  },
  bold: {
    fontWeight: 'bold',
  },
  marginChild: {
    marginTop: 6,
  },
});
