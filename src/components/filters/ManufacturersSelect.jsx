import React from 'react'
import { useDispatch } from 'react-redux';
import { getByMaker } from '../../store/slices/products.slice';

const ManufacturersSelect = () => {
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(getByMaker(value));
  };

  return (
    <>
      <label htmlFor="manufacturers-select">Filtrar por</label>
      <select className="form-select" id="manufacturers-select" onChange={handleChange}>
        <option value=''>Todos los fabricantes</option>
        <option value="microsoft">Microsoft</option>
        <option value="autodesk">Autodesk</option>
        <option value="vmware">VMWARE</option>
      </select>
    </>

  )
}

export default ManufacturersSelect