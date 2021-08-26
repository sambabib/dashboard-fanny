import { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteRounded } from '@material-ui/icons';
import { productRows } from '../../data';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='productlist__item'>
            <img className='productlist__img' src={params.row.img} alt='' />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className='productlist__edit'>Edit</button>
            </Link>
            <DeleteRounded
              className='productlist__delete'
              onClick={() => handleDelete(params.row.id)}
              style={{ fontSize: '1rem' }}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='productlist'>
      <DataGrid
        className='productlist__datagrid'
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
