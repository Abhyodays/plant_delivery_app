import { Button, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../../../redux/store";
import { GET_PLANTS_SUCCESS } from "../../../redux/plants/plants.types";
import { GET_POPULAR_PLANTS_SUCCESS } from "../../../redux/popularPlants/popularPlants.types";

function Cart() {
    const plant = useSelector((state: any) => state.plants.plants);
    console.log(plant);
    const dispatch = useDispatch();
    const handlePress = () => {
        dispatch({
            type: GET_POPULAR_PLANTS_SUCCESS, payload: [{
                id: "6",
                name: 'fiddle leaf fig',
                image_url: 'https://res.cloudinary.com/dvpkfifkk/image/upload/v1722234419/fiddle-leaf-fig_lwsmkm.png',
                height: "2ft.",
                potSize: "6 Inches",
                potType: "Ceramic",
                price: "$ 23.00",
                type: "Indoor",
                description: "The fiddle leaf fig is a striking indoor plant known for its large, glossy, violin-shaped leaves. It adds a touch of tropical elegance and can grow up to 10 feet tall indoors with proper care."
            }]
        });
    }
    return (
        <>
            <Button title='inject' onPress={handlePress} />
        </>
    )
}

export default Cart;