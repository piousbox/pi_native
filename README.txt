
# Develop

There are @TODO where I'm hardcoding things.

skip husky
 git commit --no-verify and git push --no-verify should work?

Refresh without shaking
 adb shell input keyevent KEYCODE_MENU

### 3-though brings up dev menu
<pre>
import React from 'react';
import {
  View,
  PanResponder,
  NativeModules,
}            from 'react-native';

const DevMenuTrigger = ({children}) => {
  const {DevMenu} = NativeModules;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => {
      if (gestureState.numberActiveTouches === 3) {
        DevMenu.show();
      }
    },
  });
  return <View style={{flex: 1}} {...panResponder.panHandlers}>{children}</View>;
};

AppRegistry.registerComponent('myApp', (): any => <DevMenuTrigger><MyApp></DevMenuTrigger>);
</pre>