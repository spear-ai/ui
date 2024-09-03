/* eslint-disable react/jsx-props-no-spreading */
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
  hasLongContent: boolean;
  hasTitle: boolean;
  isAlert: boolean;
  isDismissable: boolean;
}) => {
  const { hasCloseButton, hasLongContent, hasTitle, isAlert, isDismissable } = properties;
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
      <DialogModalOverlay
        {...(portalContainer === undefined ? {} : { UNSTABLE_portalContainer: portalContainer })}
        isDismissable={isDismissable}
      >
        <DialogModal className="w-full sm:max-w-md">
          <Dialog className="px-4 pb-4 pt-5 sm:p-6" role={isAlert ? "alertdialog" : "dialog"}>
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
            <div className="prose mt-2">
              <p className="text-sm text-neutral-11 rtl:text-right">
                {intl.formatMessage({
                  defaultMessage:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.",
                  id: "Osc/oA",
                })}
              </p>
              {hasLongContent ? (
                <>
                  <p className="text-sm text-neutral-11 rtl:text-right">
                    {intl.formatMessage({
                      defaultMessage:
                        "Nullam dui sem, tempor in iaculis id, porttitor ut magna. Nam non ipsum sed enim commodo ullamcorper id ut magna. Ut scelerisque justo nunc, id placerat lectus elementum id. Vestibulum suscipit justo in felis fringilla imperdiet. Vivamus ornare placerat dignissim. Aliquam porttitor odio pellentesque dui luctus, sed bibendum libero scelerisque. Quisque libero quam, cursus nec urna sit amet, rhoncus mattis ipsum. In vel vehicula nisl, eget faucibus magna. Nunc sagittis nulla turpis, at vehicula dolor lacinia eget. Vivamus sed elit sollicitudin, tincidunt ex ultrices, consequat neque. Morbi congue porttitor lorem id fermentum. Aliquam rhoncus, nisi sed semper mollis, eros orci consectetur magna, ut mattis risus purus in ipsum. Quisque vel risus molestie, tristique purus ac, gravida mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas pellentesque felis laoreet sapien aliquam, ut tempus orci porttitor.",
                      id: "lAX58e",
                    })}
                  </p>
                  <p className="text-sm text-neutral-11 rtl:text-right">
                    {intl.formatMessage({
                      defaultMessage:
                        "Integer sit amet est lobortis turpis tempor vestibulum. Pellentesque malesuada, libero eu fermentum fermentum, metus odio luctus felis, eu eleifend elit mi quis tellus. Donec facilisis ipsum at luctus pulvinar. Suspendisse a sapien non odio aliquet rhoncus sed sed nunc. Nam consequat, eros at tempus accumsan, orci sapien dignissim massa, vel mattis lectus augue non turpis. Aenean orci urna, condimentum eget suscipit id, fermentum vel ante. Integer et lobortis justo, id consequat mauris. Nam pellentesque dui ullamcorper ante rhoncus semper. Donec ac feugiat urna, ut tincidunt turpis. Vestibulum libero eros, tristique et metus nec, tincidunt vestibulum tellus.",
                      id: "O5j1An",
                    })}
                  </p>
                  <p className="text-sm text-neutral-11 rtl:text-right">
                    {intl.formatMessage({
                      defaultMessage:
                        "Aliquam ultrices dolor arcu, id tristique mi sodales id. Vivamus finibus hendrerit metus, sed bibendum ligula mattis sed. Sed a dui et quam hendrerit finibus vitae eget quam. Donec massa felis, vehicula sit amet pulvinar quis, ornare mattis est. Nam id felis a odio consectetur maximus. Nunc molestie sed ligula at tincidunt. Donec pellentesque tellus non purus fringilla, quis eleifend elit pulvinar.",
                      id: "K/rLJ4",
                    })}
                  </p>
                  <p className="text-sm text-neutral-11 rtl:text-right">
                    {intl.formatMessage({
                      defaultMessage:
                        "Nam eget interdum magna, at iaculis diam. Mauris pulvinar, elit eget interdum egestas, est orci ultricies lectus, et aliquet tellus ex sit amet purus. Donec in varius nunc. Phasellus in odio magna. Aenean auctor pulvinar nisl, nec aliquam ipsum elementum vitae. Proin vitae mi lacinia velit euismod congue. Sed condimentum purus eu blandit suscipit. Donec eget neque neque. Pellentesque libero tortor, lacinia quis urna quis, mattis semper risus. Pellentesque eget ante neque.",
                      id: "ifSXtN",
                    })}
                  </p>
                </>
              ) : null}
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
    hasLongContent: false,
    hasTitle: true,
    isAlert: false,
    isDismissable: true,
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
