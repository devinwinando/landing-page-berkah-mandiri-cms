# 🌍 Localization/i18n Setup - Berkah Mandiri Backend

## Overview
Backend Berkah Mandiri sudah dikonfigurasi dengan plugin **i18n** Strapi untuk mendukung multi-language (Bahasa Indonesia dan English).

## Supported Locales
- **id** (Bahasa Indonesia) - Default
- **en** (English)

## Content Types yang Sudah Dilocalize

### 1. **About** (Single Type)
- ✅ title
- ✅ blocks (dynamic zone)

### 2. **Article** (Collection)
- ✅ title
- ✅ description
- ✅ slug
- ✅ blocks (dynamic zone)
- ❌ author (tidak dilocalize - data tetap sama)
- ❌ category (dilocalize terpisah)
- ❌ cover (tidak dilocalize - media tetap sama)

### 3. **Category** (Collection)
- ✅ name
- ✅ slug
- ✅ description

### 4. **Global** (Single Type)
- ✅ siteName
- ✅ siteDescription
- ❌ favicon (tidak dilocalize - media tetap sama)

## Cara Menggunakan API dengan Localization

### 1. Get Content by Locale (Query Parameter)
```bash
# Get articles in Indonesian (default)
GET /api/articles?locale=id

# Get articles in English
GET /api/articles?locale=en

# Get single article in English
GET /api/articles/1?locale=en
```

### 2. Get Content with All Localizations
```bash
# Automatically includes localizations field
GET /api/articles?locale=id
# Response akan include:
# - data dengan locale 'id'
# - localizations: array berisi reference ke locale lain
```

### 3. Filter by Locale
```bash
# Only get English articles
GET /api/articles?filters[locale][$eq]=en

# Get published articles in Indonesian
GET /api/articles?locale=id&filters[publishedAt][$notNull]=true
```

### 4. Populate Relations
```bash
# Get articles with author, category, and all locales
GET /api/articles?locale=id&populate[author]=*&populate[category]=*&populate[localizations]=*

# Note: Controllers sudah auto-populate relations
```

## Admin Panel Usage

### Creating Localized Content
1. **Create content** di default locale (id)
2. **Switch locale** di admin panel (dropdown di atas form)
3. **Create localization** - button akan muncul untuk create versi bahasa lain
4. **Fill in translated content** untuk locale yang dipilih

### Managing Locales
- Go to: **Settings** → **Internationalization**
- Add/remove locales
- Set default locale
- Configure locale settings

## Response Structure

### Single Entry (e.g., Article)
```json
{
  "data": {
    "id": 1,
    "attributes": {
      "title": "Judul Artikel",
      "description": "Deskripsi artikel dalam bahasa Indonesia",
      "slug": "judul-artikel",
      "locale": "id",
      "localizations": {
        "data": [
          {
            "id": 2,
            "attributes": {
              "title": "Article Title",
              "slug": "article-title",
              "locale": "en"
            }
          }
        ]
      },
      "author": { ... },
      "category": { ... }
    }
  }
}
```

### Collection (e.g., Articles List)
```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "title": "Judul Artikel",
        "locale": "id",
        "localizations": {
          "data": [...]
        }
      }
    }
  ],
  "meta": {
    "pagination": { ... }
  }
}
```

## Best Practices

### 1. Always Specify Locale
```javascript
// Frontend fetch example
const locale = 'id'; // or 'en'
const response = await fetch(`/api/articles?locale=${locale}`);
```

### 2. Handle Missing Translations
```javascript
// Check if translation exists
if (!article.attributes.localizations.data.length) {
  // Fallback to default locale
  console.log('Translation not available, using default');
}
```

### 3. Sync Non-Localized Fields
- Media files (images, videos) → **tidak perlu duplicate**
- Relations (author, categories) → **share across locales**
- Only localize **text content**

## Database Migration

Setelah setup ini, jalankan:

```bash
# Build admin panel dengan i18n
npm run build

# Start development server
npm run develop
```

Strapi akan otomatis:
1. Create tabel `i18n_locale`
2. Add kolom `locale` dan `localizations` ke semua localized content types
3. Populate default locale (id)

## Frontend Integration

### Next.js Example
```typescript
// lib/api.ts
export async function getArticles(locale: string = 'id') {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles?locale=${locale}&populate=*`
  );
  return response.json();
}

// Usage in component
const { locale } = useRouter();
const articles = await getArticles(locale);
```

### Locale Switcher
```typescript
// components/LocaleSwitcher.tsx
import { useRouter } from 'next/router';

export default function LocaleSwitcher() {
  const router = useRouter();
  
  const changeLocale = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };
  
  return (
    <select onChange={(e) => changeLocale(e.target.value)} value={router.locale}>
      <option value="id">🇮🇩 Indonesia</option>
      <option value="en">🇬🇧 English</option>
    </select>
  );
}
```

## Troubleshooting

### Content tidak muncul setelah enable i18n
1. **Rebuild admin panel**: `npm run build`
2. **Restart server**: `npm run develop`
3. **Create default locale content** di admin panel

### Locale tidak terdeteksi
1. Check middleware order di `config/middlewares.js`
2. Pastikan query param `?locale=xx` ada
3. Check browser headers `Accept-Language`

### Localizations tidak di-populate
1. Add `populate[localizations]=*` di query
2. Controllers sudah auto-populate, tapi bisa override jika perlu

## Testing

```bash
# Test Indonesian endpoint
curl "http://localhost:1337/api/articles?locale=id"

# Test English endpoint
curl "http://localhost:1337/api/articles?locale=en"

# Test with populate
curl "http://localhost:1337/api/articles?locale=id&populate=*"
```

---

**Note**: Jangan lupa create content untuk semua locales di admin panel setelah setup ini! 🎉
