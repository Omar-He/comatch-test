export async function getProjects(pageNumber: number, limit: number) {
  const req = fetch(
    `http://localhost:3001/projects?pageNumber=${pageNumber}&limit=${limit}`
  );
  const res = await req;
  return res.json();
}

export async function getProjectByID(id: string) {
  const req = fetch(`http://localhost:3001/projects/${id}`);
  const res = await req;
  return res.json();
}
