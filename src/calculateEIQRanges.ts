import { isNumber, isInRange } from './utils';

export enum ERangesEiq {
  VERY_HIGH = 'VERY_HIGH',
  HIGH = 'HIGH',
  MODERATE = 'MODERATE',
  LOW = 'LOW',
  VERY_LOW = 'VERY_LOW',
}

/**
 * @function getEiqRange
 * @description get description string of range for EIQ
 * @param {Number} eiq
 * @returns range
 */
export const getEIQRange = (eiq: number): string => {
  if (!isNumber(eiq)) {
    throw new Error('The value of the EIQ must be numeric');
  }

  let rangeDescription = ERangesEiq.VERY_HIGH;

  if (isInRange(eiq, 0, 25)) {
    rangeDescription = ERangesEiq.VERY_LOW;
  }

  if (isInRange(eiq, 25, 50)) {
    rangeDescription = ERangesEiq.LOW;
  }

  if (isInRange(eiq, 50, 100)) {
    rangeDescription = ERangesEiq.MODERATE;
  }

  if (isInRange(eiq, 100, 150)) {
    rangeDescription = ERangesEiq.HIGH;
  }

  if (isInRange(eiq, 150, 200)) {
    rangeDescription = ERangesEiq.VERY_HIGH;
  }

  return rangeDescription;
};
