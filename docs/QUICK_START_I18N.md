# 🚀 Quick Start Guide - Localization Setup

## Step-by-Step Implementation

### 1️⃣ Build & Start Server

```bash
# Navigate to backend directory
cd c:\laragon\www\berkah-mandiri-be

# Build admin panel with i18n enabled
npm run build

# Start development server
npm run develop
```

Server akan start di `http://localhost:1337`

### 2️⃣ Login ke Admin Panel

1. Buka browser: `http://localhost:1337/admin`
2. Login dengan admin credentials
3. Jika belum ada admin, create admin account

### 3️⃣ Configure Locales

1. Go to **Settings** → **Internationalization** (or **Internationalization** di sidebar)
2. Verify locales sudah ada:
   - ✅ Indonesian (id) - Default
   - ✅ English (en)
3. Jika belum ada, klik **Add new locale** untuk menambahkan

### 4️⃣ Create Content in Default Locale (Indonesian)

#### Create Global Settings
1. Go to **Content Manager** → **Global**
2. Fill in:
   - Site Name: "Berkah Mandiri"
   - Site Description: "Perusahaan terpercaya untuk..."
   - Upload favicon
3. **Save** & **Publish**

#### Create Categories
1. Go to **Content Manager** → **Categories**
2. Create category:
   - Name: "Teknologi"
   - Slug: "teknologi"
   - Description: "Artikel tentang teknologi"
3. **Save**

#### Create Authors
1. Go to **Content Manager** → **Authors**
2. Create author:
   - Name: "John Doe"
   - Email: "john@berkahmandiri.com"
   - Upload avatar
3. **Save**

#### Create Article
1. Go to **Content Manager** → **Articles**
2. Create new article:
   - Title: "Panduan Memulai Bisnis"
   - Description: "Panduan lengkap untuk memulai bisnis..."
   - Slug: "panduan-memulai-bisnis"
   - Select Author: John Doe
   - Select Category: Teknologi
   - Upload Cover image
   - Add blocks content
3. **Save** & **Publish**

### 5️⃣ Create English Localization

#### For Global Settings
1. Open **Global** entry
2. Look for locale dropdown (top right or beside save button)
3. Select **English (en)**
4. Click **Create new locale** or **Fill in from another locale**
5. Translate:
   - Site Name: "Berkah Mandiri"
   - Site Description: "Trusted company for..."
6. **Save** & **Publish**

#### For Categories
1. Open "Teknologi" category
2. Switch locale to **English (en)**
3. Click **Create new locale**
4. Translate:
   - Name: "Technology"
   - Slug: "technology"
   - Description: "Articles about technology"
5. **Save**

#### For Articles
1. Open article "Panduan Memulai Bisnis"
2. Switch locale to **English (en)**
3. Click **Create new locale**
4. Translate:
   - Title: "Guide to Starting a Business"
   - Description: "Complete guide to starting a business..."
   - Slug: "guide-starting-business"
   - Author & Category tetap sama (tidak perlu pilih lagi)
   - Upload cover (bisa sama atau berbeda)
   - Translate blocks content
5. **Save** & **Publish**

### 6️⃣ Test API Endpoints

```bash
# Test Indonesian (default)
curl "http://localhost:1337/api/articles?locale=id&populate=*"

# Test English
curl "http://localhost:1337/api/articles?locale=en&populate=*"

# Test with localizations
curl "http://localhost:1337/api/articles?locale=id&populate[localizations]=*&populate[author]=*&populate[category]=*"
```

### 7️⃣ Verify Response

Response harus include `locale` dan `localizations`:

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "title": "Panduan Memulai Bisnis",
        "slug": "panduan-memulai-bisnis",
        "locale": "id",
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
        }
      }
    }
  ]
}
```

## 🎯 Testing Checklist

- [ ] Server berjalan di port 1337
- [ ] Admin panel accessible
- [ ] 2 locales visible (id, en)
- [ ] Content created in Indonesian
- [ ] Content translated to English
- [ ] API returns correct locale
- [ ] Localizations field populated
- [ ] Category/Author relations working

## 🐛 Common Issues

### Issue: Locales tidak muncul di admin panel
**Solution**: 
```bash
npm run seed:locales
npm run build
npm run develop
```

### Issue: Content tidak ada localization field
**Solution**: 
1. Check schema.json sudah include `pluginOptions.i18n.localized: true`
2. Rebuild: `npm run build`
3. Restart server

### Issue: API tidak return localizations
**Solution**: Add populate parameter:
```bash
?populate[localizations]=*
```

### Issue: Middleware error
**Solution**: Check [middlewares.js](../config/middlewares.js) order:
- `global::localization` harus setelah `strapi::query`

## 📱 Next Steps

1. ✅ Backend i18n setup complete
2. 🔄 Integrate with Next.js frontend
3. 🌐 Setup locale routing di frontend
4. 🎨 Create language switcher component
5. 📝 Fetch localized content di frontend

## 📖 Resources

- [Full Documentation](LOCALIZATION.md)
- [Strapi i18n Plugin](https://docs.strapi.io/dev-docs/plugins/i18n)
- [API Reference](https://docs.strapi.io/dev-docs/api/rest)

---

**Happy Localizing!** 🌍✨
