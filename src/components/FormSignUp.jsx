import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from '@mui/material/FormControlLabel';

function FormSingUp({ handleSubmit }) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [prom, setProm] = useState(true);
    const [nov, setNov] = useState(false);

    // Estado de errores corregido
    const [errors, setErrors] = useState({
        name: { 
            error: false,
            message: "Deben ser al menos 3 caracteres",
        },
        lastName: {
            error: false,
            message: "Deben ser al menos 3 caracteres",
        },
        email: {
            error: false,
            message: "Email inválido",
        }
    });

    // Función de validación 
    function validarCampo(value, minLength = 3, isEmail = false) {
        if (isEmail) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return {
                error: !emailRegex.test(value),
                message: !emailRegex.test(value) ? "Email inválido" : ""
            };
        } else {
            return {
                error: value.length < minLength,
                message: value.length < minLength ? `Deben ser al menos ${minLength} caracteres` : ""
            };
        }
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        
        // Validar todos los campos antes de enviar
        const nameValidation = validarCampo(name);
        const lastNameValidation = validarCampo(lastName);
        const emailValidation = validarCampo(email, 0, true);
        
        setErrors({
            name: nameValidation,
            lastName: lastNameValidation,
            email: emailValidation
        });

        // Verificar si hay errores
        const hasErrors = nameValidation.error || lastNameValidation.error || emailValidation.error;
        
        if (!hasErrors) {
            handleSubmit({ name, lastName, email, prom, nov });
        }
    };

    return (
        <form onSubmit={handleSubmitForm}>
            <TextField
                id="name"
                label="Nombre"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(e) => setName(e.target.value)}
                value={name}
                error={errors.name.error}
                helperText={errors.name.error ? errors.name.message : ''}
                onBlur={() => setErrors(prev => ({
                    ...prev,
                    name: validarCampo(name)
                }))}
            />
            <TextField
                id="lastName"
                label="Apellidos"
                variant="outlined"
                fullWidth
                margin="normal"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                error={errors.lastName.error}
                helperText={errors.lastName.error ? errors.lastName.message : ''}
                onBlur={() => setErrors(prev => ({
                    ...prev,
                    lastName: validarCampo(lastName)
                }))}
            />
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email.error}
                helperText={errors.email.error ? errors.email.message : ''}
                onBlur={() => setErrors(prev => ({
                    ...prev,
                    email: validarCampo(email, 0, true)
                }))}
            />

            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={prom}
                            onChange={(e) => setProm(e.target.checked)}
                        />
                    }
                    label="Promociones"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={nov}
                            onChange={(e) => setNov(e.target.checked)}
                        />
                    }
                    label="Novedades"
                />
            </FormGroup>
            <Button variant="contained" type="submit">
                Registrarse
            </Button>
        </form>
    )
}

export default FormSingUp;