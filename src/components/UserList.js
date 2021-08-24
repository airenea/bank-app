import React from 'react';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const requestSortDate = (day,month,year) => {
    requestSort(day);
    requestSort(month);
    requestSort(year);
  };

  return { items: sortedItems, requestSort, sortConfig, requestSortDate };
};


const UserListTable = (props) => {
  const { items, requestSort, sortConfig, requestSortDate } = useSortableData(props.users);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort('surname')}
              className={getClassNamesFor('surname')}
            >
              Account Name
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('account')}
              className={getClassNamesFor('account')}
            >
              Acc No.
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('balance')}
              className={getClassNamesFor('balance')}
            >
              Balance
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort('email')}
              className={getClassNamesFor('email')}
            >
              Email Add.
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSortDate('creationday','creationmonth','creationyear')}
              className={getClassNamesFor('creationyear')}
            >
            Created
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td width="25%">{item.surname}, {item.firstname}</td>
            <td width="16%">{item.account}</td>
            <td width="16%">₱ {item.balance}</td>
            <td width="26%">{item.email}</td>
            <td width="17%">{item.creationmonth}/{item.creationday}/{item.creationyear}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserListTable;