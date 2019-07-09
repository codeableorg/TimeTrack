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

export { Center };
