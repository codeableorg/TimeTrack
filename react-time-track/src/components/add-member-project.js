/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Button } from "./ui";

function AddMemberProject({ listMember, addMemberFn }) {
  const [selectedMember, setSelectedMember] = React.useState(listMember[0]);

  function handleCancelAddMember() {
    console.log("Cancel Add Member");
  }

  function handleSubmitAddMember(event) {
    console.dir(event.target);
    event.preventDefault();

    const ddlEmployee = event.target.elements.ddlEmployee;
    let id = ddlEmployee.value;
    let name = listMember[ddlEmployee.selectedIndex][1];
    let time = event.target.elements.txtTime.value;
    let cost = listMember[ddlEmployee.selectedIndex][2] * time;
    addMemberFn([{ id, name, time, cost }]);
  }

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
    width: "92%",
    border: "none",
    padding: "12px 30px",
    textAlign: "center",
    "@media (max-width: 800px)": {
      padding: "12px 15px",
      width: ""
    },
    "@media (max-width: 500px)": {
      padding: "12px 8px",
      width: ""
    },
    "@media (max-width: 450px)": {
      padding: "16px 8px",
      width: ""
    }
  };
  const labelStyle = {
    width: "35%",
    display: "inline-block",
    textAlign: "left",
    fontWeight: "bold",
    "@media (max-width: 700px)": {
      width: 80
    }
  };
  const divStyle = {
    display: "inline-block",
    width: "65%",
    textAlign: "left",
    "@media (max-width: 700px)": {
      width: "calc(100% - 80px)",
      textAlign: "right"
    },
    "@media (max-width: 600px)": {
      textAlign: "left"
    },
    "@media (max-width: 500px)": {
      width: "calc(80% - 100px)"
    }
  };

  const selectStyle = {
    width: "80%",
    "@media (max-width: 500px)": {
      width: "100%"
    }
  };

  const inputTextStyle = {
    width: 80,
    "@media (max-width: 500px)": {
      width: 40
    }
  };

  const buttonStyle = {
    width: 135,
    margin: "0 10px",
    "@media (max-width: 500px)": {
      width: 95
    }
  };

  return (
    <section css={sectionStyle}>
      <form css={formStyle} onSubmit={handleSubmitAddMember}>
        <h2>Add Employee</h2>
        <hr />
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            "@media (max-width:600px)": { flexDirection: "column" }
          }}
        >
          <fieldset css={fieldsetStyle}>
            <label css={labelStyle}>Employee</label>
            <div css={divStyle}>
              <select name="ddlEmployee" css={selectStyle}>
                {listMember.map(value => (
                  <option value={value.id} key={value.id}>
                    {value.name}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>
          <fieldset css={fieldsetStyle}>
            <label css={labelStyle}>Time</label>
            <div css={divStyle}>
              <input
                type="number"
                aria-label={
                  "Enter the percentage of time to be involved of the project"
                }
                name="txtTime"
                css={inputTextStyle}
                required
              />
              <span> %</span>
            </div>
          </fieldset>
        </div>
        <fieldset css={fieldsetStyle}>
          <Button
            type="button"
            css={buttonStyle}
            onClick={handleCancelAddMember}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            css={buttonStyle}
            onClick={handleSubmitAddMember}
          >
            Add
          </Button>
        </fieldset>
      </form>
    </section>
  );
}

export default AddMemberProject;
