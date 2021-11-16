import { CalculateEiqInList } from '../src/index';
test('Multiply', () => {
  const eiq: number = CalculateEiqInList([{
    plannedArea: 133.89,
    surfaceToMade: 70,
    total: 30,
    eiq: 3.89
  }])
  console.log(eiq)
  expect(eiq).toBeGreaterThan(0);
});
