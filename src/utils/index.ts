// UTILS
export const Reduce = (current: number, value: number): number => current + value

export const isInvalidDenominator = (denominator: number): boolean => [NaN, 0].includes(Number(denominator))

export const Divide = (numerator: number, denominator: number): number => {
    if( isInvalidDenominator(denominator) ) throw new Error('the value of the numerator in a division must be greater than or equal to 0')
    return numerator / denominator
}
