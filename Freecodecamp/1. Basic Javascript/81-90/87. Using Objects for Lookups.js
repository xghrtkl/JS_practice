// Setup
function phoneticLookup(val) {
    var result = "";
  
    // Only change code below this line
    var lookup = {
      'foxtrot': 'Frank',
      'echo': 'Easy',
      'delta': 'Denver',
      'charlie': 'Chicago',
      'bravo': 'Boston',
      'alpha': 'Adams',
    }
    return lookup[val]
    // Only change code above this line
    return result;
  }
  
  // Change this value to test
  phoneticLookup("charlie");