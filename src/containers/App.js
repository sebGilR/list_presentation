import React, { useState } from 'react';
import getList from '../services/list';
import List from '../components/List';
import style from '../assets/App.module.scss';
import * as helpers from '../services/helpers';

const App = () => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [list, setList] = useState([]);
  const [listCount, setListCount] = useState(0);

  const handleFetchList = React.useCallback(() => {
    getList(setList, setLoading, setError, setListCount);
  }, [setList, setError, setLoading, setListCount]);

  React.useEffect(() => {
    handleFetchList();
  }, [handleFetchList]);

  return (
    <>
      <h1 className={style.header}>Item List</h1>
      <div className={style.wrapper}>
        {
          isLoading && !isError
            ? <p>Data is being retrieved...</p>
            : helpers.splitLists(list, listCount).map((item, i) => (
              <List key={`list_${item[0].listId}`} list={item} listId={i + 1} />
            ))
        }
        {
          isError && <p>There was an error while loading the lists.</p>
        }
      </div>
    </>
  );
};

export default App;
