import { Text, View } from "react-native";
import CommonStyles from "../../CommonStyles";
import { Button } from "react-native";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../../../redux/cart/cart.actions";
import { removeUserRequest } from "../../../redux/user/user.action";

function Account() {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(removeUserRequest());

    }
    return (
        <View style={CommonStyles.container}>
            <Button title="Logout" onPress={handleLogout} />
        </View>
    )
}

export default Account;