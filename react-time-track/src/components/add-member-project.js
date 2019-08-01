/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

import { Button } from "./ui";

function AddMemberProject({ listMember, addMemberFn, closeModalFn }) {
  console.log(listMember);
  let infoProject = JSON.parse(sessionStorage.getItem("InfoNewProject"));
  const startDate = new Date(infoProject.start.split("-").join("/"));
  const endDate = new Date(infoProject.end.split("-").join("/"));

  const [selectedMember, setSelectedMember] = React.useState(listMember[0]);
  const [availableTime, setAvailableTime] = React.useState(
    selectedMember["availableTime"].sort()[0]
  );

  const millisecondsInADay = 86400000;
  const formatDate = { day: "2-digit", month: "2-digit", year: "2-digit" };
  const getTimeWeekly = React.useMemo(() => {
    let startNumberDay = startDate.getDay();
    return selectedMember.availableTime.reduce(
      (result, value) => {
        let lastElement = result.slice(-1)[0];
        if (startNumberDay > 5) {
          startNumberDay = 1;
          let newStartDate = new Date(
            lastElement[1].getTime() + 3 * millisecondsInADay
          );
          result.push([newStartDate, newStartDate, value]);
        } else {
          if (value < lastElement[2]) lastElement[2] = value;

          lastElement[1] = new Date(
            lastElement[1].getTime() + millisecondsInADay
          );
        }
        startNumberDay++;
        return result;
      },
      [
        [
          startDate,
          new Date(startDate.getTime() - millisecondsInADay),
          selectedMember.availableTime[0]
        ]
      ]
    );
  }, [selectedMember.availableTime, startDate]);

  const [detailTimeByWeek, setDetailTimeByWeek] = React.useState(getTimeWeekly);
  const [isShownDetailTime, setIsShownDetailTime] = React.useState(false);

  function handleChangeMember(event) {
    setSelectedMember(listMember[event.target.selectedIndex]);
  }

  function handleCancelMember() {
    closeModalFn();
  }

  function handleExpandCollapse() {
    setIsShownDetailTime(!isShownDetailTime);
  }

  function handleSubmitMember(event) {
    event.preventDefault();

    const ddlEmployee = event.target.elements.ddlEmployee;
    let id = +ddlEmployee.value;
    let member = listMember[ddlEmployee.selectedIndex];
    let name = member.name;
    let time = +event.target.elements.txtTime.value;
    let cost = (member.rate * member.availableTime.length * 8 * time) / 100;

    addMemberFn({ id, name, time, cost });
    closeModalFn();
  }

  React.useEffect(() => {
    setAvailableTime(selectedMember["availableTime"].sort()[0]);
    setDetailTimeByWeek(getTimeWeekly);
  }, [getTimeWeekly, selectedMember, startDate]);

  //Declaration for styles

  const sectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    "@media (min-width: 960px)": {
      left: 230
    },
    "@media (max-width: 450px)": {
      justifyContent: "center"
    }
  };

  const formStyle = {
    width: "80%",
    backgroundColor: "white",
    padding: 10,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
    borderRadius: "0.5em"
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
    width: "64%",
    "@media (max-width: 800px)": {
      ...fieldsetGeneralStyle["@media (max-width: 800px)"],
      width: "66%"
    },
    "@media (max-width: 500px)": {
      ...fieldsetGeneralStyle["@media (max-width: 500px)"],
      width: "69%"
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
                min="0"
                max="100"
                required
                autoFocus
              />
              <span> %</span>
            </div>
          </fieldset>
        </div>
        <fieldset css={fieldsetGeneralStyle}>
          <div css={rowWeekStyle}>
            <span>
              {`${startDate.toLocaleDateString("es-PE", formatDate)} - 
            ${endDate.toLocaleDateString("es-PE", formatDate)}`}
            </span>
            <span>{availableTime}%</span>
            <button type="button" onClick={handleExpandCollapse}>
              {isShownDetailTime ? <FaAngleUp /> : <FaAngleDown />}
            </button>
          </div>
        </fieldset>
        {isShownDetailTime && (
          <fieldset css={fieldsetDetailStyle}>
            {detailTimeByWeek.map(week => {
              return (
                <div css={rowWeekStyle} key={week[0].getTime()}>
                  <span>
                    {`${week[0].toLocaleDateString("es-PE", formatDate)} - 
                    ${week[1].toLocaleDateString("es-PE", formatDate)}`}
                  </span>
                  <span>{week[2]}%</span>
                </div>
              );
            })}
          </fieldset>
        )}

        <fieldset css={fieldsetStyle}>
          <Button type="button" css={buttonStyle} onClick={handleCancelMember}>
            Cancel
          </Button>
          <Button type="submit" css={buttonStyle}>
            Add
          </Button>
        </fieldset>
      </form>
    </section>
  );
}

export default AddMemberProject;
