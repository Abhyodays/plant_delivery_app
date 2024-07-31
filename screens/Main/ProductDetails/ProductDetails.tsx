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

type PlantDetailsProp = {
    route: {
        params: { id: string }
    }
}

function ProductDetails({ route }: PlantDetailsProp) {
    const id = route.params.id;
    const { plant } = useFetchPlant(id);
    //dummy
    const [isLiked, setIsLiked] = useState<boolean>(false);

    const addToCart = (id?: string) => {
        console.log(`Plant ${id} added to cart`);
    }
    const handleLike = () => {
        setIsLiked(prev => !prev);
    }

    const navigation = useNavigation<StackNavigationProp<NavParamList>>();
    const goToHome = () => {
        navigation.goBack();
    }

    return (
        <View style={[CommonStyles.container]}>
            <Header
                Left={
                    <TouchableOpacity onPress={goToHome}>
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
                        onPress={handleLike}
                    />
                    <AddToCartButton addToCart={() => addToCart(plant?.id)} />
                </View>
            </View>
        </View>
    );
}



export default ProductDetails;
