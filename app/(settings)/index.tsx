import { useRouter } from "expo-router";
import { Appbar } from "react-native-paper";

export default function SettingsScreen() {
    const router = useRouter();
    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => {
                    router.back();
                }} />
                <Appbar.Content title="Settings" titleStyle={{ fontSize: 20 }} />
                <Appbar.Action icon="home" onPress={() => {
                    router.push('(tabs)');
                }} />
            </Appbar.Header>
        </>
    );
}