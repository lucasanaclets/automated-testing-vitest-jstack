import { expect, it, vi } from "vitest";
import { createCourse } from "./createCourse";
import { CourseRepository } from "@/repository/CourseRepository";

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

// Spy

it("should call CourseRepository.create correctly", async () => {
  const createSpy = vi.spyOn(CourseRepository.prototype, "create");

  await createCourse({ name: "Curso de testes" });

  expect(createSpy).toHaveBeenCalledWith("Curso de testes");
  expect(createSpy).toHaveBeenCalledTimes(1);
});
