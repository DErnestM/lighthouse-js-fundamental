/*
Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

Example

scores =[12, 24, 10, 24]

Scores are in the same order as the games played. She tabulates her results as follows:

                                     Count
    Game  Score  Minimum  Maximum   Min Max
     0      12     12       12       0   0
     1      24     12       24       0   1
     2      10     10       24       1   1
     3      24     10       24       1   1

     Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

Function Description

Complete the breaking Records function in the editor below.

breakingRecords has the following parameter(s):

int scores[n]: points scored per game

Returns

int[2]: An array with the numbers of times she broke her records. Index 0 is for breaking most points records, and index 1  is for breaking least points records.

Input Format

The first line contains an integer n, the number of games.
The second line contains n space-separated integers describing the respective values of score0, score1, ... scoren-1 .

Constraints
1 <=n <=1000
0 <= scores[i]<= 1000000000

*/

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
  // Initialize counters for breaking most and least points records
  let mostPoints = 0;
  let leastPoints = 0;
  // Initialize the minimum and maximum scores seen so far
  let minScore = scores[0];
  let maxScore = scores[0];
  // Iterate through the scores
  for (let i = 1; i < scores.length; i++) {
    const score = scores[i];
    // Check if the score is a new maximum
    if (score > maxScore) {
      maxScore = score;
      mostPoints++;
    }
    // Check if the score is a new minimum
    if (score < minScore) {
      minScore = score;
      leastPoints++;
    }
  }
  // Return the number of times the records were broken
  return [mostPoints, leastPoints];
}

console.log(breakingRecords([12,24,10,24]))
console.log(breakingRecords([12,24,10,24,20,25,31,12,12,12,10]))