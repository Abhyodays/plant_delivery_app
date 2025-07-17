import { useEffect } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { getAllOrdersRequest } from "../../../redux/orderList/orderList.action";
import { Card } from "react-native-paper";
import { Colors } from "../../../constants/Colors";
import { useNavigation } from "@react-navigation/native";

const Orders = () => {
    const dispatch = useDispatch();
    const orders = useSelector(state => state.orderList.orders);
    const userId = useSelector((state: any) => state.user.user.id);
    const navigation = useNavigation();
    console.log({ orders })

    useEffect(() => {
        dispatch(getAllOrdersRequest(userId))
    }, [])

    const renderItem = ({ item }: any) => {
        const quantity = item.items.length;
        const total = item.items.reduce((sum: number, curr: any) => {
            const price = parseFloat(curr.item.price.replace('$', ''));
            return sum + price;
        }, 0);

        return (
            <Card style={styles.card}>
                <View style={styles.cardContent}>
                    <Text style={[styles.label, { color: Colors.black }]}>Order ID</Text>
                    <Text style={styles.value}>{item.orderId}</Text>

                    <View style={styles.row}>
                        <Text style={[styles.meta]}>Items: {quantity}</Text>
                        <Text style={[styles.meta]}>Total: ${total}</Text>
                    </View>
                </View>
            </Card>
        );
    };

    return (
        <View style={[styles.container, { backgroundColor: Colors.white }]}>
            <Text style={[styles.title, { color: Colors.black }]}>My Orders</Text>
            <FlatList
                data={orders}
                keyExtractor={(item) => item.orderId}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    );
}

export default Orders;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
        marginLeft: 24
    },
    card: {
        backgroundColor: Colors.light_green,
        borderRadius: 10,
        marginBottom: 12,
        padding: 16,
        marginHorizontal: 24
    },
    cardContent: {
        flexDirection: 'column',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
    },
    value: {
        fontSize: 14,
        marginBottom: 8,
        color: '#555',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    meta: {
        fontSize: 14,
        fontWeight: '500',
        color: '#333',
    },
});
