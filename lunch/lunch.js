/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work.
 * Otherwise, we want to pick something up and eat it in the lab when
 * we've got less than 20 minutes or to try a place nearby if we've
 * got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're in a bootcamp and that we
 * should reconsider how much time we actually have to spare.
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */

const whatToDoForLunch = function(hungry, availableTime) {
  
  /*
 * This is some test runner code that's simply calling our whatToDoForLunch function
 * defined above to verify we're making the right decisions. Do not modify it!
 */
  if (availableTime < 20) {
    console.log("I'm hungry and I have " + availableTime + " minutes for lunch.");
    console.log("I don't know what to do!");

    console.log("Pick something up and eat in back in the Lab or in the kitchen, where you can get to know your fellow classmates");
    console.log("---");
  } else if (availableTime >= 20 && availableTime < 30) {
    console.log("I'm hungry and I have " + availableTime + " minutes for lunch.");
    console.log("I don't know what to do!");
    console.log("You deserve a break and could try a place in Gastown");
    console.log("---");
  } else if (availableTime > 30) {
    console.log("I'm hungry and I have " + availableTime + " minutes for lunch.");
    console.log("I don't know what to do!");
    console.log("This is a bootcamp after all and you should probably reconsider");
    console.log("---");
  } else if (hungry === false) {
    console.log("I'm not hungry");
    console.log("I don't know what to do!");
    console.log('Get back to work');
    console.log("---");
  }
};
// --------- A test with values ---------- ///

whatToDoForLunch(true, 20);
whatToDoForLunch(true, 50);
whatToDoForLunch(false, 30);
whatToDoForLunch(true, 15);

