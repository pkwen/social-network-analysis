var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

function displayInfo(data) {
var group = [];
  for(keys in data) {
    var x = data[keys];
    var person = {'name' : x['name']};
    // console.log(x.name);
    var following = [];
    x['follows'].forEach(function(y) {
      following.push(data[y]['name']);
    });
    person['following'] = following;
    var followedBy = findFollowers(data, keys);
    person['followers'] = followedBy;
    group.push(person);
    // console.log(keys);
  }
  console.log(group);
}

//find those from data who follows person
function findFollowers(data, person) {
  var followers = [];
  for(keys in data) {
    var x = data[keys];

      if(x['follows'].includes(person)) {
        followers.push(x['name']);
      }

  }
  return followers;
}

displayInfo(data);
































