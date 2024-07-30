import { Text, View } from "react-native";
import InterText from "../InterText/InterText";
import styles from "./styles";

type PlantDetailProp = {
    label: string,
    value?: string
}
function PlantDetail({ label, value }: PlantDetailProp) {
    return (
        <View>
            <InterText style={[styles.text, styles.label]}>{label}</InterText>
            <InterText style={styles.text}>{value}</InterText>
        </View>
    )
}

export default PlantDetail;