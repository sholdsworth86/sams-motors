//Required imports
import * as data from './cars.json';

//Map the imported JSON cars data in 'cars' array (this array will then be used as the data array for the app)
const carData = data.default;
const cars = carData.map((car) => car);
export { cars };