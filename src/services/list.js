import axios from 'axios';
import * as helpers from '../services/helpers';

const getList = (setList, setLoading, setError, setListCount) => {
  setLoading(true);
  axios.get('./hiring.json')
  .then(res => {
    setList(helpers.cleanList(res.data));
    setListCount(helpers.getListsCount(res.data))
    setLoading(false);
  })
  .catch(() => setError(true));
}

export default getList