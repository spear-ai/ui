import { useControlledState } from "@react-stately/utils";
import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "react-aria-components";
import { useIntl } from "react-intl";
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
} from "@/components/select/select";
import { useRegionList } from "@/hooks/use-region-list";

const PreviewSelect = () => {
  const intl = useIntl();
  const [value, setValue] = useControlledState<string | null>(undefined, null);
  const countryList = useRegionList(["US", "GB"]);

  return (
    <div className="w-full max-w-xs">
      <Form className="relative w-full">
        <Select
          onSelectionChange={(key: number | string) => {
            setValue(key === "" ? null : `${key}`);
          }}
          placeholder={intl.formatMessage({
            defaultMessage: "Country",
            id: "vONi+O",
          })}
          selectedKey={value}
        >
          <SelectLabel>
            {intl.formatMessage({
              defaultMessage: "Country",
              id: "vONi+O",
            })}
          </SelectLabel>
          <SelectButton>
            <SelectValue />
            <SelectIcon />
          </SelectButton>
          <SelectPopover>
            <SelectListBox>
              <SelectListBoxItem id="" isNone>
                {intl.formatMessage({
                  defaultMessage: "None",
                  id: "450Fty",
                })}
              </SelectListBoxItem>
              {countryList.map((item) => (
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

export const Standard: Story = {
  parameters: {
    layout: "centered",
  },
};

export default meta;
