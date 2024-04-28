import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Example from './Example';

const App = () => {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={() => Example?.startService()}>
          <Text>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Example?.stopService()}>
          <Text>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
