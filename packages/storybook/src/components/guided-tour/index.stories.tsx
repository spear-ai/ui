import { GuidedTour } from "@spear-ai/ui/components/guided-tour";
import type { Meta, StoryObj } from "@storybook/react";
import { useIntl } from "react-intl";
import { Placement } from "react-joyride";

const PreviewGuidedTour = () => {
  const intl = useIntl();
  const STEP_LIST = [
    {
      content: (
        <p className="text-sm text-neutral-11 rtl:text-right">
          {intl.formatMessage({
            defaultMessage:
              "This is the first step of the tour. It demonstrates how to use the GuideTour component.",
            id: "QExMwI",
          })}
        </p>
      ),
      disableBeacon: true,
      floaterProps: {
        hideArrow: true,
      },
      placement: "bottom" as Placement,
      target: "[data-tour='step1']",
      title: intl.formatMessage({
        defaultMessage: "Welcome to the Tour",
        id: "jK5aJK",
      }),
    },
    {
      content: (
        <p className="text-sm text-neutral-11 rtl:text-right">
          {intl.formatMessage({
            defaultMessage: "This is the second step. You can add as many steps as needed.",
            id: "x7b/K3",
          })}
        </p>
      ),
      disableBeacon: true,
      floaterProps: {
        hideArrow: true,
      },
      placement: "right" as Placement,
      target: "[data-tour='step2']",
      title: intl.formatMessage({
        defaultMessage: "Second Step",
        id: "RVUMLV",
      }),
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="w-32 rounded-md bg-neutral-3 p-4" data-tour="step1">
        {intl.formatMessage({
          defaultMessage: "First target element",
          id: "tcHkgM",
        })}
      </div>
      <div className="w-32 rounded-md bg-neutral-3 p-4" data-tour="step2">
        {intl.formatMessage({
          defaultMessage: "Second target element",
          id: "Sw6KOq",
        })}
      </div>
      <GuidedTour callback={() => {}} run steps={STEP_LIST} />
    </div>
  );
};

const meta = {
  component: PreviewGuidedTour,
} satisfies Meta<typeof PreviewGuidedTour>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
