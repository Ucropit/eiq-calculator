/**
 * @function Multiply
 * @description function that receives two parameters as an argument and returns its product
 * @param a factor a
 * @param b factor b
 * @returns
 */
export const Multiply = (a: number, b: number) => a * b;

/**
 * @function Multiply
 * @description function that receives two parameters as an argument and returns its product
 * @param a factor a
 * @param b factor b
 * @returns
 */

interface IDataDTO {
  surface?: number;
  realizedSurface: number;
  total: number;
  eiq: number;
}

const SumEiq = (current: number, value: number): number => current + value;
export const CalculateQuantity = (total: number, realizedSurface: number): number => total / realizedSurface;

export const CalculateEiq = (data: IDataDTO) => {
  const { eiq, total, realizedSurface } = data;
  const quantity = CalculateQuantity(total, realizedSurface);
  return quantity * eiq;
};

export const CalculateEiqInList = (data: IDataDTO[], fixedData: number): number =>
  parseFloat(data.map(CalculateEiq).reduce(SumEiq).toFixed(fixedData));
