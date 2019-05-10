function coreFunction(caller) {
  console.log();
  console.log("Hi, I am Core, did you call me from " + caller + "?");
  console.log();
}

module.exports = coreFunction;
