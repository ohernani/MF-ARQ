import { PetApi, StoreApi, UserApi } from './openapi/api';
import { Configuration } from './openapi/configuration';

export class OpenapiSingleton {
  private static _pets: Configuration;

  // / API Configurations

  private static get pets(): Configuration {
    if (!OpenapiSingleton._pets) {
      OpenapiSingleton._pets = new Configuration();
    }
    return OpenapiSingleton._pets;
  }

  // / API Instances

  public static get petsApi(): PetApi {
    return new PetApi(OpenapiSingleton.pets);
  }

  public static get storeApi(): StoreApi {
    return new StoreApi(OpenapiSingleton.pets);
  }

  public static get userApi(): UserApi {
    return new UserApi(OpenapiSingleton.pets);
  }
}
