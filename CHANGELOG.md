# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added - Internationalization (i18n) Feature 🌍

#### Configuration
- Added i18n plugin configuration in `config/plugins.js`
  - Default locale: Indonesian (id)
  - Available locales: Indonesian (id), English (en)
- Added custom localization middleware in `config/middlewares.js`

#### Content Types
- Enabled i18n for `About` content type
  - Localized fields: title, blocks
- Enabled i18n for `Article` content type  
  - Localized fields: title, description, slug, blocks
- Enabled i18n for `Category` content type
  - Localized fields: name, slug, description
- Enabled i18n for `Global` content type
  - Localized fields: siteName, siteDescription

#### Controllers
- Enhanced `About` controller with localization support
- Enhanced `Article` controller with auto-populate for author, category, and localizations
- Enhanced `Category` controller with localization population
- Enhanced `Global` controller with full population including SEO and localizations

#### Middleware & Services
- Created `src/middlewares/localization.js` for automatic locale detection
  - Detects locale from query params, headers, or falls back to default
- Created `src/services/localization.js` with utility functions:
  - `findOneWithFallback()` - Get content with locale fallback
  - `getAllLocalizations()` - Retrieve all language versions
  - `createLocalization()` - Create new translation
  - `getAvailableLocales()` - List available locales
  - `isValidLocale()` - Validate locale codes
  - `getDefaultLocale()` - Get default locale

#### Scripts
- Added `scripts/seed-locales.js` to initialize locale data
- Added npm script `seed:locales` in package.json

#### Documentation
- Created `docs/LOCALIZATION.md` - Comprehensive i18n documentation
- Created `docs/QUICK_START_I18N.md` - Quick start guide for i18n setup
- Created `docs/API_TESTING.md` - API testing examples with curl commands
- Created `docs/I18N_SUMMARY.md` - Implementation summary
- Updated main `README.md` with i18n information and API examples

#### Developer Experience
- All API endpoints now support `?locale=xx` query parameter
- Automatic population of localizations in responses
- Admin panel ready for multi-language content management
- Type-safe schemas with i18n plugin options

### Changed
- Updated all localized content type schemas with i18n plugin options
- Updated middleware stack order to include custom localization middleware
- Enhanced README with multi-language support information

## [0.1.0] - 2026-01-02

### Initial Release
- Basic Strapi setup with MySQL database
- Content types: About, Article, Author, Category, Global
- Shared components: Media, Quote, Rich Text, SEO, Slider
- Dynamic zones for flexible content blocks
- RESTful API endpoints

---

## Commit Messages Convention

This project follows conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix  
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Example:
```
feat(i18n): add multi-language support for all content types
```
