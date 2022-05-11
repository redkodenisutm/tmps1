import Discipline from "./Discipline.js";
import Seminar from "./Seminar.js";
import Lab from "./Lab.js";
import Lecture from "./Lecture.js";

interface IDisciplineCreator {
  create?: (type: string, props?: Object) => Discipline;
}

export default class DisciplineCreator implements IDisciplineCreator {
  static create = (type: string, props): Discipline => {
    const lowercaseType = type.toLowerCase();

    switch (lowercaseType) {
      case "seminar":
        return new Seminar(props);
      case "lab":
        return new Lab(props);
      default:
        return new Lecture(props);
    }
  };
}
