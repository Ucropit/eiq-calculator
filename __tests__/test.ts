import { calculateEIQ, calculateEIQWithList, getEIQRange, ERangesEiq } from '../src';
import { parseDecimals } from "../src/utils";

const eiq1 = 4.297
const eiq2 = 1.774
describe('Calculation For Crop Eiq', () => {
  const surface = 500;
  const eiqList = [
    {
      eiq: eiq1,
      total: 135,
      unit: 'kg/ha'
    },
    {
      eiq: eiq2,
      total: 75,
      unit: 'lt/ha'
    },
    {
      eiq: eiq1,
      total: 0.135,
      unit: 'tn/ha'
    },
    {
      eiq: eiq2,
      total: 25,
      unit: 'kg/ha'
    },
  ];

  describe('Calculate the eiq of supply 1 and the crop area', () => {
    it('should return as result 1.04', () => {
      const eiq: number = calculateEIQ(surface, eiqList[0].eiq, eiqList[0].total, eiqList[0].unit, 2);
      expect(eiq).toEqual(1.04);
    });
  });
  describe('Calculate the eiq of supply 2 and the crop area', () => {
    it('should return as result 0.23', () => {
      const eiq: number = calculateEIQ(surface, eiqList[1].eiq, eiqList[1].total, eiqList[1].unit, 2);
      expect(eiq).toEqual(0.23);
    });
  });
  describe('Calculate the eiq of supply 3 and the crop area', () => {
    it('should return as result 1.04', () => {
      const eiq: number = calculateEIQ(surface, eiqList[2].eiq, eiqList[2].total, eiqList[2].unit, 2);
      expect(eiq).toEqual(1.04);
    });
  });
  describe('Calculate the total eiq of all supplies and the crop area.', () => {
    it('should return as result 2.38', () => {
      const totalEiq: number = calculateEIQWithList(surface, eiqList, 2);
      expect(totalEiq).toEqual(2.38);
    });
  });
  describe('Calculate the eiq of supply 1 and the crop area form kg/ha to pt/ac', () => {
    it('should return as result 1.04', () => {
      const surfaceInAc = parseDecimals(surface / 0.404686, 2)
      const totalInLb = parseDecimals(eiqList[0].total * 2.20462, 2)
      const eiq: number = calculateEIQ(surfaceInAc, eiqList[0].eiq, totalInLb, 'pt/ac', 2);
      expect(eiq).toEqual(1.04);
    });
  });
  describe('Calculate the eiq of supply 2 and the crop area lt/ha in pt/ac', () => {
    it('should return as result 0.23', () => {
      const surfaceInAc = parseDecimals(surface / 0.404686, 2)
      const totalInPt = parseDecimals(eiqList[1].total * 2.11338, 2)
      const eiq: number = calculateEIQ(surfaceInAc, eiqList[1].eiq, totalInPt, 'pt/ac', 2);
      expect(eiq).toEqual(0.23);
    });
  });
  describe('Calculate the eiq of supply 3 and the crop area tn/ha in pt/ac', () => {
    it('should return as result 1.04', () => {
      const surfaceInAc = parseDecimals(surface / 0.404686, 2)
      const totalInLb = parseDecimals(eiqList[2].total * 2204.62, 2)
      const eiq: number = calculateEIQ(surfaceInAc, eiqList[2].eiq, totalInLb, 'pt/ac', 2);
      expect(eiq).toEqual(1.04);
    });
  });
  describe('Calculate the eiq of supply 2 and the crop area lt/ha in gal/ac', () => {
    it('should return as result 0.23', () => {
      const surfaceInAc = parseDecimals(surface / 0.404686, 2)
      const totalInGal = parseDecimals(eiqList[1].total * 0.264172, 2)
      const eiq: number = calculateEIQ(surfaceInAc, eiqList[1].eiq, totalInGal, 'gal/ac', 2);
      expect(eiq).toEqual(0.23);
    });
  });
});

