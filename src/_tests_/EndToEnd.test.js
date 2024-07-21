import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
    let browser;
    let page;
    beforeAll(async()=>{ 
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000/')
        // if your event element has a different selector, use it instead of .event
        await page.waitForSelector('.event');
    });
    
    afterAll(()=>{
        browser.close();
    });

    test('An event element is collapsed by default', async () => {
        // if your event's details have a different selector, use it instead of .event .details
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeNull();
      });
});

      test('User can expand an event to see its details', async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');
    
        await page.waitForSelector('.event');
        await page.click('.event .details-btn');
    
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeDefined();
        browser.close();
    });

      test('User can collapse an event to hide details', async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');

        // Expand the event first
        await page.click('.event .details-btn');

        // Then collapse it
        await page.click('.event .details-btn');

        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeNull();

        await browser.close();
    });
