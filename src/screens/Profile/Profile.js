import React, {useEffect, useState, useContext, useRef} from 'react';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';
// import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';

//styles
import styles, {width, height} from './styles';

//utils
import Loader from '../Loader';

//assets
import ArrowSvg from '../../assets/icons/ArrowSvg';
import CameraSvg from '../../assets/icons/CameraSvg';
import LogoSvg from '../../assets/icons/LogoSvg';
import EditProfileSvg from '../../assets/icons/EditProfileSvg';

//components
import Card from '../../components/local/Card';
import GradientButton from '../../components/local/GradientButton';
import SNavigator from '../../components/local/SNavigator';

// //actions
// import {logout} from '../../actions/user';
// import {getOwnCards, deleteCard} from '../../actions/cards';
// import {getBalance} from '../../actions/finances';

// store
import {GlobalContext} from '../../providers/store';
// import TabBodyView from '../../providers/TabBodyView';

function Profile({navigation}) {
  // const { state, dispatch } = useContext(GlobalContext);
  // const [isLoad, setIsLoad] = useState(true);
  // const [name, setName] = useState(null);
  // const [lastName, setLastName] = useState(null);
  // const [balance, setBalance] = useState(null);

  // const cardsData = useRef([]);
  // const CardsListView = useRef();

  // const hasMore = useRef(true);
  // const page = useRef(0);

  // const [ownCardsProvider, setOwnCardsProvider] = useState(
  //     new DataProvider((r1, r2) => {
  //         return r1 !== r2;
  //     })
  // );

  // useEffect(() => {
  //     fetchOwnCards();
  //     fetchBalance();
  // }, []);

  // const fetchOwnCards = async () => {
  //     if (hasMore.current) {
  //         const result = await getOwnCards(state.info.token, ++page.current);

  //         if (result.status === 'success') {
  //             if (result.data.meta.total_page === page.current) {
  //                 hasMore.current = false;
  //             }

  //             setName(result.data.list[0].first_name);
  //             setLastName(result.data.list[0].last_name);
  //             console.log('My caaards', result.data);
  //             setIsLoad(false);

  //             cardsData.current = [...cardsData.current, ...result.data.list];

  //             setOwnCardsProvider(ownCardsProvider.cloneWithRows(cardsData.current));
  //         } else {
  //             console.log('Мэдээллээ зөв оруулна уу', result);
  //         }
  //     }
  // };

  // const endReached = () => {
  //     fetchOwnCards();
  // };

  // const renderFunction = (type, data, index) => {
  //     console.log('rendering item', index);
  //     return (
  //         <Card
  //             color=""
  //             name={data.first_name}
  //             companyName={data.com_name}
  //             image={data.image_path}
  //             phone={data.phone}
  //             handleDeleteCards={handleDeleteCard}
  //             editPress={handleUpdateCard}
  //             data={data}
  //             index={index}
  //         />
  //     );
  // };

  // const layoutProvider = new LayoutProvider(
  //     (index) => 'normal',
  //     (type, dim) => {
  //         dim.width = width;
  //         dim.height = height;
  //     }
  // );

  // const fetchBalance = async () => {
  //     const result = await getBalance(state.info.token);
  //     console.log('Blance', result);
  //     if (result.status === 'success') {
  //         setBalance(result.data.money);
  //     } else {
  //         console.log('Server error', result);
  //     }
  // };

  // const handleDeleteCard = async (id) => {
  //     const result = await deleteCard(id, state.info.token);
  //     if (result.status === 'success') {
  //         console.log('Successfully deleted', result);
  //     }
  // };

  // const handleUpdateCard = (index) => {
  //     navigation.navigate('UpdateCard', {
  //         data: cardsData.current[index],
  //     });
  // };

  // const goAddCard = () => {
  //     navigation.navigate('AddCard');
  // };

  // const logOut = () => {
  //     logout(dispatch);
  // };

  // const recyclerViewFooter = () => {
  //     return (
  //         <View style={styles.recyclerFooterContainer}>
  //             <GradientButton
  //                 style={[styles.newCardButton]}
  //                 onPress={goAddCard}
  //                 text="Нэрийн хуудас нэмэх"
  //             />
  //             <GradientButton onPress={logOut} text="Гарах" />
  //         </View>
  //     );
  // };

  // const goChangeProfile = () => {
  //     navigation.navigate('ChangeProfile', {
  //         last_name: lastName,
  //         first_name: name,
  //     });
  // };

  // if (isLoad) return <Loader />;

  return (
    // <TabBodyView navigation={navigation} screen="Profile" screenName="Профайл">
    <View style={[styles.container]}>
      <Text>dsad</Text>
      {/* <View style={[styles.profileBlue]}>
          <View>
            <View style={[styles.profileView]}>
              <LogoSvg color="#FFFFFF" width="100%" height="100%" />
            </View>
            <Text style={[styles.nameText]}>{`${lastName.substring(
              0,
              1,
            )}.${name}`}</Text>
            <Text style={styles.showcurrencyText}>Таны iCard оноо</Text>
            <Text style={[styles.currencyText]}>{balance}</Text>
          </View>

          <View style={[styles.profileBox]}>
            {state.info.avatar ? (
              <ImageBackground
                source={{uri: state.info.avatar}}
                style={[styles.ImageBackGround]}
              />
            ) : (
              <View style={[styles.defaultImageBackGround]}>
                <CameraSvg width="70%" height="70%" />
              </View>
            )}
          </View>
          <TouchableOpacity
            style={[styles.changeProfileIcon]}
            onPress={goChangeProfile}>
            <EditProfileSvg />
          </TouchableOpacity>
        </View>

        {ownCardsProvider._size > 0 && (
          <RecyclerListView
            style={styles.list}
            rowRenderer={renderFunction}
            layoutProvider={layoutProvider}
            dataProvider={ownCardsProvider}
            onEndReached={endReached}
            onEndReachedThreshold={0}
            contentContainerStyle={styles.listContentContainer}
            scrollViewProps={{
              showsVerticalScrollIndicator: false,
              ref: ref => (CardsListView.current = ref),
            }}
            renderFooter={recyclerViewFooter}
          />
        )} */}
    </View>
    // </TabBodyView>
  );
}

export default Profile;
