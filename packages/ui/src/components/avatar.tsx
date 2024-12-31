"use client";

import { Slot } from "@radix-ui/react-slot";
import { useUpdateEffect } from "@react-hookz/web";
import NextImage from "next/image";
import { ComponentProps, HTMLAttributes, SVGAttributes, SyntheticEvent, useCallback, useState } from "react";
import { Button as ButtonPrimitive } from "react-aria-components";
import { cx } from "@/helpers/cx";

export const getAvatarUserInitials = (options: {
  /** The persons’s family name to use as an initial. */
  familyName: string | null | undefined;
  /** The persons’s given name to use as an initial. */
  givenName: string | null | undefined;
}): string => {
  const { familyName, givenName } = options;

  const familyInitial =
    (familyName ?? "")
      .replaceAll(/[^a-z]/giu, "")
      .trim()
      .toUpperCase()
      .at(0) ?? "";

  const givenInitial =
    (givenName ?? "")
      .replaceAll(/[^a-z]/giu, "")
      .trim()
      .toUpperCase()
      .at(0) ?? "";

  return givenInitial === "" ? familyInitial : givenInitial;
};

export const Avatar = ({
  /** Whether to render as the passed in child element. */
  asChild = false,
  className,
  /** Whether to render as a skeleton loader. */
  isSkeleton = false,
  ...properties
}: HTMLAttributes<HTMLSpanElement> & {
  /** Whether to render as the passed in child element. */
  asChild?: boolean | undefined;
  /** Whether to render as a skeleton loader. */
  isSkeleton?: boolean | undefined;
}) => {
  const Component = asChild ? Slot : "span";
  const mergedClassName = cx(
    "text-neutral-contrast after:border-neutral-a-6 data-is-skeleton:bg-black-a-3 data-is-skeleton:pointer-events-none dark:data-is-skeleton:bg-white-a-3 data-is-skeleton:animate-pulse bg-neutral-9 after-h-full group relative inline-flex size-10 cursor-default items-center justify-center overflow-hidden rounded-full after:absolute after:inset-0 after:rounded-full after:border after:content-['']",
    className,
  );
  return <Component className={mergedClassName} data-is-skeleton={isSkeleton} {...properties} />;
};

Avatar.displayName = "Avatar";

export const AvatarButton = ({
  className,
  /** Whether to render as a skeleton loader. */
  isSkeleton = false,
  ...properties
}: ComponentProps<typeof ButtonPrimitive> & {
  /** Whether to render as the passed in child element. */
  className?: string | undefined;
  /** Whether to render as a skeleton loader. */
  isSkeleton?: boolean | undefined;
}) => {
  const mergedClassName = cx(
    "text-neutral-contrast hover:after:border-neutral-a-8 after:border-neutral-a-7 data-is-skeleton:bg-black-a-3 data-is-skeleton:pointer-events-none dark:data-is-skeleton:bg-white-a-3 data-is-skeleton:animate-pulse bg-neutral-9 hover:bg-neutral-10 after-h-full group relative inline-flex size-10 cursor-default items-center justify-center overflow-hidden rounded-full after:absolute after:inset-0 after:rounded-full after:border after:content-['']",
    className,
  );
  return <ButtonPrimitive className={mergedClassName} data-is-skeleton={isSkeleton} {...properties} />;
};

export const AvatarImage = ({
  className,
  onError,
  src,
  ...properties
}: ComponentProps<typeof NextImage>) => {
  const [hasError, setHasError] = useState(false);

  const handleError = useCallback(
    (event: SyntheticEvent<HTMLImageElement>) => {
      setHasError(true);

      if (onError != null) {
        onError(event);
      }
    },
    [onError, setHasError],
  );

  useUpdateEffect(() => {
    setHasError(false);
  }, [setHasError, src]);

  const mergedClassName = cx(
    "group-data-is-skeleton:opacity-0 data-has-error:opacity-0 peer absolute inset-0",
    className,
  );

  return (
    <NextImage
      className={mergedClassName}
      data-has-error={hasError}
      data-slot-visible={hasError ? undefined : "image"}
      onError={handleError}
      src={src}
      {...properties}
    />
  );
};

AvatarImage.displayName = "AvatarImage";

export const AvatarText = ({
  children,
  className,
  text,
  ...properties
}: SVGAttributes<SVGElement> & {
  /** The text — often initials — to display as an image fallback. */
  text?: string | null | undefined;
}) => {
  const initials = (text ?? "").trim();
  const mergedClassName = cx(
    "group-data-is-skeleton:opacity-0 peer-data-slot-visible-image:opacity-0 peer absolute select-none fill-current text-[48px] font-medium leading-none",
    className,
  );

  return (
    <svg
      aria-hidden
      className={mergedClassName}
      data-slot-visible={initials === "" ? undefined : "text"}
      viewBox="0 0 100 100"
      {...properties}
    >
      <text
        alignmentBaseline="middle"
        dominantBaseline="middle"
        dy=".125em"
        textAnchor="middle"
        x="50%"
        y="50%"
      >
        {children ?? initials}
      </text>
    </svg>
  );
};

AvatarText.displayName = "AvatarText";

export const AvatarIconUser = (properties: SVGAttributes<SVGElement>) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...properties}>
    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

AvatarIconUser.displayName = "AvatarIconUser";

export const AvatarIcon = ({
  asChild = false,
  className,
  ...properties
}: SVGAttributes<SVGElement> & { asChild?: boolean | undefined }) => {
  const Component = asChild ? Slot : AvatarIconUser;
  const mergedClassName = cx(
    "group-data-is-skeleton:opacity-0 peer-data-slot-visible-image:opacity-0 peer-data-slot-visible-text:opacity-0 peer absolute inset-0 size-full",
    className,
  );

  // @ts-expect-error the Slot component’s type definition doesn’t play nice with SVGs
  return <Component aria-hidden className={mergedClassName} {...properties} />;
};

AvatarIcon.displayName = "AvatarIcon";
