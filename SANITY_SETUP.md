# Sanity CMS Kurulum Rehberi

## 1. Sanity Projesi Oluşturma

1. [sanity.io](https://www.sanity.io) adresine gidin ve hesap oluşturun
2. Yeni bir proje oluşturun
3. Project ID'yi not edin

## 2. Environment Variables Ayarlama

Proje kök dizininde `.env.local` dosyası oluşturun:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

## 3. Sanity Studio'yu Başlatma

```bash
npm run studio
```

Studio `http://localhost:3333` adresinde açılacak.

## 4. Sanity Studio'ya Next.js'ten Erişim

Alternatif olarak, Next.js uygulaması içinden erişebilirsiniz:

```
http://localhost:3000/studio
```

## 5. İlk İçerik Oluşturma

1. Studio'da "Hero" document type'ını seçin
2. Yeni bir hero section oluşturun
3. Tüm alanları doldurun
4. Publish edin

## 6. İçeriği Frontend'de Kullanma

```typescript
import { client } from '@/sanity/lib/client'

const hero = await client.fetch(`*[_type == "hero"][0]`)
```

## Mevcut Schema'lar

- **Hero**: Hero section içeriği
- **Page**: Sayfa yapısı

Yeni schema'lar eklemek için `sanity/schemaTypes/` klasörüne yeni dosyalar ekleyin.

