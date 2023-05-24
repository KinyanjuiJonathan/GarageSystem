/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Garadge } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type GaradgeUpdateFormInputValues = {
    name?: string;
    image?: string;
    deliveryFee?: number;
    minDeliveryTime?: number;
    maxDeliveryTime?: number;
    rating?: number;
    address?: string;
    lat?: number;
    lng?: number;
    adminSub?: string;
};
export declare type GaradgeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    deliveryFee?: ValidationFunction<number>;
    minDeliveryTime?: ValidationFunction<number>;
    maxDeliveryTime?: ValidationFunction<number>;
    rating?: ValidationFunction<number>;
    address?: ValidationFunction<string>;
    lat?: ValidationFunction<number>;
    lng?: ValidationFunction<number>;
    adminSub?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GaradgeUpdateFormOverridesProps = {
    GaradgeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    deliveryFee?: PrimitiveOverrideProps<TextFieldProps>;
    minDeliveryTime?: PrimitiveOverrideProps<TextFieldProps>;
    maxDeliveryTime?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    lat?: PrimitiveOverrideProps<TextFieldProps>;
    lng?: PrimitiveOverrideProps<TextFieldProps>;
    adminSub?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GaradgeUpdateFormProps = React.PropsWithChildren<{
    overrides?: GaradgeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    garadge?: Garadge;
    onSubmit?: (fields: GaradgeUpdateFormInputValues) => GaradgeUpdateFormInputValues;
    onSuccess?: (fields: GaradgeUpdateFormInputValues) => void;
    onError?: (fields: GaradgeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GaradgeUpdateFormInputValues) => GaradgeUpdateFormInputValues;
    onValidate?: GaradgeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function GaradgeUpdateForm(props: GaradgeUpdateFormProps): React.ReactElement;
