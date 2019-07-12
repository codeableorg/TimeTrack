/** @jsx jsx */
import { jsx } from "@emotion/core";

function Center({ styles, ...props }) {
  return (
    <div
      {...props}
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...styles
      }}
    />
  );
}

function Section({ styles, ...props }) {
  return (
    <section
      {...props}
      css={{
        display: "flex",
        flexWrap: "wrap",
        margin: "0 25px",
        justifyContent: "space-between",
        "@media (max-width: 768px)": {
          flexDirection: "column",
          alignItems: "center",
          margin: "0"
        }
      }}
    />
  );
}

export { Center, Section };
