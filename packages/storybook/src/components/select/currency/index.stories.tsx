/* eslint-disable react/jsx-props-no-spreading */
import { useControlledState } from "@react-stately/utils";
import {
  Select,
  SelectButton,
  SelectIcon,
  SelectLabel,
  SelectListBox,
  SelectListBoxItem,
  SelectListBoxItemCheck,
  SelectListBoxItemCheckIcon,
  SelectListBoxItemLabel,
  SelectPopover,
  SelectValue,
} from "@spear-ai/ui/components/select";
import { useCurrencyList } from "@spear-ai/ui/hooks/use-currency-list";
import type { Meta, StoryObj } from "@storybook/react";
import { Form, Key } from "react-aria-components";
import { useIntl } from "react-intl";
import { useStorybook } from "@/components/storybook-provider/storybook-provider";

const PreviewSelect = () => {
  const { portalContainer } = useStorybook();
  const intl = useIntl();
  const [value, setValue] = useControlledState<string | null>(undefined, null);
  const currencyList = useCurrencyList();

  return (
    <div className="w-full max-w-xs">
      <Form className="relative w-full">
        <Select
          onSelectionChange={(key: Key | null) => {
            setValue(key === "" ? null : `${key}`);
          }}
          placeholder={intl.formatMessage({
            defaultMessage: "Currency",
            id: "55hdQy",
          })}
          selectedKey={value}
        >
          <SelectLabel>
            {intl.formatMessage({
              defaultMessage: "Currency",
              id: "55hdQy",
            })}
          </SelectLabel>
          <SelectButton>
            <SelectValue />
            <SelectIcon />
          </SelectButton>
          <SelectPopover
            {...(portalContainer === undefined ? {} : { UNSTABLE_portalContainer: portalContainer })}
          >
            <SelectListBox>
              <SelectListBoxItem id="" isNone>
                {intl.formatMessage({
                  defaultMessage: "None",
                  id: "450Fty",
                })}
              </SelectListBoxItem>
              {currencyList.map((item) => (
                <SelectListBoxItem id={item.id} key={item.id} textValue={item.name}>
                  <SelectListBoxItemLabel>{item.name}</SelectListBoxItemLabel>
                  <SelectListBoxItemCheck>
                    <SelectListBoxItemCheckIcon />
                  </SelectListBoxItemCheck>
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

export const Default: Story = {
  parameters: {
    layout: "centered",
  },
};

export default meta;
