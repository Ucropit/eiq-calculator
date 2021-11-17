# Eiq Calculator
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
import { CalculationForCropEiq } from '@ucropit/eiq-calculator';
```

### Calculation For Crop Eiq

Calculate the `Eiq` applied to a Crop` according to its total surface

```js
import { CalculationForCropEiq } from '@ucropit/eiq-calculator';
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
const totalEiq: number = CalculationForCropEiq(surface, supplies)
```
### Calculation By Activities, Achievement or Lot

Calculate the `Eiq` applied to an Activity, Achievement or Lot` according to its total surface

```js
import { CalculateEiqInList } from '@ucropit/eiq-calculator';
const toFixedResult = 2
const activityData = [
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
const totalEiq: number = CalculateEiqInList(activityData, toFixedResult)
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
