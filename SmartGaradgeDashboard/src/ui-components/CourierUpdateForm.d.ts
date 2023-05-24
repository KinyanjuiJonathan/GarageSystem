/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Courier } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CourierUpdateFormInputValues = {
    name?: string;
    sub?: string;
    lat?: number;
    lng?: number;
    transportationMode?: string;
};
export declare type CourierUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    sub?: ValidationFunction<string>;
    lat?: ValidationFunction<number>;
    lng?: ValidationFunction<number>;
    transportationMode?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CourierUpdateFormOverridesProps = {
    CourierUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    sub?: PrimitiveOverrideProps<TextFieldProps>;
    lat?: PrimitiveOverrideProps<TextFieldProps>;
    lng?: PrimitiveOverrideProps<TextFieldProps>;
    transportationMode?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type CourierUpdateFormProps = React.PropsWithChildren<{
    overrides?: CourierUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    courier?: Courier;
    onSubmit?: (fields: CourierUpdateFormInputValues) => CourierUpdateFormInputValues;
    onSuccess?: (fields: CourierUpdateFormInputValues) => void;
    onError?: (fields: CourierUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CourierUpdateFormInputValues) => CourierUpdateFormInputValues;
    onValidate?: CourierUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CourierUpdateForm(props: CourierUpdateFormProps): React.ReactElement;
