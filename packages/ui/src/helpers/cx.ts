import { cx as classix } from "classix";
import { twMerge } from "tailwind-merge";

export const cx = (...argumentList: Parameters<typeof classix>) => twMerge(classix(...argumentList));
