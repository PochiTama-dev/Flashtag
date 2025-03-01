import { useState } from "react";
import { Button, Typography, SuccessMessage } from "../../../../components";
 
import styles from "./RegisterForm.module.scss";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { saveUser } from '../../../../../mockdata/usersApiFetch';

interface RegisterFormProps {
 onLogin: () => void;
}

const RegisterForm = ({ onLogin }: RegisterFormProps) => {
 const [phone, setPhone] = useState<string | undefined>("");
 
 const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
 const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
 const [successMessage, setSuccessMessage] = useState<string | null>(null);

 interface User {
    fullname: string; 
    phone: string | undefined;
    email: string;
    password: string;
 /*    id_role: number; */
    company: string |  "";
    dni?:  string;
    cuit_cuil:string |  "",
 }

 const validateField = (name: string, value: string) => {
    const errors: { [key: string]: string } = { ...fieldErrors };

    switch (name) {
        case 'fullname':
            if (!value) {
                errors.fullname = "El nombre es obligatorio.";
            } else if (value.length <= 5) {
                errors.fullname = "El nombre debe tener más de 5 caracteres.";
            } else {
                errors.fullname = "";
            }
            break;
        case 'email': {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value) {
                errors.email = "El correo electrónico es obligatorio.";
            } else if (!emailRegex.test(value)) {
                errors.email = "El correo electrónico no es válido.";
            } else {
                errors.email = "";
            }
            break;
        }
        case 'phone':
            errors.phone = value ? "" : "El teléfono es obligatorio.";
            break;
        case 'password': {
            const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
            if (!value) {
                errors.password = "La contraseña es obligatoria.";
            } else if (!passwordRegex.test(value)) {
                errors.password = "La contraseña debe tener al menos una mayúscula y un número.";
            } else {
                errors.password = "";
            }
            break;
        }
        case 'confirmPassword':
            errors.confirmPassword = value ? "" : "Confirmar contraseña es obligatorio.";
            if (value && value !== (document.getElementById('password') as HTMLInputElement).value) {
                errors.confirmPassword = "Las contraseñas no coinciden.";
            }
            break;
        default:
            break;
    }

    setFieldErrors(errors);
 };

 const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setIsSubmitting(true);
    setFieldErrors({});

    const fullname = event.currentTarget.fullname.value;
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    const confirmPassword = event.currentTarget.confirmPassword.value;

    const errors: { [key: string]: string } = {};

    if (!fullname) {
        errors.fullname = "El nombre es obligatorio.";
    } else if (fullname.length <= 5) {
        errors.fullname = "El nombre debe tener más de 5 letras.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errors.email = "El correo electrónico es obligatorio.";
    } else if (!emailRegex.test(email)) {
        errors.email = "El correo electrónico no es válido.";
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
    if (!password) {
        errors.password = "La contraseña es obligatoria.";
    } else if (!passwordRegex.test(password)) {
        errors.password = "La contraseña debe tener al menos una mayúscula y un número.";
    }

    if (!phone) errors.phone = "El teléfono es obligatorio.";
    if (!confirmPassword) errors.confirmPassword = "Confirmar contraseña es obligatorio.";
    if (password !== confirmPassword) errors.confirmPassword = "Las contraseñas no coinciden.";

    if (Object.keys(errors).length > 0) {
        setFieldErrors(errors);
        setIsSubmitting(false);
        return;
    }

    const user: User = {
        fullname,
        phone,
        email,
        password,
     /*    id_role: role === 'cliente' ? 2 : 3,  */
        company:  "", 
        cuit_cuil: "",
    };

    const result = await saveUser(user);
    if (result) {
        setSuccessMessage('Usuario registrado exitosamente.');
    } else {
        setSuccessMessage('Error al registrar el usuario.');
    }
    setIsSubmitting(false);
 };

 return (
  <>
    <SuccessMessage isOpen={!!successMessage} onClose={() => setSuccessMessage(null)}>
      <Typography variant='normal-black'>{successMessage}</Typography>
    </SuccessMessage>
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.registerTitle}>
        <Typography variant='title'>Registrarse</Typography>
      </div>
      <div className={styles.formGroup}>
        <Typography variant='subtitle'>Nombre</Typography>
        <input id='fullname' name='fullname' className={styles.input} required onChange={(e) => validateField(e.target.name, e.target.value)} />
        {fieldErrors.fullname && <div className={styles.errorMessage}>{fieldErrors.fullname}</div>}
      </div>
      <div className={styles.formGroup}>
        <Typography variant='subtitle'>Correo electrónico</Typography>
        <input type='email' id='email' name='email' className={styles.input} required onChange={(e) => validateField(e.target.name, e.target.value)} />
        {fieldErrors.email && <div className={styles.errorMessage}>{fieldErrors.email}</div>}
      </div>
      <div className={styles.formGroup}>
        <Typography variant='subtitle'>Teléfono</Typography>
        <div className={styles.phoneInputContainer}>
          <PhoneInput defaultCountry='AR' value={phone} onChange={(value) => { setPhone(value); validateField('phone', value || ""); }} className={styles.phoneNumberInput} international displayInitialValueAsLocalNumber required />
        </div>
        {fieldErrors.phone && <div className={styles.errorMessage}>{fieldErrors.phone}</div>}
      </div>
      <div className={styles.formGroup}>
        <Typography variant='subtitle'>Contraseña</Typography>
        <input type='password' id='password' name='password' className={styles.input} required onChange={(e) => validateField(e.target.name, e.target.value)} />
        {fieldErrors.password && <div className={styles.errorMessage}>{fieldErrors.password}</div>}
      </div>
      <div className={styles.formGroup}>
        <Typography variant='subtitle'>Confirmar Contraseña</Typography>
        <input type='password' id='confirmPassword' name='confirmPassword' className={styles.input} required onChange={(e) => validateField(e.target.name, e.target.value)} />
        {fieldErrors.confirmPassword && <div className={styles.errorMessage}>{fieldErrors.confirmPassword}</div>}
      </div>
  {/*     <div className={styles.formGroup}>
        <Typography variant='subtitle'>Tipo de usuario</Typography>
        <div className={styles.role}>
          <label>
            <input type='radio' name='role' value='cliente' checked={role === 'cliente'} onChange={() => setRole('cliente')} />
            <Typography variant='normal-black'>Cliente</Typography>
          </label>
          <label>
            <input type='radio' name='role' value='usuario' checked={role === 'usuario'} onChange={() => setRole('usuario')} />
            <Typography variant='normal-black'>Usuario</Typography>
          </label>
        </div>
      </div> */}
      <div className={styles.registerButton}>
        <Button type='black' disabled={isSubmitting}>
          {isSubmitting ? <span className={styles.spinner}></span> : 'Crear cuenta'}
        </Button>
      </div>
      <div className={styles.crearCuenta}>
        <Typography variant='normal-black'>
          ¿Ya tenes una cuenta?{" "}
          <a href='#' onClick={onLogin}>
            Ingresá
          </a>
        </Typography>
      </div>
    </form>
  </>
 );
};

export default RegisterForm;