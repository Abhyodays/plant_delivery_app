import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView, StatusBar, View } from "react-native";
import { NavParamList } from "../../../constants/NavParamaList";
import CommonStyles from '../../CommonStyles'
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../../components/Header/Header";
import InterText from "../../../components/InterText/InterText";
import SearchCard from "../../../components/SearchCard/SearchCard";
import SectionHead from "../../../components/SectionHead/SectionHead";
import styles from "./styles";
import HorizontalList from "../../../components/HorizontalList/HorizontalList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPopularPlants } from "../../../redux/popularPlants/popularPlants.actions";
import { getNewArrivalsPlants } from "../../../redux/newPlants/newPlants.actions";
import { getPlantsRequest } from "../../../redux/plants/plants.actions";
import { Colors } from "../../../constants/Colors";
import Icon from 'react-native-vector-icons/Ionicons'

function Home() {
    const navigation = useNavigation<StackNavigationProp<NavParamList>>();
    const popularPlants = useSelector((state: any) => state.popularPlants.plants);
    const newPlants = useSelector((state: any) => state.newPlants.plants)
    const user = useSelector((state: any) => state.user.user)
    const dispatch = useDispatch();

    const goToCart = () => {
        navigation.push('Cart');
    }
    const goToWishlist = () => {
        navigation.push('Wishlist');
    }
    useEffect(() => {
        dispatch(getPopularPlants());
        dispatch(getNewArrivalsPlants());
    }, [])

    return (
        <View style={[CommonStyles.container]}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                    <InterText style={[styles.headerText]}>
                        Welcome, <InterText style={[styles.bold, CommonStyles.link]}>{user?.name}</InterText>
                    </InterText>
                </TouchableOpacity>
                <View style={styles.icon_container}>
                    <TouchableOpacity onPress={goToWishlist}>
                        <Icon name="heart" size={28} color={Colors.black} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToCart}>
                        <Icon name="bag" style={CommonStyles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SearchCard />
                <SectionHead title="Popular plants" />
                <HorizontalList data={popularPlants} />
                <SectionHead title="New arrivals" />
                <HorizontalList data={newPlants} />
            </ScrollView>
        </View>
    )
}

export default Home;