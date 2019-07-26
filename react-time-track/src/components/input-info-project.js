/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";

import { Button } from "./ui";

function InputInfoProject() {
  const today = new Date()
    .toLocaleDateString("es-PE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    })
    .split("/")
    .reverse()
    .join("-");
  const infoProject = {
    title: "",
    client: "",
    category: "",
    product: "",
    start: today,
    end: today
  };
  const [infoNewProject, setInfoNewProject] = React.useState(
    JSON.parse(sessionStorage.getItem("InfoNewProject")) || infoProject
  );

  function handleChange(event, key) {
    setInfoNewProject({ ...infoNewProject, [key]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let title = event.target.elements.txtProject.value;
    let client = event.target.elements.txtClient.value;
    let category = event.target.elements.txtCategory.value;
    let product = event.target.elements.txtProduct.value;
    let start = event.target.elements.txtStart.value;
    let end = event.target.elements.txtEnd.value;
    setInfoNewProject({ title, client, category, product, start, end });
  }

  function handleCancel() {
    navigate("/");
  }

  React.useEffect(() => {
    sessionStorage.setItem("InfoNewProject", JSON.stringify(infoNewProject));
  }, [infoNewProject]);

  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "2em",
    "@media (max-width: 450px)": {
      height: "calc(100vh - 51px - 0.5em)",
      justifyContent: "center",
      marginTop: "0"
    }
  };
  const formStyle = {
    width: "80%",
    backgroundColor: "white",
    padding: 10,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
    borderRadius: "0.5em",
    "@media (max-width: 450px)": {
      height: "90%"
    }
  };
  const fieldsetStyle = {
    border: "none",
    padding: "12px 30px",
    textAlign: "center",
    "@media (max-width: 500px)": {
      padding: "12px 8px"
    },
    "@media (max-width: 450px)": {
      padding: "16px 8px"
    }
  };
  const labelStyle = {
    width: "20%",
    display: "inline-block",
    textAlign: "left",
    fontWeight: "bold",
    "@media (max-width: 500px)": {
      width: 100
    }
  };
  const divStyle = {
    display: "inline-block",
    width: "80%",
    textAlign: "left",
    "@media (max-width: 500px)": {
      width: "calc(80% - 100px)"
    }
  };
  const inputTextStyle = {
    width: "80%",
    "@media (max-width: 500px)": {
      width: "100%"
    }
  };
  const inputDateStyle = { width: 135 };
  const buttonStyle = {
    width: 135,
    margin: "0 10px",
    "@media (max-width: 500px)": {
      width: 95
    }
  };
  return (
    <section css={sectionStyle}>
      <form css={formStyle} onSubmit={handleSubmit}>
        <h2>Step 1: Enter general information</h2>
        <hr />
        {[
          ["Title", "text"],
          ["Client", "text"],
          ["Category", "text"],
          ["Product", "text"],
          ["Start", "date"],
          ["End", "date"]
        ].map(value => (
          <fieldset css={fieldsetStyle} key={value[0]}>
            <label css={labelStyle}>{value[0]}</label>
            <div css={divStyle}>
              <input
                type={value[1]}
                aria-label={"Enter the " + value[0] + " of the project"}
                name={"txt" + value[0]}
                css={value[1] === "text" ? inputTextStyle : inputDateStyle}
                value={infoProject[value[0].toLowerCase()]}
                onChange={event => handleChange(event, value[0].toLowerCase())}
                required
              />
            </div>
          </fieldset>
        ))}
        <fieldset css={fieldsetStyle}>
          <Button type="button" css={buttonStyle} onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" css={buttonStyle} onClick={handleSubmit}>
            Next
          </Button>
        </fieldset>
      </form>
    </section>
  );
}

export default InputInfoProject;
