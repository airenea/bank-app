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

  return { items: sortedItems, requestSort, sortConfig };
};

const UserListTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.users);
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
              onClick={() => requestSort('creationyear')}
              className={getClassNamesFor('creationdate')}
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
            <td width="16%">₱{item.balance}</td>
            <td width="26%">{item.email}</td>
            <td width="17%">{item.creationmonth}/{item.creationday}/{item.creationyear}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function UserList() {
  return (
    <div className="UserList">
      <UserListTable
        users={[
          { id: 1, surname: 'Pilgrim', firstname: 'Scott', account: 56021029007678, balance: 37321.38, email: 'scottpilgrim@gmail.com', password: 'password01', creationyear: 2017, creationmonth: '06', creationday: 16 },
          { id: 2, surname: 'Flowers', firstname: 'Ramona', account: 92963683436413, balance: 24238.39, email: 'ramonaflowers@gmail.com', password: 'password02', creationyear: 2021, creationmonth: '08', creationday: 12  },
          { id: 3, surname: 'Chau', firstname: 'Knives', account: 21710808100709, balance: 22331.43, email: 'kniveschau@gmail.com', password: 'password03', creationyear: 2013, creationmonth: '11', creationday: 11  },
          { id: 4, surname: 'Adams', firstname: 'Envy', account: 96621942980069, balance: 32838.01, email: 'envyadams@gmail.com', password: 'password04', creationyear: 2015, creationmonth: '01', creationday: '08'  },
          { id: 5, surname: 'Graves', firstname: 'Gideon', account: 34363436714764, balance: 29090.92, email: 'gideongraves@gmail.com', password: 'password05', creationyear: 2016, creationmonth: '02', creationday: 10  },
          { id: 6, surname: 'Lee ', firstname: 'Lucas', account: 45572087798148, balance: 89296.12, email: 'lucaslee@gmail.com', password: 'password06', creationyear: 2009, creationmonth: '12', creationday: 28  },
          { id: 7, surname: 'Wells', firstname: 'Wallace', account: 40207543570209, balance: 18125.99, email: 'wallacewells@gmail.com', password: 'password07', creationyear: 2020, creationmonth: '05', creationday: 22  },
          { id: 8, surname: 'Roxy', firstname: 'Richter', account: 12938104856372, balance: 19232.18, email: 'richterroxy@gmail.com', password: 'password08', creationyear: 2015, creationmonth: '08', creationday: 28  },
        ]}
      />
    </div>
  );
}
