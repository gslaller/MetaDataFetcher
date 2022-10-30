const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({
        executablePath: '/usr/bin/google-chrome',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    await page.goto('https://dev.to/cloudx/how-to-use-puppeteer-inside-a-docker-container-568c');
    let title = await page.title();
    console.log(`The Title of the website is: ${title}`);

    await browser.close();
})();