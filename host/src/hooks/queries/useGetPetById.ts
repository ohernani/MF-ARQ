import { useQuery } from '@tanstack/react-query';
import { OpenapiSingleton, Pet, RequiredError } from 'my-lib';

export function useGetPetById(petId: number) {
  const getPetById = async () => {
    try {
      const response = await OpenapiSingleton.petsApi.getPetById(petId);
      return response.data;
    } catch (e) {
      const error = e as RequiredError;
      throw error;
    }
  };
  return useQuery<Pet, RequiredError>({
    queryKey: ['getPetById', petId],
    queryFn: getPetById,
  });
}
