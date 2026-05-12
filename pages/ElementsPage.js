/**
 * ToolsQA Page
 * Handles different functionalities
 */
import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { testData } from '../fixtures/testData';

export class ElementsPage extends BasePage {
  // Text box Page Selectors
  get fullName() {
    return '#userName';
  }

  get checkBox(){
    return 'a[href="/checkbox"]';
  }

  get userEmail() {
    return '#userEmail';
  }

  get currentAddress() {
    return '#currentAddress';
  }

  get permanentAddress() {
    return '#permanentAddress';
  }

  get submitButton() {
    return '#submit';
  }
  
  get header() {
    return '.text-center';
  }

  get headerLocator() {
  return this.page.locator('.text-center');
}

  get outputName() {
    return '#output';
  }

  // Checkbox Page Selectors
  get homeCheckbox() {
    return 'span[role="checkbox"]';
  }

  get resultsInCheckBox() {
    return this.page.locator('#result');
  }

get yesRadioButton() {
  return this.page.locator('#yesRadio');
}

get impressiveRadioButton() {
  return this.page.locator('#impressiveRadio');
}

get impressiveRadioButton() {
  return this.page.locator('#impressiveRadio');
}

get registrationForm_firstName() {
  return '#firstName';
}

get registrationForm_lastName() {
  return '#lastName';
}

get registrationForm_email() {
  return '#userEmail';
}

get registrationForm_age() {
  return '#age';
}

get registrationForm_salary() {
  return '#salary';
}

get registrationForm_department() {
  return '#department';
}

get registrationForm_submitButton() {
  return '#submit';
} 

get webTableAddNewRecordButton(){
  return this.page.locator('#addNewRecordButton');
}

get tableInformation(){
  return this.page.locator('//table');
}
get testSuccessMessageForRadioButton() {
  return this.page.locator('.text-success');
} 

get testSuccessMessageForDoubleClick() {
  return this.page.locator('#doubleClickMessage');
}

get testSuccessMessageForRightClick() {
  return this.page.locator('#rightClickMessage');
}

get testSuccessMessageForNormalClick() {
  return this.page.locator('#dynamicClickMessage');
}

get regularButton(){
  return '//button[starts-with(text(),"Click Me")]';
}

get doubleClickButton(){
  return '#doubleClickBtn';
}

get rightClickButton(){
  return '#rightClickBtn';
}

get registrationForm_header(){
  return this.page.locator('#registration-form-modal');
}

  async navigateToTextBox() {
    await this.page.goto('/text-box');
    expect(await this.getCurrentUrl()).toContain('/text-box');
  }

  async navigateToCheckBox() {
    await this.page.goto('/checkbox');
    expect(await this.getCurrentUrl()).toContain('/checkbox');
  }

   async navigateToRadioButton() {
    await this.page.goto('/radio-button');
    expect(await this.getCurrentUrl()).toContain('/radio-button');
  }

  async navigateToWebTable() {
    await this.page.goto('/webtables');
    expect(await this.getCurrentUrl()).toContain('/webtables');
  }

  async navigateToButtons() {
    await this.page.goto('/buttons');
    expect(await this.getCurrentUrl()).toContain('/buttons');
  }

  async navigateToLinks() {
    await this.page.goto('/links');
    expect(await this.getCurrentUrl()).toContain('/links');
  }
  /**
   * Get number of items in cart
   */
  async fillTextForm() {
    await this.fillInput(this.fullName, testData.userInfo.firstName + ' ' + testData.userInfo.lastName);
    await this.fillInput(this.userEmail, testData.userInfo.email);
    await this.fillInput(this.currentAddress, testData.userInfo.currentAddress);
    await this.fillInput(this.permanentAddress, testData.userInfo.permanentAddress);
    await this.clickElement(this.submitButton);
  }

  async validateOutput() {
    const nameOutput = await this.getElementText(this.outputName);
     nameOutput.includes(testData.userInfo.firstName + ' ' + testData.userInfo.lastName);
     nameOutput.includes(testData.userInfo.email);
     nameOutput.includes(testData.userInfo.currentAddress);
     nameOutput.includes(testData.userInfo.permanentAddress);

     return nameOutput;
  }

  //Checkbox Page Methods
  async checkCheckbox() {
    if(!(await this.isCheckboxChecked())) {
      await this.clickElement(this.homeCheckbox);
    }
  }

  async isCheckboxChecked() {
    const checkbox = await this.page.locator(this.homeCheckbox);
    return await checkbox.getAttribute('aria-checked') === 'true';
  }

  // Radio Button Methods
async clickAndVerifyYesRadioButton() {
  await this.yesRadioButton.click();
  return await this.testSuccessMessageForRadioButton.textContent();
}

async clickAndVerifyImpressiveRadioButton() {
  await this.impressiveRadioButton.click();
  return await this.testSuccessMessageForRadioButton.textContent();
}

async clickAddNewRecordButton() {
  await this.webTableAddNewRecordButton.click();
  await expect(this.registrationForm_header).toBeVisible();
}

// Registration Form Methods
async fillRegistrationForm() {
  await this.fillInput(this.registrationForm_firstName, testData.userInfo.firstName);
  await this.fillInput(this.registrationForm_lastName, testData.userInfo.lastName);
  await this.fillInput(this.registrationForm_email, testData.userInfo.email);
  await this.fillInput(this.registrationForm_age, testData.userInfo.age.toString());
  await this.fillInput(this.registrationForm_salary, testData.userInfo.salary.toString());
  await this.fillInput(this.registrationForm_department, testData.userInfo.department);
  await this.clickElement(this.registrationForm_submitButton); 
  await expect(this.tableInformation).toContainText(testData.userInfo.firstName);
}

async clickRegularButton(){
  await this.clickElement(this.regularButton);
}

async clickDoubleClickButton(){
  await this.doubleClickElement(this.doubleClickButton);
}

async clickRightClickButton(){
  await this.rightClickElement(this.rightClickButton);
}

async clickHomeLinkAndGetNewTabUrlInLinksPage(){
  const [newPage] = await Promise.all([
    this.page.context().waitForEvent('page'),
    this.page.click('a#simpleLink')
  ]);
  const newTabUrl = await newPage.url();
  return newTabUrl;
}

async clickAndVerifyDynamicLinkInLinksPage(){
  const [newTab] = await Promise.all([
    this.page.context().waitForEvent('page'),
    this.page.click('#dynamicLink')
  ]);
  const newTabUrl = newTab.url();
  return newTabUrl;
}
}
export function createElementsPage(page) {
  return new ElementsPage(page);
}
