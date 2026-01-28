import { expect, it, vi } from "vitest";
import { createCourse } from "./createCourse";

vi.useFakeTimers();
vi.setSystemTime(new Date(2026, 0, 12));

it("should return the course object on sucess", async () => {
  const course = await createCourse({ name: "Curso de testes" });

  expect(course).toEqual({
    id: expect.any(String),
    name: "Curso de testes",
    createdAt: new Date(),
  });
});

it("should throw if no name is provided", async () => {
  const coursePromise = createCourse({ name: "" });

  await expect(coursePromise).rejects.toThrow("Name is required");
});
