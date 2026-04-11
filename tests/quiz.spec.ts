import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stg.arabtherapy.com/ar');
  await page.getByRole('button', { name: 'اختبارات نفسية' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('div:nth-child(9) > .start-quiz-btn').click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: '1' }).click();
  await page1.getByRole('button', { name: '2' }).click();
  await page1.getByRole('button', { name: '3' }).click();
  await page1.getByRole('button', { name: '4' }).click();
  await page1.getByRole('button', { name: '3' }).click();
  await page1.getByRole('button', { name: '2' }).click();
  await page1.getByRole('button', { name: '3' }).click();
  await page1.getByRole('button', { name: '4' }).click();
  await page1.getByRole('button', { name: '3' }).click();
  await page1.getByRole('button', { name: 'إنهاء الاختبار' }).click();
  
});