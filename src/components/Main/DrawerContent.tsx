import React, { useEffect, useState } from "react";
import StyledDrawerContent from "./DrawerContent.styles";
import { getProjectByID } from "../../helpers/requests";
import Avatar from "../Avatar/Avatar";
import dateFormatter from "../../helpers/dateFormatter";

interface DrawerProps {
  projectID: string;
}
type consultantType = {
  avatar: string;
  firstName: string;
  id: string;
  lastName: string;
};
interface ProjectDetails {
  id: string;
  name: string;
  status: string;
  duration: {
    start: Date;
    end: Date;
  };
  description: string;
  consultants: consultantType[];
}

const colorMap: Record<string, string> = {
  running: "blue",
  done: "green",
  request: "purple",
};

const DrawerContent: React.FC<DrawerProps> = ({ projectID }) => {
  const [projectDetails, setProjectDetails] = useState<ProjectDetails>();

  const getProjectData = async () => {
    const result = await getProjectByID(projectID);
    setProjectDetails(result);
  };

  useEffect(() => {
    getProjectData();
  }, [projectID]);

  if (!projectDetails) return <div>Loading ...</div>;
  const { name, status, duration, description, consultants } = projectDetails;
  const { start, end } = duration;
  const startDate = dateFormatter(start);
  const endDate = dateFormatter(end);
  const statusColor: string = colorMap[status];

  return (
    <StyledDrawerContent statusColor={statusColor}>
      <span className="status">{status}</span>
      <h2>{name}</h2>
      <span className="section-label">Duration</span>
      <span className="drawer-duration">
        {startDate} to <b>{endDate}</b>
      </span>
      <span className="section-label">Description</span>

      <span className="drawer-desc">{description}</span>
      {consultants.length > 0 && (
        <>
          <span className="section-label">Consultants</span>
          <div className="consultants">
            {consultants.map((consultant: consultantType) => (
              <span className="avatar-icon" key={consultant.id}>
                <Avatar src={consultant.avatar} />
                {consultant.firstName + " " + consultant.lastName}
              </span>
            ))}
          </div>
        </>
      )}
    </StyledDrawerContent>
  );
};

export default DrawerContent;
