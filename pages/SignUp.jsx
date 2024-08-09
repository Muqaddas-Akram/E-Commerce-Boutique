
// src/components/SignUp.jsx
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { addUser } from '../ReduxToolKit/userSlice'

const SignUp = () => {
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6, 'Must be at least 6 characters').required('Required'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
    }),
    onSubmit: (values) => {
      const { name, email, password } = values
      dispatch(addUser({ name, email, password }))
      formik.resetForm()
    },
  })

  return (
    <>
      <section className="text-gray-600 body-font px-4 py-8 sm:px-6 md:px-8 lg:px-16 xl:px-40">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 lg:w-3/5 mb-8 md:mb-0 ml-10">
            <h1 className="title-font font-medium text-3xl text-pink-500 mb-4">Welcome to Create new Account</h1>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-end items-end">
              <img className="object-contain" alt="fashion" src="src/assets/Images/Image2.png" />
            </div>
          </div>
          <div className="md:w-1/2 lg:w-2/6 bg-gradient-to-r from-pink-300 to-purple-400 rounded-lg p-8 flex flex-col mx-auto w-full max-w-md">
            <h2 className="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
            <form onSubmit={formik.handleSubmit}>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-white">Username</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-purple-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  {...formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500 text-xs">{formik.errors.name}</div>
                ) : null}
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-purple-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-xs">{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="relative mb-4">
                <label htmlFor="password" className="leading-7 text-sm text-white">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-purple-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-xs">{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="relative mb-4">
                <label htmlFor="confirmPassword" className="leading-7 text-sm text-white">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-purple-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  {...formik.getFieldProps('confirmPassword')}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                  <div className="text-red-500 text-xs">{formik.errors.confirmPassword}</div>
                ) : null}
              </div>
              <button type="submit" className="text-pink-500 w-full bg-white mt-5 border-0 py-2 px-8 focus:outline-none hover:bg-pink-200 rounded text-lg">
                Sign Up
              </button>
              <div className="flex text-xs mt-3 space-x-1">
                <p>Already have an Account</p>
                <Link to="/login" className="underline">Log In</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignUp
