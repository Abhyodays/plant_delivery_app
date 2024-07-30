import { Button, ImageBackground, StatusBar, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../../constants/Colors";
import InterText from "../../components/InterText/InterText";
import CommonStyles from '../CommonStyles'
function SplashScreen() {
    const handleSkip = () => {
        console.log("skip")
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle={"light-content"} backgroundColor="#000" />
            <ImageBackground source={require('../../assets/images/splash_bg.jpg')}
                resizeMode="cover"
                style={styles.splash_container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={handleSkip}>
                        <Text style={styles.text}>Skip</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <InterText style={[styles.text, styles.heading_text]}>House Plants</InterText>
                    <InterText style={[styles.text, styles.content_details]} numberOfLines={2}>Surround yourself with these decorative plants</InterText>
                    <TouchableHighlight onPress={handleSkip} style={CommonStyles.button}>
                        <InterText style={[styles.text, CommonStyles.button_text]}>Start Shopping</InterText>
                    </TouchableHighlight>
                </View>
            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    splash_container: {
        flex: 1,
        gap: 500
    },
    text: {
        color: Colors.white,
        fontSize: 16
    },
    header: {
        marginTop: 20,
        flexDirection: 'row-reverse',
        paddingHorizontal: 30
    },
    content: {
        alignItems: 'center'
    },
    heading_text: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    content_details: {
        marginTop: 30,
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'Inter-Light'
    }
})
export default SplashScreen;