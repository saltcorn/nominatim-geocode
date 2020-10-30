const Nominatim = require("./nominatim");

const geocoder = new Nominatim(
  {
    /* No options */
  },
  {
    format: "json",
    limit: 1,
  }
);

const geocode_lat = {
  run: async (query) => {
    const response = await geocoder.search(query);
    if (response.length > 0) return response[0].lat;
  },
  isAsync: true,
};
const geocode_long = {
  run: async (query) => {
    const response = await geocoder.search(query);
    if (response.length > 0) return response[0].lon;
  },
  isAsync: true,
};
module.exports = {
  sc_plugin_api_version: 1,
  functions: { geocode_lat, geocode_long },
};
