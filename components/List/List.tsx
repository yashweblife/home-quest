import { TodoData } from "@/utils";
import { View } from "react-native";
import { Text } from "react-native-paper";
import Item from "./Item";

export default function List({name, list}:{name:string, list:TodoData[]}) {
    return(
        <View>
            <Text variant="headlineLarge">{name}</Text>
            <View>
                {
                    list.map((todo:TodoData) => <Item key={todo.id} title={todo.title} description={todo.description} asignedTo={todo.asignedTo}/>)
                }

            </View>
        </View>
    )
}