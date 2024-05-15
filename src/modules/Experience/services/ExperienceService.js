import * as SQLite from "expo-sqlite";

class Experience {
  constructor() {}

  async initializeDatabase() {
    this.db = await SQLite.openDatabaseAsync("syncapp");
  }

  async create(id, expData) {
    // const { connection_id, title, company, start_date, end_date, description } =
    //   expData;
    return console.log(expData, " all thedata man  with id ", id);
  }
}

export default new Experience();
