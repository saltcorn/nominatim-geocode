# nominatim-geocode

Geocoding with Nominatim

This plug-in supplies functions for geocoding (converting addresses to latitude and longitude coordinates) for use in Saltcorn calculated functions.

Two functions are supplied: `geocode_lat` and `geocode_long`. These two functions are identical in their arguments and operation and differ only in that the former returns latitude and the latter returns longitude. Both functions:

- are asynchronous and therefore must be used in a stored calculated field
- Expect as argument an object with valid query parameters to the API

This can be as vague as `{ q: address }` or can contain more structure:
`{country: 'de', postalcode:'10115', street: 'Somestreet XX'}`. See the documentation for the underlying node library [nominatim-geocoder](https://www.npmjs.com/package/nominatim-geocoder) and examples below,

These functions use the underlying Nominatim API, which is rate limited. If you are adding the stored field to a table with many existing rows, you may see that the fields will be filled out slowly (at a rate of one per second).

Although to calculate a geographical location two function invocations are required, in practice only one API call is made because calls with identical arguments are cached.

To use this library, you must create two stored calculated variables of type Float, and call the `geocode_lat` and `geocode_long` functions in the formula.

Example: In this example we are converting UK postcodes to latitude and longitude so they can be displayed on a map. The table of interest has a field of type String named `postcode` containing the full UK postcode, a 6 to 7 digit string.

We had two stored calculated fields labelled `lat` and `long`. We give them these formulae:

- `lat` formula: `geocode_lat({country: 'uk', postalcode: postcode })`
- `long` formula: `geocode_long({country: 'uk', postalcode: postcode })`
