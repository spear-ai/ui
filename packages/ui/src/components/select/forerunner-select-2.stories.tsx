import { cx } from "classix";
import React from "react";
import {
  Button,
  FieldError,
  Header,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Section,
  Select,
  SelectValue,
  Text,
} from "react-aria-components";

const ForerunnerSelect = (properties: { className: string; onValueChange: (id: string) => void }) => {
  const { className, onValueChange } = properties;

  return (
    <Select
      className={cx("group w-full focus:outline-none", className)}
      onSelectionChange={(key) => {
        onValueChange(key === "" ? "" : `${key}`);
      }}
    >
      <Label />
      <Button
        className={cx(
          "group mt-2 inline-flex h-9 w-full cursor-default select-none items-center justify-between gap-1 rounded-lg border border-transparent bg-white-a-3 pe-2 ps-3.5 text-base leading-none shadow outline outline-offset-0 outline-neutral-a-7 entering:outline-2 entering:outline-primary-a-8 group-invalid:outline-x-negative-a-7 group-disabled:pointer-events-none group-invalid:group-disabled:outline-x-negative-a-6 focus-visible:outline-primary-a-8 dark:bg-black-a-3  sm:ps-3 sm:text-sm",
          className,
        )}
      >
        <SelectValue />
      </Button>
      <Text slot="description" />
      <FieldError />
      <Popover
        className={cx(
          "isolate min-w-select-trigger-width overflow-auto rounded-xl border-transparent bg-canvas-1 bg-white-a-3 p-1 shadow-lg outline outline-1 outline-offset-0 outline-neutral-a-6 backdrop-blur placement-left:slide-in-from-right-2 placement-right:slide-in-from-left-2 placement-top:slide-in-from-bottom-2 placement-bottom:slide-in-from-top-2 entering:duration-100 entering:animate-in entering:fade-in exiting:duration-75 exiting:animate-out exiting:fade-out exiting:zoom-out-95",
          className,
        )}
      >
        <ListBox className={cx("outline-none", className)}>
          <ListBoxItem
            className={cx(
              "group/item relative cursor-default select-none rounded-lg py-2.5 pe-7 ps-2 text-base leading-none text-neutral-12 outline-none hover:bg-primary-4 focus:bg-primary-5 sm:py-1.5 sm:text-sm rtl:text-right",
              className,
            )}
          >
            <Text slot="label" />
            <Text slot="description" />
          </ListBoxItem>
          <Section>
            <Header />
            <ListBoxItem />
          </Section>
        </ListBox>
      </Popover>
    </Select>
  );
};

export default ForerunnerSelect;
