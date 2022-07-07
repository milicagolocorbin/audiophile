import { useContext } from "react";
// yup validation schema, formik, auth api with axios
import { InferType } from "yup";
import { ForgotPasswordSchema } from "../../validation/yup-schema";
import { Formik } from "formik";
import AuthAPI from "../../api/authApi";
// toastify
import { toast } from "react-toastify";
//context and components
import { AuthContext } from "../../context/auth/authContext";
//components
import Layout from "../../components/layout/Layout";
import ButtonForm from "../../components/common/buttons/ButtonForm";
import FormController from "../../components/form/FormController";
/////////////////////////// END OF IMPORTS //////////////////////////

// inferring types from yup validation
type Props = InferType<typeof ForgotPasswordSchema>;

// MARKUP
const ForgotPassword = () => {
  // global state
  const { dispatch } = useContext(AuthContext);
  // handeling form submission
  const handleFormSubmit = async (values: Props) => {
    try {
      dispatch({ type: "START_LOADING" });
      const response = await AuthAPI.postToServer(
        values,
        `/auth/forgot-password`
      );
      dispatch({ type: "STOP_LOADING" });
      console.log(response?.data?.message);
      toast.success(response?.data?.message);
    } catch (error: any) {
      dispatch({ type: "STOP_LOADING" });
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <Layout>
      <section className="w-full max-w-xl p-6 mx-auto border rounded-sm shadow-md">
        {/* FORM HEADER START */}
        <header className="text-center">
          <h2 className="pb-8 text-2xl font-bold tracking-wider">
            Reset your password
          </h2>
          <p className="pb-6 text-base font-semibold">
            Please enter your email address. We will send you link to create new
            password.
          </p>
        </header>
        <Formik
          initialValues={{ email: "" }}
          validationSchema={ForgotPasswordSchema}
          onSubmit={(values, onSubmitProps) => {
            handleFormSubmit(values);
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
          }}
        >
          {/* FORM BODY START */}
          {(formik) => (
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-y-6"
            >
              {/* EMAIL */}
              <FormController
                formik={formik}
                name="email"
                type="text"
                labelName="Email Address"
                placeholder="Enter your email address"
              />
              <ButtonForm
                submitAllowed={
                  !(formik.isValid && formik.dirty) || formik.isSubmitting
                }
              />
            </form>
          )}
        </Formik>
      </section>
    </Layout>
  );
};
export default ForgotPassword;
