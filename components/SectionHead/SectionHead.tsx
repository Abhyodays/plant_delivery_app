import { View } from "react-native";
import InterText from "../InterText/InterText";
import styles from "./styles";
import CommonStyles from "../../screens/CommonStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavParamList } from "../../constants/NavParamaList";



function SectionHead({ title }: { title: string }) {
    const navigation = useNavigation<StackNavigationProp<NavParamList>>();
    const goToAllPlants = () => {
        navigation.push('AllPlants');
    }
    return (
        <View style={styles.header_container}>
            <InterText style={[styles.text, styles.title]}>{title}</InterText>
            <TouchableOpacity onPress={goToAllPlants}>
                <InterText style={[CommonStyles.link, styles.text]}>view all</InterText>
            </TouchableOpacity>
        </View>
    )
}

export default SectionHead;