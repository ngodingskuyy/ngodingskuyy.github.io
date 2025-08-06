# Firebase Performance Monitoring

## Overview

Firebase Performance Monitoring telah diintegrasikan ke dalam aplikasi NgodingSkuyy untuk memantau performa aplikasi dan pengalaman pengguna.

## Fitur yang Ditambahkan

### 1. **Performance Composable (`src/composables/usePerformance.ts`)**

- `createTrace()` - Membuat custom trace untuk tracking operasi
- `trackPageLoad()` - Memantau waktu loading halaman
- `trackComponentMount()` - Memantau waktu mounting komponen Vue
- `trackAPICall()` - Memantau performa API calls
- `trackUserAction()` - Memantau interaksi pengguna
- `trackNavigation()` - Memantau navigasi antar halaman

### 2. **Enhanced Analytics (`src/composables/useAnalytics.ts`)**

- `trackPerformanceEvent()` - Korelasi antara analytics dan performance data
- Timestamp tracking untuk semua events
- Development-friendly logging

### 3. **Firebase Config Update (`src/firebase/config.ts`)**

- Integrated Firebase Performance SDK
- Production-only enablement untuk menghindari development overhead
- Automatic initialization dengan Firebase app

### 4. **Component Implementation**

#### HomeView.vue

- ✅ Page load tracking
- ✅ Component mount tracking
- ✅ User interaction tracking (buttons, projects)
- ✅ API call simulation tracking
- ✅ Navigation tracking

#### AboutView.vue

- ✅ Component mount tracking
- ✅ Page view analytics

#### AppFooter.vue

- ✅ Component mount tracking
- ✅ Social link click tracking dengan performance monitoring

## Performance Metrics yang Dipantau

### Automatic Metrics (Firebase SDK)

- App start time
- Screen rendering
- Network requests
- HTTP/S network requests

### Custom Metrics (Manual Implementation)

- Page load times
- Component mounting times
- User interaction response times
- API call durations
- Navigation performance

## Development vs Production

### Development Mode

- Console logging untuk semua performance events
- Mock trace objects untuk menghindari Firebase errors
- Performance data tidak dikirim ke Firebase

### Production Mode

- Real Firebase Performance tracking
- Data dikirim ke Firebase Console
- Optimized untuk minimal overhead

## Cara Menggunakan

### 1. Import Composable

```typescript
import { usePerformance } from '../composables/usePerformance'
const { trackUserAction, trackComponentMount } = usePerformance()
```

### 2. Track Component Mount

```typescript
onMounted(async () => {
  await trackComponentMount('ComponentName')
})
```

### 3. Track User Actions

```typescript
const handleClick = async () => {
  await trackUserAction('button_click', 'button_name')
  // Your click logic
}
```

### 4. Track API Calls

```typescript
const fetchData = async () => {
  const trace = await trackAPICall('fetch_projects')
  try {
    const response = await api.getProjects()
    return response
  } finally {
    trace?.stop()
  }
}
```

## Firebase Console

Setelah deployment, data performance dapat dilihat di:

1. Firebase Console → Performance
2. Real-time performance monitoring
3. Historical performance data
4. User flow analysis

## Best Practices

1. **Jangan overuse tracking** - Track hanya events yang penting
2. **Use meaningful names** - Gunakan nama yang deskriptif untuk traces
3. **Production only** - Performance tracking hanya aktif di production
4. **Error handling** - Selalu handle errors dengan graceful fallback

## Troubleshooting

### Development Issues

- Performance errors di localhost adalah normal
- Gunakan `dev-utils.ts` untuk suppress development errors
- Check console untuk development logs

### Production Issues

- Pastikan Firebase project sudah setup dengan benar
- Verify Firebase config credentials
- Check Firebase Console untuk error logs
