import React, { useState, useEffect } from 'react';
import {View, ScrollView, Text} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis'
import Communication from './pages/Communication';
import BasicJavasript from './pages/BasicJavascript';
import ReactNativeSVG from './pages/ReactNativeSVG';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false)
    }, 5000)
  }, [])
  return (
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {/* <Position />  */}
        {/* <PropsDinamis /> */}
        {/* <FlexBox /> */}
        {/* <StateDinamis /> */}
        {/* <Communication /> */}
        {/* <BasicJavasript /> */}
        <ReactNativeSVG />
      </ScrollView>
    </View>
  );
};

export default App;