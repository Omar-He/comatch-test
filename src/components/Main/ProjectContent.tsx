import React from "react";
import dateFormatter from "../../helpers/dateFormatter";
import classNames from "classnames";
import StyledProjectContent from "./ProjectContent.styles";

interface ContentProps {
  projectData: {
    status: string;
    duration: { start: Date; end: Date };
    description: string;
  };
  onView: () => void;
}

const colorMap: Record<string, string> = {
  running: "blue",
  done: "green",
  request: "purple",
};

const ProjectContent: React.FC<ContentProps> = ({ projectData, onView }) => {
  const { status, duration, description } = projectData;
  const { start, end } = duration;
  const startDate = dateFormatter(start);
  const endDate = dateFormatter(end);
  const descClasses = classNames(
    "description",
    description.length > 100 ? "long" : null
  );
  const statusColor: string = colorMap[status];

  return (
    <StyledProjectContent statusColor={statusColor}>
      {status && <span className="status">{status}</span>}
      {duration && (
        <span className="date-range">
          {startDate} to <b>{endDate}</b>
        </span>
      )}
      {description && <span className={descClasses}>{description}</span>}
      <button onClick={onView} className="view-btn">
        View
      </button>
    </StyledProjectContent>
  );
};

export default ProjectContent;
