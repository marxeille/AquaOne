import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import styles from '../../assets/style';
import Listing from './Listing';

const ListingTemplate = ({
  title,
  middleSection,
  card,
  navigation,
  listStyle,
  resourcePath,
  refresh,
  from = 'UnpaidList',
}) => (
  <SafeAreaView>
    <Text
      style={title ? [styles.TextStyle, styles.bold, {marginLeft: 16}] : null}>
      {title}
    </Text>
    {middleSection}
    <View style={listStyle}>
      <Listing
        from={from}
        resourcePath={resourcePath}
        card={card}
        refresh={refresh}
        navigation={navigation}
      />
    </View>
  </SafeAreaView>
);

export default ListingTemplate;
