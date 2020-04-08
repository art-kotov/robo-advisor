// Core
import { types } from "mobx-state-tree";
import Reactotron from "reactotron-react-js";
// Stores
import uiStore from "./uiStore";
import userStore from "./userStore";

export const RootStore = types.model("RootStore", {
  uiStore,
  userStore,
});

const store = RootStore.create({
  uiStore: {},
  userStore: {},
});

Reactotron.trackMstNode(store);

export default store;
