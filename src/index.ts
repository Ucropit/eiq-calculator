/**
 * @function Multiply
 * @description function that receives two parameters as an argument and returns its product
 * @param a factor a
 * @param b factor b
 * @returns
 */

interface IDataDTO {
    surface?: number
    surfaceToMade: number
    total: number
    eiq: number
}

export const CalculateQuantity = (total: number, surface: number): number => total / surface

export const CalculateEiq = (data: IDataDTO) => {
   const {eiq, total, surfaceToMade} = data
    const quantity = CalculateQuantity(total, surfaceToMade)
    return quantity * eiq
}

const SumEiq = (current: number, value: number): number => current + value

export const CalculateEiqInList = (data: { plannedArea: number; total: number; surfaceToMade: number; eiq: number }[]) => data.map(CalculateEiq).reduce(SumEiq)

