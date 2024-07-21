import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
    test('An event element is collapsed by default', async () => {
        const browser = await puppeteer.launch();
    
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');
    
        // if your event element has a different selector, use it instead of .event
        await page.waitForSelector('.event');
    
        // if your event's details have a different selector, use it instead of .event .details
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeNull();
        browser.close();
      });
    });
