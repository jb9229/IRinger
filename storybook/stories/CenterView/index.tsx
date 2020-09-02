import PropTypes from 'prop-types';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import style from './style';

export default function CenterView({ children }): React.ReactElement
{
  return <SafeAreaView style={{ flex: 1 }}><View style={style.main}>{children}</View></SafeAreaView>;
}

CenterView.defaultProps =
{
  children: null
};

CenterView.propTypes =
{
  children: PropTypes.node
};
