// Label with Tremor styling
import * as React from "react";
import { Label as TremorLabel, type LabelProps as TremorLabelProps } from "../tremor/Label";

// Re-export Tremor Label
const Label = TremorLabel;
type LabelProps = TremorLabelProps;

export { Label };
export type { LabelProps };
