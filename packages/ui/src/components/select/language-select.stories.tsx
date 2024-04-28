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
import { useStorybook } from "@/components/storybook-provider/storybook-provider";
import { useLocaleList } from "@/hooks/use-locale-list";

const PreviewSelect = () => {
  const { portalContainer } = useStorybook();
  const intl = useIntl();
  const [value, setValue] = useControlledState<string | null>(undefined, null);
  const localeList = useLocaleList(["en", "en-US", "en-GB", "es", "es-419", "es-ES"]);

  return (
    <div className="w-full max-w-xs">
      <Form className="relative w-full">
        <Select
          onSelectionChange={(key: number | string) => {
            setValue(key === "" ? null : `${key}`);
          }}
          placeholder={intl.formatMessage({
            defaultMessage: "Language",
            id: "y1Z3or",
          })}
          selectedKey={value}
        >
          <SelectLabel>
            {intl.formatMessage({
              defaultMessage: "Language",
              id: "y1Z3or",
            })}
          </SelectLabel>
          <SelectButton>
            <SelectValue />
            <SelectIcon />
          </SelectButton>
          <SelectPopover UNSTABLE_portalContainer={portalContainer}>
            <SelectListBox>
              <SelectListBoxItem id="" isNone>
                {intl.formatMessage({
                  defaultMessage: "None",
                  id: "450Fty",
                })}
              </SelectListBoxItem>
              {localeList.map((item) => (
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
