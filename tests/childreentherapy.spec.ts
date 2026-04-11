
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://stg.arabtherapy.com/ar');
  await page.getByTestId('header-questionnaire-btn').click();

  //=========== Child Therapy ===========
  await page.getByTestId('therapist-type-3').click();
  await page.getByTestId('child-gender-1').click();
  await page.getByTestId('child-age-input').click();
  await page.getByTestId('child-age-input').fill('14');
  await page.getByTestId('child-age-next-btn').click();
  await page.getByTestId('has-child-experienced-recent-major-life-changes-1').click();
  await page.getByTestId('has-child-learning-difficulties-2').click();
  await page.getByTestId('has-child-difficulty-making-friends-1').click();
  await page.getByTestId('is-child-aggressive-and-frequent-tantrums-1').click();
  await page.getByTestId('is-child-depressed-or-sad-or-has-isolation-2').click();
  await page.getByTestId('has-child-difficulty-sleeping-or-nightmares-1').click();
  await page.getByTestId('preferred-therapist-gender-1').click();
  await page.getByTestId('country-id-autocomplete').click();
  await page.getByTestId('country-option-jordan').click();
  await page.getByTestId('country-id-next-btn').click();
  await page.getByTestId('how-did-you-hear-about-us-1').click();
  await page.getByTestId('patient-preferred-contact-method-1').click();
  await page.getByTestId('register-first-name').click();
  await page.getByTestId('register-first-name').fill('haneen');
  await page.getByTestId('register-last-name').click();
  await page.getByTestId('register-last-name').fill('fgfggfgd');
  await page.getByTestId('register-email').click();
  await page.getByTestId('register-email').fill('haneenautomatiom1400@w.dfg');
  await page.getByTestId('register-password').click();
  await page.getByTestId('register-password').fill('1234@Haneen');
  await page.locator('.v-input--selection-controls__ripple').click(); // Agree to terms
  await page.getByTestId('register-submit').click(); 
  await page.waitForTimeout(5000);
  await page.getByTestId('subscription-plan-start-btn-2').click();
  await page.waitForTimeout(5000);
  await page.getByTestId('payment-option-stripe').click();


   // Card Number 
  const cardNumberFrame = page.frameLocator(
  'iframe[title="Secure card number input frame"]:visible'
  );

  await cardNumberFrame
  .getByRole('textbox')
  .fill('5555 5555 5555 4444');

  // Expiry Date
  const expiryFrame = page.frameLocator(
  'iframe[title="Secure expiration date input frame"]:visible'
  );

  await expiryFrame
  .getByRole('textbox')
  .fill('12 / 30');

  // CVC
  const cvcFrame = page.frameLocator(
  'iframe[title="Secure CVC input frame"]:visible'
  );

  await cvcFrame
  .getByRole('textbox')
  .fill('333');

   await page.getByRole('button', { name: 'اشترك الآن' }).first().click();
   

//phone number screen

 await page.getByRole('textbox', { name: '(+962)' }).click();


await page.getByRole('textbox', { name: '(+962)'
}).fill("791245007");


await page.getByRole('button', { name: 'متابعة' }).click();


await page.waitForTimeout(1000)




  
});