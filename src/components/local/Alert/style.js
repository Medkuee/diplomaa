import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginTop: 7,
        width: 42,
        height: 60,
        resizeMode: 'contain',
    },
    text: {
        fontFamily: 'OpenSans-Regular',
        textAlign: 'center',
        flexGrow: 1,
        fontSize: 13,
    },
    button: {
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        width: '100%',
    },
    buttonText: {
        fontFamily:'OpenSans-Bold',
        color: '#fff',
        fontSize: 13,
    },
});
