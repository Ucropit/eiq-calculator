import {CalculateEiq, CalculationForCropEiq} from '../src';

test('Test', () => {
  expect(true).toBe(true);
});

describe('Calculation For Crop Eiq', () => {
  const surface = 500
  const supplies = [{
    eiq: Number(2.01924999975 + 1.81499999985),
    total: 135
  },{
    eiq: Number(1.5826666668),
    total: 75
  },{
    eiq: Number(2.01924999975 + 1.81499999985),
    total: 55
  },{
    eiq: Number(1.5826666668),
    total: 25
  }]

  describe('Calculate the eiq of supply 1 and the crop area', () => {
    it('should return as result 1.04', () => {
      const eiq: number = Number(CalculateEiq(surface, supplies[0].eiq, supplies[0].total).toFixed(2))
      expect(eiq).toEqual(1.04);
    })

  })
  describe('Calculate the eiq of supply 2 and the crop area', () => {
    it('should return as result 0.24', () => {
      const eiq: number = Number(CalculateEiq(surface, supplies[1].eiq, supplies[1].total).toFixed(2))
      expect(eiq).toEqual(0.24);
    })

  })
  describe('Calculate the eiq of supply 3 and the crop area', () => {
    it('should return as result 0.42', () => {
      const eiq: number = Number(CalculateEiq(surface, supplies[2].eiq, supplies[2].total).toFixed(2))
      expect(eiq).toEqual(0.42);
    })

  })
  describe('Calculate the total eiq of all supplies and the crop area.', () => {
    it('should return as result 1.77', () => {
      const totalEiq: number = Number(CalculationForCropEiq(surface, supplies).toFixed(2))
      expect(totalEiq).toEqual(1.77);
    })
  })
})
