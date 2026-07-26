# Vercel Deployment Fix 🚀

## ❌ Current Error:
```
500 (Internal) Server: Error
```

## 🔍 Root Cause:
Vercel par **environment variables** set nahi hain, isliye Supabase connection fail ho rahi hai aur SSR crash kar raha hai.

---

## ✅ Solution: Environment Variables Set Karo

### Step 1: Vercel Dashboard me jao
```
https://vercel.com/yogeshchauhan/your-project
```

### Step 2: Project Settings
1. **Settings** tab pe click karo
2. **Environment Variables** section me jao
3. Niche diye gaye variables add karo

### Step 3: Add These Variables

#### Required Variables (सबसे ज़रूरी):

```bash
# Supabase Configuration
SUPABASE_URL=https://sdcbejgqhkglnxsatdzr.supabase.co
SUPABASE_PUBLISHABLE_KEY=sb_publishable_bVGyvcxl0zZpws0c5voGWw_8Vj_ySJf
SUPABASE_PROJECT_ID=sdcbejgqhkglnxsatdzr

# Vite Environment Variables (for client-side)
VITE_SUPABASE_URL=https://sdcbejgqhkglnxsatdzr.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_bVGyvcxl0zZpws0c5voGWw_8Vj_ySJf
VITE_SUPABASE_PROJECT_ID=sdcbejgqhkglnxsatdzr
```

### Step 4: Apply to All Environments
Har variable ke lिए:
- ✅ **Production** check karo
- ✅ **Preview** check karo  
- ✅ **Development** check karo

### Step 5: Redeploy
Environment variables add karne ke baad:
1. **Deployments** tab pe jao
2. Latest deployment ke "⋮" (three dots) pe click karo
3. **Redeploy** select karo
4. Wait for build to complete

---

## 🔧 Alternative Fix: Command Line se

Agar tum Vercel CLI use karte ho:

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Login
vercel login

# Link project
vercel link

# Add environment variables
vercel env add SUPABASE_URL production
# Enter: https://sdcbejgqhkglnxsatdzr.supabase.co

vercel env add SUPABASE_PUBLISHABLE_KEY production
# Enter: sb_publishable_bVGyvcxl0zZpws0c5voGWw_8Vj_ySJf

vercel env add VITE_SUPABASE_URL production
# Enter: https://sdcbejgqhkglnxsatdzr.supabase.co

vercel env add VITE_SUPABASE_PUBLISHABLE_KEY production
# Enter: sb_publishable_bVGyvcxl0zZpws0c5voGWw_8Vj_ySJf

# Redeploy
vercel --prod
```

---

## 🛡️ Additional Vercel Settings

### Build Settings (verify ye sahi hain):

**Framework Preset:** `Other`

**Build Command:**
```bash
npm run build
```

**Output Directory:** `.vercel/output`

**Install Command:**
```bash
npm install
```

**Node Version:** `20.x` (recommended)

---

## 🐛 Common Issues & Solutions

### Issue 1: Build Fails
**Error:** `Cannot find module '@supabase/supabase-js'`

**Fix:**
```bash
# Locally test build
npm run build

# If fails, clear cache and rebuild
rm -rf node_modules .vercel
npm install
npm run build
```

### Issue 2: Environment Variables Not Working
**Problem:** Variables add kiye but still error

**Fix:**
1. Variables save karne ke baad **exactly 1 minute** wait karo
2. Redeploy karo (simple refresh nahi, redeploy)
3. Clear browser cache

### Issue 3: 500 Error on Specific Routes
**Problem:** Homepage works but `/route` fails

**Fix:**
Check karo ki route files mein:
- No `window` or `document` access in SSR context
- No `localStorage` in server functions
- Proper `typeof window !== 'undefined'` checks

### Issue 4: Supabase Connection Timeout
**Error:** `Failed to fetch` in logs

**Fix:**
```typescript
// src/integrations/client.ts me timeout add karo
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY, {
  global: {
    fetch: createSupabaseFetch(SUPABASE_KEY),
  },
  auth: {
    storage: typeof window !== 'undefined' ? localStorage : undefined,
    persistSession: true,
    autoRefreshToken: true,
  },
  // Add timeout
  db: {
    schema: 'public'
  },
  realtime: {
    timeout: 10000 // 10 seconds
  }
});
```

---

## 📊 Verify Deployment

Deployment successful hone ke baad ye steps follow karo:

### 1. Check Build Logs
```
Vercel Dashboard → Deployments → Latest → View Function Logs
```

Look for:
- ✅ `Build completed`
- ✅ No `SUPABASE_URL` errors
- ✅ No `500` errors in logs

### 2. Test Live Site
```bash
# Open in browser
https://your-project.vercel.app

# Check console (F12)
# Should NOT see:
# - "Missing Supabase environment variable"
# - 500 errors
# - WebSocket connection failed
```

### 3. Test API Endpoints
```javascript
// Browser console me run karo
fetch('https://your-project.vercel.app')
  .then(r => r.text())
  .then(console.log)
  .catch(console.error)
```

Expected: HTML response (not error page)

---

## 🎯 Quick Checklist

Before marking as fixed:

- [ ] Environment variables added in Vercel
- [ ] Variables applied to Production + Preview
- [ ] Redeployed after adding variables
- [ ] Build logs show success
- [ ] Homepage loads without errors
- [ ] Console has no 500 errors
- [ ] Supabase connection working
- [ ] Browser cache cleared

---

## 🆘 Still Having Issues?

### Check Vercel Function Logs:
```
Dashboard → Project → Settings → Functions → View Logs
```

### Check Runtime Logs:
```
Dashboard → Project → Deployments → [Latest] → Function Logs
```

### Look for:
- "Missing environment variable"
- "ECONNREFUSED" (network issues)
- "Maximum call stack" (infinite loops)
- "Cannot read property" (undefined errors)

### Get Real-time Logs:
```bash
# Install Vercel CLI
npm i -g vercel

# Login and link
vercel login
vercel link

# Tail logs
vercel logs --follow
```

---

## 📝 Environment Variables Template

Copy-paste ye directly Vercel mein:

```env
# Supabase Core
SUPABASE_URL=https://sdcbejgqhkglnxsatdzr.supabase.co
SUPABASE_PUBLISHABLE_KEY=sb_publishable_bVGyvcxl0zZpws0c5voGWw_8Vj_ySJf
SUPABASE_PROJECT_ID=sdcbejgqhkglnxsatdzr

# Vite (Client-side)
VITE_SUPABASE_URL=https://sdcbejgqhkglnxsatdzr.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_bVGyvcxl0zZpws0c5voGWw_8Vj_ySJf
VITE_SUPABASE_PROJECT_ID=sdcbejgqhkglnxsatdzr

# Optional (for admin operations)
# SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

---

## ✅ Success Indicators

Deployment successful hai agar:
1. ✅ Build completes without errors
2. ✅ Site loads without "This page didn't load"
3. ✅ Console me no 500 errors
4. ✅ Supabase data fetch ho raha hai
5. ✅ All components render properly

---

**Next:** Environment variables add karo aur redeploy karo! 🚀
