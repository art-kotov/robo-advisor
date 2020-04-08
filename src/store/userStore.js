// Core
import { types } from "mobx-state-tree";

const { model } = types;

const userStore = model("userStore", {
  userIsLogged: false,
}).actions((self) => ({
  setStatus() {
    self.userIsLogged = !self.userIsLogged;
  },
}));

export default userStore;
