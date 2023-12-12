import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Button,
    Form,
  } from "react-bootstrap";
import DisplayStepForm from './DisplayStepForm';
const SteperForm = ({Formtitle,formik}) => {
  return (
    <Card>
    <CardHeader>
        {Formtitle[page]}
    </CardHeader>
    <CardBody>
<Form>
<DisplayStepForm formik={formik}/>
{page === 0 ? null : (
            <Button
              variant="danger"
              className=" ms-5 mt-3"
              onClick={handlePrev}
            >
              <GrFormPrevious /> Prev Form
            </Button>
          )}

          {page !== Formtitle.length - 1 ? (
            <Button
              variant="primary"
              className="mt-3  ms-5"
              onClick={handleNext}
            >
              Next Form <MdNavigateNext />
            </Button>
          ) : (
            <Button variant="primary" className=" mt-3  ms-5">
              Submit
            </Button>
          )}
</Form>
    </CardBody>
    </Card>
  )
}

export default SteperForm
