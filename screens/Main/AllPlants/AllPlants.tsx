import { FlatList, StatusBar, TouchableOpacity, View } from "react-native";
import CommonStyles from "../../CommonStyles";
import Header from "../../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import PlantCard from "../../../components/PlantCard/PlantCard";
import { Plant } from "../../../types/Plant";
import { useEffect } from "react";
import { getPlantsRequest } from "../../../redux/plants/plants.actions";
import InterText from "../../../components/InterText/InterText";
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavParamList } from "../../../constants/NavParamaList";
import CustomFlatList from "../../../components/CustomFlatList/CustomeFlatList";
import { Colors } from "../../../constants/Colors";

function AllPlants() {
    const allPlants = useSelector((state: any) => state.plants.plants);
    const dispatch = useDispatch();
    const navigation = useNavigation<StackNavigationProp<NavParamList>>();
    useEffect(() => {
        dispatch(getPlantsRequest());
    }, [])


    const handleBack = () => {
        navigation.goBack();
    }
    return (
        <View style={CommonStyles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
            <Header />
            <View>
                <InterText style={CommonStyles.title}>all plants</InterText>
            </View>
            <CustomFlatList CustomCard={PlantCard} data={allPlants} />
        </View>
    )
}

export default AllPlants;