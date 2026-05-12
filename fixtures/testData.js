/**
 * Test Data Fixtures
 * Contains test data constants used across test suites
 */

import { userInfo } from "node:os";

export const testData = {
  users: {
    standardUser: {
      username: '6504401273',
      password: 'secret_sauce',
      userType: 'standard'
    },
    lockedOutUser: {
      username: 'locked_out_user',
      password: 'secret_sauce',
      userType: 'locked'
    },
    problemUser: {
      username: 'problem_user',
      password: 'secret_sauce',
      userType: 'problem'
    },
    performanceGlitchUser: {
      username: 'performance_glitch_user',
      password: 'secret_sauce',
      userType: 'performance'
    }
  },

  userInfo: {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    age: 30,
    salary: 50000,
    department: 'Engineering',
    currentAddress: '123 Main St',
    permanentAddress: '456 Oak Ave',
    mobile: '1234567890'
  },

  urls: {
    baseUrl: 'https://demoqa.com/books',
  },

  expectedMessages: {
    loginSuccess: 'Swag Labs',
    orderComplete: 'Thank you for your order!',
    lockedUserError: 'Epic sadface: Sorry, this user has been locked out.'
  }
};
