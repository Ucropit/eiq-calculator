import {
  COEFFICIENT_KILOGRAMS,
  COEFFICIENT_LITERS,
  COEFFICIENT_TONS,
  defaultUnits,
  fluidOunceUnits,
  GALLON_IN_PINTS_EQUIVALENCE,
  gallonsUnits,
  kilogramsUnits, LIBRA_IN_OUNCE_EQUIVALENCE,
  litersUnits,
  ounceUnits, PINT_IN_FLUID_OUNCE_EQUIVALENCE,
  QUART_IN_PINTS_EQUIVALENCE, quartUnits,
  TONS_SHORT_IN_LIBRA_EQUIVALENCE,
  tonsShortUnits,
  tonsUnits
} from "./constants";

/**
 * @function getUnits
 * @description Function that returns a list of supported units
 * @return array
 */
export const getUnits = (): string[] => defaultUnits

/**
 * @function correctionFactorEiq
 * @description function that applies a correction coefficient to the EIQ according to the unit
 * @param eiq Product eiq
 * @param unit Unit in which the surface and the total applied of Eiq are expressed
 * @return value
 */
export const correctionFactorEiq = (eiq: number, unit: string): number => {

  if(!defaultUnits.includes(unit.toLowerCase())){
    throw new Error(`the unit does not belong to those allowed: [${defaultUnits.join(' ,')}]`);
  }

  // System Metric Volume
  if (litersUnits.includes(unit.toLowerCase())) {
    return eiq * COEFFICIENT_LITERS;
  }

  // System Metric Mass
  if(kilogramsUnits.includes(unit.toLowerCase())){
    return eiq * COEFFICIENT_KILOGRAMS
  }

  if (tonsUnits.includes(unit.toLowerCase())) {

    return eiq * COEFFICIENT_TONS;
  }

  // System Imperial Volume
  if(gallonsUnits.includes(unit.toLowerCase())){
    return eiq * GALLON_IN_PINTS_EQUIVALENCE;
  }

  if(quartUnits.includes(unit.toLowerCase())){
    return eiq * QUART_IN_PINTS_EQUIVALENCE;
  }

  // System Imperial Mass
  if(ounceUnits.includes(unit.toLowerCase())){
    return eiq / LIBRA_IN_OUNCE_EQUIVALENCE;
  }

  if (tonsShortUnits.includes(unit.toLowerCase())) {
    return eiq * TONS_SHORT_IN_LIBRA_EQUIVALENCE;
  }

  if(fluidOunceUnits.includes(unit.toLowerCase())){
    return eiq / PINT_IN_FLUID_OUNCE_EQUIVALENCE;
  }

  // Default Pint(pt) || Libra(lb)
  return eiq;
};
