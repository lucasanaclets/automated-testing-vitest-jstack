import { it, expect } from "vitest";
import { CourseMapper } from "./CourseMapper";

it("should convert an CourseApi to a CourseDomain", () => {
  const result = CourseMapper.toDomain({
    course: {
      name: "Curso de React",
    },
  });

  expect(result).toEqual({ name: "Curso de React" });
});
