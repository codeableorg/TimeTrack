/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";

import { Button } from "../components/ui";

function InputProjectInfo() {
  const today = new Date().toLocaleDateString("es-PER");

  const infoProject = {
    client: "",
    project: "",
    category: "",
    product: "",
    start: today,
    end: today
  };
  const [infoNewProject, setInfoNewProject] = React.useState(
    sessionStorage.getItem("InfoNewProject") || infoProject
  );

  function handleChange(event, key) {
    setInfoNewProject({ ...infoNewProject, [key]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let client = event.target.elements.txtClient.value;
    let project = event.target.elements.txtProject.value;
    let category = event.target.elements.txtCategory.value;
    let product = event.target.elements.txtProduct.value;
    let start = event.target.elements.txtStart.value;
    let end = event.target.elements.txtEnd.value;
    setInfoNewProject({ client, project, category, product, start, end });
  }

  function handleCancel() {
    navigate("/");
  }

  React.useEffect(() => {
    sessionStorage.setItem("InfoNewProject", infoNewProject);
  }, [infoNewProject]);

  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  };
  const formStyle = { width: 400, backgroundColor: "white" };
  const fieldsetStyle = {
    border: "none",
    padding: "12px 8px",
    textAlign: "center"
  };
  const labelStyle = {
    width: 100,
    display: "inline-block",
    textAlign: "left",
    fontWeight: "bold"
  };
  const divStyle = { display: "inline-block", width: 200, textAlign: "left" };
  const inputTextStyle = { width: 200 };
  const inputDateStyle = { width: 135 };
  const buttonStyle = { width: 150, margin: "0 10px" };
  return (
    <section css={sectionStyle}>
      <form css={formStyle} onSubmit={handleSubmit}>
        <fieldset css={fieldsetStyle}>
          <label css={labelStyle}>Client</label>
          <div css={divStyle}>
            <input
              type="text"
              name="txtClient"
              css={inputTextStyle}
              value={infoProject["client"]}
              onChange={event => handleChange(event, "client")}
              required
            />
          </div>
        </fieldset>
        <fieldset css={fieldsetStyle}>
          <label css={labelStyle}>Project</label>
          <div css={divStyle}>
            <input
              type="text"
              name="txtProject"
              css={inputTextStyle}
              value={infoProject["project"]}
              required
            />
          </div>
        </fieldset>
        <fieldset css={fieldsetStyle}>
          <label css={labelStyle}>Category</label>
          <div css={divStyle}>
            <input type="text" name="Category" css={inputTextStyle} required />
          </div>
        </fieldset>
        <fieldset css={fieldsetStyle}>
          <label css={labelStyle}>Product</label>
          <div css={divStyle}>
            <input type="text" name="Product" css={inputTextStyle} required />
          </div>
        </fieldset>
        <fieldset css={fieldsetStyle}>
          <label css={labelStyle}>Start</label>
          <div css={divStyle}>
            <input type="date" name="txtStart" css={inputDateStyle} required />
          </div>
        </fieldset>
        <fieldset css={fieldsetStyle}>
          <label css={labelStyle}>End</label>
          <div css={divStyle}>
            <input type="date" name="txtEnd" css={inputDateStyle} required />
          </div>
        </fieldset>
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

export default InputProjectInfo;
