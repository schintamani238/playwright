---
name: playwright-tests
description: 'Run Playwright test cases with flexible options. Use for executing tests, debugging with headed mode, viewing reports, or running specific test files.'
argument-hint: '[all|headed|debug|report] [--file <name>] [--pattern <name>] [--browser <name>]'
---

# Playwright Tests

Execute Playwright test cases with various configurations and reporting options.

## When to Use

- Run the full test suite to verify functionality
- Debug specific tests in headed mode with browser visible
- Run individual test files or patterns
- Generate and view test reports
- Test against specific browsers (chromium, firefox, webkit)

## Procedures

### Run All Tests
```bash
npm test
```
Runs all test cases in the `tests` directory with the default configuration.

### Run Tests in Headed Mode
```bash
npm test -- --headed
```
Runs all tests with a visible browser window, useful for debugging and visualization.

### Run Tests in Debug Mode
```bash
npm test -- --debug
```
Launches Playwright Inspector for interactive step-by-step debugging.

### Run Specific Test File
```bash
npm test -- tests/example.spec.js
```
Runs tests from a specific file. Available test files:
- `example.spec.js` - Example test suite
- `sauceDemo.spec.js` - Sauce Labs demo application tests

### Run Tests Matching Pattern
```bash
npm test -- --grep "login"
```
Runs only tests whose names match the provided pattern.

### Run Against Specific Browser
```bash
npm test -- --project=chromium
```
Available browsers: `chromium`, `firefox`, `webkit`

### View Test Report
```bash
npx playwright show-report
```
Opens the HTML test report from the last test run.

## Test Configuration

Tests are configured in `playwright.config.js` with these defaults:
- **Test Directory**: `./tests`
- **Sequential Execution**: Tests run one after another
- **Headed Mode**: Browser window is visible by default
- **Reporter**: HTML with test results stored in `playwright-report/`
- **Trace**: Collected on first retry for debugging

## Output Locations

- Test results: `test-results/` directory
- HTML reports: `playwright-report/` directory
- Trace files: Stored within test-results for failed tests

## Quick Reference

| Task | Command |
|------|---------|
| All tests | `npm test` |
| Headed mode | `npm test -- --headed` |
| Debug mode | `npm test -- --debug` |
| Specific file | `npm test -- tests/sauceDemo.spec.js` |
| Pattern match | `npm test -- --grep "pattern"` |
| Chromium only | `npm test -- --project=chromium` |
| View report | `npx playwright show-report` |
