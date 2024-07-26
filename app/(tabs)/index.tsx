import List from '@/components/List/List';
import { todos } from '@/utils';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Appbar } from 'react-native-paper';
type HomeSAcreenProps = {
  setIsLoggedIn: (value: boolean) => void
}

export default function HomeScreen({setIsLoggedIn}: HomeSAcreenProps) {
  const router = useRouter();
  return (
  <>
    <Appbar.Header>
      <Appbar.Content title="Home"/>
      <Appbar.Action icon="cog" onPress={() => {
        router.push('(settings)');
      }} />
    </Appbar.Header>
    <View style={{flex: 1, padding:10, marginTop: 10}}>
      <List name="Todos" list={todos} />
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  
});
