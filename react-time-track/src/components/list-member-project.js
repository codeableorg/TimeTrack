/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import AddMemberProject from "../components/add-member-project";
import { Button, IconGenericSmall, IconUserSmall } from "../components/ui";

function ListMemberProject({ nextFn, beforeFn }) {
  let fakeListMember = [
    {
      id: "1",
      name: "Usuario 1",
      time: 10,
      cost: 6500,
      availableTime: [20, 20, 30, 30, 30, 40, 10, 10],
      isChoose: false
    },
    {
      id: "2",
      name: "Usuario 2",
      time: 5,
      cost: 1200,
      availableTime: [10, 10, 20, 20, 20, 20, 20, 20],
      isChoose: false
    },
    {
      id: "3",
      name: "Usuario 3",
      time: 10,
      cost: 3300,
      availableTime: [15, 15, 15, 15, 15, 15, 10, 10],
      isChoose: false
    },
    {
      id: "4",
      name: "Usuario 4",
      time: 8,
      cost: 2300,
      availableTime: [40, 40, 80, 80, 60, 60, 60, 60],
      isChoose: false
    },
    {
      id: "5",
      name: "Usuario 5",
      time: 15,
      cost: 5800,
      availableTime: [25, 25, 15, 15, 20, 20, 10, 10],
      isChoose: false
    },
    {
      id: "6",
      name: "Usuario 6",
      time: 5,
      cost: 800,
      availableTime: [50, 50, 50, 50, 40, 40, 40, 40],
      isChoose: false
    },
    {
      id: "7",
      name: "Usuario 7",
      time: 10,
      cost: 1300,
      availableTime: [80, 80, 80, 80, 80, 80, 80, 80],
      isChoose: false
    },
    {
      id: "8",
      name: "Usuario 8",
      time: 5,
      cost: 1600,
      availableTime: [40, 15, 45, 15, 45, 15, 10, 10],
      isChoose: false
    },
    {
      id: "9",
      name: "Usuario 9",
      time: 7,
      cost: 2300,
      availableTime: [80, 80, 80, 80, 80, 80, 80, 80],
      isChoose: false
    },
    {
      id: "10",
      name: "Usuario 10",
      time: 5,
      cost: 7100,
      availableTime: [50, 50, 50, 50, 50, 50, 50, 50],
      isChoose: false
    }
  ];

  const [listMember, setListMember] = React.useState(fakeListMember);
  const [listMemberAdded, setListMemberAdded] = React.useState([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const titleProject = JSON.parse(sessionStorage.getItem("InfoNewProject"))
    .title;
  const totalCost = listMemberAdded.reduce((sum, elem) => sum + elem.cost, 0);

  function addMember(newMember) {
    let index = listMember.findIndex(element => element.id === newMember.id);
    listMember[index].isChoose = true;
    setListMember(listMember);
    setListMemberAdded(listMemberAdded.concat(newMember));
    setIsError(false);
  }

  function delMember(id) {
    let index = listMember.findIndex(element => element.id === id);
    listMember[index].isChoose = false;
    setListMember(listMember);
    setListMemberAdded(listMemberAdded.filter(element => element.id !== id));
  }

  function handleOpenModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleNext() {
    if (listMemberAdded.length === 0) {
      setIsError(true);
      return;
    }
    nextFn();
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

  const divFormStyle = {
    width: "80%",
    backgroundColor: "white",
    padding: 10,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
    borderRadius: "0.5em",
    alignItems: "center",
    "@media (max-width: 450px)": {
      height: "90%"
    }
  };

  const divContainerList = {
    display: "flex",
    justifyContent: "center"
  };

  const divList = {
    width: "80%",
    display: "flex",
    flexDirection: "column",
    "@media (max-width: 450px)": {
      width: "95%"
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

  const buttonStyle = {
    width: 135,
    margin: "0 10px",
    "@media (max-width: 500px)": {
      width: 95
    }
  };

  const errorDiv = { color: "red", textAlign: "center", fontWeight: "bold" };

  return (
    <section css={sectionStyle}>
      <div css={divFormStyle}>
        <h2>Step 2: Add members</h2>
        <hr />
        <div css={divContainerList}>
          <div css={divList}>
            <h3 css={{ textAlign: "center", margin: "0.5em" }}>
              {titleProject || "Titulo del Proyecto"}
            </h3>
            <label
              css={{
                display: "flex",
                width: 150,
                justifyContent: "space-between",
                margin: "0.5em 0"
              }}
            >
              <h4 css={{ textAlign: "left" }}>Total</h4>
              <h4>{`S/. ${totalCost}`}</h4>
            </label>
            <label
              css={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0.5em 0",
                borderBottom: "1px solid black"
              }}
            >
              <h4 css={{ textAlign: "left" }}>Team Members</h4>
              {listMemberAdded.length < listMember.length && (
                <>
                  <IconGenericSmall icon="add" onClick={handleOpenModal} />
                  {isModalOpen && (
                    <AddMemberProject
                      listMember={listMember.filter(value => !value.isChoose)}
                      addMemberFn={addMember}
                      closeModalFn={handleOpenModal}
                    />
                  )}
                </>
              )}
            </label>
            {/* <hr css={{ width: "100%" }} /> */}
            <ul css={{ overflowY: "auto", height: 200 }}>
              {listMemberAdded.length === 0 ? (
                <li>
                  <label>There are no members</label>
                </li>
              ) : (
                listMemberAdded.map(member => (
                  <li key={member.id}>
                    <div
                      css={{
                        display: "flex",
                        alignItems: "center",
                        padding: "0.5em 0"
                      }}
                    >
                      <span css={{ width: "10%" }}>
                        <IconUserSmall />
                      </span>
                      <span
                        css={{
                          width: "40%",
                          "@media (max-width: 450px)": {
                            width: "30%",
                            padding: "0 5px"
                          }
                        }}
                      >
                        {member.name}
                      </span>
                      <span css={{ width: "15%" }}>{`${member.time}%`}</span>
                      <span
                        css={{
                          width: "25%",
                          "@media (max-width: 450px)": {
                            width: "30%",
                            padding: "0 5px"
                          }
                        }}
                      >
                        {`S/. ${member.cost}`}
                      </span>
                      <span css={{ width: "10%" }}>
                        <IconGenericSmall
                          icon="del"
                          onClick={() => delMember(member.id)}
                        />
                      </span>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        {isError && (
          <div css={errorDiv}>
            <span>You need add at least one member</span>
          </div>
        )}

        <fieldset css={fieldsetStyle}>
          <Button type="button" css={buttonStyle} onClick={beforeFn}>
            Back
          </Button>
          <Button type="button" css={buttonStyle} onClick={handleNext}>
            Next
          </Button>
        </fieldset>
      </div>
    </section>
  );
}

export default ListMemberProject;
