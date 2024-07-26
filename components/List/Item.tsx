import { TodoData } from "@/utils";
import { Button, Card, Chip, Text } from "react-native-paper";

export default function Item({title, description, asignedTo}:TodoData) {
    function handleAccept() {
    }
    return(
        <Card style={{marginBottom: 10}}>
            <Card.Title title={title}/>
            <Card.Content>
                <Text>{description}</Text>
            </Card.Content>

            <Card.Actions>
                {
                    asignedTo == '' ?
                    <Button onPress={handleAccept}>Accept</Button>
                    :<Chip icon="account">{asignedTo}</Chip>
                }
            </Card.Actions>
        </Card>
    )
}