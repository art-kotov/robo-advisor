// Core
import { flow, types } from "mobx-state-tree";
// Instruments
import { api } from "../services/api";

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
    register: flow(function* (data) {
      self.setLoading(true);
      self.clearServerErrors();
      try {
        const globalPhone = "+966" + data.phone.slice(1);
        const response = yield api.account.register({
          ...data,
          phone: globalPhone,
        });
        console.log("response", response);
        if (response.status === 400) {
          self.setServerErrors(response.data);
        }

        // localStorage.setItem("token", response.data.token);
        // self.removeErrorMessage();
      } catch (e) {
        console.error(e);
      } finally {
        // self.setLoading(false);
      }
    }),
    // logIn: flow(function* logIn(data) {
    //   self.toggleLoading();
    //   try {
    //     const response = yield api.user.logIn(data);
    //
    //     if (response.status === 400) {
    //       self.loginErrorMessage = response.data.non_field_errors[0];
    //       throw new Error("login failed");
    //     }
    //
    //     localStorage.setItem("token", response.data.token);
    //     self.isUserLogged = true;
    //     self.removeErrorMessage();
    //   } catch (e) {
    //     console.error(e);
    //   } finally {
    //     self.toggleLoading();
    //   }
    // }),
  }));

export default userStore;
