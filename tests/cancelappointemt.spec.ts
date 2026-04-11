
import { test, expect } from '@playwright/test';


test('test', async ({ page }) => {
  await page.goto('https://stg.arabtherapy.com/ar');
  await page.getByTestId('header-login-btn').click();
  await page.getByTestId('login-email').click();
  await page.getByTestId('login-email').fill('cancelappointemt@gg.com');
  await page.getByTestId('login-password').press('CapsLock');
  await page.getByTestId('login-password').fill('1234@Haneen');
  await page.getByTestId('login-submit').click();
  // ===== Open booking =====
await page.getByTestId('book-appointment-btn').first().click();

const confirmButton = page.locator('button.v-btn.v-btn--block[style*="background-color: rgb(69, 127, 127)"]');

let bookingSuccess = false;

// ===== Booking محاولة =====
for (let attempt = 0; attempt < 3; attempt++) {
  try {
    const dayPicker = page.locator('.v-date-picker-table');
    await dayPicker.locator('button:not([disabled])').first().click();

    const times = page.locator('.times .time');
    const count = await times.count();

    if (count === 0) throw new Error('No available time slots');

    const index = Math.min(attempt, count - 1);
    await times.nth(index).click();

    await page.getByRole('button', { name: 'فيديو' }).click();

    await confirmButton.click();

    // ===== Verify booking success =====
    await page.waitForSelector('text=تم حجز الموعد بنجاح', { timeout: 7000 });

    bookingSuccess = true;

    // ===== Cancel appointemt  (لا ثم نعم) =====
    const cancelBtn = page.locator('[data-testid^="cancel-session"]').first();

    await cancelBtn.click();
    await page.getByRole('button', { name: 'لا' }).click();

    // تأكد إنو لسه موجود بعد "لا"
    await cancelBtn.waitFor({ state: 'visible' });

    await cancelBtn.click();
    await page.getByRole('button', { name: 'نعم' }).click();

    // (اختياري) تأكيد الإلغاء
    await page.waitForSelector('text=تم إلغاء الموعد', { timeout: 7000 }).catch(() => {});

    break;

  } catch (e) {
    const unavailable = await page
      .locator('text=لم يعد الموعد متوفرًا، يرجى اختيار موعد آخر')
      .isVisible()
      .catch(() => false);

    if (unavailable) {
      await page.getByRole('button', { name: 'Ok' }).click();
    } else {
      throw e;
    }
  }
}

// ===== Final validation =====
if (!bookingSuccess) {
  throw new Error('Failed to book an appointment after multiple attempts');}

});