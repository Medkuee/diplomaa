import React, { useEffect, useContext, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';

import Tabs from '../Tabs';

//assets
import BarchartSvg from '../../../assets/icons/BarchartSvg';
import VectorStrokeSvg from '../../../assets/icons/VectorStrokeSvg';
import Search1Svg from '../../../assets/icons/Search1Svg';
import SendSvg from '../../../assets/icons/SendSvg';

let lastPage = '';

const activeColorTab = '#545454';
const activeColorIcon = '#FF8F5F';
const inActiveColor = '#C3C3C3';

function SNavigator({ navigation, screen, handleSendPress, onPress }) {
    const [page, setPage] = useState('Home');

    useEffect(() => {
        if (screen !== 'Profile') {
            lastPage = screen;
            setPage(screen);
        } else {
            setPage(lastPage);
        }
    }, [screen]);

    const navigate = (navigatePage) => {
        if (screen === navigatePage) return;
        lastPage = navigatePage;
        navigation.navigate(navigatePage);
    };

    const navigateList = () => {
        navigate('List');
        if (page === 'List') {
            onPress();
        }
    };

    return (
        <View style={[styles.container]}>
            <Tabs
                text="Жагсаалт"
                style={{ color: page === 'List' ? activeColorTab : inActiveColor }}
                onPress={navigateList}
            >
                <BarchartSvg color={page === 'List' ? activeColorIcon : inActiveColor} />
            </Tabs>
            <Tabs
                text="Нүүр"
                style={{ color: page === 'Home' ? activeColorTab : inActiveColor }}
                onPress={() => {
                    navigate('Home');
                    console.log('Man', page);
                }}
            >
                <VectorStrokeSvg color={page === 'Home' ? activeColorIcon : inActiveColor} />
            </Tabs>
            <Tabs
                text="Хайлт"
                onPress={() => navigate('Search')}
                style={{ color: page === 'Search' ? activeColorTab : inActiveColor }}
            >
                <Search1Svg color={page === 'Search' ? activeColorIcon : inActiveColor} />
            </Tabs>
            <Tabs text="Илгээх" onPress={handleSendPress}>
                <SendSvg />
            </Tabs>
        </View>
    );
}

export default SNavigator;
