import * as helpers from '../services/helpers';
import data from './hiring';

const getList = (setList, setLoading, setError, setListCount) => {
  setLoading(true);
  setList(helpers.cleanList(data));
  setListCount(helpers.getListsCount(data));
  setLoading(false);
}

export default getList