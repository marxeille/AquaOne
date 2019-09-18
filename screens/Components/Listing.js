import React, {useState, useEffect, useCallback} from 'react';
import {View, FlatList} from 'react-native';
import styles from '../../assets/style';
import ActionButton from './ActionButton';

const Listing = props => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const {refresh, resourcePath} = props;

  const handleAction = useCallback(() => {
    loadData(updateFlatList);
  });

  const loadData = useCallback(callback => {
    fetch(props.resourcePath)
      .then(res => res.json())
      .then(res => {
        const loadedData = [];
        for (const key in res) {
          loadedData.push({...res[key], id: key});
        }
        if (callback instanceof Function) {
          callback(loadedData);
        } else {
          setData(loadedData);
        }
      })
      .catch(err => console.log(err.message));
  });

  const updateFlatList = useCallback(nextData => {
    if (nextData.length > 0) {
      setData(data.concat(nextData));
      setPage(page + 1);
    }
  });

  useEffect(() => {
    loadData();
  }, [refresh, resourcePath]);

  const Card = props.card;

  const renderItem = item => (
    <Card item={item} navigation={props.navigation} {...props} />
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        extraData={props.refresh}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={[styles.center, {marginTop: 19}]}>
        <ActionButton
          action={handleAction}
          iconWidth={12}
          title={'Tải thêm'}
          icon={require(`../../assets/icons/sync-alt3x.png`)}
        />
      </View>
    </View>
  );
};

export default Listing;
