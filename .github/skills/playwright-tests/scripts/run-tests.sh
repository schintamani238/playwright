#!/bin/bash

# Playwright test runner script
# Executes Playwright tests with flexible options

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../../../.." && pwd)"

cd "$PROJECT_ROOT"

# Parse arguments
MODE="${1:-all}"
EXTRA_ARGS="${@:2}"

case "$MODE" in
  all)
    echo "▶ Running all Playwright tests..."
    npx playwright test
    ;;
  headed)
    echo "▶ Running tests in headed mode..."
    npx playwright test --headed
    ;;
  debug)
    echo "▶ Running tests in debug mode..."
    npx playwright test --debug
    ;;
  report)
    echo "▶ Opening test report..."
    npx playwright show-report
    ;;
  *)
    echo "▶ Running tests with: $MODE $EXTRA_ARGS"
    npx playwright test "$MODE" $EXTRA_ARGS
    ;;
esac

echo ""
echo "✓ Test execution complete"
echo "📊 View report with: npx playwright show-report"
