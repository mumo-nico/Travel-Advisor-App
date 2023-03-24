import axios from "axios"


const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
export const getPlacesData = async (sw, ne) => {
    try {
        const { data: { data }} = await axios.get(URL, {
            params: {
                bl_latitude: sw.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
                tr_latitude: ne.lat,
              },
              headers: {
                'X-RapidAPI-Key': '31fd3d2fdamsh7474ffe829ea086p1bfd41jsn2f6e5f0cfeac',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
        })
        
        return data
    } catch(error) {
        console.log(error)
    }
}