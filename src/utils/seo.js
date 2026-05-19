// SEO Helmet Component for Page Metadata
export function updatePageMeta(title, description, ogImage = '/og-image.jpg', canonical = '') {
  document.title = title;
  
  // Update or create meta description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.name = 'description';
    document.head.appendChild(metaDesc);
  }
  metaDesc.content = description;
  
  // Update OG title
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.appendChild(ogTitle);
  }
  ogTitle.content = title;
  
  // Update OG description
  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (!ogDesc) {
    ogDesc = document.createElement('meta');
    ogDesc.setAttribute('property', 'og:description');
    document.head.appendChild(ogDesc);
  }
  ogDesc.content = description;
  
  // Update OG image
  let ogImg = document.querySelector('meta[property="og:image"]');
  if (!ogImg) {
    ogImg = document.createElement('meta');
    ogImg.setAttribute('property', 'og:image');
    document.head.appendChild(ogImg);
  }
  ogImg.content = ogImage;
  
  // Update canonical
  if (canonical) {
    let canLink = document.querySelector('link[rel="canonical"]');
    if (!canLink) {
      canLink = document.createElement('link');
      canLink.rel = 'canonical';
      document.head.appendChild(canLink);
    }
    canLink.href = canonical;
  }
}
