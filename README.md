# EIQ Calculator

Package for calculating the eiq of the inputs applied in ucropit Crop

## Installation

First install [Node.js](http://nodejs.org/). Then:

```sh
$ npm install @ucropit/eiq-calculator
```

## Importing

```javascript
// Using Node.js `require()`
const eiqCalculator = require('@ucropit/eiq-calculator');

// Using ES6 imports
import * as eiqCalculator from '@ucropit/eiq-calculator';
// Or
import { calculateDosage, factorEIQDosageProduct, calculateEIQ, calculateEiqWithList } from '@ucropit/eiq-calculator';
```

### Calculate Dosage

```js
import { calculateDosage } from '@ucropit/eiq-calculator';

const surface = 500
const total = 135

const quantity: number = calculateDosage(total, surface)
// With rounding
//const quantity: number = calculateDosage(total, surface, 2)
```

### Factor EIQ Dosage Product

```js
import { calculateDosage, factorEIQDosageProduct } from '@ucropit/eiq-calculator';

const surface = 500
const eiq = 4.297
const total = 135

const quantity: number = calculateDosage(total, surface)
const factorEiq: number = factorEIQDosageProduct(eiq, quantity)

```

### Calculation For Crop EIQ

Calculate the `Eiq` applied to a Crop` according to its total surface

```js
import { calculateEIQ, calculateEIQWithList } from '@ucropit/eiq-calculator';

const surface = 500
const eiqList = [{
  eiq: 4.297,
  total: 135,
  unit: 'kg/ha'
}, {
  eiq: 1.774,
  total: 75,
  unit: 'lt/ha'
}, {
  eiq: 4.297,
  total: 0.135,
  unit: 'tn/ha'
}, {
  eiq: 1.774,
  total: 25,
  unit: 'kg/ha'
}]
const eiq1: number = calculateEIQ(surface, eiqList[0].eiq, eiqList[0].total, eiqList[0].unit)
const totalEiq: number = calculateEIQWithList(surface, eiqList, 2)
```

### Calculation By Activities, Achievement or Lot

Calculate the `EIQ` applied to an Activity, Achievement or Lot` according to its total surface

```js
import { calculateEIQWithList } from '@ucropit/eiq-calculator';

const surface = 200
const toFixedResult = 2
const activityData = [
  {
    total: 100,
    eiq: 4.297,
    unit: 'kg/ha'
  },
  {
    total: 50,
    eiq: 1.774,
    unit: 'kg/ha'
  },
];
const totalEiq: number = calculateEIQWithList(surface, activityData, toFixedResult)
```

### Get EIQ description range

GET the `EIQ` description range

```js
import { getEIQRange } from '@ucropit/eiq-calculator';

const eiq = 15.2
const rangeDescription: string = getEIQRange(eiq)
```

### List allowed units

Function that returns a list of supported units

```js
import { getUnits } from '@ucropit/eiq-calculator';
console.log(getUnits())
// console.log
//   [
//     'kg', 'kg/ha', 
//     'lt', 'lt/ha', 
//     'gal', 'gal/ac', 
//     'pt', 'pt/ac', 
//     'tn', 'tn/ha', 
//     't', 't/ac'
//     'lb', 'lb/ac'
//     'qt', 'qt/ac',
//     'oz', 'oz/ac',
//     'fl-oz', 'fl-oz/ac'
//   ]
```


## License

MIT License

Copyright (c) 2021 Ucropit

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
