import React, {useCallback} from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import styles from '../../assets/style';

const ActionButton = React.memo(props => {
  const handleAction = useCallback(() => {
    if (props.action instanceof Function) props.action();
  });
  return (
    <TouchableOpacity
      onPress={handleAction}
      disabled={props.inactive}
      style={[
        styles.btnStyle,
        styles.flexRow,
        props.inactive ? {backgroundColor: '#79A9CB'} : null,
      ]}
      activeOpacity={0.5}>
      <Image
        style={[styles.btnIcon, {width: props.iconWidth}]}
        source={props.icon}
      />
      <Text style={styles.TextBtnStyle}>{props.title}</Text>
    </TouchableOpacity>
  );
});

export default ActionButton;
