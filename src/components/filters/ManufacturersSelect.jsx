import React from 'react'

const ManufacturersSelect = () => {
    return (
        <>
            <label htmlFor="manufacturers-select">Filtrar por</label>
            <select className="form-select" id="manufacturers-select">
                <option defaultValue=''>Todos los fabricantes</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </>

    )
}

export default ManufacturersSelect