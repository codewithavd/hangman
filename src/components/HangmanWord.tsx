import React from "react";
type HangmanWordProps={
  reveal?: boolean
  wordToGuess: string
  guessedLetters: string[]
}

export default function HangmanWord({wordToGuess,reveal =false,guessedLetters}:HangmanWordProps) {
 
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: ".25rem",
          fontSize: "8rem",
          fontWeight: "bold",
          textTransform: "uppercase",
          fontFamily: "monospace",
        }}
      >
  {wordToGuess.split("").map((letter,index)=>(
<span style={{borderBottom:".7rem solid black" }} key={index}>
   <span style={{
    visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
    color: !guessedLetters.includes(letter) && reveal ? "red" :"black"
   }}>
  {letter}
  </span>
</span>
  ))}
   
       
      </div>
    </>
  );
}
