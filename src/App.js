import "./styles.css";
import React, { useState } from "react";
import emojiDictionary from "./EmojiDictionary";

export default function App() {
  var emojiarray = Object.keys(emojiDictionary);
  var [meaning, getMeaning] = useState("");
  function onemojichanged(event) {
    var input = event.target.value;
    console.log(input);
    var emojiMeaning = emojiDictionary[input];
    if (emojiMeaning === undefined) {
      getMeaning("Emoji " + input);
    } else {
      getMeaning(emojiMeaning);
    }
  }
  function OnEmojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    if (emojiMeaning === undefined) {
      getMeaning("Emoji " + emoji);
    } else {
      getMeaning(emojiMeaning);
    }
  }
  return (
    <div className="App">
      <h1>Inside Out!!!!</h1>
      <input
        placeholder="Enter your Emoji"
        onChange={onemojichanged}
        maxLength="2"
      ></input>
      <h2>{meaning}</h2>
      <ul>
        {emojiarray.map((emoji) => {
          return <li onClick={() => OnEmojiClickHandler(emoji)}>{emoji}</li>;
        })}
      </ul>
    </div>
  );
}
