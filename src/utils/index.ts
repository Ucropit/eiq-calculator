// UTILS


export const validator = (values: any) => {
    Object.keys(values).forEach((key)=>{
        if(!isNumber(values[key])){
            throw new Error(`The value of the ${key} must be numeric`)
        }
    })
}

export const multiply = (a: number, b: number): number => a * b

export const sum = (current: number, value: number): number => current + value

export const isNumber = (value: number): boolean => !isNaN(Number(value))
export const isInvalidDenominator = (denominator: number): boolean => [NaN, 0].includes(Number(denominator))

export const divide = (numerator: number, denominator: number): number => {
    if( isInvalidDenominator(denominator) ) throw new Error('the value of the numerator in a division must be greater than or equal to 0')
    return numerator / denominator
}

export const parseDecimals = (value: number, decimal?: number): number => {
    if(decimal){
        if(!isNumber(decimal)){
            throw new Error('The value of the decimal must be numeric')
        }
        return parseFloat(value.toFixed(decimal));
    }
    return value
}
