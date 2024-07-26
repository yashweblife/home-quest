import { AuthContext, AuthProvider } from '@/context/auth';
import ListProvider from '@/context/list';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useContext, useEffect } from 'react';
import 'react-native-reanimated';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const { isAuthenticated } = useContext(AuthContext);
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <ListProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack screenOptions={{ headerShown: false }}>
            {
              isAuthenticated ?
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                :
                <Stack.Screen name="(login)" options={{ headerShown: false }} />
            }
            <Stack.Screen name="+not-found" />
          </Stack>
        </ThemeProvider>
      </ListProvider>
    </AuthProvider>
  );
}
