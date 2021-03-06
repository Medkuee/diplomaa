import React from 'react';
import { Svg, Defs, Rect, G, Path, Stop, LinearGradient } from 'react-native-svg';

export default ({ color = '#C3C3C3' }) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 18C15 18.5523 14.5523 19 14 19L4 19C3.44771 19 3 18.5523 3 18C3 17.4477 3.44771 17 4 17L14 17C14.5523 17 15 17.4477 15 18Z"
            fill={color}
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21 12C21 12.5523 20.5523 13 20 13L4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11L20 11C20.5523 11 21 11.4477 21 12Z"
            fill={color}
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 6C11 6.55228 10.5523 7 10 7L4 7C3.44772 7 3 6.55228 3 6C3 5.44771 3.44772 5 4 5L10 5C10.5523 5 11 5.44772 11 6Z"
            fill={color}
        />
    </Svg>
);
