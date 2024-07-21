import { loadFeature, defineFeature } from 'jest-cucumber';
const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the user has not expanded any event', () => {

        });

        when('the user views the event list', () => {

        });

        then('all event details should be hidden', () => {

        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('the user is viewing the event list', () => {

        });

        when('the user clicks on an event', () => {

        });

        then('the details of that event should be displayed', () => {

        });
    });

    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('the user has expanded an event to see its details', () => {

        });

        when(/^the user clicks on the "(.*)" button$/, (arg0) => {

        });

        then('the event details should be hidden', () => {

        });
    });

});