import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stg.arabtherapy.com/ar');
  await page.getByTestId('header-login-btn').click();
  await page.getByTestId('login-email').click();
  await page.getByTestId('login-email').fill('mmnm@mailna.co');
  await page.getByTestId('login-password').click();
  await page.getByTestId('login-password').fill('1234');
  await page.getByTestId('login-submit').click();
  await page.getByTestId('close-rating').click();
  await page.getByTestId('previous-appointments-tab').click();
  await page.getByRole('button', { name: 'Rating 1 of 5 Rating 2 of 5' }).first().click();
  await page.getByTestId('rating-session-wrapper').click();
  await page.locator('.v-input--selection-controls__ripple').first().click();
  await page.locator('div:nth-child(4) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div:nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
  await page.locator('div:nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div > .v-input--selection-controls__input > .v-input--selection-controls__ripple').first().click();
  await page.locator('div:nth-child(6) > .v-input > .v-input__control > .v-input__slot > .v-input--radio-group__input > div:nth-child(2) > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
  await page.getByTestId('rating-session-comment').click();
  await page.getByTestId('rating-session-comment').fill('testvvvv vvvvvd');
  await page.getByTestId('rating-submit-btn').click();
});


/*await page.locator('#question-1-yes').click();
  await page.locator('#question-2-no').click();
  await page.locator('#question-3-yes').click();
  await page.locator('#question-4-no').click();*/