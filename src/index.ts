
import {Divide, Reduce} from "./utils";
interface ISupplyDTO {
    eiq: number
    total: number
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

