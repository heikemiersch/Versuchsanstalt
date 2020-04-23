function evaluateLearnerActivity(activityArray) {
  let activitySummary = [];
  let example = [
    1,
    0,
    1,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    0,
    1,
    0,
  ];
  let numCompletedLessons = 0;
  let tempArray = [];
  let streak = 0;
  let longestStreak = 0;
  let ones = 0;
  let learnerStatus = "";

  // loop through input array and increase numCompletedLessons for every 1 that occurs in the array
  for (let i = 0; i < example.length; i++) {
    if (example[i] == 1) {
      numCompletedLessons++;
    }
  }
  console.log(numCompletedLessons);

  // loop through example and compare current number with the one before
  // if match, increment streak, if not, start from 1
  // declare longestStreak variable and assign streak

  for (let i = 0; i < example.length; i++) {
    if (tempArray != "" && tempArray == example[i]) {
      streak++;
    } else {
      streak = 1;
    }
    tempArray = example[i];
    if (streak > longestStreak) {
      longestStreak = streak;
    }
  }
  console.log(longestStreak);

  // find out the learner's stats

  for (i = 0; i < example.length; i++) {
    if (example[i] === 1) {
      ones++;
    }
  }

  if (ones <= 2) {
    learnerStatus = "Slow starter";
  } else if (ones == 3 || ones == 4) {
    learnerStatus = "Getting there";
  } else if (ones > 4) {
    learnerStatus = "Super user";
  }

  // push all three result into activitySummary and return it

  activitySummary.push(longestStreak, ones, learnerStatus);

  return activitySummary;
}

// do not remove or change name
module.exports = evaluateLearnerActivity;
