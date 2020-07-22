import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import PositionReactNative from './pages/Position';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingComponent />
        <FlexBox />
        <PositionReactNative />
      </ScrollView>
    </View>
  );
};

export default App;