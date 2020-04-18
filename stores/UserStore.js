import { observable, action } from 'mobx';
import axios from 'axios'

class UserStore {
  @observable name = null;

  constructor(initialData={}) {
      this.name = null
  }

  @action
  getUserDetails = async()=> {
    let res = await axios.get('https://reqres.in/api/users/3')
    let {data} = res.data
    return data
  }

  @action
  setUserName =  (name) =>{
    this.name = name
  }

}

export default UserStore;
