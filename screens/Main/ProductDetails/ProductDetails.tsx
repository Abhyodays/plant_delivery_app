import { Image, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import CommonStyles from '../../CommonStyles';
import Header from "../../../components/Header/Header";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavParamList } from "../../../constants/NavParamaList";
import InterText from "../../../components/InterText/InterText";
import { plantsData } from "../../../constants/PlantData";
import { useEffect, useMemo, useState } from "react";
import { Plant } from "../../../types/Plant";
import { Colors } from "../../../constants/Colors";
import PlantDetail from "../../../components/PlantDetail/PlantDetail";
import styles from "./styles";
import AddToCartButton from "../../../components/AddToCartButton/AddToCartButton";
import useFetchPlant from "../../../hooks/useFetchPlant";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlistPlant, setWishListPlant } from "../../../redux/wishlist/wishlist.actions";
import { addItemToCart, removeCartItem } from "../../../redux/cart/cart.actions";
import { CartItem } from "../../../types/CartItem";

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
    const userId = useSelector((state: any) => state.user.user.id)
    const { data: plant }: response = useFetchPlant(`plants/${id}`);
    const dispatch = useDispatch();
    const wishlistPlants: Plant[] = useSelector((state: any) => state.wishlist.plants);
    const cartItems: CartItem[] = useSelector((state: any) => state.cart.items)
    //dummy
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const counter = useMemo(() => {
        return cartItems.filter(({ item }) => item.id === plant?.id).length
    }, [cartItems, plant])

    const addToCart = () => {
        if (!plant) return;
        dispatch(addItemToCart(userId, plant))
    }
    const removeFromCart = () => {
        const cart = cartItems.filter(({ item }) => item.id === plant?.id);
        if (cart.length === 0) return;
        dispatch(removeCartItem(userId, cart[0].id))
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
            <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
            <Header />
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
                    <AddToCartButton count={counter} addToCart={() => addToCart()} removeFromCart={removeFromCart} />
                </View>
            </View>
        </View>
    );
}



export default ProductDetails;
