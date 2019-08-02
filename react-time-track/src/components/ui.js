/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import { FaUser, FaPlus, FaMinus } from "react-icons/fa";

function Button({ styles, ...props }) {
  return (
    <button
      {...props}
      css={{
        width: "100%",
        margin: "0.7rem auto",
        padding: "1rem",
        fontSize: "1rem",
        fontWeight: "bold",
        textAlign: "center",
        textTransform: "uppercase",
        border: "1px solid currentcolor",
        borderRadius: ".25rem",
        color: "#fff",
        background: "#000",
        transition: "all 200ms ease",
        outline: "0",
        "@media (max-width: 768px)": {
          width: "90%",
          margin: "0.5rem auto",
          borderRadius: "0.5em",
          boxSizing: "border-box"
        },
        "&:hover": {
          cursor: "pointer",
          background: "#fff",
          color: "#000"
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
        span: {
          width: "80%"
        },
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
        minWidth: "55px",
        minHeight: "55px",
        fontSize: "1.1rem",
        fontWeight: "bold",
        color: "#666",
        borderRadius: "50%",
        border: "5px solid #000",
        background: "#fff",
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
        marginLeft: "25px",
        fontSize: "1.2rem",
        fontWeight: "100",
        ...styles
      }}
    />
  );
}

function NavBarItem({ styles, ...props }) {
  return (
    <Link to={props.link} onClick={props.onClick}>
      <div
        {...props}
        css={{
          display: "flex",
          alignItems: "center",
          padding: "0.5em 0.5em",
          "&:hover": {
            cursor: "pointer",
            background: "#222",
            color: "#FFF"
          },
          ...styles
        }}
      />
    </Link>
  );
}

function Title({ styles, ...props }) {
  return (
    <p
      {...props}
      css={{
        fontSize: "1.1em",
        fontWeight: "bold",
        margin: "1em 0",
        ...styles
      }}
    />
  );
}

function Label({ styles, ...props }) {
  return (
    <label
      {...props}
      css={{
        display: "block",
        fontWeight: "600",
        padding: "0 8px 8px 0",
        fontSize: "16px",
        lineHeight: "24px",
        color: "#888888"
      }}
    />
  );
}

function Li({ styles, ...props }) {
  return (
    <p
      {...props}
      css={{
        display: "block",
        fontWeight: "600",
        fontSize: "12px",
        paddingLeft: "100px",
        // paddingBottom: "30px",
        lineHeight: "24px",
        color: "#888888"
      }}
    />
  );
}

function UserCard({ styles, ...props }) {
  return (
    <div
      {...props}
      css={{
        background: "white",
        borderRadius: ".5em",
        boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, .12)",
        boxSizing: "border-box",
        padding: "2rem",
        width: "100%",
        ...styles
      }}
    />
  );
}

const styleInput = {
  background: "none",
  border: "1px solid #eaeaea",
  borderRadius: ".25rem",
  boxSizing: "border-box",
  display: "block",
  fontSize: "1rem",
  padding: ".5rem",
  color: "#333",
  width: "100%",
  "&:focus": {
    outline: "none",
    borderColor: "#00b7c6"
  }
};

function UserInput({ styles, ...props }) {
  return (
    <input
      {...props}
      css={{
        ...styleInput,
        ...styles
      }}
    />
  );
}

function IconUser({ styles }) {
  return (
    <div
      css={{
        border: "1px solid black",
        borderRadius: "50%",
        width: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 25,
        ...styles
      }}
    >
      <FaUser />
    </div>
  );
}

function IconGenericSmall({ icon, ...props }) {
  let iconResult = <FaMinus />;
  if (icon === "add") iconResult = <FaPlus />;

  return (
    <div
      role="button"
      css={{
        border: "1px solid black",
        borderRadius: "50%",
        width: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 25,
        cursor: "pointer"
      }}
      {...props}
    >
      {iconResult}
    </div>
  );
}

export {
  Button,
  Card,
  Circle,
  Subtitle,
  NavBarItem,
  Title,
  UserCard,
  UserInput,
  Label,
  Li,
  IconGenericSmall,
  IconUser
};
