import { View, Text, Center } from "native-base";
import React, { useCallback, useEffect, useState } from "react";

export default function RandomMath() {
  const [expression, setExpression] = useState<string>("");
  const getRandomMath = useCallback(() => {
    fetch("https://x-math.herokuapp.com/api/random")
      .then((resp) => resp.json())
      .then((data) => {
        setExpression(`${data.expression} = ${data.answer}`);
      });
    console.log(`io`);
  }, []);

  useEffect(() => {
    getRandomMath();
  }, [getRandomMath]);

  return (
    <View>
      <Center paddingY={"10"}>
        <Text fontSize="lg">{expression}</Text>
      </Center>
    </View>
  );
}
