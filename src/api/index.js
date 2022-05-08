import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
    try {
        //  request
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
          params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': "a1b3385857mshd404a9e6ab316f4p1d9ad7jsn92985a2aec4d",
        },
        });

        return data;
    } catch (error) {

        console.log(error)
        
    }
}

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
    const {data} = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
      params: { lat: lat,  lon: lng},
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': "a1b3385857mshd404a9e6ab316f4p1d9ad7jsn92985a2aec4d",
        
      },
    });
    return data
  }
  } catch (error) {
    console.log(error)
  }
};