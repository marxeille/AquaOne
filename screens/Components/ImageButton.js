import React, {useCallback} from 'react';
import {Image, TouchableOpacity} from 'react-native';

const ImageButton = props => {
  const handleAction = useCallback(() => {
    if (props.action instanceof Function) props.action();
  });
  const btn = {
    confirm: require('../../assets/icons/confirm3x.png'),
    ok: require('../../assets/icons/button_ok3x.png'),
    understood: require('../../assets/icons/understood3x.png'),
    continue: require('../../assets/icons/continue3x.png'),
    login: require('../../assets/icons/login3x.png'),
  };
  return (
    <TouchableOpacity onPress={handleAction}>
      <Image
        source={btn[props.type]}
        style={
          props.style
            ? props.style
            : {width: 167, height: 40, alignSelf: 'center'}
        }
      />
    </TouchableOpacity>
  );
};

export default ImageButton;
