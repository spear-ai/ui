import {
  Avatar,
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
  isSkeleton: boolean;
}) => {
  const { familyName, givenName, hasIcon, hasImage, hasText, imageIsBroken, imageVariant, isSkeleton } =
    properties;
  const image = imageVariant === "1" ? image1 : image2;

  return (
    <Avatar isSkeleton={isSkeleton}>
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
    </Avatar>
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
    isSkeleton: false,
  },
  argTypes: {
    imageVariant: {
      control: { type: "select" },
      options: ["1", "2"],
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
