"use client";
import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  brand: string;
  sizeUs: number;
  year: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="border">
      <h2>Form Component</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <input
            {...register("name", { required: true })}
            type="text"
            className="form-control"
          />
          {errors.name && <p className="error-message">Name is required</p>}
        </div>
        <div className="form-group">
          <label>Brand:</label>
          <input
            {...register("brand", { required: true })}
            type="text"
            className="form-control"
          />
          {errors.brand && <p className="error-message">Brand is required</p>}
        </div>
        <div className="form-group">
          <label>Size US</label>
          <input
            {...register("sizeUs", { required: true })}
            type="number"
            className="form-control"
          />
          {errors.sizeUs && <p className="error-message">Size is required</p>}
        </div>
        <div className="form-group">
          <label>Year</label>
          <input
            {...register("year", { required: true })}
            type="number"
            className="form-control"
          />
          {errors.year && <p className="error-message">Year is required</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
