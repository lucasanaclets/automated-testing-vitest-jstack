import { it, expect, describe } from "vitest";
import { CourseMapper } from "./CourseMapper";

describe("CourseMapper", () => {
  describe("to Domain", () => {
    it("should convert an CourseApi to an CourseDomain", () => {
      const result = CourseMapper.toDomain({
        course: {
          name: "Curso de React",
          tags: ["React"],
        },
      });

      expect(result).toEqual({ name: "Curso de React", tags: ["React"] });
    });

    it("should create an empty array when tags are not provided", () => {
      const result = CourseMapper.toDomain({
        course: { name: "Curso de React" },
      });

      expect(result).toEqual({
        name: "Curso de React",
        tags: [],
      });
    });
  });

  describe("toAPI", () => {
    it("should convert an CourseDomain to an CourseApi", () => {
      const result = CourseMapper.toAPI({
        name: "Curso de React",
        tags: ["React"],
      });

      expect(result).toEqual({
        course: {
          name: "Curso de React",
          tags: ["React"],
        },
      });
    });
  });
});
