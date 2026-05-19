# SEO Оптимизация сайта BODEX Bulgaria

## ✅ Выполненные оптимизации

### 1. **Meta Tags & Head**
- ✅ Добавлены мета description на болгарском (основной язык)
- ✅ Добавлены keywords
- ✅ Добавлены Open Graph (og:) теги для социальных сетей
- ✅ Добавлены Twitter Card теги
- ✅ Установлен lang="bg" для основного языка
- ✅ Добавлена canonical URL
- ✅ Добавлены hrefLang alternates для многоязычного сайта

### 2. **Structured Data (JSON-LD)**
- ✅ Organization schema на главной странице
- ✅ LocalBusiness schema
- ✅ ContactPoint schema на странице контактов
- ✅ BreadcrumbList schema для услуг

### 3. **Sitemap & Robots**
- ✅ Создан `/public/robots.txt` (disallow admin, allow crawlers)
- ✅ Создан `/public/sitemap.xml` (главная и страница проектов)
- ✅ Добавлена ссылка на sitemap в robots.txt

### 4. **Page-specific SEO**
- ✅ HomePage: динамические title & description
- ✅ ProjectsPage: динамические title & description
- ✅ Создана утилита `src/utils/seo.js` для управления мета-тегами

### 5. **Performance & Best Practices**
- ✅ Preconnect к Google Fonts
- ✅ Favicon и apple-touch-icon
- ✅ Mobile meta tags (viewport, theme-color)
- ✅ Semantic HTML (headers в разделах)

---

## 📋 Рекомендации для дальнейшей оптимизации

### Немедленные приоритеты:

1. **Open Graph изображения**
   - Создать `/public/og-image.jpg` (1200x630px)
   - Создать `/public/projects-og.jpg` (1200x630px)
   - Обновить URL в index.html

2. **Alt текст для изображений**
   - Добавить `alt=""` ко всем `<img>` элементам
   - Пример: `<img src="..." alt="Язовирна стена ПАВЕЦ укреплена с инжекционни материали ARCAN" />`

3. **Heading структура**
   - Hero: `<h1>` - основной заголовок (уже есть)
   - Секции: `<h2>` - заголовки секций (нужно проверить)
   - Подтитулы: `<h3>` - подзаголовки (правильно)

4. **Internal linking**
   - Добавить якоря в навигацию: `#hero`, `#services`, `#products`, `#projects`
   - Улучшить внутренние ссылки между страницами

5. **Google Search Console**
   - Отправить sitemap.xml: `https://search.google.com/search-console/u/0/`
   - Отправить robots.txt
   - Мониторить ошибки и покрытие индексации

6. **Google Analytics & Tracking**
   - Добавить GA4 код
   - Отслеживать key conversions: контактные заявки, скачивания каталога

### Дополнительная оптимизация:

7. **Структурированные данные**
   - Добавить FAQPage schema для часто задаваемых вопросов
   - Добавить AggregateOffer schema для продуктов (если применимо)
   - Добавить VideoObject schema (если есть видео)

8. **Тексты и контент**
   - Убедиться, что все ключевые слова (инжекционные системы, ARCAN, укрепление фундаментов) есть в контенте
   - Добавить FAQs раздел
   - Расширить Product descriptions

9. **Скорость сайта**
   - Оптимизировать изображения (WebP format)
   - Минимизировать CSS/JS
   - Кэширование браузера

10. **Мобильная оптимизация**
    - Проверить mobile-first rendering
    - Тестировать на Mobile-Friendly Test: `https://search.google.com/test/mobile-friendly`

---

## 🔧 Как использовать сео утилиту

```javascript
import { updatePageMeta } from '../utils/seo';

useEffect(() => {
  updatePageMeta(
    'Page Title - BODEX Bulgaria', // title
    'Page description for search results...', // description
    'https://bodexbulgaria.com/page-og.jpg', // og:image URL
    'https://bodexbulgaria.com/page' // canonical URL
  );
}, []);
```

---

## 📊 Метрики для мониторинга

- **Google Search Console**: impressions, clicks, average position
- **Page Speed**: Core Web Vitals (LCP, FID, CLS)
- **Bounce Rate**: целевое <50%
- **Average Session Duration**: целевое >2 мин
- **Conversion Rate**: отслеживать заявки и скачивания

---

## 🌍 Многоязычная SEO

Текущая оптимизация для болгарского (bg) как основного языка.

Для полной поддержки английского (en):
1. Создать отдельные страницы или использовать URL параметры
2. Добавить `hrefLang` для обоих языков (уже добавлено)
3. Перевести все meta tags на английский
4. Добавить lang switching в header
