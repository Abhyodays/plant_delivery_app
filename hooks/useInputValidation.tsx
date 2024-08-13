import { useState } from "react";
type inputType = {
    [key: string]: string
}
function useInputValidation() {
    const [values, setValues] = useState<inputType>({});
    const [errors, setErrors] = useState<inputType>({});

    function validate(): boolean {
        const EMAIL_REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        let errors: inputType = {}
        if (!values['email']) {
            errors['email'] = "Email address is required"
        }
        else if (!EMAIL_REGEX.test(values.email)) {
            errors['email'] = "Invalid email"
        }
        else if (!values['password']) {
            errors['password'] = "Password is required";
        }
        else if (values['password'].length < 8) {
            errors['password'] = "Password must have minimum 8 characters"
        }
        setErrors(errors);
        if (Object.keys('email').length === 0) return true;
        return false;
    }

    function handleChangeValues(name: string, value: string) {
        setValues({ ...values, [name]: value })
    }

    return {
        values,
        errors,
        validate,
        handleChangeValues
    }

}
export default useInputValidation;