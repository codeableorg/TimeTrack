/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

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

function ListUserProjects({ userId }) {
  const [userProjects, setUserProjects] = React.useState([]);
  const logged = React.useContext(UserContext);

  React.useEffect(() => {
    let listProjects = null;
    if (userId) listProjects = getUserProjects(userId);
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
              <span>{project.name}</span>
              <Circle
                styles={calculateStatus(
                  project.start_date,
                  project.end_date,
                  project.user_detail[0].real_cost,
                  project.user_detail[0].estimated_cost
                )}
              >
                {calculateProgress(
                  userId === undefined
                    ? project.user_detail[0].real_cost
                    : filterResult(
                        project.members,
                        parseInt(userId),
                        "real_cost"
                      ),
                  userId === undefined
                    ? project.user_detail[0].estimated_cost
                    : filterResult(
                        project.members,
                        parseInt(userId),
                        "estimated_cost"
                      )
                )}
              </Circle>
            </Card>
          );
        })}
      </Section>
    </main>
  );
}

export default ListUserProjects;
