interface IDataDTO {
  surface?: number;
  plannedArea: number;
  total: number;
  eiq: number;
}

/**
 * @function Multiply
 * @description function that receives two parameters as an argument and returns its product
 * @param a factor a
 * @param b factor b
 * @returns
 */
export const Multiply = (a: number, b: number) => a * b;

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
