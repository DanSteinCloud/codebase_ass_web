import Form from "../ass_form_components/Form"
import ProgressBar from "../ass_form_components/ProgressBar"
import { FormProvider } from '../context/FormContext'
import BreadCrumb from '../ass_components/BreadCrumb'
import Meta from '../ass_components/Meta'

const BusinessPackSignUp = () => {
  return (
    <>
    <Meta title={"Business"}/>
    <BreadCrumb title='PACK BUSINESS ASSIGANTO'/>
    <div className='wishlist-wrapper assiganto-home-wrapper-2 py-3'>
    <div className='container-xxl'>
    <FormProvider>
      <ProgressBar />
      <Form />
    </FormProvider>
    </div>
    </div>
    </>
  )
}
export default BusinessPackSignUp