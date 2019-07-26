/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import { Button } from "./ui";

function AddMemberProject({ listMember, addMemberFn }) {
  const [selectedMember, setSelectedMember] = React.useState(listMember[0]);

  function handleChangeMember(event) {
    setSelectedMember(listMember[event.target.selectedIndex]);
  }

  function handleCancelMember() {
    console.log("Cancel Add Member");
  }

  function handleSubmitMember(event) {
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
    width: "94%",
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

  const fieldsetGeneralStyle = {
    border: "1px solid black",
    margin: "12px 42px",
    padding: "10px 0",
    textAlign: "center",
    "@media (max-width: 800px)": {
      margin: "12px 27px"
    },
    "@media (max-width: 500px)": {
      margin: "12px 20px"
    },
    "@media (max-width: 450px)": {
      margin: "16px 20px"
    }
  };

  const fieldsetDetailStyle = {
    ...fieldsetGeneralStyle,
    border: "1px solid gray",
    width: "63%",
    "@media (max-width: 800px)": {
      ...fieldsetGeneralStyle["@media (max-width: 800px)"],
      width: "65%"
    }
  };

  const rowWeekStyle = {
    display: "flex",
    justifyContent: "space-around"
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
      <form css={formStyle} onSubmit={handleSubmitMember}>
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
              <select
                name="ddlEmployee"
                css={selectStyle}
                onChange={handleChangeMember}
              >
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
                defaultValue="0"
                required
              />
              <span> %</span>
            </div>
          </fieldset>
        </div>
        <fieldset css={fieldsetGeneralStyle}>
          <label css={rowWeekStyle}>
            <span>31/07 - 09/08</span>
            <span>20%</span>
            <button>+</button>
          </label>
        </fieldset>
        <fieldset css={fieldsetDetailStyle}>
          <label css={rowWeekStyle}>
            <span>31/07 - 02/08</span>
            <span>20%</span>
          </label>
          <label css={rowWeekStyle}>
            <span>05/07 - 09/08</span>
            <span>20%</span>
          </label>
        </fieldset>
        <fieldset css={fieldsetStyle}>
          <Button type="button" css={buttonStyle} onClick={handleCancelMember}>
            Cancel
          </Button>
          <Button type="submit" css={buttonStyle} onClick={handleSubmitMember}>
            Add
          </Button>
        </fieldset>
      </form>
    </section>
  );
}

export default AddMemberProject;
