const { test, expect } = require('@playwright/test');

test('fill contact form and submit', async ({ page }) => {
  // Load the initial URL
  // await page.goto('https://sodiqyekeen.com');

  // Navigate to the contact page
  await page.goto('https://sodiqyekeen.com/contact/');

  // Fill the contact form
  await page.fill('input[name="your-name"]', 'Adekanola Hannah'); 
  await page.fill('input[name="your-email"]', 'hannaholamipeju@gmail.com'); 
  await page.fill('textarea[name="your-message"]', 'thank you'); 

  // Submit the form
  await page.click('button[type="submit"]'); 

  // Assert that the form was submitted successfully
  await expect(page.locator('text=Thank you for your message')).toBeVisible();
});