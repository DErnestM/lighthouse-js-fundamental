const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

const judgeVegetable = function (vegetables, metric) {
  // Initialize variables to store the current highest value and submitter
  let highestValue = 0;
  let highestSubmitter = '';

  // Iterate over the vegetables array
  for (let i = 0; i < vegetables.length; i++) {
    // Get the current vegetable
    const vegetable = vegetables[i];

    // Check if the current vegetable has a higher value for the specified metric
    if (vegetable[metric] > highestValue) {
      // Update the highest value and submitter
      highestValue = vegetable[metric];
      highestSubmitter = vegetable.submitter;
    }
  }

  // Return the submitter with the highest ranking
  return highestSubmitter;
}

judgeVegetable(vegetables, metric)