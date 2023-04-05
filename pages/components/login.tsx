import { Formik, Field, Form, FormikHelpers } from 'formik';
import styles from './login.module.css'
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
            const errors: any = {}
            if (!values.username) {
              errors.username = 'Required username'
            }
            if (!values.password) {
              errors.password = 'Required password'
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
                pathname: '/home',
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
                <Field className={styles.field1 + ' form-control'} id="username" name="username" placeholder="Username" aria-describedby="usernameHelp"
                  required />
              </div>

              <div className={styles.login_form_field2}>
                <Field required className={styles.field2 + ' form-control'} id="password" name="password" placeholder="Password" type="password" />
              </div>

              <button disabled={isSubmitting} className={styles.login_btn + ' btn btn-primary'} type="submit">Login</button>
              <Link href="/components/signup">
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