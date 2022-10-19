import { AntDesign, Entypo } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon, IconButton, NativeBaseProvider, View } from "native-base";
import React from "react";
import Home from "./pages/Home";
import RandomMath from "./pages/RandomMath";

const Stack = createNativeStackNavigator();

const Wrapper = ({
  children,
  navigation,
}: React.PropsWithChildren<{ navigation: any }>) => {
  return (
    <View>
      {children}
      <IconButton
        icon={
          <Icon
            as={<AntDesign name="smileo" size={24} color="black" />}
            name="emoji-happy"
          />
        }
        onPress={() => navigation.navigate("home")}
      />
      <IconButton
        icon={
          <Icon
            as={<AntDesign name="meh" size={24} color="black" />}
            name="emoji-happy"
          />
        }
        onPress={() => navigation.navigate("random-math")}
      />
    </View>
  );
};

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" options={{ title: "Volume calculator" }}>
            {(props) => (
              <Wrapper navigation={props.navigation}>
                <Home />
              </Wrapper>
            )}
          </Stack.Screen>
          <Stack.Screen name="random-math" options={{ title: "Randomic math" }}>
            {(props) => (
              <Wrapper navigation={props.navigation}>
                <RandomMath />
              </Wrapper>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
