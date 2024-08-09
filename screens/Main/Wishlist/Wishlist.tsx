import { useEffect } from "react";
import { StatusBar, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getWishlistPlants } from "../../../redux/wishlist/wishlist.actions";
import { Plant } from "../../../types/Plant";
import { Commands } from "react-native-screens/lib/typescript/fabric/SearchBarNativeComponent";
import CommonStyles from "../../CommonStyles";
import { FlatList } from "react-native-gesture-handler";
import PlantCard from "../../../components/PlantCard/PlantCard";
import InterText from "../../../components/InterText/InterText";
import Header from "../../../components/Header/Header";
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavParamList } from "../../../constants/NavParamaList";
import WishlistPlantCard from "../../../components/WishlistPlantCard/WishlistPlantCard";
import CustomFlatList from "../../../components/CustomFlatList/CustomeFlatList";
import { Colors } from "../../../constants/Colors";

function Wishlist() {
    const plants: Plant[] = useSelector((state: any) => state.wishlist.plants)
    const navigation = useNavigation<StackNavigationProp<NavParamList>>();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getWishlistPlants());
    }, [])
    const handleBack = () => {
        navigation.goBack();
    }
    return (
        <View style={CommonStyles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
            <Header />
            <View>
                <InterText style={CommonStyles.title}>my wishlist</InterText>
            </View>
            <CustomFlatList CustomCard={WishlistPlantCard} data={plants} />
        </View>
    )
}

export default Wishlist;