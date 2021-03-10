import * as passport from "passport";
import * as LocalStrategy from "passport-local";
import db from "../db/queries/users";
import { comparePassword } from "../utils/security/passwords";

passport.use(
  new LocalStrategy.Strategy(
    { usernameField: "email", session: false },
    async (email, password, next) => {
      try {
        let user = await db.findOneUserByEmail(email);
        if (user[0] && comparePassword(password, user[0].password)) {
          next(null, user);
        } else {
          next(null, false);
        }
      } catch (error) {
        next(error);
      }
    }
  )
);
