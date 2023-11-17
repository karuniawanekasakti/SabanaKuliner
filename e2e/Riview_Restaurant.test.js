/* eslint-disable no-undef */
const assert = require('assert');

Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('reviewing one restaurant', async ({ I }) => {
  I.waitForElement('#card-item');
  I.seeElement('.card-title a');

  const firstResto = locate('.card-title a').first();
  I.click(firstResto);
  I.wait(3);

  pause();
  I.seeElement('.form-review');
  I.fillField('#name', 'E2E Testing');
  I.fillField('#review', 'E2E Testing');

  I.wait(5);
  I.click('.review-form-submit');
  I.wait(10);
  const alertMessage = await I.grabPopupText();

  I.acceptPopup();

  // Assert the success alert message
  assert.strictEqual(alertMessage, 'Review berhasil ditambahkan');
});
