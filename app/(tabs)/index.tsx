import { AuthContext } from '@/context/auth';
import { useRouter } from 'expo-router';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
type HomeSAcreenProps = {
  setIsLoggedIn: (value: boolean) => void
}

export default function HomeScreen({setIsLoggedIn}: HomeSAcreenProps) {
  const router = useRouter();
  const {logout} = useContext(AuthContext);
  return (
  <>
    <Appbar.Header>
      <Appbar.Content title="Home"/>
      <Appbar.Action icon="cog" onPress={() => {
        router.push('(settings)');
      }} />
    </Appbar.Header>
    <View style={{flex: 1, padding: 24, gap: 12, justifyContent: 'center'}}>
      <Button onPress={() => logout()}>Logout</Button>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  
});
