const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete',
  params: {query: 'eiffel tower', lang: 'en_US', units: 'km'},
  headers: {
    'X-RapidAPI-Key': '31fd3d2fdamsh7474ffe829ea086p1bfd41jsn2f6e5f0cfeac',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data.data["Typeahead_autocomplete"].results);
}).catch(function (error) {
	console.error(error);
});