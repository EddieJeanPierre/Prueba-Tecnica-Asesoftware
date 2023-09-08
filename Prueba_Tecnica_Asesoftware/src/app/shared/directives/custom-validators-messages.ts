import { CustomControlConfig } from './../interfaces/custom-validators.interfaces';
import { AbstractControl } from "@angular/forms";

export function customRequiredValidator(controlConfig?: CustomControlConfig) {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const value = control.value;
        if (!control.value || control.value.toString() === '') {
            return customRequiredMessage(controlConfig);
        }
        return null;
    };
}

export function customReqMinMaxValidator(controlConfig: CustomControlConfig) {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const value = control.value;
        if (!control.value || control.value.trim() === '') {
            return customRequiredMessage(controlConfig);
        }
        if (value.length < controlConfig.minLength) {
            return customMinMessage(controlConfig);
        }
        if (value.length > controlConfig.maxLength) {
            return customMaxMessage(controlConfig);
        }
        return null;
    };
}

export function customReqMinValidator(controlConfig: CustomControlConfig) {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const value = control.value;
        if (!control.value || control.value.trim() === '') {
            return customRequiredMessage(controlConfig);
        }
        if (value.length < controlConfig.minLength) {
            return customMinMessage(controlConfig);
        }
        return null;
    };
}

export function customNotReqMinMaxValidator(controlConfig: CustomControlConfig) {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const value = control.value;
        if (!control.value || control.value.trim() === '') {
            return null;
        }
        if (value.length < controlConfig.minLength) {
            return customMinMessage(controlConfig);
        }
        if (value.length > controlConfig.maxLength) {
            return customMaxMessage(controlConfig);
        }
        return null;
    };
}

export function customMinValidator(controlConfig: CustomControlConfig) {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const value = control.value;
        if (value.length < controlConfig.minLength) {
            return customMinMessage(controlConfig);
        }
        return null;
    };
}

export function customMaxValidator(controlConfig: CustomControlConfig) {
    return (control: AbstractControl): { [key: string]: any } | null => {
        const value = control.value;
        if (value.length > controlConfig.maxLength) {
            return customMaxMessage(controlConfig);
        }
        return null;
    };
}

function customRequiredMessage(controlConfig?: CustomControlConfig) {
    return {
        'customMessage': controlConfig && controlConfig.fieldName ?
            `El campo ${controlConfig.fieldName} es requerido.` :
            'El campo es requerido.',
        'customRequired': true,
        'customError': true
    };
}

function customMinMessage(controlConfig?: CustomControlConfig) {
    return {
        'customMessage': controlConfig && controlConfig.fieldName ?
            `El campo ${controlConfig.fieldName} debe tener mínimo ${controlConfig.minLength} caracteres.` :
            `El campo debe tener mínimo ${controlConfig.minLength} caracteres.`,
        'customMinLength': true,
        'customError': true
    };
}

function customMaxMessage(controlConfig?: CustomControlConfig) {
    return {
        'customMessage': controlConfig && controlConfig.fieldName ?
            `El campo ${controlConfig.fieldName} debe tener máximo ${controlConfig.maxLength} caracteres.` :
            `El campo debe tener máximo ${controlConfig.maxLength} caracteres.`,
        'customMaxLength': true,
        'customError': true
    };
}