type CourseDomain = {
  name: string;
  description: undefined;
};

type CourseApi = {
  course: {
    name: string;
  };
};

export class CourseMapper {
  static toDomain(courseApi: CourseApi): CourseDomain {
    return {
      name: courseApi.course.name,
      description: undefined,
    };
  }

  static toAPI(courseDomain: CourseDomain): CourseApi {
    return {
      course: {
        name: courseDomain.name,
      },
    };
  }
}
