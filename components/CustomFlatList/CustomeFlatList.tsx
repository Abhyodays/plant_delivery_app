import { FlatList } from "react-native-gesture-handler"
import { Plant } from "../../types/Plant"

type CustomFlatListProp = {
    data: any[],
    CustomCard: React.FC<CustomCardProp>
}
type CustomCardProp = {
    plant: Plant
}
function CustomFlatList({ data, CustomCard }: CustomFlatListProp) {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => {
                return (
                    <CustomCard plant={item} />
                )
            }}
            keyExtractor={(item) => item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ alignItems: 'center' }}
        />
    )
}

export default CustomFlatList;