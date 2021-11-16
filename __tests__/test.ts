import { Multiply, CalculateEiqInList } from '../src/index';
test('Multiply', () => {
  expect(Multiply(2, 2)).toBe(4);
});

describe('calculate eiq on activity', () => {
  test('ActivityEiq', () => {
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

    const result = CalculateEiqInList(data, 3);

    expect(result).toBe(2.313);
  });
});

describe('calculate eiq on achievement', () => {
  test('AchievementEiq', () => {
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

    const result = CalculateEiqInList(data, 2);

    expect(result).toBe(6.36);
  });
});

describe('calculate eiq on lot', () => {
  test('LotEiq', () => {
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

    const result = CalculateEiqInList(data, 2);

    expect(result).toBe(3.18);
  });
});
