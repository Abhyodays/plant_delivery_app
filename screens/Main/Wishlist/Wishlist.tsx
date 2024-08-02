import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
            <Header Left={
                <TouchableOpacity onPress={handleBack}>
                    <Icon name="arrow-back" style={[CommonStyles.icon]} />
                </TouchableOpacity>
            } />
            <View>
                <InterText style={CommonStyles.title}>my wishlist</InterText>
            </View>
            <FlatList
                data={plants}
                renderItem={({ item }) => {
                    return (
                        <WishlistPlantCard plant={item} />
                    )
                }}
                keyExtractor={(item) => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ alignItems: 'center' }}
            />
        </View>
    )
}

export default Wishlist;