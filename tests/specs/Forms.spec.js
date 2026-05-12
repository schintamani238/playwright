import {test, expect} from '../fixtures';

test.describe('Form Tests',()=>{

    test.only('Should fill and averify the practice form', async ({ practiceFormPage }) => {
        await practiceFormPage.navigateToPracticeForm();
        await practiceFormPage.fillPracticeForm();
        const nameOutput = await practiceFormPage.outputName.textContent();
        expect(nameOutput).toContain('John Doe');
    });

});