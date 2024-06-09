import {
  Dialog,
  DialogCloseButtonPrimitive,
  DialogCloseIconButton,
  DialogCloseIconButtonIcon,
  DialogModal,
  DialogModalOverlay,
  DialogTitle,
  DialogTrigger,
} from "@spear-ai/ui/components/dialog";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "react-aria-components";
import { useIntl } from "react-intl";
import { useStorybook } from "@/components/storybook-provider/storybook-provider";

const PreviewDialog = (properties: {
  hasCloseButton: boolean;
  hasTitle: boolean;
  isAlert: boolean;
  isDismissable: boolean;
}) => {
  const { hasCloseButton, hasTitle, isAlert, isDismissable } = properties;
  const intl = useIntl();
  const { portalContainer } = useStorybook();

  return (
    <DialogTrigger>
      <Button className="cursor-default rounded-md text-neutral-12">
        {intl.formatMessage({
          defaultMessage: "Trigger",
          id: "B3Q5mz",
        })}
      </Button>
      <DialogModalOverlay UNSTABLE_portalContainer={portalContainer} isDismissable={isDismissable}>
        <DialogModal className="w-full sm:max-w-sm">
          <Dialog className="px-4 pb-4 pt-5 sm:p-6" role={isAlert ? "alertdialog" : undefined}>
            {hasCloseButton ? (
              <DialogCloseIconButton>
                <DialogCloseIconButtonIcon />
              </DialogCloseIconButton>
            ) : null}
            {hasTitle ? (
              <DialogTitle>
                {intl.formatMessage({
                  defaultMessage: "Title",
                  id: "9a9+ww",
                })}
              </DialogTitle>
            ) : null}
            <div className="mt-2">
              <p className="text-sm text-neutral-11 rtl:text-right">
                {intl.formatMessage({
                  defaultMessage:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.",
                  id: "Osc/oA",
                })}
              </p>
            </div>
            <div className="mt-5 sm:mt-6">
              <DialogCloseButtonPrimitive className="inline-flex w-full cursor-default justify-center rounded-md bg-primary-9 px-3 py-2 text-sm font-semibold text-primary-contrast shadow-sm hover:bg-primary-10">
                {intl.formatMessage({
                  defaultMessage: "Understood",
                  id: "GcvLBC",
                })}
              </DialogCloseButtonPrimitive>
            </div>
          </Dialog>
        </DialogModal>
      </DialogModalOverlay>
    </DialogTrigger>
  );
};

const meta = {
  component: PreviewDialog,
} satisfies Meta<typeof PreviewDialog>;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    hasCloseButton: true,
    hasTitle: true,
    isAlert: false,
    isDismissable: true,
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
