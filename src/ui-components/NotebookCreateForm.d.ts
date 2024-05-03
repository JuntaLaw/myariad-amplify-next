/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NotebookCreateFormInputValues = {
    title?: string;
    userId?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type NotebookCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NotebookCreateFormOverridesProps = {
    NotebookCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NotebookCreateFormProps = React.PropsWithChildren<{
    overrides?: NotebookCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NotebookCreateFormInputValues) => NotebookCreateFormInputValues;
    onSuccess?: (fields: NotebookCreateFormInputValues) => void;
    onError?: (fields: NotebookCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NotebookCreateFormInputValues) => NotebookCreateFormInputValues;
    onValidate?: NotebookCreateFormValidationValues;
} & React.CSSProperties>;
export default function NotebookCreateForm(props: NotebookCreateFormProps): React.ReactElement;
