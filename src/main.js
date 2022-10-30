const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

const URL = "https://beej.us/guide/bgnet/html/#legal";

(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/google-chrome',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: true
    });
    const page = await browser.newPage();

    await page.goto(URL);
    await page.waitForTimeout(2000);

    await page.screenshot({ path: './dump/one.png' })


    let title = await page.title();
    console.log(`The Title of the website is: ${title}`);

    await browser.close();
})();