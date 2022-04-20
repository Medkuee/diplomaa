import React from 'react';
import { Svg, Path } from 'react-native-svg';

export default ({ color = '#C3C3C3' }) => (
    <Svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.6384 1.05367C15.1265 1.54182 15.1265 2.33328 14.6384 2.82143L6.87949 10.9464C6.39133 11.4346 5.59988 11.4346 5.11172 10.9464L1.36172 7.19643C0.873567 6.70828 0.873567 5.91682 1.36172 5.42867C1.84988 4.94051 2.64133 4.94051 3.12949 5.42867L5.99561 8.29478L12.8706 1.05367C13.3588 0.56551 14.1502 0.56551 14.6384 1.05367Z"
            fill="white"
        />
    </Svg>
);
