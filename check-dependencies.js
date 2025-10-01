#!/usr/bin/env node

/**
 * Dependency Checker for Resgato Project
 *
 * This script checks if all required dependencies and tools are installed
 * for the Resgato AI Glowup project to run properly.
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colors for console output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function checkCommand(command, name, minVersion = null) {
  try {
    const version = execSync(command, { encoding: 'utf8' }).trim();
    log(`✅ ${name}: ${version}`, 'green');
    return true;
  } catch (error) {
    log(`❌ ${name}: Not found`, 'red');
    return false;
  }
}

function checkFile(filePath, name) {
  if (fs.existsSync(filePath)) {
    log(`✅ ${name}: Found`, 'green');
    return true;
  } else {
    log(`❌ ${name}: Not found`, 'red');
    return false;
  }
}

function checkNodeVersion() {
  try {
    const version = process.version;
    const majorVersion = parseInt(version.slice(1).split('.')[0]);

    if (majorVersion >= 18) {
      log(`✅ Node.js: ${version} (Compatible)`, 'green');
      return true;
    } else {
      log(`❌ Node.js: ${version} (Requires v18+)`, 'red');
      return false;
    }
  } catch (error) {
    log(`❌ Node.js: Not found`, 'red');
    return false;
  }
}

function checkNpmVersion() {
  try {
    const version = execSync('npm --version', { encoding: 'utf8' }).trim();
    const majorVersion = parseInt(version.split('.')[0]);

    if (majorVersion >= 8) {
      log(`✅ npm: ${version} (Compatible)`, 'green');
      return true;
    } else {
      log(`❌ npm: ${version} (Requires v8+)`, 'red');
      return false;
    }
  } catch (error) {
    log(`❌ npm: Not found`, 'red');
    return false;
  }
}

function checkDependencies() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');

  if (!fs.existsSync(packageJsonPath)) {
    log('❌ package.json not found. Are you in the project root?', 'red');
    return false;
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  const dependencies = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  };

  log('\n📦 Checking project dependencies...', 'blue');

  let allInstalled = true;
  const missingDeps = [];

  for (const [dep, version] of Object.entries(dependencies)) {
    try {
      require.resolve(dep);
      log(`✅ ${dep}: Installed`, 'green');
    } catch (error) {
      log(`❌ ${dep}: Missing`, 'red');
      missingDeps.push(dep);
      allInstalled = false;
    }
  }

  if (missingDeps.length > 0) {
    log(`\n🔧 Missing dependencies: ${missingDeps.join(', ')}`, 'yellow');
    log('Run: npm install --legacy-peer-deps', 'yellow');
  }

  return allInstalled;
}

function checkEnvironment() {
  log('\n🔧 Checking environment configuration...', 'blue');

  const envPath = path.join(process.cwd(), '.env');
  const envExamplePath = path.join(process.cwd(), 'env.example');

  if (fs.existsSync(envPath)) {
    log('✅ .env file: Found', 'green');

    // Check for required variables
    const envContent = fs.readFileSync(envPath, 'utf8');
    const requiredVars = ['VITE_SUPABASE_URL', 'VITE_SUPABASE_ANON_KEY'];

    for (const varName of requiredVars) {
      if (envContent.includes(varName)) {
        log(`✅ ${varName}: Configured`, 'green');
      } else {
        log(`❌ ${varName}: Missing`, 'red');
      }
    }
  } else {
    log('❌ .env file: Not found', 'red');
    if (fs.existsSync(envExamplePath)) {
      log('💡 Copy env.example to .env and configure your variables', 'yellow');
    }
  }
}

function main() {
  log('🚀 Resgato Project Dependency Checker', 'bold');
  log('=====================================\n', 'bold');

  let allGood = true;

  // Check system requirements
  log('🖥️  System Requirements:', 'blue');
  const nodeOk = checkNodeVersion();
  const npmOk = checkNpmVersion();

  if (!nodeOk || !npmOk) {
    allGood = false;
  }

  // Check project files
  log('\n📁 Project Files:', 'blue');
  const packageJsonOk = checkFile('package.json', 'package.json');
  const envExampleOk = checkFile('env.example', 'env.example');

  if (!packageJsonOk) {
    allGood = false;
  }

  // Check dependencies
  if (packageJsonOk) {
    const depsOk = checkDependencies();
    if (!depsOk) {
      allGood = false;
    }
  }

  // Check environment
  checkEnvironment();

  // Summary
  log('\n📋 Summary:', 'blue');
  if (allGood) {
    log('🎉 All checks passed! Your project is ready to run.', 'green');
    log('\nNext steps:', 'blue');
    log('1. npm run dev', 'yellow');
    log('2. Open http://localhost:3000', 'yellow');
  } else {
    log(
      '⚠️  Some issues found. Please fix them before running the project.',
      'red'
    );
    log('\nCommon fixes:', 'blue');
    log('• Install Node.js v18+ from https://nodejs.org/', 'yellow');
    log('• Run: npm install --legacy-peer-deps', 'yellow');
    log('• Copy env.example to .env and configure variables', 'yellow');
  }
}

// Run the checker
main();
