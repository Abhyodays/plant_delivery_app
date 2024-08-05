import { View } from "react-native";
import { Plant } from "../../types/Plant";
import PlantCard from "../PlantCard/PlantCard";
import Icon from 'react-native-vector-icons/Ionicons'
import styles from "./styles";
import { useDispatch } from "react-redux";
import { removeWishlistPlant } from "../../redux/wishlist/wishlist.actions";
import CommonStyles from "../../screens/CommonStyles";


function WishlistPlantCard({ plant }: { plant: Plant }) {
    const dispatch = useDispatch();
    const handleRemove = () => {
        dispatch(removeWishlistPlant(plant.id));
    }
    return (
        <View>
            <Icon name="close-circle-sharp" style={CommonStyles.cancel_button} size={16} onPress={handleRemove} />
            <PlantCard plant={plant} />
        </View>
    )
}
export default WishlistPlantCard;