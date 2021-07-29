import { renderHook } from "@testing-library/react-hooks";
import useProjects from "../hooks/useProjects";
import data from "./mock/apiData.mock";

beforeAll(() => {
  global.originalFetch = window.fetch;
  window.fetch = function (url, options) {
    return new Promise((resolve) => {
      resolve({
        url,
        options,
        status: 200,
        json() {
          return data;
        },
      });
    });
  };
});

afterAll(() => {
  window.fetch = global.originalFetch;
});

test("Should the projects hook work correctly", async () => {
  const { result, waitForNextUpdate } = renderHook(() => useProjects(1));
  const { loading } = result.current;
  expect(loading).toBeTruthy();
  await waitForNextUpdate();
  const { projects, hasMore, loading: loading2 } = result.current;
  expect(projects).toHaveLength(data.length);
  expect(hasMore).toBeTruthy();
  expect(loading2).toBeFalsy();
});
