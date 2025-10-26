// Input with Tremor styling
import * as React from "react";
import { Input as TremorInput, type InputProps as TremorInputProps } from "../tremor/Input";

// Re-export Tremor Input
const Input = TremorInput;
type InputProps = TremorInputProps;

export { Input };
export type { InputProps };
