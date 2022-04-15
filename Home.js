// Home.js

import axios from "axios";
import React from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";
import { Text } from "react-native";
import { useNavigate } from "react-router-dom";

function Home() {
  const uri = 'https://sheet.best/api/sheets/725a3d83-79cc-4a91-90ec-aefe53604c53'
  const [color, setColor] = React.useState('');
  const [typeOfClothing, setTypeOfClothing] = React.useState('');
  const [formality, setFormality] = React.useState('');
  const [length, setLength] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [season, setSeason] = React.useState('');
  let navigate = useNavigate();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Category</Text>
      <TextInput
        style={styles.input}
        onChangeText={setCategory}
        value={category}
        placeholder="top, bottom, set, accessory, outer"
      />
      <Text>Type</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTypeOfClothing}
        value={typeOfClothing}
        placeholder="tshirt, pants, hat, etc."
      />
      <Text>Formality</Text>
      <TextInput
        style={styles.input}
        onChangeText={setFormality}
        value={formality}
        placeholder="formal, informal"
      />
      <Text>Length</Text>
      <TextInput
        style={styles.input}
        onChangeText={setLength}
        value={length}
        placeholder="long, short, sleeveless"
      />
      <Text>Season</Text>
      <TextInput
        style={styles.input}
        onChangeText={setSeason}
        value={season}
        placeholder="winter, spring, summer"
      />
      <Text>Color</Text>
      <TextInput
        style={styles.input}
        onChangeText={setColor}
        value={color}
        placeholder="red, black, yellow, etc."
      />
      <Button
        title="Next"
        onPress={() => {
          axios.post(uri, { category, typeOfClothing, formality, length, season, color })
          .then((response) => {
            console.log(response);
          })
          navigate("/addPhoto");
      }}
      />
    </View>
    
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Home;