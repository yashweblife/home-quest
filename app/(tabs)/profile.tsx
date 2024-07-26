import { useRouter } from "expo-router";
import { Appbar } from "react-native-paper";
export default function ProfileScreen() {
    const router = useRouter();
    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => {
                    router.back();
                }} />
                <Appbar.Content title="Profile" titleStyle={{ fontSize: 20 }} />
                <Appbar.Action icon="home" onPress={() => {}} />
            </Appbar.Header>
        </>
    );
}