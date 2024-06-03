import { OTPInput as OTPInputPrimitive, SlotProps } from "input-otp";
import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  HTMLAttributes,
  SVGAttributes,
  useState,
} from "react";
import { cx } from "@/helpers/cx";

export const OneTimePasscodeInput = forwardRef<
  ElementRef<typeof OTPInputPrimitive>,
  ComponentPropsWithoutRef<typeof OTPInputPrimitive> & {
    className?: string | undefined;
    isDisabled?: boolean | undefined;
  }
>(({ className, isDisabled, maxLength, onChange, onComplete, render, value, ...properties }, reference) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const mergedClassName = cx("text-neutral-12 flex items-center", className);
  return (
    <div className="group" data-disabled={isDisabled} data-invalid={isInvalid}>
      {/* @ts-expect-error Type gets confused because of the wrapped primitive, I think */}
      <OTPInputPrimitive
        containerClassName={mergedClassName}
        disabled={isDisabled}
        {...properties}
        inputMode="text"
        maxLength={maxLength * 3}
        onChange={(updatedValue: string) => {
          const dehyphenatedValue = updatedValue.replaceAll("-", "");
          const shortenedValue = dehyphenatedValue.slice(0, maxLength);
          const cleanedValue = shortenedValue.replaceAll(/\D/gu, "");
          if (shortenedValue === cleanedValue) {
            onChange?.(cleanedValue);
            if (shortenedValue.length === maxLength) {
              onComplete?.();
            }
            setIsInvalid(false);
          } else {
            setIsInvalid(true);
          }
        }}
        pattern="^.+$"
        ref={reference}
        render={(renderProperties) =>
          render?.({ ...renderProperties, slots: renderProperties.slots.slice(0, maxLength) }) ?? <div />
        }
        value={value}
      />
    </div>
  );
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
    "bg-white-a-3 dark:bg-black-a-3 group-data-[invalid=true]:data-[is-active=true]:outline-x-negative-8 outline-neutral-a-7 group-data-[disabled=true]:text-neutral-a-8 group-data-[disabled=true]:outline-neutral-a-6 data-[is-active=true]:outline-primary-8 group relative flex h-14 w-10 items-center justify-center text-2xl outline outline-1 -outline-offset-1 transition duration-300 first:rounded-s-md last:rounded-e-md data-[is-active=true]:z-10 data-[is-active=true]:outline-2",
    className,
  );
  return (
    <div className={mergedClassName} data-is-active={isActive} {...properties} ref={reference}>
      {character !== null && character}
    </div>
  );
});

OneTimePasscodeInputSlot.displayName = "OneTimePasscodeInputSlot";

export const OneTimePasscodeInputSegment = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...properties }, reference) => {
    const mergedClassName = cx("flex", className);
    return (
      <div className={mergedClassName} {...properties} ref={reference}>
        {children}
      </div>
    );
  },
);

OneTimePasscodeInputSegment.displayName = "OneTimePasscodeInputSegment";
