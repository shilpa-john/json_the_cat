
const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, data) => {
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";


      assert.equal(expectedDesc, data.description);

      done();
    });
  });

  it('returns "Breed not found" as the desc if invalid/non-existent breedName', () => {
    fetchBreedDescription('Dog', (err, desc) => {

      assert.equal(err, null);

      const expectedDesc = "Breed not found";
      assert.equal(expectedDesc, desc);
      done();
    });
  });
});
