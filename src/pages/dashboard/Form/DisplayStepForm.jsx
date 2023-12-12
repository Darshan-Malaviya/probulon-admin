import React from 'react'

const DisplayStepForm = ({formik}) => {
    
  return (
    <div>
         {page === 0 ? (
            <UserDetails formik={formik} handleChange={handleChange} />
          ) : page === 1 ? (
            <UserId formik={formik} handleChange={handleChange} />
          ) : (
            <Other formik={formik} handleChange={handleChange} />
          )}     
    </div>
  )
}

export default DisplayStepForm
