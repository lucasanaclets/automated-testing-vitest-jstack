import { expect, it } from "vitest";
import { createCourse } from "./createCourse";

it("should return the course object on sucess", async () => {
  const course = await createCourse({ name: "Curso de testes" });

  expect(course).toEqual({
    id: expect.any(String),
    name: "Curso de testes",
  });

  //   expect(course).toHaveProperty("name");
  //   expect(course.name).toBe("Curso de testes");
});

it("should throw if no name is provided", async () => {
  const coursePromise = createCourse({ name: "" });

  await expect(coursePromise).rejects.toThrow("Name is requered ");
});
