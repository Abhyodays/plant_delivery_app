import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ScrollView, View } from "react-native";
import { NavParamList } from "../../../constants/NavParamaList";
import CommonStyles from '../../CommonStyles'
import { TouchableOpacity } from "react-native-gesture-handler";
import Header from "../../../components/Header/Header";
import InterText from "../../../components/InterText/InterText";
import Search from "../../../components/Search/Search";
import SectionHead from "../../../components/SectionHead/SectionHead";
import styles from "./styles";
import HorizontalList from "../../../components/HorizontalList/HorizontalList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPopularPlants } from "../../../redux/popularPlants/popularPlants.actions";
import { getNewArrivalsPlants } from "../../../redux/newPlants/newPlants.actions";
import { getPlantsRequest } from "../../../redux/plants/plants.actions";

function Home() {
    const navigation = useNavigation<StackNavigationProp<NavParamList>>();
    const popularPlants = useSelector((state: any) => state.popularPlants.plants);
    const newPlants = useSelector((state: any) => state.newPlants.plants)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPopularPlants());
        dispatch(getNewArrivalsPlants());
    }, [])

    return (
        <View style={[CommonStyles.container]}>
            <Header Left={
                <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                    <InterText style={[styles.headerText, styles.bold]}>
                        <InterText>Welcome,</InterText> Trisha
                    </InterText>
                </TouchableOpacity>
            }
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Search />
                <SectionHead title="Popular plants" />
                <HorizontalList data={popularPlants} />
                <SectionHead title="New arrivals" />
                <HorizontalList data={newPlants} />
            </ScrollView>
        </View>
    )
}

export default Home;