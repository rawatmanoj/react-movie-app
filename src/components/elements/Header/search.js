import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const useFormSubmit = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (searchName) => {
    history.push({
      pathname: `/${searchName.name}`,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="nav-search"
        placeholder="Search"
        name="name"
        defaultValue=""
        ref={register}
      />
    </form>
  );
};

export default function Search() {
  return useFormSubmit();
}
