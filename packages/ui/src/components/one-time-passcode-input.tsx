import { OTPInput as OTPInputPrimitive, SlotProps } from "input-otp";
import { ComponentPropsWithoutRef, ElementRef, forwardRef, HTMLAttributes, SVGAttributes } from "react";
import { cx } from "@/helpers/cx";

export const OneTimePasscodeInput = forwardRef<
  ElementRef<typeof OTPInputPrimitive>,
  ComponentPropsWithoutRef<typeof OTPInputPrimitive> & { className?: string | undefined }
>(({ className, ...properties }, reference) => {
  const mergedClassName = cx(
    "text-neutral-12 group flex items-center has-[:disabled]:opacity-30",
    className,
  );
  return <OTPInputPrimitive containerClassName={mergedClassName} {...properties} ref={reference} />;
});

OneTimePasscodeInput.displayName = "OneTimePasscodeInput";

export const OneTimePasscodeInputDash = forwardRef<SVGSVGElement, SVGAttributes<SVGElement>>(
  ({ className, ...properties }, reference) => {
    const mergedClassName = cx("text-neutral-a-8 group size-5", className);

    return (
      <svg className={mergedClassName} ref={reference} viewBox="0 0 20 4" {...properties}>
        <rect fill="currentColor" height="4" rx="2" width="12" x="4" />
      </svg>
    );
  },
);

OneTimePasscodeInputDash.displayName = "OneTimePasscodeInputDash";

export const OneTimePasscodeInputSlot = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & SlotProps
>(({ char: character, className, isActive, ...properties }, reference) => {
  const mergedClassName = cx(
    "border-neutral-a-7 outline-primary-8 group-focus-within:border-neutral-a-8 group-hover:border-neutral-a-8 relative flex h-14 w-10 items-center justify-center border-y text-2xl outline outline-0 outline-offset-0 transition duration-300 ltr:border-r ltr:first:rounded-l-md ltr:first:border-l ltr:last:rounded-r-md rtl:border-l rtl:first:rounded-r-md rtl:first:border-r rtl:last:rounded-l-md",
    isActive && "z-10 outline-2 ltr:border-l rtl:border-r",
    className,
  );
  return (
    <div className={mergedClassName} {...properties} ref={reference}>
      {character !== null && <div>{character}</div>}
    </div>
  );
});

OneTimePasscodeInputSlot.displayName = "OneTimePasscodeInputSlot";
