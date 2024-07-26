/* eslint-disable react/jsx-props-no-spreading */
import {
  Select,
  SelectButton,
  SelectDescription,
  SelectFieldError,
  SelectHeader,
  SelectIcon,
  SelectLabel,
  SelectListBox,
  SelectListBoxItem,
  SelectListBoxItemCheck,
  SelectListBoxItemCheckIcon,
  SelectListBoxItemLabel,
  SelectPopover,
  SelectSection,
  SelectValue,
} from "@spear-ai/ui/components/select";
import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "react-aria-components";
import { useIntl } from "react-intl";
import { useStorybook } from "@/components/storybook-provider/storybook-provider";
import { specialSensorList1, specialSensorList2, standardSensorList } from "@/data/sensor";

const PreviewSelect = (properties: {
  hasDefaultItem: boolean;
  hasLabel: boolean;
  hasLabelDescription: boolean;
  hasSection1: boolean;
  hasSection1Header: boolean;
  hasSection2: boolean;
  hasSection2Header: boolean;
  isAlwaysOpen: boolean;
  isDisabled: boolean;
  isInvalid: boolean;
  isOptional: boolean;
  isSquished: boolean;
}) => {
  const {
    hasDefaultItem,
    hasLabel,
    hasLabelDescription,
    hasSection1,
    hasSection1Header,
    hasSection2,
    hasSection2Header,
    isAlwaysOpen,
    isDisabled,
    isInvalid,
    isOptional,
    isSquished,
  } = properties;
  const { portalContainer } = useStorybook();
  const intl = useIntl();
  const list = standardSensorList;

  return (
    <div className={`w-full ${isSquished ? "max-w-36" : "max-w-xs"}`}>
      <Form className="relative w-full">
        <Select
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          {...(isAlwaysOpen ? { isOpen: true } : {})}
          placeholder={intl.formatMessage({
            defaultMessage: "Select a sensor",
            id: "W2C6Wt",
          })}
        >
          {hasLabel ? (
            <SelectLabel>{intl.formatMessage({ defaultMessage: "Sensor", id: "SCewMo" })}</SelectLabel>
          ) : null}
          {hasLabel && hasLabelDescription ? (
            <SelectDescription>
              {intl.formatMessage({
                defaultMessage: "A mechanical device sensitive to sound.",
                id: "2YVoI/",
              })}
            </SelectDescription>
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
          <SelectPopover
            {...(portalContainer === undefined ? {} : { UNSTABLE_portalContainer: portalContainer })}
          >
            <SelectListBox>
              {hasSection1 ? (
                <SelectSection>
                  {hasSection1Header ? (
                    <SelectHeader>
                      {intl.formatMessage({
                        defaultMessage: "Section 1",
                        id: "GUDhpC",
                      })}
                    </SelectHeader>
                  ) : null}
                  {specialSensorList1.map((sensor) => (
                    <SelectListBoxItem id={sensor.id} key={sensor.id} textValue={sensor.name}>
                      <SelectListBoxItemLabel>{sensor.name}</SelectListBoxItemLabel>
                      <SelectListBoxItemCheck>
                        <SelectListBoxItemCheckIcon />
                      </SelectListBoxItemCheck>
                    </SelectListBoxItem>
                  ))}
                </SelectSection>
              ) : null}
              {hasSection2 ? (
                <SelectSection>
                  {hasSection2Header ? (
                    <SelectHeader>
                      {intl.formatMessage({
                        defaultMessage: "Section 2",
                        id: "H+Wcch",
                      })}
                    </SelectHeader>
                  ) : null}
                  {specialSensorList2.map((sensor) => (
                    <SelectListBoxItem id={sensor.id} key={sensor.id} textValue={sensor.name}>
                      <SelectListBoxItemLabel>{sensor.name}</SelectListBoxItemLabel>
                      <SelectListBoxItemCheck>
                        <SelectListBoxItemCheckIcon />
                      </SelectListBoxItemCheck>
                    </SelectListBoxItem>
                  ))}
                </SelectSection>
              ) : null}
              <SelectSection>
                {isOptional ? (
                  <SelectListBoxItem id="">
                    {intl.formatMessage({
                      defaultMessage: "None",
                      id: "450Fty",
                    })}
                  </SelectListBoxItem>
                ) : null}
                {hasDefaultItem ? (
                  <SelectListBoxItem id="Default">
                    {intl.formatMessage({
                      defaultMessage: "Default",
                      id: "lKv8ex",
                    })}
                  </SelectListBoxItem>
                ) : null}
                {list.map((item) => (
                  <SelectListBoxItem id={item.id} key={item.id} textValue={item.name}>
                    <SelectListBoxItemLabel>{item.name}</SelectListBoxItemLabel>
                    <SelectListBoxItemCheck>
                      <SelectListBoxItemCheckIcon />
                    </SelectListBoxItemCheck>
                  </SelectListBoxItem>
                ))}
              </SelectSection>
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
    hasDefaultItem: true,
    hasLabel: true,
    hasLabelDescription: true,
    hasSection1: true,
    hasSection1Header: true,
    hasSection2: true,
    hasSection2Header: true,
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
