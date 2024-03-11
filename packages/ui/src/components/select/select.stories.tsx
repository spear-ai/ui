import { CheckIcon } from "@radix-ui/react-icons";
import { useControlledState } from "@react-stately/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { useId } from "react";
import { useIntl } from "react-intl";
import {
  SelectButton,
  SelectDefaultListBoxItem,
  SelectFieldError,
  SelectLabel,
  SelectListBox,
  SelectListBoxItem,
  SelectPopover,
  Select,
  SelectValue,
  SelectIcon,
} from "./select";

import { Form } from "react-aria-components";

const sensorList = [
  { id: "1", name: "Pyramid Array C1" },
  { id: "2", name: "Pyramid Array C2B" },
  { id: "3", name: "Pyramid Array C3" },
  { id: "4", name: "Pyramid Array C3-Pro" },
  { id: "5", name: "Pyramid Array C3" },
  { id: "6", name: "Pyramid Array D" },
  { id: "7", name: "Pyramid Array DS" },
  { id: "8", name: "Pyramid Array DX" },
  { id: "9", name: "Pyramid Array E-Standard" },
  { id: "10", name: "Pyramid Array E-Plus" },
  { id: "11", name: "Hyper Matrix Prototype 1" },
  { id: "12", name: "Hyper Matrix Prototype 2" },
  { id: "13", name: "Hyper Matrix 1" },
  { id: "14", name: "Hyper Matrix 2" },
  { id: "15", name: "Hyper Matrix 3" },
  { id: "16", name: "Hyper Matrix 4-S" },
  { id: "17", name: "Hyper Matrix 4-U" },
  { id: "18", name: "Hyper Matrix 5-S" },
  { id: "19", name: "Hyper Matrix 5-U" },
  { id: "20", name: "Hyper Matrix 6" },
];

const PreviewSelect = (properties: {
  hasLabel: boolean;
  hasLabelDescription: boolean;
  isAlwaysOpen: boolean;
  isDisabled: boolean;
  isInvalid: boolean;
  isOptional: boolean;
  isSquished: boolean;
}) => {
  const { hasLabel, hasLabelDescription, isAlwaysOpen, isDisabled, isInvalid, isOptional, isSquished } =
    properties;
  const intl = useIntl();
  const sensorFormId = useId();
  const [value, setValue] = useControlledState<string | null>(undefined, null);

  return (
    <div className={`w-full ${isSquished ? "max-w-36" : "max-w-xs"}`}>
      <Form className="relative w-full">
        <Select
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          isOpen={isAlwaysOpen ? true : undefined}
          onSelectionChange={
            isOptional
              ? (key) => {
                  setValue(key === "" ? null : `${key}`);
                }
              : undefined
          }
          placeholder={intl.formatMessage({
            defaultMessage: "Select a sensor",
            id: "W2C6Wt",
          })}
          selectedKey={isOptional ? value : undefined}
        >
          {hasLabel ? (
            <SelectLabel htmlFor={sensorFormId}>
              {intl.formatMessage({
                defaultMessage: "Sensor",
                id: "SCewMo",
              })}
            </SelectLabel>
          ) : null}
          {hasLabel && hasLabelDescription ? (
            <p className="mt-1 text-base/6 text-neutral-11 group-disabled:text-neutral-9 sm:text-sm/6">
              {intl.formatMessage({
                defaultMessage: "A mechanical device sensitive to sound.",
                id: "2YVoI/",
              })}
            </p>
          ) : null}
          <SelectButton>
            <SelectValue />
            <SelectIcon />
          </SelectButton>
          {isInvalid ? (
            <SelectFieldError>
              {intl.formatMessage({
                defaultMessage: "Sensor is invalid.",
                id: "JsiKrm",
              })}
            </SelectFieldError>
          ) : null}
          <SelectPopover>
            <SelectListBox>
              <SelectDefaultListBoxItem id="">
                {intl.formatMessage({
                  defaultMessage: "No sensor",
                  id: "W2b7y5",
                })}
              </SelectDefaultListBoxItem>
              {sensorList.map((sensor) => (
                <SelectListBoxItem id={sensor.id} key={sensor.id} textValue={sensor.name}>
                  <span>{sensor.name}</span>
                  <span className="absolute end-1.5 top-2 inline-flex size-4 items-center justify-center opacity-0 group-selected/item:opacity-100">
                    <CheckIcon className="size-4" />
                  </span>
                </SelectListBoxItem>
              ))}
            </SelectListBox>
          </SelectPopover>
        </Select>
      </Form>
    </div>
  );
};

const meta = {
  component: PreviewSelect,
} satisfies Meta<typeof PreviewSelect>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    hasLabel: true,
    hasLabelDescription: true,
    isAlwaysOpen: false,
    isDisabled: false,
    isInvalid: false,
    isOptional: true,
    isSquished: false,
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
