import { forwardRef, SVGAttributes } from "react";
import { cx } from "@/helpers/cx";

export const Spinner = forwardRef<
  SVGSVGElement,
  SVGAttributes<SVGElement> & { isPrimary?: boolean | undefined }
>(({ className, isPrimary = false, ...properties }, reference) => {
  const mergedClassName = cx(
    "text-neutral-9 data-[is-primary=true]:text-primary-9 group size-5 animate-spin",
    className,
  );

  return (
    <svg
      className={mergedClassName}
      data-is-primary={isPrimary}
      fill="none"
      ref={reference}
      viewBox="0 0 24 24"
      {...properties}
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        fill="currentColor"
      />
    </svg>
  );
});

Spinner.displayName = "Spinner";
