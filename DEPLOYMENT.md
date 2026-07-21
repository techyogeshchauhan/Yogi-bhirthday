# 🚀 Vercel Deployment Guide

## Prerequisites
- GitHub account
- Vercel account (sign up at vercel.com)
- Git installed on your system

## Step-by-Step Deployment

### 1. Push to GitHub

```bash
# Make sure you're in the project directory
cd D:\Yogi-bhirthday

# Check git status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Ready for Vercel deployment"

# Push to GitHub
git push origin main
```

If you get network errors, check your internet connection and try again.

### 2. Deploy on Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "Add New Project"
4. Import your GitHub repository `techyogeshchauhan/Yogi-bhirthday`
5. Configure the project:
   - **Framework Preset**: Other
   - **Build Command**: `npm run build`
   - **Output Directory**: `.output/public`
   - **Install Command**: `npm install`

6. Add Environment Variables:
   - Click "Environment Variables"
   - Add these variables:
     ```
     SUPABASE_URL=https://sdcbejgqhkglnxsatdzr.supabase.co
     SUPABASE_PUBLISHABLE_KEY=sb_publishable_bVGyvcxl0zZpws0c5voGWw_8Vj_ySJf
     VITE_SUPABASE_URL=https://sdcbejgqhkglnxsatdzr.supabase.co
     VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_bVGyvcxl0zZpws0c5voGWw_8Vj_ySJf
     ```

7. Click "Deploy"
8. Wait for deployment to complete (2-5 minutes)
9. Your site will be live at `https://your-project.vercel.app`

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (from project directory)
cd D:\Yogi-bhirthday
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? yogi-birthday (or your choice)
# - Directory? ./
# - Override settings? No

# For production deployment
vercel --prod
```

### 3. Configure Environment Variables (CLI Method)

```bash
# Add environment variables via CLI
vercel env add SUPABASE_URL
# Enter: https://sdcbejgqhkglnxsatdzr.supabase.co

vercel env add SUPABASE_PUBLISHABLE_KEY
# Enter: sb_publishable_bVGyvcxl0zZpws0c5voGWw_8Vj_ySJf

vercel env add VITE_SUPABASE_URL
# Enter: https://sdcbejgqhkglnxsatdzr.supabase.co

vercel env add VITE_SUPABASE_PUBLISHABLE_KEY
# Enter: sb_publishable_bVGyvcxl0zZpws0c5voGWw_8Vj_ySJf

# Redeploy with environment variables
vercel --prod
```

## 🔧 Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure `.env` file is not committed (should be in `.gitignore`)
- Verify build command works locally: `npm run build`

### Environment Variables Not Working
- Make sure variables are added in Vercel dashboard
- Redeploy after adding environment variables
- Check variable names match exactly (case-sensitive)

### 404 Errors on Routes
- Vercel configuration in `vercel.json` handles this
- If issues persist, check the rewrites configuration

### Supabase Connection Issues
- Verify Supabase URL and keys are correct
- Check Supabase project is active
- Ensure RLS policies are configured

## 📱 Post-Deployment

1. **Custom Domain** (Optional):
   - Go to Vercel project settings
   - Add your custom domain
   - Update DNS records as instructed

2. **Analytics**:
   - Vercel provides built-in analytics
   - View in project dashboard

3. **Monitoring**:
   - Check deployment logs in Vercel dashboard
   - Monitor function execution times
   - Review error logs

## 🎉 Success!

Your birthday countdown website is now live! Share the link:
- Production: `https://your-project.vercel.app`
- Admin Panel: `https://your-project.vercel.app/admin`
- Password: `birthday2026`

## 📝 Notes

- Vercel automatically redeploys when you push to `main` branch
- Preview deployments are created for pull requests
- Environment variables can be different for production/preview
- Free tier includes:
  - Unlimited deployments
  - 100GB bandwidth/month
  - Serverless functions
  - Automatic SSL

## 🔄 Update Deployment

To update your live site:

```bash
# Make changes to your code
# Commit changes
git add .
git commit -m "Update feature"

# Push to GitHub
git push origin main

# Vercel will automatically deploy the changes!
```

## 🆘 Need Help?

- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- GitHub Issues: Create an issue in your repository
