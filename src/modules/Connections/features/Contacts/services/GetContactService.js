import { dbManager } from "../../../../../database/utils";

export default function GetContactService() {
  return dbManager.readSQL("SELECT * FROM connections;");
}
