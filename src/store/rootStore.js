// Core
import { types } from "mobx-state-tree";
import Reactotron from "reactotron-react-js";
// Stores

export const RootStore = types.model("RootStore", {
  count: 0,
});

export const store = RootStore.create({});

Reactotron.trackMstNode(store);
