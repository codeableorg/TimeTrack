/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

import { Card, Circle } from "./ui";
import { Section } from "./helpers";
import { listUserProjects } from "../services/project";
import { getUserProjects } from "../services/user";

import calculateProgress from "../utils/calculateProgress";
import calculateStatus from "../utils/calculateStatus";
import { UserContext } from "../contexts/user";

const card = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

function filterResult(memberArray, keyValue, petition) {
  const result = memberArray.filter(member => member.id === keyValue);

  if (petition === "estimated_cost") {
    return result[0].estimated_cost;
  }
  if (petition === "real_cost") {
    return result[0].real_cost;
  }
}

function ListUserProjects({ user }) {
  const [userProjects, setUserProjects] = React.useState([]);
  const logged = React.useContext(UserContext);

  function handleClick(userData, title) {
    if (!user) userData = logged.data;
    sessionStorage.setItem("ProjectMember", JSON.stringify(userData));
    sessionStorage.setItem("ProjectTitle", title);
  }

  React.useEffect(() => {
    let listProjects = null;
    if (user) listProjects = getUserProjects(user.id);
    else listProjects = listUserProjects();

    listProjects
      .then(list => setUserProjects(list))
      .catch(response => {
        if (response.message === "Access denied") logged.onLogout();
      });
  }, []);

  return (
    <main>
      <Section role="list">
        {userProjects.map(project => {
          return (
            <Card styles={card} key={project.id} role="listitem">
              <Link
                to={
                  user
                    ? `/members/${user.id}/projects/${project.id}`
                    : `/mystatus/projects/${project.id}`
                }
                css={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%"
                }}
                onClick={() => handleClick(user, project.name)}
              >
                <span>{project.name}</span>
                <Circle
                  styles={calculateStatus(
                    project.start_date,
                    project.end_date,
                    !user
                      ? project.user_detail[0].real_cost
                      : filterResult(
                          project.members,
                          parseInt(user.id),
                          "real_cost"
                        ),
                    !user
                      ? project.user_detail[0].estimated_cost
                      : filterResult(
                          project.members,
                          parseInt(user.id),
                          "estimated_cost"
                        )
                  )}
                >
                  {calculateProgress(
                    !user
                      ? project.user_detail[0].real_cost
                      : filterResult(
                          project.members,
                          parseInt(user.id),
                          "real_cost"
                        ),
                    !user
                      ? project.user_detail[0].estimated_cost
                      : filterResult(
                          project.members,
                          parseInt(user.id),
                          "estimated_cost"
                        )
                  )}
                </Circle>
              </Link>
            </Card>
          );
        })}
      </Section>
    </main>
  );
}

export default ListUserProjects;
