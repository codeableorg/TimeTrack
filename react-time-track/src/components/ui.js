/** @jsx jsx */
import { jsx } from "@emotion/core";

function Button({ styles, ...props }) {
  return (
    <button
      {...props}
      css={{
        width: "100%",
        margin: "5px 25px",
        padding: "1rem",
        fontSize: "1rem",
        textAlign: "center",
        textTransform: "uppercase",
        border: "1px solid #f60",
        borderRadius: ".25rem",
        color: "white",
        background: "#f60",
        "@media (max-width: 768px)": {
          width: "90%",
          margin: "5px 0"
        },
        "&:hover": {
          background: "white",
          color: "#f60"
        },
        ...styles
      }}
    />
  );
}

function Card({ styles, ...props }) {
  return (
    <div
      {...props}
      css={{
        width: "33%",
        margin: "5px 0",
        padding: ".5rem",
        fontSize: "1.3rem",
        boxSizing: "border-box",
        boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, .12)",
        borderRadius: ".25rem",
        background: "white",
        "@media (max-width: 768px)": {
          width: "90%"
        },
        ...styles
      }}
    />
  );
}

function Circle({ styles, ...props }) {
  return (
    <div
      {...props}
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "60px",
        height: "60px",
        color: "#fff",
        borderRadius: "50%",
        background: "#000",
        ...styles
      }}
    />
  );
}

function Subtitle({ styles, ...props }) {
  return (
    <h1
      {...props}
      css={{
        marginLeft: "1rem",
        fontSize: "1.2rem",
        fontWeight: "100",
        ...styles
      }}
    />
  );
}

export { Button, Card, Circle, Subtitle };
