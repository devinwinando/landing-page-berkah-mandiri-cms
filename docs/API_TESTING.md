# API Testing Examples - i18n

Collection of API requests to test localization features.

## Base URL
```
http://localhost:1337
```

---

## 📄 Articles

### Get All Articles (Indonesian)
```bash
GET http://localhost:1337/api/articles?locale=id
```

### Get All Articles (English)
```bash
GET http://localhost:1337/api/articles?locale=en
```

### Get Articles with Populate
```bash
GET http://localhost:1337/api/articles?locale=id&populate[author]=*&populate[category]=*&populate[cover]=*&populate[localizations]=*
```

### Get Single Article
```bash
GET http://localhost:1337/api/articles/1?locale=id&populate=*
```

### Get Single Article with All Localizations
```bash
GET http://localhost:1337/api/articles/1?locale=id&populate[localizations][populate]=*&populate[author]=*&populate[category]=*
```

### Filter Articles by Category (Localized)
```bash
GET http://localhost:1337/api/articles?locale=id&filters[category][slug][$eq]=teknologi
```

### Search Articles (Localized)
```bash
GET http://localhost:1337/api/articles?locale=id&filters[title][$contains]=Panduan
```

---

## 📁 Categories

### Get All Categories (Indonesian)
```bash
GET http://localhost:1337/api/categories?locale=id
```

### Get All Categories (English)
```bash
GET http://localhost:1337/api/categories?locale=en
```

### Get Category with Articles
```bash
GET http://localhost:1337/api/categories?locale=id&populate[articles][populate]=*
```

### Get Single Category
```bash
GET http://localhost:1337/api/categories/1?locale=id&populate=*
```

---

## 👤 Authors

### Get All Authors
```bash
GET http://localhost:1337/api/authors
```
*Note: Authors are NOT localized*

### Get Author with Articles
```bash
GET http://localhost:1337/api/authors/1?populate[articles][populate]=*
```

---

## ℹ️ About

### Get About Page (Indonesian)
```bash
GET http://localhost:1337/api/about?locale=id&populate=*
```

### Get About Page (English)
```bash
GET http://localhost:1337/api/about?locale=en&populate=*
```

### Get About with All Localizations
```bash
GET http://localhost:1337/api/about?locale=id&populate[localizations]=*&populate[blocks]=*
```

---

## 🌐 Global Settings

### Get Global (Indonesian)
```bash
GET http://localhost:1337/api/global?locale=id&populate=*
```

### Get Global (English)
```bash
GET http://localhost:1337/api/global?locale=en&populate=*
```

### Get Global with Deep Populate
```bash
GET http://localhost:1337/api/global?locale=id&populate[favicon]=*&populate[defaultSeo][populate]=*&populate[localizations]=*
```

---

## 🔍 Advanced Queries

### Pagination
```bash
GET http://localhost:1337/api/articles?locale=id&pagination[page]=1&pagination[pageSize]=10
```

### Sorting
```bash
GET http://localhost:1337/api/articles?locale=id&sort=createdAt:desc
```

### Complex Filter
```bash
GET http://localhost:1337/api/articles?locale=id&filters[$and][0][publishedAt][$notNull]=true&filters[$and][1][category][slug][$eq]=teknologi
```

### Select Specific Fields
```bash
GET http://localhost:1337/api/articles?locale=id&fields[0]=title&fields[1]=slug&fields[2]=description
```

### Get Only Localized Content
```bash
GET http://localhost:1337/api/articles?filters[locale][$eq]=en
```

---

## 📊 Response Examples

### Article Response (Indonesian)
```json
{
  "data": {
    "id": 1,
    "attributes": {
      "title": "Panduan Memulai Bisnis",
      "description": "Panduan lengkap untuk memulai bisnis dari nol",
      "slug": "panduan-memulai-bisnis",
      "locale": "id",
      "createdAt": "2026-01-02T10:00:00.000Z",
      "updatedAt": "2026-01-02T10:00:00.000Z",
      "publishedAt": "2026-01-02T10:00:00.000Z",
      "localizations": {
        "data": [
          {
            "id": 2,
            "attributes": {
              "title": "Guide to Starting a Business",
              "slug": "guide-starting-business",
              "locale": "en"
            }
          }
        ]
      },
      "author": {
        "data": {
          "id": 1,
          "attributes": {
            "name": "John Doe",
            "email": "john@berkahmandiri.com"
          }
        }
      },
      "category": {
        "data": {
          "id": 1,
          "attributes": {
            "name": "Teknologi",
            "slug": "teknologi",
            "locale": "id"
          }
        }
      }
    }
  }
}
```

### Collection Response
```json
{
  "data": [
    {
      "id": 1,
      "attributes": { ... }
    },
    {
      "id": 2,
      "attributes": { ... }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 2
    }
  }
}
```

---

## 🔐 With Authentication

If API requires authentication token:

```bash
curl -H "Authorization: Bearer YOUR_TOKEN_HERE" \
     "http://localhost:1337/api/articles?locale=id"
```

---

## 💡 Tips

1. **Always specify locale** untuk consistent results
2. **Use populate** untuk get related data
3. **Use localizations** untuk language switcher
4. **Filter by locale** untuk language-specific queries
5. **Cache responses** di frontend untuk better performance

---

## 🧪 Postman Collection

Import these into Postman:

```json
{
  "info": {
    "name": "Berkah Mandiri API - i18n",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Get Articles (ID)",
      "request": {
        "method": "GET",
        "url": "http://localhost:1337/api/articles?locale=id&populate=*"
      }
    },
    {
      "name": "Get Articles (EN)",
      "request": {
        "method": "GET",
        "url": "http://localhost:1337/api/articles?locale=en&populate=*"
      }
    }
  ]
}
```

---

**Test all endpoints after starting your server!** 🚀
