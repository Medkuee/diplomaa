import React from 'react';
import { Svg, Defs, Rect, G, Path, Stop, LinearGradient } from 'react-native-svg';
export default ({ checkIcon }) => (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        {checkIcon && (
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.9226 2.74408C19.248 3.06951 19.248 3.59715 18.9226 3.92259L10.5892 12.2559C10.2638 12.5814 9.73617 12.5814 9.41073 12.2559L6.91073 9.75592C6.5853 9.43049 6.5853 8.90285 6.91073 8.57741C7.23617 8.25197 7.76381 8.25197 8.08925 8.57741L9.99999 10.4882L17.7441 2.74408C18.0695 2.41864 18.5971 2.41864 18.9226 2.74408Z"
                fill="#C3C3C3"
            />
        )}
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.16666 3.33333C3.94564 3.33333 3.73368 3.42113 3.5774 3.57741C3.42112 3.73369 3.33332 3.94565 3.33332 4.16666V15.8333C3.33332 16.0543 3.42112 16.2663 3.5774 16.4226C3.73368 16.5789 3.94564 16.6667 4.16666 16.6667H15.8333C16.0543 16.6667 16.2663 16.5789 16.4226 16.4226C16.5789 16.2663 16.6667 16.0543 16.6667 15.8333V10C16.6667 9.53976 17.0398 9.16666 17.5 9.16666C17.9602 9.16666 18.3333 9.53976 18.3333 10V15.8333C18.3333 16.4964 18.0699 17.1323 17.6011 17.6011C17.1323 18.0699 16.4964 18.3333 15.8333 18.3333H4.16666C3.50362 18.3333 2.86773 18.0699 2.39889 17.6011C1.93005 17.1323 1.66666 16.4964 1.66666 15.8333V4.16666C1.66666 3.50362 1.93005 2.86774 2.39889 2.3989C2.86773 1.93006 3.50362 1.66666 4.16666 1.66666H13.3333C13.7936 1.66666 14.1667 2.03976 14.1667 2.5C14.1667 2.96023 13.7936 3.33333 13.3333 3.33333H4.16666Z"
            fill="#C3C3C3"
        />
    </Svg>
);