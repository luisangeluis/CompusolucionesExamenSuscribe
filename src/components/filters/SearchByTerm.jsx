import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux"
//Slices
import { getByTerm } from "../../store/slices/products.slice";
import { setFilters } from "../../store/slices/setFilters.slice";

const SearchByTerm = () => {
  const dispatch = useDispatch();
  const inputTerm = useRef(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const value = data.term.trim();

    if (value.length) {
      dispatch(getByTerm(value));
    }
  }

  return (
    <form className=" w-100" role="search" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group p-1 p-md-2 bg-blue-2">
        <input type="text" ref={inputTerm} id="term" className="form-control rounded-0"
          placeholder="Buscar producto" {...register("term", { required: "Ingresa el termino a buscar" })} />
        <button className="btn bg-blue-1 rounded-0 text-white">Buscar</button>
      </div>
      {
        errors.term &&
        <p role="alert" className="form-alert text-center text-red fw-bold p-1 
          position-absolute bg-secondary">
          {errors.term?.message}
        </p>
      }
    </form>
  )
}

export default SearchByTerm