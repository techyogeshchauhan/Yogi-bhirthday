/**
 * Supabase Connection Test Script
 * Run: npx tsx test-supabase.ts
 */

import { createClient } from '@supabase/supabase-js';
import type { Database } from './src/integrations/types';

// Load environment variables
const SUPABASE_URL = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.VITE_SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_PUBLISHABLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌ Missing Supabase credentials in .env file');
  console.log('Required:');
  console.log('  VITE_SUPABASE_URL');
  console.log('  VITE_SUPABASE_PUBLISHABLE_KEY');
  process.exit(1);
}

const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);

async function testConnection() {
  console.log('🎂 Testing Supabase Connection...\n');
  
  let allPassed = true;

  // Test 1: Wishes table
  console.log('📝 Test 1: Wishes Table');
  try {
    const { data, error } = await supabase
      .from('wishes')
      .select('*')
      .limit(1);
    
    if (error) throw error;
    console.log('✅ Wishes table working!');
    console.log(`   Found ${data?.length || 0} wishes\n`);
  } catch (error: any) {
    console.log('❌ Wishes table error:', error.message, '\n');
    allPassed = false;
  }

  // Test 2: Video Messages table
  console.log('🎥 Test 2: Video Messages Table');
  try {
    const { data, error } = await supabase
      .from('video_messages')
      .select('*')
      .limit(1);
    
    if (error) throw error;
    console.log('✅ Video messages table working!');
    console.log(`   Found ${data?.length || 0} videos\n`);
  } catch (error: any) {
    console.log('❌ Video messages table error:', error.message);
    console.log('   💡 Run migration: 20260722000000_birthday_media_tables.sql\n');
    allPassed = false;
  }

  // Test 3: Photo Booth table
  console.log('📸 Test 3: Photo Booth Table');
  try {
    const { data, error } = await supabase
      .from('photo_booth')
      .select('*')
      .limit(1);
    
    if (error) throw error;
    console.log('✅ Photo booth table working!');
    console.log(`   Found ${data?.length || 0} photos\n`);
  } catch (error: any) {
    console.log('❌ Photo booth table error:', error.message);
    console.log('   💡 Run migration: 20260722000000_birthday_media_tables.sql\n');
    allPassed = false;
  }

  // Test 4: Poll Responses table
  console.log('📊 Test 4: Poll Responses Table');
  try {
    const { data, error } = await supabase
      .from('poll_responses')
      .select('*')
      .limit(1);
    
    if (error) throw error;
    console.log('✅ Poll responses table working!');
    console.log(`   Found ${data?.length || 0} responses\n`);
  } catch (error: any) {
    console.log('❌ Poll responses table error:', error.message);
    console.log('   💡 Run migration: 20260722000000_birthday_media_tables.sql\n');
    allPassed = false;
  }

  // Test 5: Quiz Responses table
  console.log('🎯 Test 5: Quiz Responses Table');
  try {
    const { data, error } = await supabase
      .from('quiz_responses')
      .select('*')
      .limit(1);
    
    if (error) throw error;
    console.log('✅ Quiz responses table working!');
    console.log(`   Found ${data?.length || 0} quiz entries\n`);
  } catch (error: any) {
    console.log('❌ Quiz responses table error:', error.message);
    console.log('   💡 Run migration: 20260722000000_birthday_media_tables.sql\n');
    allPassed = false;
  }

  // Test 6: Storage buckets
  console.log('💾 Test 6: Storage Buckets');
  try {
    const { data: buckets, error } = await supabase.storage.listBuckets();
    
    if (error) throw error;
    
    const videosBucket = buckets?.find(b => b.name === 'videos');
    const photosBucket = buckets?.find(b => b.name === 'photos');
    
    if (videosBucket) {
      console.log('✅ Videos bucket exists');
    } else {
      console.log('❌ Videos bucket missing');
      allPassed = false;
    }
    
    if (photosBucket) {
      console.log('✅ Photos bucket exists');
    } else {
      console.log('❌ Photos bucket missing');
      allPassed = false;
    }
    console.log();
  } catch (error: any) {
    console.log('❌ Storage error:', error.message);
    console.log('   💡 Create storage buckets manually\n');
    allPassed = false;
  }

  // Test 7: Functions
  console.log('⚡ Test 7: Database Functions');
  try {
    const { data, error } = await supabase.rpc('get_visitor_stats');
    
    if (error) throw error;
    console.log('✅ Functions working!');
    console.log(`   Visitor stats: ${JSON.stringify(data)}\n`);
  } catch (error: any) {
    console.log('❌ Functions error:', error.message, '\n');
    allPassed = false;
  }

  // Summary
  console.log('═══════════════════════════════════════');
  if (allPassed) {
    console.log('✅ All tests passed! Database is ready! 🎉');
  } else {
    console.log('⚠️  Some tests failed. Check migration files.');
    console.log('📚 Read: SUPABASE_SETUP.md for instructions');
  }
  console.log('═══════════════════════════════════════\n');
}

testConnection().catch(console.error);
