import { Image, Text, View } from "react-native";
import { Plant } from "../../types/Plant";
import styles from "./styles";
import InterText from "../InterText/InterText";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavParamList } from "../../constants/NavParamaList";

export type PlantCardProps = {
    plant: Plant
}

function PlantCard({ plant }: PlantCardProps) {
    const navigation = useNavigation<StackNavigationProp<NavParamList>>();
    const goToPlant = (id: string) => {
        navigation.navigate("ProductDetails", { id });
    }
    return (
        <TouchableOpacity onPress={() => goToPlant(plant.id)}>
            <View style={styles.card_container}>
                <View style={styles.card_image_container}>
                    <Image source={{ uri: plant.image_url }} style={styles.card_image} resizeMode="contain" />
                </View>
                <InterText style={styles.card_title} numberOfLines={1}>{plant.name}</InterText>
                <InterText style={styles.card_price}>{plant.price}</InterText>
            </View>
        </TouchableOpacity>
    )
}

export default PlantCard;