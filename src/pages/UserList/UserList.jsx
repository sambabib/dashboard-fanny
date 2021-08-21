import { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteRounded } from '@material-ui/icons';
import { Link } from 'react-router-dom';

// @data
import { userRows } from '../../data';

// @style
import './UserList.css';

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='userlist__user'>
            <img
              className='userlist__img'
              src={params.row.avatar}
              alt='user avatar'
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className='userlist__edit'>Edit</button>
            </Link>
            <DeleteRounded
              className='userlist__delete'
              onClick={() => handleDelete(params.row.id)}
              style={{ fontSize: '1rem' }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='userlist'>
      <DataGrid
        className='userlist__datagrid'
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default UserList;
