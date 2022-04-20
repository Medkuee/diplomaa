import React from 'react';
import Navigation from './src/navigations';
import {StatusBar, View} from 'react-native';
import {ContextState} from './src/providers/store';

function App() {
  return (
    <>
      <ContextState>
        <View style={{flex: 1}}>
          <StatusBar
            barStyle="dark-content"
            translucent
            backgroundColor="transparent"
          />
          <Navigation />
        </View>
      </ContextState>
    </>
  );
}

export default App;