describe('calculate eiq on activity', () => {
  const surface = 200;
  const eiqList = [
    {
      total: 100,
      eiq: eiq1,
      unit: 'kg/ha'
    },
    {
      total: 50,
      eiq: eiq2,
      unit: 'kg/ha'
    },
  ];

  describe('Calculate the eiq of data 1 in the activity', () => {
    it('should return as result 1.917', () => {
      const eiq: number = calculateEIQ(surface, eiqList[0].eiq, eiqList[0].total, eiqList[0].unit, 3);
      expect(eiq).toEqual(1.917);
    });
  });

  describe('Calculate the eiq of data 2 in the activity', () => {
    it('should return as result 0.396', () => {
      const eiq: number = calculateEIQ(surface, eiqList[1].eiq, eiqList[1].total, eiqList[1].unit, 3);
      expect(eiq).toEqual(0.396);
    });
  });

  describe('Calculate the eiq of complete activity', () => {
    it('should return as result 2.313', () => {
      const eiq: number = calculateEIQWithList(surface, eiqList, 3);
      expect(eiq).toEqual(2.313);
    });
  });
});

describe('calculate eiq on achievement', () => {
  const surface = 100;
  const eiqList = [
    {
      total: 135,
      eiq: eiq1,
      unit: 'kg/ha'
    },
    {
      total: 75,
      eiq: eiq2,
      unit: 'kg/ha'
    },
  ];

  describe('Calculate the eiq of data 1 in the achievement', () => {
    it('should return as result 5.18', () => {
      const eiq: number = calculateEIQ(surface, eiqList[0].eiq, eiqList[0].total, eiqList[0].unit, 2);
      expect(eiq).toEqual(5.18);
    });
  });

  describe('Calculate the eiq of data 2 in the achievement', () => {
    it('should return as result 1.19', () => {
      const eiq: number = calculateEIQ(surface, eiqList[1].eiq, eiqList[1].total, eiqList[1].unit, 2);
      expect(eiq).toEqual(1.19);
    });
  });

  describe('Calculate the eiq of complete achievemet', () => {
    it('should return as result 6.36', () => {
      const eiq: number = calculateEIQWithList(surface, eiqList, 2);
      expect(eiq).toEqual(6.36);
    });
  });
});

describe('calculate eiq on lot', () => {
  const surface = 200;
  const eiqList = [
    {
      total: 135,
      eiq: eiq1,
      unit: 'kg/ha'
    },
    {
      total: 75,
      eiq: eiq2,
      unit: 'kg/ha'
    },
  ];

  describe('Calculate the eiq of data 1 in the lot', () => {
    it('should return as result 2.59', () => {
      const eiq: number = calculateEIQ(surface, eiqList[0].eiq, eiqList[0].total, eiqList[0].unit, 2);
      expect(eiq).toEqual(2.59);
    });
  });

  describe('Calculate the eiq of data 2 in the lot', () => {
    it('should return as result 0.59', () => {
      const eiq: number = calculateEIQ(surface, eiqList[1].eiq, eiqList[1].total, eiqList[1].unit, 2);
      expect(eiq).toEqual(0.59);
    });
  });

  describe('Calculate the eiq of complete lot', () => {
    it('should return as result 3.18', () => {
      const eiq: number = calculateEIQWithList(surface, eiqList, 2);
      expect(eiq).toEqual(3.18);
    });
  });
});

describe('Get range description for EIQ', () => {
  const veryLowEiq = 10;
  const lowEiq = 30;
  const moderateEiq = 70;
  const highEiq = 120;
  const veryHighEiq = 170;

  describe('Get range description for very low eiq', () => {
    it('should return as result VERY_LOW', () => {
      const eiqRangeDescription: string = getEIQRange(veryLowEiq);
      expect(eiqRangeDescription).toEqual(ERangesEiq.VERY_LOW);
    });
  });

  describe('Get range description for low eiq', () => {
    it('should return as result LOW', () => {
      const eiqRangeDescription: string = getEIQRange(lowEiq);
      expect(eiqRangeDescription).toEqual(ERangesEiq.LOW);
    });
  });

  describe('Get range description for moderate eiq', () => {
    it('should return as result MODERATE', () => {
      const eiqRangeDescription: string = getEIQRange(moderateEiq);
      expect(eiqRangeDescription).toEqual(ERangesEiq.MODERATE);
    });
  });

  describe('Get range description for high eiq', () => {
    it('should return as result HIGH', () => {
      const eiqRangeDescription: string = getEIQRange(highEiq);
      expect(eiqRangeDescription).toEqual(ERangesEiq.HIGH);
    });
  });

  describe('Get range description for very high eiq', () => {
    it('should return as result VERY_HIGH', () => {
      const eiqRangeDescription: string = getEIQRange(veryHighEiq);
      expect(eiqRangeDescription).toEqual(ERangesEiq.VERY_HIGH);
    });
  });
});
