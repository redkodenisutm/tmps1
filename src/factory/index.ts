import DisciplineCreator from "./Creator.js";

export default () => {
  const lab = DisciplineCreator.create("lab", {
    name: "TMPS",
    classroom: "622",
    teacher: "Buldumac Oleg",
    labs: "4",
  });

  const seminar = DisciplineCreator.create("seminar", {
    name: "TS",
    classroom: "622",
    teacher: "Prisacaru Adrian",
  })

  console.log(lab);
  console.log(seminar);
};
