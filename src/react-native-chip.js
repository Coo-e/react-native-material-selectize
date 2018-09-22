'use strict';

import React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default class ReactNativeChip extends React.PureComponent {
  static defaultProps = {
    onClose: () => {},
    close: true,
    text: ''
  };

  constructor(props) {
    super(props);
    this.isIOS = Platform.OS === 'ios';
  }

  render() {
    const { iconStyle, onClose, style, text, avatar, close } = this.props;

    return (
      <View style={[styles.root, style]}>
        <View style={styles.container}>
          <View style={styles.listIcon}>
            <Image style={{width: 25, height: 25}} source={{uri: avatar}} />
          </View>
          <Text style={styles.text} numberOfLines={1}>{text}</Text>
          {close && <TouchableOpacity
            style={[styles.iconWrapper, iconStyle]}
            onPress={onClose}>
            <Text style={[styles.icon, this.isIOS ? styles.iconIOS : styles.iconAndroid]}>✕</Text>
          </TouchableOpacity>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    height: 35,
    marginBottom: 4,
    marginRight: 4
  },
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  text: {
    color: 'rgba(0, 0, 0, 0.87)'
  },
  iconWrapper: {
    borderRadius: 50,
    backgroundColor: '#a6a6a6',
    height: 16,
    width: 16,
    overflow: 'hidden',
    marginLeft: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    textAlign: 'center',
    color: '#e0e0e0'
  },
  iconIOS: {
    fontSize: 14
  },
  iconAndroid: {
    fontSize: 13,
    lineHeight: 15
  },
  listIcon: {
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.38)',
    height: 30,
    width: 30,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  }
});
