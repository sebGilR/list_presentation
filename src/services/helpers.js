export const cleanList = (list) => list.filter(el => el.name);
export const getListsCount = (list) => Math.max(...list.map(obj => Object.values(obj)[1]));
export const splitLists = (list, listCount) => {
  const lists = [];

  for (let i = 1; i <= listCount; i++) {
    const currentList = list.filter(item => item.listId === i);
    lists.push(currentList.sort((a, b) => {
      if (a.name < b.name) {
        return -1
      } else if (a.name > b.name) {
        return 1
      } else {
        return 0
      }
    }))
  }

  return lists;
}