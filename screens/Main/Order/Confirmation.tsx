import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { Text, Button } from "react-native-paper";
import { useSelector } from "react-redux";
import { Colors } from "../../../constants/Colors";
import Icon from 'react-native-vector-icons/Ionicons'

const Confirmation = () => {
    const { error, loading, order } = useSelector(state => state.orderCreate);
    console.log("order:", order)
    if (error) {
        return <Text>Error</Text>
    }
    if (loading) {
        return (
            <Text>loading...</Text>
        )
    }
    const navigation = useNavigation();

    return (
        <View style={[styles.container, { backgroundColor: Colors.white }]}>
            <View style={styles.header}>
                <Icon name="checkmark-circle" size={80} color={Colors.green} />
                <Text style={[styles.title, { color: Colors.black }]}>Order Confirmed!</Text>
                <Text style={[styles.orderId, { color: Colors.black }]}>
                    Order ID: {order.orderId}
                </Text>
            </View>

            <FlatList
                data={order.items}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.item.image_url }} style={styles.image} resizeMode="contain" />
                        <View style={styles.details}>
                            <Text style={styles.name}>{item.item.name}</Text>
                            <Text style={styles.price}>{item.item.price}</Text>
                        </View>
                    </View>
                )}
            />

            <Button
                mode="contained"
                style={styles.button}
                onPress={() => navigation.navigate("Home")}
                buttonColor={Colors.green}
            >
                Continue Shopping
            </Button>
        </View>
    );
}

export default Confirmation;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 10,
    },
    orderId: {
        marginTop: 5,
        fontSize: 14,
    },
    listContainer: {
        paddingBottom: 20,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#F1F3F2',
        borderRadius: 10,
        padding: 10,
        marginVertical: 6,
        alignItems: 'center',
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 8,
        backgroundColor: '#ccc',
    },
    details: {
        marginLeft: 12,
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
    },
    price: {
        marginTop: 4,
        fontSize: 14,
        color: '#666',
    },
    button: {
        marginVertical: 16,
        borderRadius: 5,
    },
});
