export default function DummyProfile(id) {
  console.log(id, "the id on fetch");

  if (id !== 1) {
    return;
  }

  const user = {
    name: "John Doe",
    birthday: 8885552742001,
    description: "I'm a software engineer",
    phone: "76782106",
    // email: "test@gmail.com",
    tags: [
      { id: 1, tag: "worker", color: "#FF0000" },
      { id: 2, tag: "chef", color: "#2986CC" },
      { id: 4, tag: "developer", color: "#8fce00" },
      { id: 12, tag: "teacher", color: "#f1c232" },
      { id: 6, tag: "student", color: "#00b894" },
      { id: 7, tag: "designer", color: "#674ea7" },
      { id: 10, tag: "programmer", color: "#e67e22" },
    ],
    experience: [
      {
        id: 1,
        title: "Software Engineer",
        company: "Google",
        startDate: 15885552742001,
        endDate: 15885552742001,
        description: "Develop and maintain software applications",
      },
      {
        id: 2,
        title: "Data Scientist",
        company: "Amazon",
        startDate: 15885552742001,
        endDate: 15885552742001,
        description: "Built new AI for analyzing humans",
      },
    ],
  };

  return user;
}
