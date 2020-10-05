import axios from 'axios';

const endpoint = "/hiring.json";

export const getList = () => {
  axios.get(endpoint)
  .then(res => console.log(res))
  .catch(err => console.log(err));

}

export default getList