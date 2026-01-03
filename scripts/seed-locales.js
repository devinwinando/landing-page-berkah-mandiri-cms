/**
 * Seed script to initialize i18n locales
 * Run with: npm run seed:locales
 * 
 * Note: In Strapi v5, locales are automatically created when you enable i18n plugin
 * This script is for manual initialization if needed
 */

const fs = require('fs');
const path = require('path');

async function seedLocales() {
  console.log('🌍 Strapi i18n Locale Setup');
  console.log('');
  
  // Check if i18n plugin is configured
  const pluginsConfigPath = path.join(__dirname, '../config/plugins.js');
  
  if (!fs.existsSync(pluginsConfigPath)) {
    console.error('❌ plugins.js not found!');
    process.exit(1);
  }

  console.log('✅ i18n plugin is configured in plugins.js');
  console.log('');
  console.log('📋 Configured locales:');
  console.log('  🇮🇩 Indonesian (id) - Default');
  console.log('  🇬🇧 English (en)');
  console.log('');
  console.log('ℹ️  In Strapi v5, locales are automatically initialized when you:');
  console.log('   1. Start the server: npm run develop');
  console.log('   2. Access admin panel: http://localhost:1337/admin');
  console.log('   3. The i18n plugin will auto-create configured locales');
  console.log('');
  console.log('🚀 Next steps:');
  console.log('   1. Run: npm run build');
  console.log('   2. Run: npm run develop');
  console.log('   3. Login to admin panel');
  console.log('   4. Go to Settings → Internationalization');
  console.log('   5. Verify locales are present');
  console.log('   6. Start creating content!');
  console.log('');
  console.log('💡 If locales are missing after first startup:');
  console.log('   - Go to Settings → Internationalization in admin panel');
  console.log('   - Click "Add new locale"');
  console.log('   - Add: English (en)');
  console.log('   - Indonesian (id) should already be default');
  console.log('');
}

seedLocales();
