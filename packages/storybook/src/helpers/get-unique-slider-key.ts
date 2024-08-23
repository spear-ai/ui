export const getUniqueSliderKey = (options: { isRange: boolean; maxValue: number; minValue: number }) =>
  JSON.stringify(options);
