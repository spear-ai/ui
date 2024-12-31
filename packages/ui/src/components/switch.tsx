import { ComponentProps, HTMLAttributes } from "react";
import { Switch as SwitchPrimitive } from "react-aria-components";
import { cx } from "@/helpers/cx";

export const Switch = ({
  className,
  isPrimary = false,
  ...properties
}: ComponentProps<typeof SwitchPrimitive> & {
  className?: string | undefined;
  isPrimary?: boolean | undefined;
}) => {
  const mergedClassName = cx("group inline-flex outline-none", className);
  return <SwitchPrimitive className={mergedClassName} data-is-primary={isPrimary} {...properties} />;
};

Switch.displayName = "Switch";

export const SwitchLabel = ({ className, ...properties }: HTMLAttributes<HTMLSpanElement>) => {
  const mergedClassName = cx(
    "text-neutral-12 group-disabled:text-neutral-11 ms-3 flex-1 text-sm font-medium leading-6",
    className,
  );

  return <span className={mergedClassName} {...properties} />;
};

SwitchLabel.displayName = "SwitchLabel";

export const SwitchButton = ({ className, ...properties }: HTMLAttributes<HTMLSpanElement>) => {
  const mergedClassName = cx(
    "bg-neutral-a-3 group-data-[is-primary=true]:bg-primary-9 group-focus-visible:outline-primary-a-8 group-selected:bg-neutral-9 group-disabled:bg-neutral-a-3 group relative isolate inline-flex h-6 w-11 rounded-full border-2 border-transparent transition duration-200 ease-in-out group-focus-visible:outline group-focus-visible:outline-2",
    className,
  );

  return <span className={mergedClassName} {...properties} />;
};

SwitchButton.displayName = "SwitchButton";

export const SwitchThumb = ({ className, ...properties }: HTMLAttributes<HTMLSpanElement>) => {
  const mergedClassName = cx(
    "group-selected:translate-x-5 group-disabled:bg-neutral-2 pointer-events-none relative inline-block size-5 translate-x-0 rounded-full bg-white shadow transition-all duration-200 ease-in-out will-change-transform group-disabled:shadow-none",
    className,
  );

  return <span className={mergedClassName} {...properties} />;
};

SwitchThumb.displayName = "SwitchThumb";
