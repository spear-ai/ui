/* eslint-disable react/jsx-props-no-spreading */
import { useControlledState } from "@react-stately/utils";
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
} from "@spear-ai/ui/components/combo-box";
import { useCurrencyList } from "@spear-ai/ui/hooks/use-currency-list";
import type { Meta, StoryObj } from "@storybook/react";
import { Form, Key } from "react-aria-components";
import { useIntl } from "react-intl";
import { useStorybook } from "@/components/storybook-provider/storybook-provider";

const PreviewComboBox = () => {
  const { portalContainer } = useStorybook();
  const intl = useIntl();
  const [value, setValue] = useControlledState<string | null>(undefined, null);
  const currencyList = useCurrencyList();

  return (
    <div className="w-full max-w-xs">
      <Form className="relative w-full">
        <ComboBox
          menuTrigger="focus"
          onSelectionChange={(key: Key | null) => {
            setValue(key === "" ? null : `${key}`);
          }}
          selectedKey={value}
        >
          <ComboBoxLabel>
            {intl.formatMessage({
              defaultMessage: "Currency",
              id: "55hdQy",
            })}
          </ComboBoxLabel>
          <ComboBoxTrigger>
            <ComboBoxInput
              placeholder={intl.formatMessage({
                defaultMessage: "Select a currency",
                id: "fdLM0l",
              })}
            />
            <ComboBoxButton>
              <ComboBoxIcon />
            </ComboBoxButton>
          </ComboBoxTrigger>
          <ComboBoxPopover
            {...(portalContainer === undefined ? {} : { UNSTABLE_portalContainer: portalContainer })}
          >
            <ComboBoxListBox>
              <ComboBoxListBoxItem id="" isNone>
                {intl.formatMessage({
                  defaultMessage: "None",
                  id: "450Fty",
                })}
              </ComboBoxListBoxItem>
              {currencyList.map((item) => (
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
