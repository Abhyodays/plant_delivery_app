import { Image, ScrollView, StyleSheet, View } from "react-native";
import CommonStyles from '../../CommonStyles';
import Header from "../../../components/Header/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavParamList } from "../../../constants/NavParamaList";
import InterText from "../../../components/InterText/InterText";
import { plantsData } from "../../../constants/PlantData";
import { useEffect, useState } from "react";
import { Plant } from "../../../types/Plant";
import { Colors } from "../../../constants/Colors";
import PlantDetail from "../../../components/PlantDetail/PlantDetail";
import styles from "./styles";
import AddToCartButton from "../../../components/AddToCartButton/AddToCartButton";
import useFetchPlant from "../../../hooks/useFetchPlant";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlistPlant, setWishListPlant } from "../../../redux/wishlist/wishlist.actions";
import { addItemToCart } from "../../../redux/cart/cart.actions";

type PlantDetailsProp = {
    route: {
        params: { id: string }
    }
}
type response = {
    data: Plant
}
function ProductDetails({ route }: PlantDetailsProp) {
    const id = route.params.id;
    const { data: plant }: response = useFetchPlant(`plants/${id}`);
    const dispatch = useDispatch();
    const wishlistPlants: Plant[] = useSelector((state: any) => state.wishlist.plants);
    //dummy
    const [isLiked, setIsLiked] = useState<boolean>(false);

    const addToCart = () => {
        if (!plant) return;
        dispatch(addItemToCart(plant))
    }
    const handleLikeClick = () => {
        if (!plant) return;
        if (isLiked) {
            dispatch(removeWishlistPlant(plant.id))
        }
        else {
            dispatch(setWishListPlant(plant))
        }
        setIsLiked(il => !il);
    }

    const navigation = useNavigation<StackNavigationProp<NavParamList>>();

    const handleBack = () => {
        navigation.goBack();
    }
    useEffect(() => {
        const isWishlist = wishlistPlants.find(p => p.id === plant?.id);
        if (isWishlist) {
            setIsLiked(true);
        }
        else {
            setIsLiked(false)
        }
    }, [plant, wishlistPlants])

    return (
        <View style={[CommonStyles.container]}>
            <Header
                Left={
                    <TouchableOpacity onPress={handleBack}>
                        <Icon name="arrow-back" style={[CommonStyles.icon]} />
                    </TouchableOpacity>
                }
            />
            <ScrollView style={styles.scrollview_content} showsVerticalScrollIndicator={false}>

                <View style={styles.header}>
                    <InterText style={styles.title}>{plant?.name}</InterText>
                    <InterText style={[CommonStyles.link, styles.link]}>{plant?.type}</InterText>
                </View>
                <View style={styles.poster_container}>
                    <View style={styles.poster_bg} />
                    {plant?.image_url && (
                        <Image
                            source={{ uri: plant.image_url }}
                            style={styles.poster_image}
                            resizeMode="contain"
                        />
                    )}
                </View>
                <View style={styles.plant_details}>
                    <PlantDetail label="Type" value={plant?.type} />
                    <PlantDetail label="Height" value={plant?.height} />
                    <PlantDetail label="Pot Size" value={plant?.potSize} />
                    <PlantDetail label="Pot Type" value={plant?.potType} />
                </View>
                <View style={styles.description}>
                    <InterText style={styles.description_text}>
                        {plant?.description}
                    </InterText>
                </View>
            </ScrollView>
            <View style={styles.footer}>
                <View>
                    <InterText style={styles.label}>Price</InterText>
                    <InterText style={styles.value}>{plant?.price}</InterText>
                </View>
                <View style={styles.footer_icon_container}>
                    <Icon
                        name="heart-circle-outline" size={50}
                        color={isLiked ? Colors.green : Colors.medium_grey}
                        onPress={handleLikeClick}
                    />
                    <AddToCartButton addToCart={() => addToCart()} />
                </View>
            </View>
        </View>
    );
}



export default ProductDetails;
