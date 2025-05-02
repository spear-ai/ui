import React from "react";
import { Dialog, DialogTrigger } from "react-aria-components";
import { useIntl } from "react-intl";
import Joyride, { Props as JoyrideProperties, TooltipRenderProps } from "react-joyride";
import { Button } from "@/components/button";
import { DialogCloseIconButtonIcon, DialogTitle } from "@/components/dialog";
import { IconButton } from "@/components/icon-button";
import { cx } from "@/helpers/cx";

const TourTooltip = (properties: TooltipRenderProps) => {
  const intl = useIntl();
  const { backProps, closeProps, index, isLastStep, primaryProps, step } = properties;
  const { content, title } = step;

  return (
    <DialogTrigger>
      <Dialog>
        <div
          className={cx(
            "outline-neutral-6 dark:bg-neutral-2 relative w-full min-w-0 max-w-md rounded-2xl bg-white px-3 pb-3 pt-5 shadow-lg outline-none outline-1 -outline-offset-1 sm:p-4 dark:outline",
          )}
        >
          <IconButton
            className="absolute end-3 top-3 hidden size-7 sm:block"
            variant="ghost"
            {...closeProps}
          >
            <DialogCloseIconButtonIcon />
          </IconButton>
          <DialogTitle>{title}</DialogTitle>
          <div className="prose mt-2">{content}</div>
          <div className="mt-3 flex justify-end gap-x-2">
            {index === 0 ? null : (
              <Button size="small" variant="ghost" {...backProps}>
                {intl.formatMessage({
                  defaultMessage: "Back",
                  id: "cyR7Kh",
                })}
              </Button>
            )}
            <Button size="small" variant="solid" {...primaryProps}>
              {isLastStep
                ? intl.formatMessage({
                    defaultMessage: "Done",
                    id: "JXdbo8",
                  })
                : intl.formatMessage({
                    defaultMessage: "Next",
                    id: "9+Ddtu",
                  })}
            </Button>
          </div>
        </div>
      </Dialog>
    </DialogTrigger>
  );
};

type GuideTourProperties = Omit<JoyrideProperties, "tooltipComponent">;

export const GuideTour: React.FC<GuideTourProperties> = (properties) => (
  <Joyride {...properties} tooltipComponent={TourTooltip} />
);
