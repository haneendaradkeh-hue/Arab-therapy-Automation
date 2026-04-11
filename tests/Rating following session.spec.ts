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
  await page.getByRole('button', { name: 'Rating 1 of 5 Rating 2 of 5' }).nth(1).click();
  await page.getByTestId('rating-session-wrapper').click();
  //await page.locator('#question-six-option-5').click();
  await page.locator('.v-input--selection-controls__ripple').first().click();
  await page.locator('div:nth-child(5) > .v-input > .v-input__control > .v-input__slot > .v-input--selection-controls__input > .v-input--selection-controls__ripple').click();
  await page.getByTestId('improve-experience-comment').click();
  await page.getByTestId('improve-experience-comment').fill('test');
  await page.getByTestId('rating-submit-btn').click();
});