import { StyleSheet, Text, TextProps } from "react-native";
import styles from "./styles";

function InterText({ children, style }: TextProps) {
    return (
        <Text style={[styles.text, style]} >{children}</Text>
    )
}



export default InterText;