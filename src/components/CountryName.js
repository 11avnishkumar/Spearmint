export default async function CountryName(lat, lng) {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
      if (!response.ok) {
        throw new Error('Failed to fetch country name');
      }
      const data = await response.json();
      const countryName = data.address.country;
      return countryName;
    } catch (error) {
      console.error(error);
      return '';
    }
  }