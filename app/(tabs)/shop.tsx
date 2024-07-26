import { useRouter } from "expo-router";
import { Appbar } from "react-native-paper";

export default function ShopScreen() {
    const router = useRouter();
    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={()=>{
                    router.back();
                }}/>
                <Appbar.Content title="Shop" />
            </Appbar.Header>
        </>
    );
}