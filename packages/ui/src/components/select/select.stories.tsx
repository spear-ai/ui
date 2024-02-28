import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useControlledState } from "@react-stately/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { useId } from "react";
import {
  Button,
  FieldError,
  Form,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";
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
  isInvalid: boolean;
  hasLabel: boolean;
  hasLabelDescription: boolean;
  isAlwaysOpen: boolean;
  isDisabled: boolean;
  isOptional: boolean;
  isSquished: boolean;
}) => {
  const { isInvalid, hasLabel, hasLabelDescription, isAlwaysOpen, isDisabled, isOptional, isSquished } =
    properties;
  const intl = useIntl();
  const sensorFormId = useId();
  const [value, setValue] = useControlledState<string | null>(undefined, null);

  return (
    <div className={`w-full ${isSquished ? "max-w-36" : "max-w-xs"}`}>
      <Form className="relative w-full">
        <Select
          className="group w-full focus:outline-none"
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
            <Label
              className="block select-none text-base/6 text-neutral-12 group-disabled:text-neutral-11 sm:text-sm/6"
              htmlFor={sensorFormId}
            >
              {intl.formatMessage({
                defaultMessage: "Sensor",
                id: "SCewMo",
              })}
            </Label>
          ) : null}
          {hasLabel && hasLabelDescription ? (
            <p className="mt-1 text-base/6 text-neutral-11 group-disabled:text-neutral-9 sm:text-sm/6">
              {intl.formatMessage({
                defaultMessage: "A mechanical device sensitive to sound.",
                id: "2YVoI/",
              })}
            </p>
          ) : null}
          <Button className="group mt-2 inline-flex h-9 w-full cursor-default select-none items-center justify-between gap-1 rounded-lg border border-transparent bg-white-a-3 pe-2 ps-3.5 text-base leading-none shadow outline outline-offset-0 outline-neutral-a-7 entering:outline-2 entering:outline-primary-a-8 group-invalid:outline-x-negative-a-7 group-disabled:pointer-events-none group-invalid:group-disabled:outline-x-negative-a-6 focus-visible:outline-primary-a-8 theme-dfs:bg-canvas-1 theme-galapago:bg-white theme-dfs:dark:bg-white-a-3 theme-forerunner:dark:bg-black-a-3 theme-galapago:dark:bg-black-a-3 sm:ps-3 sm:text-sm">
            <SelectValue className="truncate text-neutral-12 placeholder-shown:text-neutral-11 group-disabled:text-neutral-a-8" />
            <span aria-hidden className="text-neutral-11 group-disabled:text-neutral-8">
              <CaretSortIcon className="size-5" />
            </span>
          </Button>
          {isInvalid ? (
            <FieldError className="mt-2 block text-base/6 text-x-negative-11 group-disabled:opacity-50 sm:text-sm/6">
              {intl.formatMessage({
                defaultMessage: "Sensor is invalid.",
                id: "JsiKrm",
              })}
            </FieldError>
          ) : null}
          <Popover className="isolate min-w-select-trigger-width overflow-auto rounded-xl border-transparent bg-canvas-1 p-1 shadow-lg outline outline-1 outline-offset-0 outline-neutral-a-6 backdrop-blur placement-left:slide-in-from-right-2 placement-right:slide-in-from-left-2 placement-top:slide-in-from-bottom-2 placement-bottom:slide-in-from-top-2 entering:duration-100 entering:animate-in entering:fade-in exiting:duration-75 exiting:animate-out exiting:fade-out exiting:zoom-out-95 theme-forerunner:bg-white-a-3 theme-galapago:bg-white theme-underway:shadow-2xl theme-galapago:dark:bg-black-a-3">
            <ListBox className="outline-none">
              <ListBoxItem
                className="cursor-default select-none rounded-lg py-2.5 pe-5 ps-2 text-base leading-none text-neutral-11 outline-none hover:bg-primary-4 focus:bg-primary-5 focus:outline-none sm:py-1.5 sm:text-sm"
                id=""
              >
                {intl.formatMessage({
                  defaultMessage: "No sensor",
                  id: "W2b7y5",
                })}
              </ListBoxItem>
              {sensorList.map((sensor) => (
                <ListBoxItem
                  className="group/item relative cursor-default select-none rounded-lg py-2.5 pe-7 ps-2 text-base leading-none text-neutral-12 outline-none hover:bg-primary-4 focus:bg-primary-5 sm:py-1.5 sm:text-sm rtl:text-right"
                  id={sensor.id}
                  key={sensor.id}
                  textValue={sensor.name}
                >
                  <span>{sensor.name}</span>
                  <span className="absolute end-1.5 top-2 inline-flex size-4 items-center justify-center opacity-0 group-selected/item:opacity-100">
                    <CheckIcon className="size-4" />
                  </span>
                </ListBoxItem>
              ))}
            </ListBox>
          </Popover>
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
    isInvalid: false,
    hasLabel: true,
    hasLabelDescription: true,
    isAlwaysOpen: false,
    isDisabled: false,
    isOptional: true,
    isSquished: false,
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
