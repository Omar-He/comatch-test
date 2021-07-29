import { useEffect, useState } from "react";
import { getProjects } from "../helpers/requests";

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

const useProjects = (pageNumber: number) => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [hasMore, setHasMore] = useState(false);

  const getProjectsData = async () => {
    const result = await getProjects(pageNumber, 10);
    setTimeout(() => {
      setHasMore(result.length !== 0);
      setProjects((oldProjects) => {
        return [...oldProjects, ...result];
      });
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    setLoading(true);
    getProjectsData();
  }, [pageNumber]);
  return { loading, projects, hasMore };
};

export default useProjects;
