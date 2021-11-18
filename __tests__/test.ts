import { calculateEiq, calculateEiqWithList, getEiqRange } from '../src';

describe('Calculation For Crop Eiq', () => {
  const surface = 500;
  const eiqList = [
    {
      eiq: 3.834,
      total: 135,
    },
    {
      eiq: 1.583,
      total: 75,
    },
    {
      eiq: 3.834,
      total: 55,
    },
    {
      eiq: 1.583,
      total: 25,
    },
  ];

  describe('Calculate the eiq of supply 1 and the crop area', () => {
    it('should return as result 1.04', () => {
      const eiq: number = calculateEiq(surface, eiqList[0].eiq, eiqList[0].total, 2);
      expect(eiq).toEqual(1.04);
    });
  });
  describe('Calculate the eiq of supply 2 and the crop area', () => {
    it('should return as result 0.24', () => {
      const eiq: number = calculateEiq(surface, eiqList[1].eiq, eiqList[1].total, 2);
      expect(eiq).toEqual(0.24);
    });
  });
  describe('Calculate the eiq of supply 3 and the crop area', () => {
    it('should return as result 0.42', () => {
      const eiq: number = calculateEiq(surface, eiqList[2].eiq, eiqList[2].total, 2);
      expect(eiq).toEqual(0.42);
    });
  });
  describe('Calculate the total eiq of all supplies and the crop area.', () => {
    it('should return as result 1.77', () => {
      const totalEiq: number = calculateEiqWithList(surface, eiqList, 2);
      expect(totalEiq).toEqual(1.77);
    });
  });
});

describe('calculate eiq on activity', () => {
  const surface = 200;
  const eiqList = [
    {
      total: 100,
      eiq: 3.83425,
    },
    {
      total: 50,
      eiq: 1.58267,
    },
  ];

  describe('Calculate the eiq of data 1 in the activity', () => {
    it('should return as result 1.917', () => {
      const eiq: number = calculateEiq(surface, eiqList[0].eiq, eiqList[0].total, 3);
      expect(eiq).toEqual(1.917);
    });
  });

  describe('Calculate the eiq of data 2 in the activity', () => {
    it('should return as result 0.396', () => {
      const eiq: number = calculateEiq(surface, eiqList[1].eiq, eiqList[1].total, 3);
      expect(eiq).toEqual(0.396);
    });
  });

  describe('Calculate the eiq of complete activity', () => {
    it('should return as result 2.313', () => {
      const eiq: number = calculateEiqWithList(surface, eiqList, 3);
      expect(eiq).toEqual(2.313);
    });
  });
});

describe('calculate eiq on achievement', () => {
  const surface = 100;
  const eiqList = [
    {
      total: 135,
      eiq: 3.834,
    },
    {
      total: 75,
      eiq: 1.583,
    },
  ];

  describe('Calculate the eiq of data 1 in the achievement', () => {
    it('should return as result 5.18', () => {
      const eiq: number = calculateEiq(surface, eiqList[0].eiq, eiqList[0].total, 2);
      expect(eiq).toEqual(5.18);
    });
  });

  describe('Calculate the eiq of data 2 in the achievement', () => {
    it('should return as result 1.19', () => {
      const eiq: number = calculateEiq(surface, eiqList[1].eiq, eiqList[1].total, 2);
      expect(eiq).toEqual(1.19);
    });
  });

  describe('Calculate the eiq of complete achievemet', () => {
    it('should return as result 6.36', () => {
      const eiq: number = calculateEiqWithList(surface, eiqList, 2);
      expect(eiq).toEqual(6.36);
    });
  });
});

describe('calculate eiq on lot', () => {
  const surface = 200;
  const eiqList = [
    {
      total: 135,
      eiq: 3.834,
    },
    {
      total: 75,
      eiq: 1.583,
    },
  ];

  describe('Calculate the eiq of data 1 in the lot', () => {
    it('should return as result 2.59', () => {
      const eiq: number = calculateEiq(surface, eiqList[0].eiq, eiqList[0].total, 2);
      expect(eiq).toEqual(2.59);
    });
  });

  describe('Calculate the eiq of data 2 in the lot', () => {
    it('should return as result 0.59', () => {
      const eiq: number = calculateEiq(surface, eiqList[1].eiq, eiqList[1].total, 2);
      expect(eiq).toEqual(0.59);
    });
  });

  describe('Calculate the eiq of complete lot', () => {
    it('should return as result 3.18', () => {
      const eiq: number = calculateEiqWithList(surface, eiqList, 2);
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
      const eiqRangeDescription: string = getEiqRange(veryLowEiq);
      expect(eiqRangeDescription).toEqual('VERY_LOW');
    });
  });

  describe('Get range description for low eiq', () => {
    it('should return as result LOW', () => {
      const eiqRangeDescription: string = getEiqRange(lowEiq);
      expect(eiqRangeDescription).toEqual('LOW');
    });
  });

  describe('Get range description for moderate eiq', () => {
    it('should return as result MODERATE', () => {
      const eiqRangeDescription: string = getEiqRange(moderateEiq);
      expect(eiqRangeDescription).toEqual('MODERATE');
    });
  });

  describe('Get range description for high eiq', () => {
    it('should return as result HIGH', () => {
      const eiqRangeDescription: string = getEiqRange(highEiq);
      expect(eiqRangeDescription).toEqual('HIGH');
    });
  });

  describe('Get range description for very high eiq', () => {
    it('should return as result VERY_HIGH', () => {
      const eiqRangeDescription: string = getEiqRange(veryHighEiq);
      expect(eiqRangeDescription).toEqual('VERY_HIGH');
    });
  });
});
