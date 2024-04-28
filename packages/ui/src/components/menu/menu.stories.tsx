import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "react-aria-components";
import { useIntl } from "react-intl";
import {
  Menu,
  MenuHeader,
  MenuItem,
  MenuItemDescription,
  MenuItemExpand,
  MenuItemExpandIcon,
  MenuItemKeyboardShortcut,
  MenuItemLabel,
  MenuPopover,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
  SubmenuTrigger,
} from "@/components/menu/menu";
import { useStorybook } from "@/components/storybook-provider/storybook-provider";

const PreviewMenu = () => {
  const intl = useIntl();
  const { portalContainer } = useStorybook();

  return (
    <MenuTrigger>
      <Button className="cursor-default rounded-md text-neutral-12">
        {intl.formatMessage({
          defaultMessage: "Trigger",
          id: "B3Q5mz",
        })}
      </Button>
      <MenuPopover UNSTABLE_portalContainer={portalContainer}>
        <Menu disabledKeys={["2", "5"]}>
          <MenuSection>
            <MenuHeader>
              {intl.formatMessage({
                defaultMessage: "Header 1",
                id: "pp6/fU",
              })}
            </MenuHeader>
            <MenuItem id="1">
              <MenuItemLabel>
                {intl.formatMessage({
                  defaultMessage: "Option 1",
                  id: "kkWvJc",
                })}
              </MenuItemLabel>
              <MenuItemDescription>
                {intl.formatMessage({
                  defaultMessage: "Duis rhoncus orci in neque.",
                  id: "oxEUIP",
                })}
              </MenuItemDescription>
              <MenuItemKeyboardShortcut>
                {/* eslint-disable-line formatjs/no-literal-string-in-jsx */}⌘X
              </MenuItemKeyboardShortcut>
            </MenuItem>
            <MenuItem id="2">
              <MenuItemLabel>
                {intl.formatMessage({
                  defaultMessage: "Option 2",
                  id: "+EJqlX",
                })}
              </MenuItemLabel>
              <MenuItemDescription>
                {intl.formatMessage({
                  defaultMessage: "Suspendisse eu bibendum massa.",
                  id: "fkgqp+",
                })}
              </MenuItemDescription>
              <MenuItemKeyboardShortcut>
                {/* eslint-disable-line formatjs/no-literal-string-in-jsx */}
                ⌘Y
              </MenuItemKeyboardShortcut>
            </MenuItem>
            <MenuItem id="3">
              <MenuItemLabel>
                {intl.formatMessage({
                  defaultMessage: "Option 3",
                  id: "drtU5J",
                })}
              </MenuItemLabel>
              <MenuItemKeyboardShortcut>
                {/* eslint-disable-line formatjs/no-literal-string-in-jsx */}⌘Z
              </MenuItemKeyboardShortcut>
            </MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuSection>
            <MenuHeader>
              {intl.formatMessage({
                defaultMessage: "Header 2",
                id: "+MKFek",
              })}
            </MenuHeader>
            <MenuItem id="4">
              <MenuItemLabel>
                {intl.formatMessage({
                  defaultMessage: "Option 4",
                  id: "vFpyJC",
                })}
              </MenuItemLabel>
            </MenuItem>
            <SubmenuTrigger>
              <MenuItem id="5">
                <MenuItemLabel>
                  {intl.formatMessage({
                    defaultMessage: "Option 5",
                    id: "oJPe0y",
                  })}
                </MenuItemLabel>
                <MenuItemExpand>
                  <MenuItemExpandIcon />
                </MenuItemExpand>
              </MenuItem>
              <MenuPopover UNSTABLE_portalContainer={portalContainer}>
                <Menu />
              </MenuPopover>
            </SubmenuTrigger>
            <SubmenuTrigger>
              <MenuItem id="6">
                <MenuItemLabel>
                  {intl.formatMessage({
                    defaultMessage: "Option 6",
                    id: "Sj7O2t",
                  })}
                </MenuItemLabel>
                <MenuItemExpand>
                  <MenuItemExpandIcon />
                </MenuItemExpand>
              </MenuItem>
              <MenuPopover UNSTABLE_portalContainer={portalContainer}>
                <Menu>
                  <MenuItem id="a">
                    <MenuItemLabel>
                      {intl.formatMessage({
                        defaultMessage: "Option A",
                        id: "4MGJ+W",
                      })}
                    </MenuItemLabel>
                  </MenuItem>
                  <MenuItem id="b">
                    <MenuItemLabel>
                      {intl.formatMessage({
                        defaultMessage: "Option B",
                        id: "zIJoTQ",
                      })}
                    </MenuItemLabel>
                  </MenuItem>
                  <MenuItem id="c">
                    <MenuItemLabel>
                      {intl.formatMessage({
                        defaultMessage: "Option C",
                        id: "y9OU0L",
                      })}
                    </MenuItemLabel>
                  </MenuItem>
                </Menu>
              </MenuPopover>
            </SubmenuTrigger>
            <MenuItem id="7">
              <MenuItemLabel>
                {intl.formatMessage({
                  defaultMessage: "Option 7",
                  id: "9qyly5",
                })}
              </MenuItemLabel>
            </MenuItem>
          </MenuSection>
          <MenuSeparator />
          <MenuSection>
            <MenuItem id="8">
              <MenuItemLabel>
                {intl.formatMessage({
                  defaultMessage: "Option 8",
                  id: "nY+E5f",
                })}
              </MenuItemLabel>
            </MenuItem>
          </MenuSection>
        </Menu>
      </MenuPopover>
    </MenuTrigger>
  );
};

const meta = {
  component: PreviewMenu,
} satisfies Meta<typeof PreviewMenu>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  parameters: {
    layout: "centered",
  },
};

export default meta;
