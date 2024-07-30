import { View } from "react-native";
import InterText from "../InterText/InterText";
import styles from "./styles";
import CommonStyles from "../../screens/CommonStyles";



function SectionHead({ title }: { title: string }) {
    return (
        <View style={styles.header_container}>
            <InterText style={[styles.text, styles.title]}>{title}</InterText>
            <InterText style={[CommonStyles.link, styles.text]}>view all</InterText>
        </View>
    )
}

export default SectionHead;