
const data = {
  cars: [
    { id: 1, model: 'Some car model', storeId: 1, countryId: 1 },
    { id: 2, model: 'New model', storeId: 1, countryId: 2 },
    { id: 3, model: 'Another model', storeId: 1, countryId: 1 },
    { id: 4, model: 'Another model Danish version', storeId: 4, countryId: 4 },
  ],
  stores: [
    { id: 1, name: 'Store #1', countryIds: [1, 2] },
    { id: 2, name: 'Store #2', countryIds: [1] },
    { id: 3, name: 'Store #3', countryIds: [1, 2, 3] },
    { id: 4, name: 'Store #4', countryIds: [1, 2, 4] },
  ],
  countries: [
    { id: 1, name: 'Sweden' },
    { id: 2, name: 'Faroe Islands' },
    { id: 3, name: 'Iceland' },
    { id: 4, name: 'Denmark' },
  ],
};

export default class CarService {
  getCar({ id }) {
    return data.cars.find(c => c.id == id);
  }

  getCars({ storeId, countryId }) {
    let tmp = data.cars;
    if (storeId) tmp = tmp.filter(c => c.storeId == storeId);
    if (countryId) tmp = tmp.filter(c => c.countryId == countryId);
    return tmp;
  }

  getStore({ id }) {
    return data.stores.find(s => s.id == id);
  }

  getStores({ countryId }) {
    let tmp = data.stores;
    if (countryId) tmp = tmp.filter(s => s.countryIds.indexOf(countryId) > -1);
    return tmp;
  }

  getCountry({ id }) {
    return data.countries.find(c => c.id == id);
  }

  getCountries() {
    return data.countries;
  }
}