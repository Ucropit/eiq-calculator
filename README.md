# EIQ Calculator
package for calculating the eiq of the inputs applied in ucropit cultivation

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
import { calculateDosage, factorEiqDosageProduct, calculateEiq, calculateEiqWithList } from '@ucropit/eiq-calculator';
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
import { calculateDosage, factorEiqDosageProduct } from '@ucropit/eiq-calculator';
const surface = 500
const eiq = 3.834
const total = 135

const quantity: number = calculateDosage(total, surface)
const factorEiq: number = factorEiqDosageProduct(eiq, quantity)

```

### Calculation For Crop EIQ

Calculate the `Eiq` applied to a Crop` according to its total surface

```js
import { calculateEiq, calculateEiqWithList } from '@ucropit/eiq-calculator';
const surface = 500
const eiqList = [{
    eiq: 3.834,
    total: 135
},{
    eiq: 1.583,
    total: 75
},{
    eiq: 3.834,
    total: 55
},{
    eiq: 1.583,
    total: 25
}]
const eiq1: number = calculateEiq(surface, eiqList[0].eiq, eiqList[0].total)
const totalEiq: number = calculateEiqWithList(surface, eiqList, 2)
```
### Calculation By Activities, Achievement or Lot

Calculate the `EIQ` applied to an Activity, Achievement or Lot` according to its total surface

```js
import { calculateEiqWithList } from '@ucropit/eiq-calculator';
const surface = 200
const toFixedResult = 2
const activityData = [
    {
    total: 100,
    eiq: 3.83425,
    },
    {
    total: 50,
    eiq: 1.58267,
    },
];
const totalEiq: number = calculateEiqWithList(surface, activityData, toFixedResult)
```
### Get EIQ description range

GET the `EIQ` description range

```js
import { getEiqRange } from '@ucropit/eiq-calculator';
const eiq = 15.2
const minRange = 0
const maxRange = 50
const rangeDescription: string = getEiqRange(eiq, minRange, maxRange)
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
