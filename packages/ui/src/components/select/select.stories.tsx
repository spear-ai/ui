import * as Form from "@radix-ui/react-form";
import { CaretSortIcon, CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { Label } from "@radix-ui/react-label";
import * as Select from "@radix-ui/react-select";
import type { Meta, StoryObj } from "@storybook/react";
import { useId } from "react";
import { useIntl } from "react-intl";

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
  hasDescription: boolean;
  hasError: boolean;
  hasLabel: boolean;
  isDisabled: boolean;
  isSquished: boolean;
}) => {
  const { hasDescription, hasError, hasLabel, isDisabled, isSquished } = properties;
  const intl = useIntl();
  const sensorFormId = useId();

  return (
    <div className={`w-full ${isSquished ? "max-w-36" : "max-w-xs"}`}>
      <Form.Root className="relative w-full">
        <Form.Field className="group" name="sensor" serverInvalid={hasError}>
          {hasLabel ? (
            <Label
              // eslint-disable-next-line tailwindcss/no-arbitrary-value
              className="block select-none text-base/6 text-neutral-12 group-has-[[data-disabled]]:text-neutral-11 sm:text-sm/6"
              htmlFor={sensorFormId}
            >
              {intl.formatMessage({
                defaultMessage: "Sensor",
                id: "SCewMo",
              })}
            </Label>
          ) : null}
          {hasLabel && hasDescription ? (
            // eslint-disable-next-line tailwindcss/no-arbitrary-value
            <p className="mt-1 text-base/6 text-neutral-11 group-has-[[data-disabled]]:text-neutral-9 sm:text-sm/6">
              {intl.formatMessage({
                defaultMessage: "A mechanical device sensitive to sound.",
                id: "2YVoI/",
              })}
            </p>
          ) : null}
          <Form.Control asChild>
            <Select.Root disabled={isDisabled}>
              <Select.Trigger
                // eslint-disable-next-line tailwindcss/no-arbitrary-value
                className="group mt-3 inline-flex h-9 w-full cursor-default items-center justify-between gap-1 rounded-lg bg-white-a-3 pe-2 ps-3.5 text-base leading-none text-neutral-12 shadow outline outline-offset-0 outline-neutral-a-7 data-disabled:pointer-events-none data-disabled:text-neutral-8 data-disabled:outline-neutral-a-6 data-open:outline-neutral-a-8 data-placeholder:text-neutral-9 hover:outline-neutral-a-8 sm:ps-3 sm:text-sm [[data-invalid]_&]:outline-x-negative-a-7 [[data-invalid]_&]:data-disabled:outline-x-negative-a-6 [[data-invalid]_&]:hover:outline-x-negative-a-8"
                id={sensorFormId}
              >
                <Select.Value
                  placeholder={intl.formatMessage({
                    defaultMessage: "Select a sensor",
                    id: "W2C6Wt",
                  })}
                />
                <Select.Icon className="text-neutral-11 group-data-disabled:text-neutral-8">
                  <CaretSortIcon className="size-5" />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal>
                <Select.Content
                  className="isolate max-h-select-content-available-height rounded-xl bg-white-a-3 shadow-lg !outline !outline-1 outline-offset-0 !outline-neutral-a-6 backdrop-blur"
                  position="popper"
                  sideOffset={8}
                >
                  <Select.ScrollUpButton className="flex h-6 cursor-default items-center justify-center rounded-t-xl text-neutral-11">
                    <ChevronUpIcon />
                  </Select.ScrollUpButton>
                  <Select.Viewport className="p-1">
                    <Select.Item
                      className="cursor-default select-none rounded-lg py-2.5 pe-5 ps-2 text-base leading-none text-neutral-9 outline-none data-highlighted:bg-neutral-9 data-highlighted:text-neutral-contrast data-highlighted:outline-none sm:py-1.5 sm:text-sm"
                      value="0"
                    >
                      {intl.formatMessage({
                        defaultMessage: "None",
                        id: "450Fty",
                      })}
                    </Select.Item>
                    {sensorList.map((sensor) => (
                      <Select.Item
                        className="relative cursor-default select-none rounded-lg py-2.5 pe-5 ps-2 text-base leading-none text-neutral-12 data-highlighted:bg-neutral-9 data-highlighted:text-neutral-contrast data-highlighted:outline-none sm:py-1.5 sm:text-sm"
                        key={sensor.id}
                        value={sensor.id}
                      >
                        <Select.ItemText>{sensor.name}</Select.ItemText>
                        <Select.ItemIndicator className="absolute top-2 inline-flex size-4 items-center justify-center ltr:right-1 rtl:left-1">
                          <CheckIcon className="size-4" />
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
                  </Select.Viewport>
                  <Select.ScrollDownButton className="flex h-6 cursor-default items-center justify-center rounded-b-xl text-neutral-11">
                    <ChevronDownIcon />
                  </Select.ScrollDownButton>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </Form.Control>
          {hasError ? (
            // eslint-disable-next-line tailwindcss/no-arbitrary-value
            <Form.Message className="mt-3 block text-base/6 text-x-negative-11 group-has-[[data-disabled]]:opacity-50 sm:text-sm/6">
              {intl.formatMessage({
                defaultMessage: "Sensor is invalid.",
                id: "JsiKrm",
              })}
            </Form.Message>
          ) : null}
        </Form.Field>
      </Form.Root>
    </div>
  );
};

const meta = {
  component: PreviewSelect,
} satisfies Meta<typeof PreviewSelect>;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    hasDescription: true,
    hasError: false,
    hasLabel: true,
    isDisabled: false,
    isSquished: false,
  },
};

export default meta;
