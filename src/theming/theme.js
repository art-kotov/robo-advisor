const theme = {
  color: "pale",
  getLeftPosition() {
    if (this.direction) {
      return this.direction === "rtl" ? "right" : "left";
    } else {
      return "left";
    }
  },
  getRightPosition() {
    if (this.direction) {
      return this.direction === "rtl" ? "left" : "right";
    } else {
      return "right";
    }
  },
};
export default theme;
