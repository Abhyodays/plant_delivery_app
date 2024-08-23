import { useState } from "react";
type inputType = {
    [key: string]: string
}
function useInputValidation(initialState: inputType = {}) {
    const [values, setValues] = useState<inputType>(initialState);
    const [errors, setErrors] = useState<inputType>({});


    function validate(): boolean {
        const EMAIL_REGEX = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        const NAME_REGEX = /^[a-zA-Z\s]+$/
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
        else if (!values['name']) {
            errors['name'] = "Name is required field";
        }
        else if (!NAME_REGEX.test(values['name'])) {
            errors['name'] = "Name must have only alphabets"
        }
        setErrors(errors);
        if (Object.keys(errors).length === 0) return true;
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