import { useControlledState } from "@react-stately/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "react-aria-components";
import { useIntl } from "react-intl";
import {
  ComboBox,
  ComboBoxButton,
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
import { useRegionList } from "@/hooks/use-region-list";

const PreviewComboBox = () => {
  const intl = useIntl();
  const [value, setValue] = useControlledState<string | null>(undefined, null);
  const regionList = useRegionList(["US", "GB"]);

  return (
    <div className="w-full max-w-xs">
      <Form className="relative w-full">
        <ComboBox
          menuTrigger="focus"
          onSelectionChange={(key: number | string) => {
            setValue(key === "" ? null : `${key}`);
          }}
          selectedKey={value}
        >
          <ComboBoxLabel>
            {intl.formatMessage({
              defaultMessage: "Country",
              id: "vONi+O",
            })}
          </ComboBoxLabel>
          <ComboBoxTrigger>
            <ComboBoxInput
              placeholder={intl.formatMessage({
                defaultMessage: "Select a country",
                id: "EEdOfh",
              })}
            />
            <ComboBoxButton>
              <ComboBoxIcon />
            </ComboBoxButton>
          </ComboBoxTrigger>
          <ComboBoxPopover>
            <ComboBoxListBox>
              <ComboBoxListBoxItem id="" isNone>
                {intl.formatMessage({
                  defaultMessage: "None",
                  id: "450Fty",
                })}
              </ComboBoxListBoxItem>
              {regionList.map((item) => (
                <ComboBoxListBoxItem id={item.id} key={item.id} textValue={item.name}>
                  <ComboBoxListBoxItemLabel>{item.name}</ComboBoxListBoxItemLabel>
                  <ComboBoxListBoxItemCheck>
                    <ComboBoxListBoxItemCheckIcon />
                  </ComboBoxListBoxItemCheck>
                </ComboBoxListBoxItem>
              ))}
            </ComboBoxListBox>
          </ComboBoxPopover>
        </ComboBox>
      </Form>
    </div>
  );
};

const meta = {
  component: PreviewComboBox,
} satisfies Meta<typeof PreviewComboBox>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  parameters: {
    layout: "centered",
  },
};

export default meta;
