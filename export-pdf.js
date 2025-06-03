const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///e:/html/resume.html', {waitUntil: 'networkidle0'});
  await page.pdf({path: 'e:/html/resume.pdf', format: 'A4', printBackground: true});
  await browser.close();
})();
