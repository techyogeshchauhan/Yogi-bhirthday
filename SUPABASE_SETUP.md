# Supabase Setup Guide 🎂

Yogi Birthday App ke liye Supabase database setup karne ke instructions:

## 📋 Prerequisites
- Supabase account (https://supabase.com)
- `.env` file me SUPABASE credentials

## 🚀 Setup Steps

### 1. Supabase Dashboard me Login karo
```
https://app.supabase.com
```

### 2. SQL Editor me jao
Dashboard → SQL Editor → New Query

### 3. Migration Files Run karo (順序 में)

#### Migration 1: Basic Tables
File: `src/supabase/migrations/20260720171235_22c55446-c1eb-4c57-be25-7426bb9c8632.sql`

Ye create karega:
- ✅ `wishes` table (Guest Book)
- ✅ `friend_wall` table
- ✅ `capsule` table (Memory Capsule)
- ✅ `visitors` table

#### Migration 2: Security & Functions
File: `src/supabase/migrations/20260720172636_90593557-1edc-4b26-a618-1c56e2a90e35.sql`

Ye add karega:
- ✅ Like increment functions
- ✅ RLS policies
- ✅ Input validation triggers

#### Migration 3: Media Tables (NEW! 🎥📸)
File: `src/supabase/migrations/20260722000000_birthday_media_tables.sql`

Ye create karega:
- ✅ `video_messages` table (Video wishes store करने के लिए)
- ✅ `photo_booth` table (Photos store करने के लिए)
- ✅ `poll_responses` table (Poll votes)
- ✅ `quiz_responses` table (Quiz scores)
- ✅ `ai_wishes` table (AI generated wishes)
- ✅ Storage buckets (`videos`, `photos`)
- ✅ Like increment functions for all tables
- ✅ Poll stats function

### 4. Storage Buckets Verify karo

Dashboard → Storage me check karo ki ye buckets ban gaye:
- `videos` bucket (100MB limit, video files ke liye)
- `photos` bucket (10MB limit, image files ke liye)

Agar nahi bane to manually create karo:
```sql
-- Videos bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'videos',
  'videos',
  true,
  104857600,
  ARRAY['video/mp4', 'video/webm', 'video/quicktime']
);

-- Photos bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'photos',
  'photos',
  true,
  10485760,
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
);
```

### 5. Realtime Enable karo

Dashboard → Database → Replication me check karo ki ye tables enabled hain:
- ✅ wishes
- ✅ friend_wall
- ✅ video_messages
- ✅ photo_booth
- ✅ ai_wishes
- ✅ quiz_responses

## 📊 Database Schema

### Tables Overview

| Table | Purpose | Key Features |
|-------|---------|-------------|
| `wishes` | Guest book messages | Likes, approval, pinning |
| `friend_wall` | Friend memories with photos | Approval required |
| `capsule` | Time-locked messages | Unlocks on birthday |
| `visitors` | Track site visitors | Country tracking |
| `video_messages` | Video wishes | Approval, likes, thumbnails |
| `photo_booth` | Photo booth captures | Filters, approval, likes |
| `poll_responses` | Poll voting | One vote per user |
| `quiz_responses` | Quiz scores | Leaderboard data |
| `ai_wishes` | AI generated wishes | Tone-based, likes |

### Security (RLS Policies)

**Public Can:**
- ✅ Read approved content
- ✅ Insert new entries (goes to moderation)
- ✅ Like approved items

**Cannot:**
- ❌ Update or delete entries
- ❌ See unapproved content
- ❌ Bypass moderation

### Functions Available

```typescript
// Increment likes (safe)
increment_wish_likes(_wish_id: uuid) → number
increment_video_likes(_video_id: uuid) → number
increment_photo_likes(_photo_id: uuid) → number
increment_ai_wish_likes(_wish_id: uuid) → number

// Get stats
get_visitor_stats() → { total, countries }
get_poll_stats(_poll_id: text) → { option_id, vote_count }[]
```

## 🔧 Troubleshooting

### WebSocket Connection Error
Agar ye error aa rahi hai:
```
WebSocket connection to 'wss://xxx.supabase.co/realtime/v1/websocket' failed
```

**Solutions:**
1. Check karo `.env` file me sahi credentials hain
2. Supabase project active hai (not paused)
3. Realtime enabled hai tables pe
4. Browser console clear karo aur refresh karo

### Migration Errors

Agar SQL errors aate hain:
1. Tables already exist error → Tables manually delete karo
2. Function already exists → `DROP FUNCTION` pehle run karo
3. Storage policies → Existing policies delete karo pehle

### Testing Database Connection

```typescript
// Test code
import { supabase } from '@/integrations/client';

// Test wishes table
const { data, error } = await supabase
  .from('wishes')
  .select('*')
  .limit(5);

console.log('Database test:', { data, error });
```

## 📱 Admin Panel

Approved content manage karne ke liye:
1. Dashboard → Table Editor me jao
2. `approved` column ko `true/false` set karo
3. Content live ho jayega automatically

## 🎯 Next Steps

1. ✅ Migrations run karo
2. ✅ Storage buckets verify karo
3. ✅ Realtime enable karo
4. ✅ Test connection app se
5. ✅ Start uploading videos & photos!

## 📞 Support

Issues ke liye:
- Supabase Docs: https://supabase.com/docs
- Project Dashboard: https://app.supabase.com/project/sdcbejgqhkglnxsatdzr

---

Happy Birthday Yogesh! 🎉🎂
