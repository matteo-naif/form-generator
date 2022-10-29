import * as Yup from 'yup';

Yup.setLocale({
    mixed: {
        required: 'Campo richiesto',
        notType: 'Formato non valido',
    },
    string: {
        email: 'Formato email non valido',
    },
    number: {
        integer: 'integer',
    },
    array: {},
    boolean: {},
    date: {},
    object: {},
});

export { Yup };
