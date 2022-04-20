import React from 'react';
import { Svg, Defs, Rect, G, Path, Stop, LinearGradient } from 'react-native-svg';

export default ({ width = '20' }) => (
    <Svg
        width={width}
        height={width}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            d="M18.3333 14.1V16.6C18.3343 16.8321 18.2867 17.0618 18.1937 17.2745C18.1008 17.4871 17.9644 17.678 17.7934 17.8349C17.6224 17.9918 17.4205 18.1112 17.2006 18.1856C16.9808 18.2599 16.7478 18.2876 16.5167 18.2667C13.9523 17.988 11.4892 17.1118 9.32498 15.7083C7.31151 14.4289 5.60443 12.7218 4.32499 10.7083C2.91663 8.53435 2.04019 6.05917 1.76665 3.48334C1.74583 3.2529 1.77321 3.02064 1.84707 2.80136C1.92092 2.58208 2.03963 2.38058 2.19562 2.20969C2.35162 2.0388 2.54149 1.90227 2.75314 1.80878C2.9648 1.71529 3.1936 1.66689 3.42499 1.66668H5.92499C6.32941 1.6627 6.72148 1.80591 7.02812 2.06962C7.33476 2.33333 7.53505 2.69955 7.59165 3.10001C7.69717 3.90006 7.89286 4.68562 8.17499 5.44168C8.2871 5.73995 8.31137 6.0641 8.24491 6.37574C8.17844 6.68738 8.02404 6.97343 7.79998 7.20001L6.74165 8.25834C7.92795 10.3446 9.65536 12.072 11.7417 13.2583L12.8 12.2C13.0266 11.976 13.3126 11.8215 13.6243 11.7551C13.9359 11.6886 14.26 11.7129 14.5583 11.825C15.3144 12.1071 16.0999 12.3028 16.9 12.4083C17.3048 12.4655 17.6745 12.6693 17.9388 12.9813C18.203 13.2932 18.3435 13.6913 18.3333 14.1Z"
            stroke="#C3C3C3"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Svg>
);