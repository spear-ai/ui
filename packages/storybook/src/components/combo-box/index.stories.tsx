import { useControlledState } from "@react-stately/utils";
import {
  ComboBox,
  ComboBoxButton,
  ComboBoxDescription,
  ComboBoxFieldError,
  ComboBoxHeader,
  ComboBoxIcon,
  ComboBoxInput,
  ComboBoxLabel,
  ComboBoxListBox,
  ComboBoxListBoxItem,
  ComboBoxListBoxItemCheck,
  ComboBoxListBoxItemCheckIcon,
  ComboBoxListBoxItemLabel,
  ComboBoxPopover,
  ComboBoxSection,
  ComboBoxTrigger,
} from "@spear-ai/ui/components/combo-box";
import type { Meta, StoryObj } from "@storybook/react";
import { useCallback } from "react";
import { Form, Key } from "react-aria-components";
import { useIntl } from "react-intl";
import { useStorybook } from "@/components/storybook-provider/storybook-provider";
import { specialSensorList1, specialSensorList2, standardSensorList } from "@/data/sensor";

const PreviewComboBox = (properties: {
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
  menuTrigger: "focus" | "input";
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
    menuTrigger,
  } = properties;
  const { portalContainer } = useStorybook();
  const intl = useIntl();
  const [selectedKey, setSelectedKey] = useControlledState<string | null>(undefined, null);
  const [isOpen, setIsOpen] = useControlledState<boolean>(undefined, false);

  const handleSelectionChange = useCallback(
    (key: Key | null) => {
      if (isOptional && key === "") {
        setSelectedKey(null);
        setIsOpen(false);
      } else {
        setSelectedKey(`${key}`);
      }
    },
    [isOptional, setIsOpen, setSelectedKey],
  );

  return (
    <div className={`w-full ${isSquished ? "max-w-36" : "max-w-xs"}`}>
      <Form className="relative w-full">
        <ComboBox
          className="w-full"
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          menuTrigger={menuTrigger}
          onOpenChange={setIsOpen}
          onSelectionChange={handleSelectionChange}
          selectedKey={selectedKey}
        >
          {hasLabel ? (
            <ComboBoxLabel>{intl.formatMessage({ defaultMessage: "Sensor", id: "SCewMo" })}</ComboBoxLabel>
          ) : null}
          {hasLabel && hasLabelDescription ? (
            <ComboBoxDescription>
              {intl.formatMessage({
                defaultMessage: "A mechanical device sensitive to sound.",
                id: "2YVoI/",
              })}
            </ComboBoxDescription>
          ) : null}
          <ComboBoxTrigger>
            <ComboBoxInput
              placeholder={intl.formatMessage({
                defaultMessage: "Select a sensor",
                id: "W2C6Wt",
              })}
            />
            <ComboBoxButton>
              <ComboBoxIcon />
            </ComboBoxButton>
          </ComboBoxTrigger>
          {isInvalid ? (
            <ComboBoxFieldError>
              {intl.formatMessage({
                defaultMessage: "Sensor is invalid.",
                id: "JsiKrm",
              })}
            </ComboBoxFieldError>
          ) : null}
          <ComboBoxPopover UNSTABLE_portalContainer={portalContainer} isOpen={isAlwaysOpen ? true : isOpen}>
            <ComboBoxListBox>
              {hasSection1 ? (
                <ComboBoxSection>
                  {hasSection1Header ? (
                    <ComboBoxHeader>
                      {intl.formatMessage({
                        defaultMessage: "Section 1",
                        id: "GUDhpC",
                      })}
                    </ComboBoxHeader>
                  ) : null}
                  {specialSensorList1.map((sensor) => (
                    <ComboBoxListBoxItem id={sensor.id} key={sensor.id} textValue={sensor.name}>
                      <ComboBoxListBoxItemLabel>{sensor.name}</ComboBoxListBoxItemLabel>
                      <ComboBoxListBoxItemCheck>
                        <ComboBoxListBoxItemCheckIcon />
                      </ComboBoxListBoxItemCheck>
                    </ComboBoxListBoxItem>
                  ))}
                </ComboBoxSection>
              ) : null}
              {hasSection2 ? (
                <ComboBoxSection>
                  {hasSection2Header ? (
                    <ComboBoxHeader>
                      {intl.formatMessage({
                        defaultMessage: "Section 2",
                        id: "H+Wcch",
                      })}
                    </ComboBoxHeader>
                  ) : null}
                  {specialSensorList2.map((sensor) => (
                    <ComboBoxListBoxItem id={sensor.id} key={sensor.id} textValue={sensor.name}>
                      <ComboBoxListBoxItemLabel>{sensor.name}</ComboBoxListBoxItemLabel>
                      <ComboBoxListBoxItemCheck>
                        <ComboBoxListBoxItemCheckIcon />
                      </ComboBoxListBoxItemCheck>
                    </ComboBoxListBoxItem>
                  ))}
                </ComboBoxSection>
              ) : null}
              <ComboBoxSection>
                {isOptional ? (
                  <ComboBoxListBoxItem id="" isNone>
                    {intl.formatMessage({
                      defaultMessage: "None",
                      id: "450Fty",
                    })}
                  </ComboBoxListBoxItem>
                ) : null}
                {hasDefaultItem ? (
                  <ComboBoxListBoxItem id="Default">
                    {intl.formatMessage({
                      defaultMessage: "Default",
                      id: "lKv8ex",
                    })}
                  </ComboBoxListBoxItem>
                ) : null}
                {standardSensorList.map((item) => (
                  <ComboBoxListBoxItem id={item.id} key={item.id} textValue={item.name}>
                    <ComboBoxListBoxItemLabel>{item.name}</ComboBoxListBoxItemLabel>
                    <ComboBoxListBoxItemCheck>
                      <ComboBoxListBoxItemCheckIcon />
                    </ComboBoxListBoxItemCheck>
                  </ComboBoxListBoxItem>
                ))}
              </ComboBoxSection>
            </ComboBoxListBox>
          </ComboBoxPopover>
        </ComboBox>
      </Form>
    </div>
  );
};

const meta = {
  argTypes: {
    menuTrigger: { control: { type: "select" }, options: ["focus", "input"] },
  },
  component: PreviewComboBox,
} satisfies Meta<typeof PreviewComboBox>;

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
    menuTrigger: "focus",
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
