export default function DummyProfile(id) {
  console.log(id, "afa");

  if (id !== 1) {
    return;
  }

  const user = {
    name: "John Doe",
    // email: "john@example.com",
    birthday: 8885552742001,
    description: "I'm a software engineer",
    phone: 76782106,
    email: "test@gmail.com",
    tags: [
      { tag: "worker", color: "#FF0000" },
      { tag: "chef", color: "#2986CC" },
      { tag: "developer", color: "#8fce00" },
      { tag: "teacher", color: "#f1c232" },
      { tag: "student", color: "#00b894" },
      { tag: "designer", color: "#674ea7" },
      { tag: "programmer", color: "#e67e22" },
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
