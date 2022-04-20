import React from 'react';

import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native';

const KeyboardDismiss = ({ children }) => {
    return (
        <TouchableWithoutFeedback
            onPress={() => {
                Keyboard.dismiss();
            }}
        >
            <KeyboardAvoidingView
                enabled
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{
                    alignItems: 'center',
                    flexGrow: 1,
                }}
            >
                {children}
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default KeyboardDismiss;
