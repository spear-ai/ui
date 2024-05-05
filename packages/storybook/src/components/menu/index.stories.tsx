import {
  Menu,
  MenuHeader,
  MenuItem,
  MenuItemDescription,
  MenuItemExpand,
  MenuItemExpandIcon,
  MenuItemKeyboard,
  MenuItemKeyboardShortcut,
  MenuItemLabel,
  MenuPopover,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
  SubmenuTrigger,
} from "@spear-ai/ui/components/menu";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "react-aria-components";
import { useIntl } from "react-intl";
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
        <Menu>
          <MenuSection>
            <MenuHeader>
              {intl.formatMessage({
                defaultMessage: "Header 1",
                id: "pp6/fU",
              })}
            </MenuHeader>
            <MenuItem>
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
              <MenuItemKeyboard>
                <MenuItemKeyboardShortcut>
                  {/* eslint-disable-line formatjs/no-literal-string-in-jsx */}⌘X
                </MenuItemKeyboardShortcut>
              </MenuItemKeyboard>
            </MenuItem>
            <MenuItem href="#" isDisabled>
              <MenuItemLabel>
                {intl.formatMessage({
                  defaultMessage: "Option 2 (Link)",
                  id: "SyZePE",
                })}
              </MenuItemLabel>
              <MenuItemDescription>
                {intl.formatMessage({
                  defaultMessage: "Suspendisse eu bibendum massa.",
                  id: "fkgqp+",
                })}
              </MenuItemDescription>
              <MenuItemKeyboard>
                <MenuItemKeyboardShortcut>
                  {/* eslint-disable-line formatjs/no-literal-string-in-jsx */}⌘Y
                </MenuItemKeyboardShortcut>
              </MenuItemKeyboard>
            </MenuItem>
            <MenuItem>
              <MenuItemLabel>
                {intl.formatMessage({
                  defaultMessage: "Option 3",
                  id: "drtU5J",
                })}
              </MenuItemLabel>
              <MenuItemKeyboard>
                <MenuItemKeyboardShortcut>
                  {/* eslint-disable-line formatjs/no-literal-string-in-jsx */}⌘Z
                </MenuItemKeyboardShortcut>
              </MenuItemKeyboard>
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
            <MenuItem>
              <MenuItemLabel>
                {intl.formatMessage({
                  defaultMessage: "Option 4",
                  id: "vFpyJC",
                })}
              </MenuItemLabel>
            </MenuItem>
            <SubmenuTrigger>
              <MenuItem isDisabled>
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
              <MenuItem>
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
                  <MenuItem>
                    <MenuItemLabel>
                      {intl.formatMessage({
                        defaultMessage: "Option A",
                        id: "4MGJ+W",
                      })}
                    </MenuItemLabel>
                  </MenuItem>
                  <MenuItem>
                    <MenuItemLabel>
                      {intl.formatMessage({
                        defaultMessage: "Option B",
                        id: "zIJoTQ",
                      })}
                    </MenuItemLabel>
                  </MenuItem>
                  <MenuItem>
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
            <MenuItem>
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
            <MenuItem>
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
