import { render, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";
import data from "./mock/apiData.mock";
import "./mock/intersectionObserverMock";

beforeAll(() => {
  global.originalFetch = window.fetch;
  window.fetch = function (url, options) {
    if (url.includes("projects/")) {
      return new Promise((resolve) => {
        resolve({
          url,
          options,
          status: 200,
          json() {
            return data[0];
          },
        });
      });
    }
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

test("The Application Successfully rendered", async () => {
  const { container } = render(<App />);
  const app = container.querySelector(".App");
  expect(app).toBeVisible();

  await waitFor(() => {
    const projectsContainer = container.querySelector(".cards-container");
    expect(projectsContainer).toBeVisible();
  });
});

test("All cards Successfully rendered", async () => {
  const { container } = render(<App />);
  await waitFor(() => {
    const projectsContainer = container.querySelector(".cards-container");
    expect(projectsContainer).toBeVisible();
    expect(projectsContainer.childNodes).toHaveLength(data.length);
  });
});

test("Drawer Successfully rendered", async () => {
  const { container } = render(<App />);
  await waitFor(() => {
    const viewButton = container.querySelector(".view-btn");
    fireEvent.click(viewButton);
    const drawer = container.querySelector(".drawer-body");
    expect(drawer).toBeVisible();
    const status = drawer.querySelector(".status");
    expect(status.innerHTML).toEqual(data[0].status);
    const avatar = container.querySelector(".avatar-icon");
    expect(avatar).toBeVisible();
  });
});
