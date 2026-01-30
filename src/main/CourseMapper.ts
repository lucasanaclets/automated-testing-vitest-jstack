type CourseDomain = {
  name: string;
  tags: string[];
};

type CourseApi = {
  course: {
    name: string;
    tags?: string[];
  };
};

export class CourseMapper {
  static toDomain(courseApi: CourseApi): CourseDomain {
    return {
      name: courseApi.course.name,
      tags: courseApi.course.tags ?? [],
    };
  }

  static toAPI(courseDomain: CourseDomain): CourseApi {
    return {
      course: {
        name: courseDomain.name,
        tags: courseDomain.tags,
      },
    };
  }
}
