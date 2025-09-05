# Security Fixes Documentation

## Overview

This document outlines the security fixes applied to address exposed secrets in the codebase. All hardcoded credentials have been moved to environment variables to prevent accidental exposure.

## Security Issues Fixed

### 1. Supabase Service Role JWT Tokens
- **Issue**: Multiple files contained hardcoded Supabase service role JWT tokens
- **Files Affected**: 
  - `update-remaining-blog-posts.js`
  - `deploy-resend-setup.js`
  - `apply-migration-via-api.js`
  - `test-contact-form.js`
  - `test-audit-form.js`
  - `test-edge-function.js`
  - `debug-audit-form.js`
  - `fix-contact-table.js`
  - `add-new-blog-posts.js`
  - `add-more-blog-posts.js`
- **Fix**: Replaced with `SUPABASE_SERVICE_ROLE_KEY` environment variable

### 2. Supabase Anon Keys
- **Issue**: Some files contained hardcoded Supabase anon keys
- **Files Affected**:
  - `apply-blog-rls-fix.js`
  - `add-new-blog-posts.js`
  - `test-email-function.js`
  - `test-audit-form.js`
- **Fix**: Replaced with `SUPABASE_ANON_KEY` environment variable

### 3. Database Credentials
- **Issue**: `apply-migration.js` contained hardcoded database password
- **Fix**: Replaced with environment variables:
  - `DB_HOST`
  - `DB_PORT`
  - `DB_NAME`
  - `DB_USER`
  - `DB_PASSWORD`

### 4. reCAPTCHA Site Key
- **Issue**: `src/utils/recaptcha.ts` contained hardcoded reCAPTCHA site key
- **Fix**: Replaced with `RECAPTCHA_SITE_KEY` environment variable

## Environment Variables Required

Create a `.env` file in the root directory with the following variables:

```env
# Supabase Configuration
SUPABASE_URL=https://bopzgxqujuqosdexnppj.supabase.co
SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# Database Configuration (for direct database access)
DB_HOST=db.bopzgxqujuqosdexnppj.supabase.co
DB_PORT=5432
DB_NAME=postgres
DB_USER=postgres
DB_PASSWORD=your_database_password_here

# reCAPTCHA Configuration
RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key_here

# Resend Email Configuration
RESEND_API_KEY=your_resend_api_key_here
```

## Setup Instructions

1. **Install Dependencies**: The `dotenv` package has been added to handle environment variables
   ```bash
   npm install
   ```

2. **Create Environment File**: Copy the example environment file and fill in your actual values
   ```bash
   cp env.example .env
   ```

3. **Update .env File**: Replace the placeholder values with your actual credentials

4. **Verify Setup**: Run any of the scripts to verify they work with environment variables
   ```bash
   node apply-migration.js
   ```

## Security Best Practices

1. **Never Commit .env Files**: The `.gitignore` has been updated to exclude all environment files
2. **Use Different Keys for Different Environments**: Use separate environment files for development, staging, and production
3. **Rotate Keys Regularly**: Regularly rotate your Supabase and other API keys
4. **Monitor for Exposed Secrets**: Use tools like GitGuardian or GitHub's secret scanning to detect exposed secrets

## Files Modified

### Configuration Files
- `.gitignore` - Added environment file exclusions
- `package.json` - Added dotenv dependency
- `env.example` - Created example environment file

### JavaScript Files (All Updated)
- `apply-migration.js`
- `update-remaining-blog-posts.js`
- `deploy-resend-setup.js`
- `apply-migration-via-api.js`
- `apply-blog-rls-fix.js`
- `add-new-blog-posts.js`
- `test-contact-form.js`
- `test-audit-form.js`
- `test-edge-function.js`
- `test-email-function.js`
- `debug-audit-form.js`
- `fix-contact-table.js`
- `add-more-blog-posts.js`

### TypeScript Files
- `src/utils/recaptcha.ts`

## Validation

All scripts now include validation to ensure required environment variables are present before execution. If any required variables are missing, the script will:

1. Display an error message listing the missing variables
2. Provide instructions to check the `.env` file
3. Exit with a non-zero status code

## Next Steps

1. **Rotate All Exposed Keys**: Since these keys were exposed in the repository, you should rotate all Supabase keys, database passwords, and API keys
2. **Update Deployment Environments**: Ensure all deployment environments (Vercel, etc.) have the correct environment variables set
3. **Monitor for New Exposures**: Set up automated scanning to prevent future secret exposures
4. **Review Access Logs**: Check Supabase logs for any unauthorized access using the exposed keys

## Support

If you encounter any issues with the environment variable setup, check:
1. The `.env` file exists in the root directory
2. All required variables are set with correct values
3. The `dotenv` package is properly installed
4. The script is being run from the correct directory



