import axios from 'axios';
import stormGlassNormalized3HoursFixture from '../../../test/fixtures/stormglass_normalized_response_3_hours.json';
import stormGlassWeather3HoursFixture from '../../../test/fixtures/stormglass_weather_3_hours.json';
import { StormGlass } from "../stormGlass";

jest.mock('axios');

describe('StormGlass client', () => {
    it('should return the nromalized forecast from the StormGlass API', async () => {
        const lat = 231;
        const lng = 2321;

        axios.get = jest.fn().mockResolvedValueOnce({ data: stormGlassWeather3HoursFixture });

        const stormGlass = new StormGlass(axios);
        const response = await stormGlass.fetchPoints(lat, lng);
        expect(response).toEqual(stormGlassNormalized3HoursFixture);
    }) 
})