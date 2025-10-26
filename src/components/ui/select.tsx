// Select with Tremor components
import * as React from "react";
import {
  Select as TremorSelect,
  SelectTrigger as TremorSelectTrigger,
  SelectValue as TremorSelectValue,
  SelectContent as TremorSelectContent,
  SelectItem as TremorSelectItem,
  SelectGroup as TremorSelectGroup,
  SelectGroupLabel as TremorSelectGroupLabel,
  SelectSeparator as TremorSelectSeparator,
} from "../tremor/Select";

// Re-export all Tremor Select components
const Select = TremorSelect;
const SelectGroup = TremorSelectGroup;
const SelectValue = TremorSelectValue;
const SelectTrigger = TremorSelectTrigger;
const SelectContent = TremorSelectContent;
const SelectLabel = TremorSelectGroupLabel; // shadcn uses SelectLabel, Tremor uses SelectGroupLabel
const SelectItem = TremorSelectItem;
const SelectSeparator = TremorSelectSeparator;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
};
