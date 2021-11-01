# _Places You've Been_

#### _Epicodus Practice: w4:14 Places You've Been_

#### By
* _**Ella Tanttu**_
* _**Anna Pittman**_

## Technologies Used

* _CSS3_
* _HTML5_
* _JAVAscript_

## Description

_View Prompt: https://www.learnhowtoprogram.com/intermediate-javascript/object-oriented-javascript/address-book-places-you-ve-been-to-do_

## View Deployment - GH-Pages
_https://ellajtanttu.github.io/places-oct/_

## Setup/Installation Requirements

* _Navigate to https://github.com/ellajtanttu/places-nov in your browser_
* _Clone this repository to your desktop_
* _Navigate to the top level of the directory_
* _Connect to your github repository_
* _open places-oct/index.html in your browser_
* _Open files in VS Code to edit_

## Known Bugs

_No known issues_

## License

_MIT Copyright (c) 2021 Ella Tanttu, Anna Pittman_
_https://opensource.org/licenses/MIT_

## Contact Information

* _Ella Tanttu ellajtanttu@gmail.com_
* _Anna Pittman annaepittman@gmail.com_

--------

# TDD

## Problem Analysis

### Prompt-----
Create a website where you can keep track of all the places you've been.
1. Each destination should be an object with multiple properties:
  * location
  * landmarks
  * time of year
  * notes
2. Display those properties when a user clicks on a place's name
- Complete the business logic for your place object
- (including specs, which should go in your README).
- If you complete the business logic, you may work on adding a user interface. (See the upcoming lessons for more on adding a UI.)

### Analysis-----
We'll need:
Constructors:
  <!-- * Each of us
    1. Ella
    2. Anna -->
  * Locations
    - Key Number - number
    - City Name - string
    - Landmarks - array
    - time of year - string
    - notes - string


## Specs
Describe: Location()

Test: "it will return test object with all test properties"
Code:
  let testLocation = new Location(
    "X",
    "Sedona",
    ["Church of holy cross", "antelope canyon"],
    "spring",
    "sunsets are beautiful!" )
Expected Results:
  Location
  { key: X,
    name: "Sedona",
    Landmarks: ["Church of holy cross", "antelope canyon"],
    time: "spring",
    notes: "sunsets are beautiful!" }

Test:
Code:

Expected Results: