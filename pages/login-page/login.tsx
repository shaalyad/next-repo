import { Formik, Field, Form, FormikHelpers, ErrorMessage } from 'formik';
import styles from '../login-page/login.module.css';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
interface Values {
  username: string;
  password: string;
}
// const callbackUrl = (router.query?.callbackUrl as string) ?? "/";


export default function Login() {
  const router = useRouter();
  return (
    <main className={styles.login_form_wrapper + "vh-100 d-flex justify-content-center align-items-center"}>
      <div className={styles.login_box + ' p-3'}>
        <h1 className={styles.login_heading + " display-6 mb-3"}>Login</h1>
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}

          validate={values => {
            const errors: any = {};
        
            if (!values.username) {
              errors.username = 'Username is required'
            }
            if (!values.password) {
              errors.password = 'Password is required'
            }
            return errors
          }}


          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
            console.log(values)
            router.push(
              {
                pathname: '/',
                query: { username: values.username },
              },
              undefined,
              { shallow: true }
            );
            // router.push(callbackUrl)
          }}

        >

          {({ isSubmitting }) => (
            <Form>
              <div className={styles.login_form_field1}>
                <Field type="text" className={styles.field1 + ' form-control'} id="username" name="username" placeholder="Username" aria-describedby="usernameHelp"
                  required />
                <ErrorMessage name="username" component="div" className={styles.error} ></ErrorMessage>
              </div>

              <div className={styles.login_form_field2}>
                <Field type="password" required className={styles.field2 + ' form-control'} id="password" name="password" placeholder="Password" type="password" />
                <ErrorMessage name="password" component="div" className={styles.error} ></ErrorMessage>
              </div>

              <button disabled={isSubmitting} className={styles.login_btn + ' btn btn-primary'} type="submit">Login</button>
              <Link href="signup-page/signup">
                <button className={styles.signup_btn + ' btn btn-primary'}>
                  Sign Up
                </button>
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
};