import {
  Avatar,
  AvatarButton,
  AvatarIcon,
  AvatarImage,
  AvatarText,
  getAvatarUserInitials,
} from "@spear-ai/ui/components/avatar";
import type { Meta, StoryObj } from "@storybook/react";
import image1 from "./user-1.jpeg";
import image2 from "./user-2.jpeg";

const PreviewAvatar = (properties: {
  familyName: string;
  givenName: string;
  hasIcon: boolean;
  hasImage: boolean;
  hasText: boolean;
  imageIsBroken: boolean;
  imageVariant: "1" | "2";
  isButton: boolean;
  isSkeleton: boolean;
  size: "size-6" | "size-8" | "size-10" | "size-12" | "size-14" | "size-16";
}) => {
  const {
    familyName,
    givenName,
    hasIcon,
    hasImage,
    hasText,
    imageIsBroken,
    imageVariant,
    isButton,
    isSkeleton,
    size,
  } = properties;
  const image = imageVariant === "1" ? image1 : image2;
  const AvatarComponent = isButton ? AvatarButton : Avatar;

  return (
    <AvatarComponent className={size} isSkeleton={isSkeleton}>
      {hasImage ? (
        <AvatarImage
          alt=""
          height={image.height}
          src={imageIsBroken ? "404" : image.src}
          width={image.width}
        />
      ) : null}
      {hasText ? <AvatarText text={getAvatarUserInitials({ familyName, givenName })} /> : null}
      {hasIcon ? <AvatarIcon /> : null}
    </AvatarComponent>
  );
};

const meta = {
  component: PreviewAvatar,
} satisfies Meta<typeof PreviewAvatar>;

type Story = StoryObj<typeof meta>;

export const User: Story = {
  args: {
    familyName: "Doe",
    givenName: "Jane",
    hasIcon: true,
    hasImage: true,
    hasText: true,
    imageIsBroken: false,
    imageVariant: "1",
    isButton: false,
    isSkeleton: false,
    size: "size-10",
  },
  argTypes: {
    imageVariant: {
      control: { type: "select" },
      options: ["1", "2"],
    },
    size: {
      control: {
        labels: {
          "size-6": "6",
          "size-8": "8",
          "size-10": "10",
          "size-12": "12",
          "size-14": "14",
          "size-16": "16",
        },
        type: "select",
      },
      options: ["size-6", "size-8", "size-10", "size-12", "size-14", "size-16"],
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
