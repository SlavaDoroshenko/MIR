import { makeAutoObservable } from "mobx";
import axios from "axios";

class MasterStore {
  masters = {};

  constructor() {
    makeAutoObservable(this);
  }

  fetchMasters = async () => {
    masters_obj = await axios.get("http://localhost:5000/api/masters/get");
    this.masters = JSON.stringify(masters_obj);
  };
}

export default new MasterStore();
