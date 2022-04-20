import React from 'react';
import { Svg, Defs, Rect, G, Path, Stop, LinearGradient, Circle } from 'react-native-svg';
export default ({ color }) => (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Circle cx="6" cy="6" r="6" fill={color} />
    </Svg>
);
