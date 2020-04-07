// Core
import { types } from "mobx-state-tree";
import Reactotron from "reactotron-react-js";
// Stores
import uiStore from "./uiStore";

export const RootStore = types.model("RootStore", {
  uiStore,
});

const store = RootStore.create({
  uiStore: {},
});

Reactotron.trackMstNode(store);

export default store;
