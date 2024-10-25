import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Requerido'),
    password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Requerido'),
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg">
        <h2 className="text-2xl text-white mb-6 text-center">Iniciar Sesión</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            console.log(values);
            // Aquí manejarás el submit
          }}
        >
          {({ errors, touched }) => (
            <Form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-white">Email</label>
                <Field
                  name="email"
                  type="email"
                  className="w-full p-2 bg-gray-700 text-white rounded"
                />
                {errors.email && touched.email ? <div className="text-red-500">{errors.email}</div> : null}
              </div>
              <div>
                <label htmlFor="password" className="block text-white">Contraseña</label>
                <Field
                  name="password"
                  type="password"
                  className="w-full p-2 bg-gray-700 text-white rounded"
                />
                {errors.password && touched.password ? <div className="text-red-500">{errors.password}</div> : null}
              </div>
              <button type="submit" className="w-full p-2 bg-blue-500 hover:bg-blue-600 text-white rounded">Iniciar Sesión</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
