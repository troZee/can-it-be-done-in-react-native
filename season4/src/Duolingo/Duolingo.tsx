import React from "react";
import { View, StyleSheet } from "react-native";

import WordList from "./WordList";
import Word from "./Word";
import Header from "./Header";

const words = [
  { id: 1, word: "Ihr" },
  { id: 2, word: "isst" },
  { id: 3, word: "einen" },
  { id: 4, word: "Apfel" },
  { id: 5, word: "," },
  { id: 6, word: "weil" },
  { id: 7, word: "er" },
  { id: 8, word: "hungrig" },
  { id: 9, word: "ist" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});

const Duolingo = () => {
  return (
    <View style={styles.container}>
      <Header />
      <WordList>
        {words.map((word) => (
          <Word key={word.id} {...word} />
        ))}
      </WordList>
    </View>
  );
};

export default Duolingo;