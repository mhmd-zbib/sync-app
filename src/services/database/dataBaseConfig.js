// src/database/index.js

import Realm from "realm";
import ContactSchema from "./schema";

let realm;

export const initializeRealm = () => {
  realm = new Realm({ schema: [ContactSchema] });
  return realm;
};

export const getRealm = () => {
  if (!realm) {
    throw new Error("Realm has not been initialized yet.");
  }
  return realm;
};

export default getRealm;
