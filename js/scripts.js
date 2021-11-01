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

// Constructors:
//   * Each of us
//     1. Ella
//     2. Anna
//   * Locations
//   * Keys in Locations:
//     - Landmarks - array
//     - time of year - string
//     - notes - string