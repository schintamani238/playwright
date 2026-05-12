import { testData, expect } from '../fixtures/testData';
import { BasePage } from './BasePage';
import { createBooksPage } from '../pages/BooksPage';

export class PracticeFormPage extends BasePage {

    get firstNameInput(){
        return '#firstName';
    }

    get lastNameInput(){
        return '#lastName';
    }

    get emailInput(){
        return '#userEmail';
    }

    get genderRadioButton(){
        return '#gender-radio-2';
    }

    get dobInput(){
        return '#dateOfBirthInput';
    }

    get subjectsInput(){
        return '.subjects-auto-complete__control';
    }
    get hobbiesCheckbox(){
        return '#hobbies-checkbox-1';
    }

    get currentAddressInput(){
        return '#currentAddress';
    }

    get stateDropdown(){
        return '#react-select-3-placeholder';
    }

    get cityDropdown(){
        return '#react-select-4-placeholder';
    }   
    get submitButton(){
        return '#submit';
    }

    get outputName(){
        return '#name';
    }

    get practiceFormLink(){
        return 'a[href="/automation-practice-form"]';
    }

    async navigateToPracticeForm(){
         await createBooksPage(this.page).navigateToBooks();
         await createBooksPage(this.page).expandGroup(2);
         await this.clickElement(this.practiceFormLink);
         expect(await this.getCurrentUrl()).toContain('/automation-practice-form');
    }

    async fillPracticeForm(){
        await this.fillInput(this.firstNameInput, testData.userInfo.firstName);
        await this.fillInput(this.lastNameInput, testData.userInfo.lastName);
        await this.fillInput(this.emailInput, testData.userInfo.email);
        await this.clickElement(this.genderRadioButton);
        await this.fillInput(this.mobileInput, testData.userInfo.mobile);
        await this.fillInput(this.dobInput, '01 Jan 1990');  
        await this.fillInput(this.subjectsInput, 'Maths');
        await this.checkElement(this.hobbiesCheckbox);
        await this.fillInput(this.currentAddressInput, testData.userInfo.currentAddress);
        await this.selectElement(this.stateDropdown, 'NCR');
        await this.selectElement(this.cityDropdown, 'Delhi');
        await this.clickElement(this.submitButton);  
    }
}

let practiceFormPage;
export function createPracticeFormPage(page) {
  practiceFormPage = new PracticeFormPage(page);
  return practiceFormPage;
}