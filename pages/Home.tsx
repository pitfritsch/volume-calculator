import { Entypo } from "@expo/vector-icons";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Icon,
  IconButton,
  Input,
  Menu,
  Text,
  useToast,
} from "native-base";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";

type PossibleShapes = "cube" | "sphere";

function isNumber(n: string | number) {
  return Number(n) == n;
}

function CubeForm() {
  const toast = useToast();

  const [length, setLength] = useState<string>("");
  const [width, setWidth] = useState<string>("");
  const [height, setHeight] = useState<string>("");

  const [volume, setVolume] = useState<number>(0);

  useEffect(() => {
    toast.closeAll();
    if (!isNumber(length) || !isNumber(width) || !isNumber(height)) {
      toast.show({
        description: "Some value has a non-number value",
        placement: `top`,
      });
    }
    setVolume(Number(length) * Number(width) * Number(height));
  }, [length, width, height]);

  return (
    <Box>
      <Center margin={5}>
        <Image
          source={require("../assets/icons/volume-cube.png")}
          style={{ height: 100, width: 150 }}
        />
      </Center>
      <FormControl>
        <FormControl.Label>Length</FormControl.Label>
        <Input value={length} onChangeText={setLength} />
      </FormControl>
      <FormControl>
        <FormControl.Label>Width</FormControl.Label>
        <Input value={width} onChangeText={setWidth} />
      </FormControl>
      <FormControl>
        <FormControl.Label>Height</FormControl.Label>
        <Input value={height} onChangeText={setHeight} />
      </FormControl>
      <Text textAlign="right" marginTop="2" color="#7c7c7c">
        * All sizes in cm
      </Text>
      <Center height="100px">
        <Text fontSize={30}>{volume} cm³</Text>
      </Center>
    </Box>
  );
}

function SphereForm() {
  const toast = useToast();
  const [radius, setRadius] = useState<string>("");

  const [volume, setVolume] = useState<number>(0);

  useEffect(() => {
    toast.closeAll();
    if (!isNumber(radius)) {
      toast.show({
        description: "Some value has a non-number value",
        placement: `top`,
      });
    }
    const numberedRadius = Number(radius);

    setVolume(Math.round((4 / 3) * Math.PI * Math.pow(numberedRadius, 3)));
  }, [radius]);

  return (
    <Box>
      <Center margin={5}>
        <Image
          source={require("../assets/icons/PlainSphere.png")}
          style={{ height: 100, width: 100 }}
        />
      </Center>
      <FormControl>
        <FormControl.Label>Radius</FormControl.Label>
        <Input value={radius} onChangeText={setRadius} />
      </FormControl>
      <Text textAlign="right" marginTop="2" color="#7c7c7c">
        * All sizes in cm
      </Text>
      <Center height="100px">
        <Text fontSize={30}>{volume} cm³</Text>
      </Center>
    </Box>
  );
}

const Forms: { [key in PossibleShapes]: () => JSX.Element } = {
  cube: CubeForm,
  sphere: SphereForm,
};

export default function Home() {
  const [selectedShape, setSelectedShape] = useState<PossibleShapes>("cube");

  const Form = Forms[selectedShape];

  return (
    <Flex padding="10">
      <Menu
        trigger={(triggerProps) => (
          <Button {...triggerProps}>{selectedShape}</Button>
        )}
      >
        <Menu.Item onPress={() => setSelectedShape("cube")}>Cube</Menu.Item>
        <Menu.Item onPress={() => setSelectedShape("sphere")}>Sphere</Menu.Item>
      </Menu>
      <Form />
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
