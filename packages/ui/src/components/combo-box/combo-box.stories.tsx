import { useControlledState } from "@react-stately/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { useCallback, useMemo } from "react";
import { Form } from "react-aria-components";
import { useIntl } from "react-intl";
import {
  ComboBox,
  ComboBoxButton,
  ComboBoxDescription,
  ComboBoxFieldError,
  ComboBoxIcon,
  ComboBoxInput,
  ComboBoxLabel,
  ComboBoxListBox,
  ComboBoxListBoxItem,
  ComboBoxListBoxItemCheck,
  ComboBoxListBoxItemCheckIcon,
  ComboBoxListBoxItemLabel,
  ComboBoxPopover,
  ComboBoxTrigger,
} from "@/components/combo-box/combo-box";
import { querySensorConnection } from "@/data/sensor";

type SensorEdge = Awaited<ReturnType<typeof querySensorConnection>>["edges"][0];

const PreviewComboBox = (properties: {
  hasLabel: boolean;
  hasLabelDescription: boolean;
  isDisabled: boolean;
  isInvalid: boolean;
  isOptional: boolean;
  isSquished: boolean;
  menuTrigger: "focus" | "input";
}) => {
  const { hasLabel, hasLabelDescription, isDisabled, isInvalid, isOptional, isSquished, menuTrigger } =
    properties;
  const intl = useIntl();
  const [selectedKey, setSelectedKey] = useControlledState<string | null>(undefined, null);
  const [isOpen, setIsOpen] = useControlledState<boolean>(undefined, false);
  const itemList = useMemo(() => {
    const result = querySensorConnection({ first: 200 });
    return isOptional ? [{ cursor: "", highlightedText: null, node: null }, ...result.edges] : result.edges;
  }, [isOptional]);

  const handleSelectionChange = useCallback(
    (key: number | string) => {
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
          defaultItems={itemList}
          isDisabled={isDisabled}
          isInvalid={isInvalid}
          menuTrigger={menuTrigger}
          onOpenChange={setIsOpen}
          onSelectionChange={handleSelectionChange}
          selectedKey={selectedKey}
        >
          {hasLabel ? (
            <ComboBoxLabel>
              {intl.formatMessage({
                defaultMessage: "Sensor",
                id: "SCewMo",
              })}
            </ComboBoxLabel>
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
          <ComboBoxPopover isOpen={isOpen}>
            <ComboBoxListBox>
              {(edge: SensorEdge) => {
                if (edge.cursor === "") {
                  return (
                    <ComboBoxListBoxItem id="" isNone>
                      {intl.formatMessage({
                        defaultMessage: "None",
                        id: "450Fty",
                      })}
                    </ComboBoxListBoxItem>
                  );
                }

                return edge.node == null ? null : (
                  <ComboBoxListBoxItem id={edge.node.id} key={edge.node.id} textValue={edge.node.name}>
                    <ComboBoxListBoxItemLabel>{edge.node.name}</ComboBoxListBoxItemLabel>
                    <ComboBoxListBoxItemCheck>
                      <ComboBoxListBoxItemCheckIcon />
                    </ComboBoxListBoxItemCheck>
                  </ComboBoxListBoxItem>
                );
              }}
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
    hasLabel: true,
    hasLabelDescription: true,
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
