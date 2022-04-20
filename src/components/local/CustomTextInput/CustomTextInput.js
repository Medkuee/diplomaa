import React, { useRef } from 'react';
import { TextInput, Pressable } from 'react-native';

import styles from './styles';
import colors from '../../../styles/colors';

function CustomTextInput({
    children,
    placeholder,
    style,
    textStyle,
    onChangeText,
    value,
    inputRef,
    onKeyPress,
    keyboardType = 'default',
    secureTextEntry = false,
    maxLength = 30,
    autoCapitalize = 'sentences',
}) {
    const defaultRef = useRef(null);

    const handleFocus = () => {
        defaultRef.current.focus();
    };

    return (
        <Pressable style={[styles.container, style]} onPress={handleFocus}>
            <TextInput
                style={[styles.textInput, textStyle]}
                placeholder={placeholder}
                placeholderTextColor={colors.primary}
                onChangeText={onChangeText}
                value={value}
                keyboardType={keyboardType}
                maxLength={maxLength}
                ref={(ref) => {
                    defaultRef.current = ref;
                    if (inputRef) inputRef.current = ref;
                }}
                onKeyPress={onKeyPress}
                secureTextEntry={secureTextEntry}
                autoCapitalize={autoCapitalize}
            />
            {children}
        </Pressable>
    );
}

export default CustomTextInput;
