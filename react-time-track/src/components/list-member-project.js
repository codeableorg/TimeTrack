/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { navigate } from "@reach/router";
import { useAlert } from "react-alert";

import AddMemberProject from "../components/add-member-project";
import { Button, IconGenericSmall, IconUser } from "../components/ui";
import { userListAvailableTime } from "../services/user";
import { createProject } from "../services/project";
import { UserContext } from "../contexts/user";

function ListMemberProject({ nextFn, beforeFn }) {
  const logged = React.useContext(UserContext);
  const alert = useAlert();

  const [listMember, setListMember] = React.useState([]);
  const [listMemberAdded, setListMemberAdded] = React.useState([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const titleProject = JSON.parse(sessionStorage.getItem("InfoNewProject"))
    .title;
  const totalCost = listMemberAdded.reduce((sum, elem) => sum + elem.cost, 0);

  function addMember(newMember) {
    let index = listMember.findIndex(element => element.id === newMember.id);
    listMember[index].isChosen = true;
    setListMember(listMember);
    setListMemberAdded(listMemberAdded.concat(newMember));
    setIsError(false);
  }

  function delMember(id) {
    let index = listMember.findIndex(element => element.id === id);
    listMember[index].isChosen = false;
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
    // nextFn();
    const infoProject = JSON.parse(sessionStorage.getItem("InfoNewProject"));
    const bodyProject = {
      name: infoProject.title,
      client: infoProject.client,
      category: infoProject.category,
      start_date: infoProject.start,
      end_date: infoProject.end,
      estimated_cost: totalCost,
      members: listMemberAdded.map(member => {
        return { user_id: member.id, estimated_cost: member.cost };
      })
    };
    createProject(bodyProject)
      .then(response => {
        alert.success(`The project ${titleProject} was created`);
        sessionStorage.removeItem("InfoNewProject");
        navigate("/");
      })
      .catch(response => {
        if (response.message === "Access denied") logged.onLogout();
        else alert.error(`There is a problem, please try later`);
      });
  }

  React.useEffect(() => {
    const infoProject = JSON.parse(sessionStorage.getItem("InfoNewProject"));
    const startDate = infoProject.start;
    const endDate = infoProject.end;
    userListAvailableTime({ startDate, endDate })
      .then(response => {
        setListMember(response);
      })
      .catch(response => {
        if (response.message === "Access denied") logged.onLogout();
      });
  }, []);

  //Declaration for styles

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

  const h3TitleProject = { textAlign: "center", margin: "0.5em" };

  const labelTotalInfo = {
    display: "flex",
    width: 150,
    justifyContent: "space-between",
    margin: "0.5em 0"
  };

  const labelTitleMember = {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5em 0",
    borderBottom: "1px solid black"
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
            <h3 css={h3TitleProject}>{titleProject}</h3>
            <label css={labelTotalInfo}>
              <h4 css={{ textAlign: "left" }}>Total</h4>
              <h4>{`S/. ${totalCost}`}</h4>
            </label>
            <label css={labelTitleMember}>
              <h4 css={{ textAlign: "left" }}>Team Members</h4>
              {(listMember.length === 0 ||
                listMemberAdded.length < listMember.length) && (
                <>
                  <IconGenericSmall icon="add" onClick={handleOpenModal} />
                  {isModalOpen && (
                    <AddMemberProject
                      listMember={listMember.filter(value => !value.isChosen)}
                      addMemberFn={addMember}
                      closeModalFn={handleOpenModal}
                    />
                  )}
                </>
              )}
            </label>
            <ul css={{ overflowY: "auto", maxHeight: 200 }}>
              {listMemberAdded.length === 0 ? (
                <li>
                  <label
                    css={{ display: "block", textAlign: "center", padding: 10 }}
                  >
                    There are no members added
                  </label>
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
                        <IconUser />
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
            Create
          </Button>
        </fieldset>
      </div>
    </section>
  );
}

export default ListMemberProject;
