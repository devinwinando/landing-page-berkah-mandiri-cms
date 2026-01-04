# Prompt Rangkuman Proyek - Berkah Mandiri CMS

## Prompt untuk ChatGPT:

Saya memiliki proyek **Strapi CMS v5.33.1** (Node.js) dengan konfigurasi berikut:

**Teknologi:**
- Strapi v5.33.1
- Node.js 20-24.x
- MySQL database (mysql2)
- i18n plugin dengan locales: id (default), en
- Custom localization middleware

**Content Types:**
- `about` (Single Type, i18n)
- `article` (Collection, i18n) 
- `category` (Collection, i18n)
- `global` (Single Type, i18n)
- `product` (Collection, i18n)
- `service` (Collection, i18n)

**Struktur:**
- `config/` - server, database, plugins, middlewares, api
- `src/api/` - content types dengan controllers, routes, services
- `src/middlewares/localization.js` - custom middleware untuk auto-detect locale
- `src/components/shared/` - reusable components (media, quote, rich-text, seo, slider)

**Fitur:**
- Multi-language support (Indonesian & English)
- RESTful API dengan query params: `?locale=id` atau `?locale=en`
- Custom localization middleware yang auto-populate locale dari query/header
- MySQL database connection

**Environment Variables:**
- DATABASE_CLIENT=mysql
- DATABASE_HOST, DATABASE_PORT, DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD
- APP_KEYS, API_TOKEN_SALT, ADMIN_JWT_SECRET, TRANSFER_TOKEN_SALT, JWT_SECRET, ENCRYPTION_KEY

---

## Versi Ultra Singkat:

Strapi v5.33.1 CMS dengan MySQL, i18n (id/en), content types: about, article, category, global, product, service. Custom localization middleware. Node.js 20-24.x.

