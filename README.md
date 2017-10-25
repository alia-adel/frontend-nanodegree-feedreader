# Feed Reader Testing
## Introduction
* This is Udacity Frontend Nanodegree "Feed Reader" project using Jasmine testing suite.
* To execute the tests, you only need to open index.html

## Test Suites/Cases
* RSS Feeds
    * are defined
    * all has defined URL
    * all has defined name
* The menu
    * is hidden by default
    * visibility changes when clicked
* Initial Entries
    * loaded with at least one entry
* New Feed Selection
    * loads the first feed
    * loads the second feed
    * do not match previous selected feed

## Project Structure
* `.\css\`
* `.\fonts\`
* `.\jasmine\`
    * `..\spec\`
        * **feedreader.js** this is where the test suites are written
* `.\js\`
* `index.html`