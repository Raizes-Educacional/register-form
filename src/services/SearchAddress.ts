import axios from "axios";

interface Address {
  postalCode: string;
  street: string;
  neighborhood: string;
  city: string;
};

export async function searchAddress(postalCode: string): Promise<Address | null> {
  if (postalCode.length < 8) {
    return null; 
  }

  try {
    const response = await axios.get(`https://viacep.com.br/ws/${postalCode}/json/`);
    if (response.status === 200) {
      const addressData = {
        postalCode: response.data.cep, 
        street: response.data.logradouro,
        neighborhood: response.data.bairro,
        city: response.data.localidade,
      };
      return addressData as Address;
    } else {
      throw new Error(`Error fetching address data: ${response.statusText}`);
    }
  } catch (err) {
    console.error('Error:', err);
    return null;
  }
};

export async function handleGetAddressData(getAddress: (address: Address | null) => void) {
  const postalCode = '';
  const addressData = await searchAddress(postalCode);

  if (addressData) {
    getAddress(addressData); 
  } else {
    getAddress(null);
  }
};
