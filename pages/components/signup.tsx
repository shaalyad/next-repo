import { Formik, Field, Form, FormikHelpers } from 'formik';
import Router, { useRouter } from 'next/router';


import styles from './signup.module.css'
interface Values {
    username: string;
    password: string;
}

export default function Signup() {
    const router = useRouter();
    return (
        <main className={styles.login_form_wrapper + "vh-100 d-flex justify-content-center align-items-center"}>
            <div className={styles.login_box + ' p-3'}>
                <h1 className={styles.login_heading + " display-6 mb-3"}>Sign Up</h1>
                <Formik
                    initialValues={{
                        username: '',
                        password: '',
                        mobileNo: '',
                        profession: '',
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
                                query: { username: values?.username },
                            },
                            undefined,
                            { shallow: true }
                        );
                       
                    }}

                >

                    {({ isSubmitting }) => (
                        <Form>
                            <div className={styles.login_form_field1}>
                                <Field required className={styles.field1 + ' form-control'} id="username" name="username" placeholder="Username" aria-describedby="usernameHelp" />
                            </div>

                            <div className={styles.login_form_field2}>
                                <Field required className={styles.field2 + ' form-control'} id="password" name="password" placeholder="Password" type="password" />
                            </div>

                            <div className={styles.login_form_field2}>
                                <Field className={styles.field2 + ' form-control'} id="mobileNo" name="mobileNo" placeholder="Mobile Number" type="mobileNo" />
                            </div>

                            <div className={styles.login_form_field2}>
                                <Field className={styles.field2 + ' form-control'} id="profession" name="profession" placeholder="Profession" type="profession" />
                            </div>

                            <button disabled={isSubmitting} className={styles.login_btn + ' btn btn-primary'} type="submit">Sign Up</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </main>
    );
};