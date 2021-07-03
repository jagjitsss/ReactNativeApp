import React from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class BackButton extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var icon = this.props.backIcon ? require('../../../assets/icons/ArrowblackLeft.png') : require('../../../assets/icons/backArrow.png');
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.btnContainer}>
         <Image source={icon} style={styles.btnIcon} />
      </TouchableOpacity>
    );
  }
}

BackButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};
