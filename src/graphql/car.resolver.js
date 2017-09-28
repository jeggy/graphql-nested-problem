import CarService from '../CarService';

const service = new CarService();

export default {
  Query: {
    car: (_, args) => service.getCar(args),
    cars: (_, args) => service.getCars(args),

    store: (_, args) => service.getStore(args),
    stores: (_, args) => service.getStores(args),

    country: (_, args) => service.getCountry(args),
    countries: () => service.getCountries(),
  },
  Car: {
    store: ({ storeId }) => service.getStore({ id: storeId }),
    country: ({ countryId }) => service.getCountry({ id: countryId }),
  },
  Store: {
    countries: ({ id }) => service.getCountries({ id }),
    cars: ({ id, countryIds }) => service.getCars({ storeId: id,  }),
  },
  Country: {
    stores: ({ id }) => service.getStores({ countryId: id }),
  }
};
