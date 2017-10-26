/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function () {
    /**
     * A test suite just contains a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /**
         * Make sure that the allFeeds variable 
         * has been defined and that it is not empty.
         */
        it('are defined', function () {
            // Test that allFeeds is defined
            expect(allFeeds).toBeDefined();
            // Test that allFeeds' length is greater than Zero
            expect(allFeeds.length).toBeGreaterThan(0);
        });


        /**
         * A test that loops through each feed in the allFeeds object 
         * and ensures it has a URL defined and that the URL is not empty.
         */
        it('all has defined URL', function () {
            // Test that allFeeds is defined
            expect(allFeeds).toBeDefined();

            allFeeds.forEach((feed) => {
                // Test that url is defined & not empty on the feed entry
                expect(feed.url).toBeTruthy();
                expect(feed.url).toMatch(
                    "(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])");
            });
        });


        /**
         * A test that loops through each feed in the allFeeds object 
         * and ensures it has a name defined and that the name is not empty. 
         */
        it('all has defined name', function () {
            // Test that allFeeds is defined
            expect(allFeeds).toBeDefined();

            allFeeds.forEach((feed) => {
                // Test that name is defined & not empty on the feed entry
                expect(feed.name).toBeTruthy();
            });
        });
    });


    /**
     * "The menu" test suite
     * A test that ensures the menu element is hidden by default.
     */
    describe('The menu', function () {
        // Test that when the page opens the menu is hidden by default
        it('is hidden by default', function () {
            // Test that class 'menu-header' exists
            expect($('body').hasClass("menu-hidden")).toBe(true);
        });


        it('visibility changes when clicked', function () {
            // Trigger click on the menu icon to open it
            $('.menu-icon-link').click();
            expect($('body').hasClass("menu-hidden")).toBe(false);
            // Trigger click on the menu icon to close it
            $('.menu-icon-link').click();
            expect($('body').hasClass("menu-hidden")).toBe(true);
        });
    });


    /**
     * A new test suite named "Initial Entries"
     * A test that ensures when the loadFeed function is called and completes its work, 
     * there is at least a single .entry element within the .feed container.
     */
    describe('Initial Entries', function () {
        beforeEach(function (done) {
            // load the first feed
            loadFeed(0, done);
        });


        it('loaded with at least one entry', function (done) {
            // Test that '.feed' element has at least one '.entry' element
            expect($('.feed .entry')).toBeDefined();
            expect($('.feed .entry').length).toBeGreaterThan(0);

            done();
        });
    });


    /**
     * A new test suite named "New Feed Selection"
     * A test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     */
    describe('New Feed Selection', function () {
        let feedOneName, feedTwoName, feedOneEntries, feedTwoEntries;

        beforeEach(done => {
            // before each test load a different feed
            loadFeed(0, () => {
                feedOneName = $('.header-title').html();
                feedOneEntries = $('.feed').html();
                loadFeed(1, () => {
                    feedTwoName = $('.header-title').html();
                    feedTwoEntries = $('.feed').html();
                    done();
                });
            });
        });


        /**
         * Test that the values saved for the first feed & the second feed do not match
         */
        it('do not match previous loaded feed', function (done) {
            expect(feedOneName).toBeDefined();
            expect(feedTwoName).toBeDefined();
            expect(feedOneEntries).toBeDefined();
            expect(feedTwoEntries).toBeDefined();

            // Test that feed names do not match
            expect(feedTwoName).not.toEqual(feedOneName);

            // Test that feed entries do not match            
            expect(feedTwoEntries).not.toEqual(feedOneEntries);

            done();
        });
    });
}());
