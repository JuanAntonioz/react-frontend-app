import { useState } from 'react';

import { Button } from '@base-ui-components/react/button';
import { Field } from '@base-ui-components/react/field';
import { Form } from '@base-ui-components/react/form';

import styles from './login-form.module.css';
import { useLoginForm } from '../../hooks/use-login-form';

export const LoginForm = () => {
  const { handleSubmit, loading, errors } = useLoginForm();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <Form className={styles.Form} errors={errors} onSubmit={handleSubmit}>
      <Field.Root name="username" className={styles.Field}>
        <Field.Label className={styles.Label}>Usuario</Field.Label>
        <Field.Control
          type="text"
          required
          placeholder="username"
          className={styles.Input}
        />
        <Field.Error className={styles.Error} />
      </Field.Root>

      <Field.Root name="password" className={styles.Field}>
        <Field.Label className={styles.Label}>Contraseña</Field.Label>
        <div className={styles.InputWrapper}>
          <Field.Control
            type={showPassword ? 'text' : 'password'}
            required
            placeholder="••••••••"
            className={`${styles.Input} ${styles.PasswordInput}`}
            onChange={(event) => setPasswordValue(event.target.value)}
          />
          {passwordValue && (
            <button
              type="button"
              className={styles.TogglePassword}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label="Alternar visibilidad de la contraseña"
            >
              <span aria-hidden className={styles.TogglePasswordIcon} />
            </button>
          )}
        </div>
        <Field.Error className={styles.Error} />
      </Field.Root>

      <Button
        type="submit"
        disabled={loading}
        focusableWhenDisabled
        className={styles.Button}
      >
        {loading ? 'Ingresando...' : 'Ingresar'}
      </Button>
    </Form>
  );
};
