import { makeAutoObservable } from "mobx";

class UserStore {
  name = "";

  constructor() {
    makeAutoObservable(this);
  }

  rename = () => {
    this.name = "Slava";
  };
}

export default new UserStore();
