export const getDefaultSliderValue = ({
  isRange,
  maxValue,
  minValue,
}: {
  isRange: boolean;
  maxValue: number;
  minValue: number;
}) => {
  const delta = maxValue - minValue;

  if (isRange) {
    const lowerDistance = Math.max(Math.floor(delta / 4), minValue);
    const upperDistance = Math.max(Math.floor(delta / 2), minValue);
    const lowerValue = Math.min(minValue + lowerDistance, maxValue);
    const upperValue = Math.min(minValue + upperDistance, maxValue);
    return [lowerValue, upperValue];
  }

  const distance = Math.max(Math.floor(delta / 3), minValue);
  return Math.min(minValue + distance, maxValue);
};
