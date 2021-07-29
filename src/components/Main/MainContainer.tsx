import React, { useState, useRef, useCallback } from "react";
import StyledMainContainer from "./MainContainer.styles";
import Card from "../Card/Card";
import Drawer from "../Drawer/Drawer";
import DrawerContent from "./DrawerContent";
import useProjects from "../../hooks/useProjects";
import ProjectContent from "./ProjectContent";

interface ProjectType {
  id: string;
  name: string;
  status: string;
  duration: {
    start: Date;
    end: Date;
  };
  description: string;
}
interface RefObject {
  disconnect: () => void;
  observe?: (node: HTMLElement) => void;
}

const MainContainer = () => {
  const [viewedProject, setViewedProject] = useState<ProjectType>();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, projects, hasMore } = useProjects(pageNumber);

  const observer = useRef<RefObject>();
  const lastElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node && observer.current.observe) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const onView = (project: ProjectType) => {
    setViewedProject(project);
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };

  if (projects.length === 0) return <div>Loading ...</div>;
  return (
    <StyledMainContainer>
      <div className="cards-container">
        {projects.length > 0 &&
          projects.map((project: ProjectType, index) => {
            if (projects.length === index + 1) {
              return (
                <Card
                  key={project.id}
                  innerRef={lastElementRef}
                  title={project.name}
                >
                  <ProjectContent
                    projectData={project}
                    onView={() => onView(project)}
                  />
                </Card>
              );
            } else {
              return (
                <Card key={project.id} title={project.name}>
                  <ProjectContent
                    projectData={project}
                    onView={() => onView(project)}
                  />
                </Card>
              );
            }
          })}
      </div>
      {loading && <div className="loading-section">Loading ...</div>}
      <Drawer openDrawer={openDrawer} onClose={onClose}>
        {viewedProject && <DrawerContent projectID={viewedProject.id} />}
      </Drawer>
    </StyledMainContainer>
  );
};

export default MainContainer;
