# Playwright Test Commands Reference

## Quick Start

All commands are available as npm scripts:

```bash
npm test                  # Run all tests
npm run test:headed       # Run with visible browser
npm run test:debug        # Run in debug mode
npm run test:report       # Open HTML report
```

## Available Tests

The project contains 4 test cases:

1. **example.spec.js**
   - `has title` - Verifies example.com loads
   - `get started link` - Checks link navigation

2. **sauceDemo.spec.js**
   - `SauceLabs Demo Script` - Login and product navigation test
   - `Back to Products` - Navigation test

## Advanced Usage

### Filter by Test Name
```bash
npm test -- --grep "login"
```

### Run Specific File
```bash
npm test -- tests/sauceDemo.spec.js
```

### Run Specific Browser
```bash
npm test -- --project=chromium
npm test -- --project=firefox
npm test -- --project=webkit
```

### With Retries
```bash
npm test -- --retries=2
```

### Generate Custom Report
```bash
npx playwright test --reporter=list
npx playwright test --reporter=json > results.json
```

## Configuration

Tests use settings from `playwright.config.js`:
- **Sequential execution** (one test at a time)
- **Headed mode** (browser window visible)
- **HTML reporter** (generates `playwright-report/`)
- **Trace collection** on first retry

## Debugging

### Option 1: Headed Mode (Recommended)
```bash
npm run test:headed
```
Shows the browser in action, can pause and inspect.

### Option 2: Debug Mode
```bash
npm run test:debug
```
Launches Playwright Inspector with step-by-step control.

### Option 3: View Traces
After test failures, inspect the trace:
```bash
npx playwright show-trace test-results/<trace-file>
```

## Reports

After running tests, view the HTML report:
```bash
npm run test:report
```

Report includes:
- Test results and status
- Screenshots on failure
- Execution timings
- Error details and traces
