// Business Logic:
function Location(name, landmarks, time, notes) {
  this.name = name;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes;
}

function LocationBook() {
  this.locations = {};
  this.currentId = 0;
}

LocationBook.prototype.addLocation = function(location) {
  location.id = this.assignId();
  this.locations[location.id] = location;
};

LocationBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

LocationBook.prototype.findLocation = function(id) {
  if (this.locations[id] !== undefined) {
    return this.location[id];
  }
  return false;
}

//User Interface Logic

// $(document).ready(function() {
//   $("#sanDiego").click(function() {
//     $("#diegoResults").show();
//   });
//   $("#sedona").click(function() {
//     $("#sedonaResults").show();
//   });
//   $("#francisco").click(function() {
//     $("#franciscoResults").show();
//   });
//   $("#joshua").click(function() {
//     $("#joshuaResults").show();
//   });
// });

let LocationBook1 = new LocationBook();

let location1 = new Location(
  "X",
  "Sedona",
  ["Church of holy cross", "antelope canyon"],
  "spring",
  "sunsets are beautiful!" )

let location2 = new Location(
  "X",
  "Sedona",
  ["Church of holy cross", "antelope canyon"],
  "spring",
  "sunsets are beautiful!" )

let location3 = new Location(
  "X",
  "Sedona",
  ["Church of holy cross", "antelope canyon"],
  "spring",
  "sunsets are beautiful!" )

let location4 = new Location(
  "X",
  "Sedona",
  ["Church of holy cross", "antelope canyon"],
  "spring",
  "sunsets are beautiful!" )

LocationBook1.addLocation(location1);
LocationBook1.addLocation(location2);
LocationBook1.addLocation(location3);
LocationBook1.addLocation(location4);

const name = "";


$(document).ready(function() {
  $("form#citySelector").submit(function(event) {
    event.preventDefault();
    $(".resultCard").hide();
    const userSelection = $("input:radio[name=flexRadioDefault]:checked").val().toString();
    if (userSelection === "sanDiego") {
      $("#diegoResults").show();
    } else if (userSelection === "sedona") {
      $("#sedonaResults").show();
    } else if (userSelection === "sanFrancisco") {
      $("#franciscoResults").show();
    } else if (userSelection === "joshua") {
      $("#joshuaResults").show();
    };

    const name = LocationBook1.findLocation(1).name;
    console.log("name = " + name);
    // const landmark =

    // const time =
    // const notes =

    // let newLocation = new Location (name, landmark, time, notes);

    // const name = $(".resultName").val();
    // const landmark = $(".landMarks").val();

    // const time = $(".timeOfYear").val();
    // const notes = $(".notes").val();

    // let newLocation = new Location (name, landmark, time, notes);

      
  });
});


// const flavor = $("input:radio[name=flavor]:checked").val();
/*

$(document).ready(function() {
  $("button#green").click(function() {
    $("body").addClass("green-background");
  });

four cards with the location title on top
event listener: when title card is clicked, corresponding results div shows
what we will need:
  - event listener
  - conditional statement, which shows one item depending on which item is clicked.




Constructors:
  * Each of us
    1. Ella
    2. Anna
  * Locations
  * Keys in Locations:
    - Landmarks - array
    - time of year - string
    - notes - string


UI Logic:


*/
