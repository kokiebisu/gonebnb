import React, { useState } from 'react';
import { useFormik } from 'formik';

/**
 * Styles
 */
import space from '../../../styles/space.module.scss';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';
import color from '../../../styles/color.module.scss';

/**
 * Components
 */
import { Input } from '../../atoms/input/input.component';
import { Button } from '../../atoms/button/button.component';
import { Bullet } from '../../atoms/bullet/bullet.component';
/**
 * Props
 */
import { SignupTemplateProps } from '../props';

/**
 * Animations
 */
import { Animation } from '../../animation/animation.component';

/**
 * Helper
 */
import { validateSignup as validate } from '../../../helper/auth';

/**
 * Hooks
 */
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import { useFetch } from '../../../hooks/useFetch';
import { useToggleDispatch } from '../../../context/toggle';
import Router from 'next/router';

/**
 * Renders the signup template component
 */
export const SignupTemplate: React.FC<SignupTemplateProps> = () => {
  useLockBodyScroll();
  const toggleDispatch = useToggleDispatch();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      day: '',
      month: '',
      year: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: async (values) => {
      const doFetch = useFetch({
        url: '/api/users/signup',
        method: 'post',
        body: values,
        triggerLoading: (state) => {
          setLoading(state);
        },
        onSuccess: () => {
          Router.reload();
        },
      });
      await doFetch();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={[space['p--24']].join(' ')}>
        <div>
          <Input
            type='name'
            direction='bottom'
            name='firstname'
            errors={formik.errors.firstname !== undefined}
            handleChange={formik.handleChange}
            value={formik.values.firstname}
          />
          <Input
            type='name'
            direction='top'
            name='lastname'
            errors={formik.errors.lastname !== undefined}
            handleChange={formik.handleChange}
            value={formik.values.lastname}
          />
          <div>
            {formik.errors.firstname !== undefined ? (
              <div className={[space['m-t--6']].join(' ')}>
                <Bullet type='required' message={formik.errors.firstname} />
              </div>
            ) : null}
          </div>
          <div>
            {formik.errors.lastname !== undefined ? (
              <div className={[space['m-t--6']].join(' ')}>
                <Bullet type='required' message={formik.errors.lastname} />
              </div>
            ) : null}
          </div>
          <div>
            {formik.errors.firstname === undefined &&
              formik.errors.lastname === undefined && (
                <p
                  className={[
                    space['m-t--8'],
                    font['size--11'],
                    color['c--gray__1'],
                  ].join(' ')}>
                  Make sure it matches the name on your government ID.
                </p>
              )}
          </div>
        </div>
        <div className={[space['m-t--22']].join(' ')}>
          <div
            style={{ border: '1px solid gray', borderRadius: 14 }}
            className={[layout['flex']].join(' ')}>
            <Input
              spread
              dateType='day'
              type='birthdate'
              direction='left'
              handleChange={formik.handleChange}
              value={formik.values.day}
              errors={formik.errors.year !== undefined}
            />
            <Input
              spread
              dateType='month'
              type='birthdate'
              direction='center'
              handleChange={formik.handleChange}
              value={formik.values.month}
              errors={formik.errors.year !== undefined}
            />
            <Input
              spread
              dateType='year'
              type='birthdate'
              direction='right'
              handleChange={formik.handleChange}
              value={formik.values.year}
              errors={formik.errors.year !== undefined}
            />
          </div>
          {formik.errors.day !== undefined && (
            <div className={[space['m-t--6']].join(' ')}>
              <Bullet type='required' message={formik.errors.day} />
            </div>
          )}
          {formik.errors.month !== undefined && (
            <div className={[space['m-t--6']].join(' ')}>
              <Bullet type='required' message={formik.errors.month} />
            </div>
          )}
          {formik.errors.year !== undefined && (
            <div className={[space['m-t--6']].join(' ')}>
              <Bullet type='required' message={formik.errors.year} />
            </div>
          )}
        </div>
        {formik.errors.day !== undefined &&
          formik.errors.month !== undefined &&
          formik.errors.year !== undefined && (
            <p
              className={[
                space['m-t--8'],
                font['size--11'],
                color['c--gray__1'],
              ].join(' ')}>
              To sign up, you need to be at least 18. Your birthday won't be
              shared with other people who use Airbnb.
            </p>
          )}
        <div className={[space['m-t--22']].join(' ')}>
          <div>
            <Input
              type='email'
              handleChange={formik.handleChange}
              value={formik.values.email}
              errors={formik.errors.email !== undefined}
            />
          </div>
          <div>
            {formik.errors.email !== undefined ? (
              <div className={[space['m-t--6']].join(' ')}>
                <Bullet type='required' message={formik.errors.email} />
              </div>
            ) : (
              <p
                className={[
                  space['m-t--8'],
                  font['size--11'],
                  color['c--gray__1'],
                ].join(' ')}>
                We'll email you trip confirmations and receipts
              </p>
            )}
          </div>
        </div>
        <div className={[space['m-t--22']].join(' ')}>
          <div>
            <Input
              type='password'
              handleChange={formik.handleChange}
              value={formik.values.password}
              errors={formik.errors.password !== undefined}
            />
          </div>
          <div>
            {formik.errors.password !== undefined && (
              <div className={[space['m-t--6']].join(' ')}>
                <Bullet type='required' message={formik.errors.password} />
              </div>
            )}
          </div>
        </div>
        <div>
          <p
            className={[
              space['m-t--22'],
              font['size--11'],
              color['c--gray__1'],
            ].join(' ')}>
            By selecting <b>Agree and continue</b> below, I agree to Airbnb's{' '}
            <u
              className={[font['weight--500']].join(' ')}
              style={{ color: '#1B4CC4' }}>
              Terms of Service
            </u>
            ,{' '}
            <u
              className={[font['weight--500']].join(' ')}
              style={{ color: '#1B4CC4' }}>
              Payments Terms of Service
            </u>
            ,{' '}
            <u
              className={[font['weight--500']].join(' ')}
              style={{ color: '#1B4CC4' }}>
              Privacy Policy
            </u>
            , and{' '}
            <u
              className={[font['weight--500']].join(' ')}
              style={{ color: '#1B4CC4' }}>
              Nondiscrimination Policy
            </u>
            .
          </p>
        </div>
        <div className={[space['m-t--16']].join(' ')}>
          <Button
            type='primary'
            title={
              loading ? (
                <div
                  className={[
                    layout['flex'],
                    layout['items-center'],
                    layout['justify-center'],
                  ].join(' ')}>
                  <Animation type='loading' />
                </div>
              ) : (
                <h4>Agree and continue</h4>
              )
            }
          />
        </div>
      </div>
    </form>
  );
};
