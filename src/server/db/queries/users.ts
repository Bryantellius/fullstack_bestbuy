import Query from "../models";

const findOneUserById = (userid: number) => {
  return Query("SELECT * FROM Users WHERE UserID = ?", [userid]);
};

const findOneUserByEmail = (email: string) => {
  return Query("SELECT * FROM Users WHERE Email = ?", [email]);
};

export default {
  findOneUserByEmail,
  findOneUserById,
};
