import { useState } from "react";
import { useFormik } from "formik";
import Router from "next/router";
import { useAuthDispatch, useAuthState } from "@context/auth";
import { Input } from "@atoms";
import { Button } from "@atoms";
import { Bullet } from "@atoms";
import { Card } from "@card";
import { validateLogin as validate } from "@helper/auth";

/**
 * Renders the login template component
 */
export const LoginPrototypeTemplate = (): JSX.Element => {
  const authState = useAuthState();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("pending");
  const authDispatch = useAuthDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      // const submit = usePost({
      //   url: '/api/users/signin',
      //   body: values,
      //   triggerLoading(state) {
      //     setLoading(state);
      //   },
      //   onSuccess() {
      //     Router.reload();
      //   },
      //   onFail() {
      //     setStatus('fail');
      //   },
      // });
      // submit();
    },
  });

  // const switchAuth = () => {
  //   if (authState.title === 'Log in') {
  //     return authDispatch({ type: 'auth_signup' });
  //   }
  //   return authDispatch({ type: 'auth_login' });
  // };

  // const switchBack = () => {
  //   return authDispatch({ type: 'auth_login' });
  // };

  // const redirectTo = () => {
  //   return authDispatch({ type: 'forgot_password' });
  // };

  return (
    <div className="p-5">
      {status === "fail" && (
        <div className="mb-4">
          <Card variant="again" />
        </div>
      )}
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div>
            <Input
              variant="email"
              direction="bottom"
              onChange={formik.handleChange}
              value={formik.values.email}
              errors={formik.errors.email !== undefined}
            />
            <Input
              variant="password"
              direction="top"
              onChange={formik.handleChange}
              value={formik.values.password}
              errors={formik.errors.password !== undefined}
            />
          </div>
          <div>
            {formik.errors.email !== undefined && (
              <div className="mt-2">
                <Bullet variant="required" message={formik.errors.email} />
              </div>
            )}
          </div>
          <div>
            {formik.errors.password !== undefined && (
              <div className="mt-2">
                <Bullet variant="required" message={formik.errors.password} />
              </div>
            )}
          </div>
          {status === "success" && (
            <div className="mt-4">
              <Card variant="set" />
            </div>
          )}
        </div>
        <div className="my-3">
          <Button
            variant="primary"
            title="Log in"
            loading={loading}
            stretch
            onClick={() => alert("log in")}
            size="md"
            color="white"
          />
        </div>
        <div className="my-3">
          <Button
            variant="underline"
            title="Forgot password?"
            onClick={() => alert("redirect to")}
            font={14}
          />
        </div>
        <div className="my-3">
          <Button
            variant="underline"
            title="More login options"
            onClick={() => alert("switch back")}
            font={14}
          />
        </div>
        <div className="flex">
          <p className="text-sm mr-2">Don't have an account?</p>
          <Button
            variant="underline"
            title="Sign up"
            onClick={() => alert("switch auth")}
            font={14}
          />
        </div>
      </form>
    </div>
  );
};
