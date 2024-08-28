import { forwardRef, HTMLAttributes } from "react";
import { cx } from "@/helpers/cx";

export const Separator = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...properties }, reference) => {
    const mergedClassName = cx(
      "before:bg-neutral-a-6 h-px w-full before:-mt-px before:block before:h-px before:w-full before:content-['']",
      className,
    );
    return <div className={mergedClassName} {...properties} ref={reference} />;
  },
);

Separator.displayName = "Separator";
