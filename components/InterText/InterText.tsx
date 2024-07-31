import { StyleSheet, Text, TextProps } from "react-native";
import styles from "./styles";

function InterText({ children, style, numberOfLines }: TextProps) {
    return (
        <Text style={[styles.text, style]} numberOfLines={numberOfLines}>{children}</Text>
    )
}



export default InterText;