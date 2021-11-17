import { Multiply, CalculateEiq, CalculateEiqInList } from '../src/index';
test('Multiply', () => {
  expect(Multiply(2, 2)).toBe(4);
});

describe('calculate eiq on activity', () => {
  const data = [
    {
      total: 100,
      plannedArea: 200,
      eiq: 3.83425,
    },
    {
      total: 50,
      plannedArea: 200,
      eiq: 1.58267,
    },
  ];

  describe('Calculate the eiq of data 1 in the activity', () => {
    it('should return as result 1.917', () => {
      const eiq: number = Number(CalculateEiq(data[0]).toFixed(3));
      expect(eiq).toEqual(1.917);
    });
  });

  describe('Calculate the eiq of data 2 in the activity', () => {
    it('should return as result 0.396', () => {
      const eiq: number = Number(CalculateEiq(data[1]).toFixed(3));
      expect(eiq).toEqual(0.396);
    });
  });

  describe('Calculate the eiq of complete activity', () => {
    it('should return as result 2.313', () => {
      const eiq: number = Number(CalculateEiqInList(data, 3));
      expect(eiq).toEqual(2.313);
    });
  });
});

describe('calculate eiq on achievement', () => {
  const data = [
    {
      total: 135,
      plannedArea: 100,
      eiq: 3.834,
    },
    {
      total: 75,
      plannedArea: 100,
      eiq: 1.583,
    },
  ];

  describe('Calculate the eiq of data 1 in the achievement', () => {
    it('should return as result 5.18', () => {
      const eiq: number = Number(CalculateEiq(data[0]).toFixed(2));
      expect(eiq).toEqual(5.18);
    });
  });

  describe('Calculate the eiq of data 2 in the achievement', () => {
    it('should return as result 1.19', () => {
      const eiq: number = Number(CalculateEiq(data[1]).toFixed(2));
      expect(eiq).toEqual(1.19);
    });
  });

  describe('Calculate the eiq of complete achievemet', () => {
    it('should return as result 6.36', () => {
      const eiq: number = Number(CalculateEiqInList(data, 2));
      expect(eiq).toEqual(6.36);
    });
  });
});

describe('calculate eiq on lot', () => {
  const data = [
    {
      total: 135,
      plannedArea: 200,
      eiq: 3.834,
    },
    {
      total: 75,
      plannedArea: 200,
      eiq: 1.583,
    },
  ];

  describe('Calculate the eiq of data 1 in the lot', () => {
    it('should return as result 2.59', () => {
      const eiq: number = Number(CalculateEiq(data[0]).toFixed(2));
      expect(eiq).toEqual(2.59);
    });
  });

  describe('Calculate the eiq of data 2 in the lot', () => {
    it('should return as result 0.59', () => {
      const eiq: number = Number(CalculateEiq(data[1]).toFixed(2));
      expect(eiq).toEqual(0.59);
    });
  });

  describe('Calculate the eiq of complete lot', () => {
    it('should return as result 3.18', () => {
      const eiq: number = Number(CalculateEiqInList(data, 2));
      expect(eiq).toEqual(3.18);
    });
  });
});
