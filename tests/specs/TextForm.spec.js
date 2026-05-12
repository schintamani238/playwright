import { test, expect } from '../fixtures';
import { testData } from '../../fixtures/testData';
import { waitForDebugger } from 'node:inspector';

test.describe('Text Form Tests', () => {

  test('Should fill out text form and verify output', async ({ elementsPage }) => {
    await elementsPage.navigateToTextBox();
    await elementsPage.fillTextForm();
    const output = await elementsPage.validateOutput();

    await expect(elementsPage.headerLocator).toHaveText('Text Box');
    expect(output).toContain('John Doe');
    expect(output).toContain('john.doe@example.com');
    expect(output).toContain('123 Main St');
    expect(output).toContain('456 Oak Ave');
  });

  test('Should check the checkbox if unchecked', async ({ elementsPage }) => {
    await elementsPage.navigateToRadioButton();
    const message1 =await elementsPage.clickAndVerifyYesRadioButton();
    await expect(elementsPage.testSuccessMessageForRadioButton).toContainText('Yes');
  });

  test('Should verify impressive radio button selection', async ({ elementsPage }) => {
    await elementsPage.navigateToRadioButton();
    const message2 =await elementsPage.clickAndVerifyImpressiveRadioButton();
    await expect(elementsPage.testSuccessMessageForRadioButton).toContainText('Impressive');
  });

  test('Should verify web tables information', async ({ elementsPage }) => {
    await elementsPage.navigateToWebTable();
    await elementsPage.clickAddNewRecordButton();
    await elementsPage.fillRegistrationForm();
    await expect(elementsPage.tableInformation).toContainText(testData.userInfo.firstName);
  });

  test('Should verify buttons in Buttons page', async({ elementsPage }) => {
    await elementsPage.navigateToButtons();
    await elementsPage.clickRegularButton();
    await expect(elementsPage.testSuccessMessageForNormalClick).toContainText('You have done a dynamic click');
    await elementsPage.clickDoubleClickButton();
    await expect(elementsPage.testSuccessMessageForDoubleClick).toContainText('You have done a double click');
    await elementsPage.clickRightClickButton();
    await expect(elementsPage.testSuccessMessageForRightClick).toContainText('You have done a right click');
  });

  test('Should verify links in Links page', async ({ elementsPage }) => {
    await elementsPage.navigateToLinks();
    const homeLinkUrl = await elementsPage.clickHomeLinkAndGetNewTabUrlInLinksPage();
    await expect(homeLinkUrl).toContain('https://demoqa.com');

    const dynamicUrl = await elementsPage.clickAndVerifyDynamicLinkInLinksPage();
    await expect(dynamicUrl).toContain('https://demoqa.com');
  });

  
});
