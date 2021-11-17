
import {Divide, Reduce} from "./utils";
interface ISupplyDTO {
    eiq: number
    total: number
}

interface IDataDTO {
  surface?: number;
  plannedArea: number;
  total: number;
  eiq: number;
}

/**
 * @function CalculateDosage
 * @description function that receives two parameters as an argument and returns its product
 * @param surface net area to which the eiq dose is applied
 * @param total Total used for the selected area
 * @return value
 */
export const CalculateDosage = (surface: number, total: number): number => Divide(total, surface)

/**
 * @function FactorEiqDosageProduct
 * @description function that receives two parameters as an argument and returns its product
 * @param eiq Product eiq
 * @param quantity total eiq used in a given area. Result obtained with CalculateDosage
 * @return value
 */
export const FactorEiqDosageProduct = (eiq: number, quantity: number) => eiq * quantity

/**
 * @function CalculateEiq
 * @description function that receives two parameters as an argument and returns its product
 * @param surface net area to which the eiq dose is applied
 * @param eiq Product eiq
 * @param total Total used for the selected area
 * @return value
 */
export const CalculateEiq = (surface: number, eiq: number, total:number) => FactorEiqDosageProduct(eiq, CalculateDosage(surface, total))

/**
 * @function CalculationForCropEiq
 * @description function that receives two parameters as an argument and returns its product
 * @param surface Total cultivation area
 * @param supplies Arrangement of inputs applied to the crop
 * @return value
 */
export const CalculationForCropEiq = (surface: number, supplies: ISupplyDTO[]) => supplies.map(({eiq, total})=> CalculateEiq(surface, eiq, total)).reduce(Reduce)


/**
 * @function SumEiq
 * @description sum eiq use with reduce
 * @param current current eiq value
 * @param value next eiq value
 * @returns number
 */
const SumEiq = (current: number, value: number): number => current + value;

/**
 * @function CalculateQuantity
 * @description calculate product quantity applied
 * @param total total planned
 * @param plannedArea
 * @returns
 */
export const CalculateQuantity = (total: number, plannedArea: number): number => total / plannedArea;

/**
 * @function CalculateEiq
 * @description calculate eiq for a product and planned area
 * @param data
 * @returns
 */
export const CalculateEiq = (data: IDataDTO) => {
  const { eiq, total, plannedArea } = data;
  const quantity = CalculateQuantity(total, plannedArea);
  return quantity * eiq;
};

/**
 * @function CalculateEiqInList
 * @description Calculates Eiq for multiple data products and planned areas
 * @param data
 * @param fixedData number to fixed final result
 * @returns
 */
export const CalculateEiqInList = (data: IDataDTO[], fixedData: number): number =>
  parseFloat(data.map(CalculateEiq).reduce(SumEiq).toFixed(fixedData));
