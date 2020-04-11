// Core
import { flow, types } from "mobx-state-tree";
// Instruments
import { api } from "../services/api";
import { removeProperty } from "../instruments";

const { model, array, string, optional } = types;

const userStore = model("userStore", {
  userIsLogged: false,
  isDataLoading: false,
  //register
  serverErrors: optional(
    model({
      phone: optional(array(string), []),
      password: optional(array(string), []),
    }),
    {}
  ),
})
  .views((self) => ({
    getServerErrors() {
      return self.serverErrors;
    },
  }))
  .actions((self) => ({
    // Sync Actions
    setStatus(status) {
      self.userIsLogged = status;
    },
    setLoading(status) {
      self.isDataLoading = status;
    },
    setServerErrors(errors) {
      self.serverErrors = errors;
      console.log("set self.serverErrors", self.serverErrors);
    },
    clearServerErrors() {
      self.serverErrors = {};
    },
    // Async
    register: flow(function* (data, push) {
      self.setLoading(true);
      self.clearServerErrors();
      try {
        const globalPhone = "+966" + data.phone.slice(1);
        const response = yield api.account.register({
          ...data,
          phone: globalPhone,
        });
        console.log(response);
        if (response.status === 400) {
          self.setServerErrors(response.data);
        }
        if (response.status === 201) {
          push("/survey");
        }
        // localStorage.setItem("token", response.data.token);
        // self.removeErrorMessage();
      } catch (e) {
        console.error(e);
      } finally {
        self.setLoading(false);
      }
    }),
    signIn: flow(function* logIn(data) {
      self.setLoading(true);
      self.clearServerErrors();
      try {
        const globalPhone = "+966" + data.phone.slice(1);
        const removeRemember = removeProperty("remember");

        const response = yield api.account.signIn({
          ...removeRemember(data),
          phone: globalPhone,
        });
        console.log(response);

        if (response.status === 400) {
          self.setServerErrors(response.data);
        }
        if (response.status === 200) {
          self.clearServerErrors();
          localStorage.setItem("token", response.data.token);
          self.isUserLogged = true;
        }
      } catch (e) {
        console.error(e);
      } finally {
        self.setLoading(false);
      }
    }),
  }));

export default userStore;
