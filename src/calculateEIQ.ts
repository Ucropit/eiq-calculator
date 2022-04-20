import { divide, multiply, parseDecimals, sum, validator } from './utils';
import { correctionFactorEiq } from "./managerUnits";
export interface IEiqListDTO {
  eiq: number
  total: number
  unit: string
}
/**
 * @function calculateDosage
 * @description function that receives total used area and surface and retrieve the dosage to use
 * @param total Total used for the selected area
 * @param surface net area to which the eiq dose is applied
 * @return value
 */

export const calculateDosage = (total: number, surface: number): number => {
  validator({ total, surface });
  return divide(total, surface);
};

/**
 * @function factorEiqDosageProduct
 * @description function that receives two parameters as an argument and returns its product
 * @param eiq Product eiq
 * @param quantity total eiq used in a given area. Result obtained with CalculateDosage
 * @return value
 */
export const factorEIQDosageProduct = (eiq: number, quantity: number): number => {
  validator({ eiq, quantity });
  return multiply(eiq, quantity);
};

/**
 * @function calculateEiq
 * @description function that calculate the EIQ used in one area
 * @param surface net area to which the eiq dose is applied
 * @param eiq Product eiq
 * @param total Total used for the selected area
 * @param unit Unit in which the surface and the total applied of Eiq are expressed
 * @param [decimal] number to fixed final result
 * @return value
 */
export const calculateEIQ = (surface: number, eiq: number, total: number, unit: string, decimal?: number): number => {
  validator({ surface, eiq, total });
  return parseDecimals(factorEIQDosageProduct(correctionFactorEiq(eiq, unit), calculateDosage(total, surface)), decimal);
};

/**
 * @function calculateEiqWithList
 * @description function that calculate the EIQ used in one area with multiple EIQ products
 * @param surface Total cultivation area
 * @param eiqList Arrangement of inputs applied to the crop
 * @param [decimal] number to fixed final result
 * @return value
 */
export const calculateEIQWithList = (surface: number, eiqList: IEiqListDTO[], decimal?: number) =>
  parseDecimals(eiqList.map(({ eiq, total, unit }) => calculateEIQ(surface, eiq, total, unit)).reduce(sum, 0), decimal);
