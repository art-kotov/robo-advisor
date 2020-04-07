import { types } from "mobx-state-tree";

const uiStore = types
  .model("uiStore", {
    direction: "rtl",
    isPopupOpen: false,
  })
  .actions((self) => ({
    setDirection(direction) {
      self.direction = direction;
    },
  }));

export default uiStore;
