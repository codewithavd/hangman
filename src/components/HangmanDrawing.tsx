import React from "react";
const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);
const BODY = (
  <div
    style={{
      width: "10px",
      height: "120px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: "0px",
    }}
  />
);
const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "140px",
      right: "-100px",
      rotate:"-30deg",
      transformOrigin:"left bottom",
    }}
  />
);
const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "140px",
      /* left: "230px", */
      right:"10px",
      rotate:"30deg",
      transformOrigin:"right bottom",
    }}
  />
);
const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "240px",
      /* left: "230px", */
      right:"5px",
      rotate:"-150deg",
      transformOrigin:"right top",
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "255px",
      /* left: "230px", */
      right:"2px",
      rotate:"150deg",
      transformOrigin:"left buttom",
    }}
  />
);
const BODY_PARTS = [HEAD,BODY,RIGHT_ARM,LEFT_ARM,RIGHT_LEG,LEFT_LEG]

type HangmanDrawingProps = {
  numberOfGuesses:number
}

export default function HangmanDrawing({numberOfGuesses}:HangmanDrawingProps) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
   {BODY_PARTS.slice(0,numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          position: "absolute",
          top: 0,
          right: 0,
          background: "black",
        }}
      />

      <div
        style={{
          height: "10px",
          width: "220px",
          marginLeft: "120px",
          background: "black",
        }}
      />

      <div
        style={{
          height: "400px",
          width: "10px",
          marginLeft: "120px",
          background: "black",
        }}
      />
      <div
        style={{
          height: "10px",
          width: "250px",
          background: "black",
        }}
      />
    </div>
  );
}
