/** @jsx jsx */
import { jsx } from "@emotion/core";

function Center({ styles, ...props }) {
  return (
    <div
      {...props}
      css={{
        display: "flex",
        justifyContent: "center",
        ...styles
      }}
    />
  );
}

export { Center };
