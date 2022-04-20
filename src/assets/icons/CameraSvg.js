import React from 'react';
import { Svg, Defs, Rect, G, Path, Stop, LinearGradient } from 'react-native-svg';

export default ({ width = '24', height = '24' }) => (
    <Svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.16795 2.4453C8.35342 2.1671 8.66565 2 9 2H15C15.3344 2 15.6466 2.1671 15.8321 2.4453L17.5352 5H21C21.7957 5 22.5587 5.31607 23.1213 5.87868C23.6839 6.44129 24 7.20435 24 8V19C24 19.7957 23.6839 20.5587 23.1213 21.1213C22.5587 21.6839 21.7957 22 21 22H3C2.20435 22 1.44129 21.6839 0.87868 21.1213C0.316071 20.5587 0 19.7957 0 19V8C0 7.20435 0.316071 6.44129 0.87868 5.87868C1.44129 5.31607 2.20435 5 3 5H6.46482L8.16795 2.4453ZM9.53518 4L7.83205 6.5547C7.64658 6.8329 7.33435 7 7 7H3C2.73478 7 2.48043 7.10536 2.29289 7.29289C2.10536 7.48043 2 7.73478 2 8V19C2 19.2652 2.10536 19.5196 2.29289 19.7071C2.48043 19.8946 2.73478 20 3 20H21C21.2652 20 21.5196 19.8946 21.7071 19.7071C21.8946 19.5196 22 19.2652 22 19V8C22 7.73478 21.8946 7.48043 21.7071 7.29289C21.5196 7.10536 21.2652 7 21 7H17C16.6656 7 16.3534 6.8329 16.1679 6.5547L14.4648 4H9.53518Z"
            fill="#C3C3C3"
        />
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10ZM7 13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13C17 15.7614 14.7614 18 12 18C9.23858 18 7 15.7614 7 13Z"
            fill="#C3C3C3"
        />
    </Svg>
);