/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favoriting Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurant', ({ I }) => {
  I.seeElement('#content');
  I.see('Tidak ada restaurant untuk ditampilkan', '#resto-item__not__found');
});

Scenario('favoriting one restaurant', async ({ I }) => {
  I.seeElement('#content');
  I.see('Tidak ada restaurant untuk ditampilkan', '#resto-item__not__found');

  I.amOnPage('/');
  I.wait(3);

  I.waitForElement('#card-item');
  I.seeElement('.card-title a');

  const firstResto = locate('.card-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.wait(3);

  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.wait(3);

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.waitForElement('#card-item');
  I.seeElement('.card-title a');

  const firstFavoriteResto = locate('.card-title a').first();
  const favoritedRestoTitle = await I.grabTextFrom(firstFavoriteResto);

  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
});

Scenario('unfavoriting one restaurant', async ({ I }) => {
  I.wait(5);
  I.see('Tidak ada restaurant untuk ditampilkan', '#resto-item__not__found');
  I.amOnPage('/');
  I.wait(3);
  I.waitForElement('#card-item');
  I.seeElement('.card-title a');

  const firstResto = locate('.card-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);

  I.click(firstResto);
  I.wait(10);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.wait(3);
  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('#card-item a');

  const firstRestolike = locate('.card-title a').first();
  const favoritedRestoTitle = await I.grabTextFrom(firstRestolike);
  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);

  I.click(firstRestolike);
  I.wait(10);
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');
  I.wait(3);
  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('#resto-item__not__found');
  const onFav = await I.grabTextFrom('#resto-item__not__found');
  assert.strictEqual(onFav, 'Tidak ada restaurant untuk ditampilkan');
});
