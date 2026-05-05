#!/bin/bash

# Jenkins Playwright Test Runner
# This script runs Playwright tests with the proper Node.js path for Jenkins
# Usage: bash .github/jenkins-test.sh

set -e

# Get the project root directory
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

# Set Node.js path (macOS Homebrew location)
export PATH="/opt/homebrew/bin:$PATH"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Playwright Test Runner for Jenkins"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Project: $PROJECT_ROOT"
echo "Node: $(node --version)"
echo "NPM:  $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run tests
echo ""
echo "🧪 Running Playwright tests..."
npm test

echo ""
echo "✅ Test suite completed successfully"
echo ""
echo "📊 To view the report, run:"
echo "   npx playwright show-report"
