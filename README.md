# 🚀 Berkah Mandiri Backend API

Backend API untuk website Berkah Mandiri menggunakan **Strapi v5.33.1** dengan dukungan multi-language (i18n).

## ✨ Features

- 🌍 **Multi-language Support** (Indonesian & English)
- 📝 **Content Management** (Articles, Categories, Authors)
- 🎨 **Dynamic Zones** (Rich text, Media, Quotes, Sliders)
- 🔐 **Users & Permissions**
- 📱 **RESTful API**
- 🗄️ **MySQL Database**

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20.0.0
- npm >= 6.0.0
- MySQL 8.0+

### Installation

```bash
# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your database credentials

# Initialize locales (optional)
npm run seed:locales

# Build admin panel
npm run build

# Start development server
npm run develop
```

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```bash
npm run develop
# or
yarn develop
```

Access admin panel at: `http://localhost:1337/admin`

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```bash
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```bash
npm run build
# or
yarn build
```

## 🌍 Internationalization (i18n)

Backend ini sudah dikonfigurasi dengan support multi-language. Lihat dokumentasi lengkap di [docs/LOCALIZATION.md](docs/LOCALIZATION.md).

### Supported Locales
- 🇮🇩 **Indonesian (id)** - Default
- 🇬🇧 **English (en)**

### API Usage Examples

```bash
# Get articles in Indonesian
GET /api/articles?locale=id

# Get articles in English
GET /api/articles?locale=en

# Get single article with all localizations
GET /api/articles/1?locale=id&populate=localizations
```

## 📚 API Endpoints

### Content Types

| Endpoint | Type | Description | i18n |
|----------|------|-------------|------|
| `/api/about` | Single | About page content | ✅ |
| `/api/articles` | Collection | Blog articles | ✅ |
| `/api/categories` | Collection | Article categories | ✅ |
| `/api/authors` | Collection | Article authors | ❌ |
| `/api/global` | Single | Global site settings | ✅ |

### Query Parameters

```bash
# Locale
?locale=en

# Populate relations
?populate=*
?populate[author]=*&populate[category]=*

# Filters
?filters[category][slug][$eq]=technology

# Pagination
?pagination[page]=1&pagination[pageSize]=10

# Sort
?sort=createdAt:desc
```

## 🗂️ Project Structure

```
berkah-mandiri-be/
├── config/               # Configuration files
│   ├── admin.js
│   ├── api.js
│   ├── database.js
│   ├── middlewares.js
│   ├── plugins.js        # i18n plugin config
│   └── server.js
├── docs/
│   └── LOCALIZATION.md   # i18n documentation
├── src/
│   ├── api/              # API content types
│   │   ├── about/
│   │   ├── article/
│   │   ├── author/
│   │   ├── category/
│   │   └── global/
│   ├── components/       # Reusable components
│   │   └── shared/
│   ├── middlewares/
│   │   └── localization.js
│   ├── services/
│   │   └── localization.js
│   └── index.js
├── scripts/
│   ├── seed.js
│   └── seed-locales.js   # Initialize locales
└── package.json
```

## 🛠️ Scripts

| Command | Description |
|---------|-------------|
| `npm run develop` | Start dev server with auto-reload |
| `npm run start` | Start production server |
| `npm run build` | Build admin panel |
| `npm run seed:locales` | Initialize i18n locales |
| `npm run seed:example` | Seed example data |

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```bash
yarn strapi deploy
```

## 🔐 Environment Variables

```env
# Server
HOST=0.0.0.0
PORT=1337

# Database
DATABASE_CLIENT=mysql
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_NAME=berkah_mandiri
DATABASE_USERNAME=root
DATABASE_PASSWORD=

# Security Keys (generate new ones!)
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=
TRANSFER_TOKEN_SALT=
JWT_SECRET=
ENCRYPTION_KEY=
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

**Berkah Mandiri** © 2026
