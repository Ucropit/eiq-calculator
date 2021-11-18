import { isNumber, isInRange } from './utils';
export enum EiqRanges {
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
export const getEiqRange = (eiq: number): string => {
  if (!isNumber(eiq)) {
    throw new Error('The value of the EIQ must be numeric');
  }

  let rangeDescription = EiqRanges.VERY_HIGH;

  if (isInRange(eiq, 0, 25)) {
    rangeDescription = EiqRanges.VERY_LOW;
  }

  if (isInRange(eiq, 25, 50)) {
    rangeDescription = EiqRanges.LOW;
  }

  if (isInRange(eiq, 50, 100)) {
    rangeDescription = EiqRanges.MODERATE;
  }

  if (isInRange(eiq, 100, 150)) {
    rangeDescription = EiqRanges.HIGH;
  }

  if (isInRange(eiq, 150, 200)) {
    rangeDescription = EiqRanges.VERY_HIGH;
  }

  return rangeDescription;
};
