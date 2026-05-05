#!/bin/bash
set -e

# Load Node.js environment
export PATH="/usr/local/bin:$PATH"

# Or if using nvm:
# source ~/.nvm/nvm.sh
# nvm use 18  (or your Node version)

cd "$(dirname "$0")/.."
npm install
npm test