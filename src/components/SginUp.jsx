import React from 'react';
import './signup.css'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

export default function SignUp() {
    const formSchema = Yup.object().shape({
        password: Yup.string()
          .required('Password is mendatory')
          .min(3, 'Password must be at 3 char long'),
        confirmPwd: Yup.string()
          .required('Password is mendatory')
          .oneOf([Yup.ref('password')], 'Passwords does not match'),
      })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState
    function onSubmit(data) {
      console.log(JSON.stringify(data, null, 4))
      return false
    }
    return (

    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div class="mb-3">
        <label for="exampleInputName" class="form-label">
          Name
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          {...register('user_name', {required:true})}
        />
        {
            errors?.user_name?.type === 'required'
            ?
            <p className='text-danger'>Name is required</p>
            :
            ''
        }
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          {...register('Email', {required:true})}
        />
        {
            errors?.Email?.type === 'required'
            ?
            <p className='text-danger'>email is required</p>
            :
            ''
        }
      </div>
      <div class="mb-3">
        <label for="exampleInputPhone" class="form-label">
          Phone
        </label>
        <input
          type="number"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          {...register('Phone', {required:true},{min:11,max:12})}
        />
        {
            errors?.Phone?.type === 'required'
            ?
            <p className='text-danger'>phone is required</p>
            :
            ''
        }
      </div>

         <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            name="confirmPwd"
            type="password"
            {...register('confirmPwd')}
            className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
        </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          value={'male'}
          {...register('Gender', {required:true})}
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Male
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked
          value={'female'}
          {...register('Gender', {required:true})}
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Female
        </label>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
