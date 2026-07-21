# 🎂 Birthday Countdown - Premium Celebration Website

A beautiful, interactive birthday countdown website with wishes, memories, timeline, and more!

## ✨ Features

- 🎯 **Real-time Countdown** - Days, hours, minutes, seconds to birthday
- 💝 **Guest Wishes** - Friends can leave birthday wishes
- 📸 **Photo Gallery** - Beautiful memories showcase
- 🎂 **Interactive Cake** - Blow the candles animation
- 📅 **Timeline** - Life journey milestones
- 🏆 **Achievements** - Showcasing accomplishments
- 🎁 **Gift Options** - UPI/PayPal with QR code
- 🤖 **AI Wishes** - Generate personalized wishes
- 📊 **Admin Panel** - Manage wishes and content
- 🌍 **Visitor Counter** - Track visits and countries
- 🎨 **Beautiful UI** - Glass morphism, gradients, animations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (for database)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/techyogeshchauhan/Yogi-bhirthday.git
   cd Yogi-bhirthday
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Add your Supabase credentials:
   ```env
   SUPABASE_URL=your-supabase-url
   SUPABASE_PUBLISHABLE_KEY=your-publishable-key
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_PUBLISHABLE_KEY=your-publishable-key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   - Visit: http://localhost:8081
   - Admin: http://localhost:8081/admin
   - Password: `birthday2026`

## 🎨 Customization

Edit `src/lib/birthday-config.ts` to personalize:

```typescript
export const BIRTHDAY_CONFIG = {
  name: "Your Name",
  birthday: "2026-07-31T00:00:00",
  birthYear: 2001,
  tagline: "Your tagline here",
  socials: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    // ... other social links
  },
  adminPassword: "your-admin-password",
};
```

## 📦 Tech Stack

- **Framework**: React + TanStack Start
- **Styling**: Tailwind CSS + Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Build Tool**: Vite
- **UI Components**: Radix UI + Shadcn
- **Animations**: Framer Motion + Canvas Confetti
- **Icons**: Lucide React

## 🗄️ Database Setup

The app uses Supabase with these tables:
- `wishes` - Birthday wishes from guests
- `visitors` - Visitor tracking
- `poll_votes` - Poll responses

SQL migrations are in `src/supabase/migrations/`

## 📱 Admin Panel

Access admin panel at `/admin` to:
- View all wishes
- Approve/hide wishes
- Pin important wishes
- Delete spam
- View statistics

**Default Password**: `birthday2026` (change in config)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

**Quick Deploy**:
1. Push to GitHub: `git push origin main`
2. Import on [Vercel](https://vercel.com)
3. Add environment variables
4. Deploy! 🚀

Or use the included script:
```bash
# Windows
deploy.bat

# Manual
git add .
git commit -m "Deploy"
git push origin main
```

### Environment Variables for Production

Add these in Vercel dashboard:
- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

## 🎯 Project Structure

```
Yogi-bhirthday/
├── src/
│   ├── components/
│   │   ├── birthday/
│   │   │   └── BirthdayApp.tsx    # Main app component
│   │   └── ui/                    # Reusable UI components
│   ├── routes/
│   │   ├── index.tsx              # Home page
│   │   ├── admin.tsx              # Admin panel
│   │   └── __root.tsx             # Root layout
│   ├── lib/
│   │   ├── birthday-config.ts     # Configuration
│   │   ├── ai-wish.functions.ts   # AI functions
│   │   └── utils.ts               # Utilities
│   └── integrations/
│       ├── client.ts              # Supabase client
│       └── types.ts               # TypeScript types
├── public/
│   ├── qrcode.jpeg                # Payment QR code
│   └── favicon.svg                # Site icon
├── .env                           # Environment variables
├── vercel.json                    # Vercel config
└── package.json                   # Dependencies
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Key Components

### BirthdayApp.tsx
Main component containing:
- Hero section with countdown
- Life stats
- Timeline
- Achievements
- Gallery
- Interactive cake
- Guest book
- AI wish generator
- Friend wall
- Memory capsule
- Poll
- Quiz
- Gifts section
- Social links

### Admin Panel
Full-featured dashboard:
- Statistics cards
- Wish management
- Approve/hide/pin/delete
- Beautiful UI with animations

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Kill process on port 8081 (Windows)
netstat -ano | findstr :8081
taskkill /PID <PID> /F
```

**Build errors?**
```bash
# Clear cache and reinstall
rm -rf node_modules .output
npm install
npm run build
```

**Environment variables not working?**
- Check `.env` file exists
- Restart dev server
- Verify variable names match exactly

## 📄 License

MIT License - feel free to use for your own birthday website!

## 🙏 Acknowledgments

- Built with [TanStack Start](https://tanstack.com/start)
- UI inspired by modern glass morphism designs
- Icons by [Lucide](https://lucide.dev)
- Animations by [Framer Motion](https://www.framer.com/motion/)

## 📞 Support

For issues or questions:
- Create an issue on GitHub
- Email: yogesh.chauhan.ai@gmail.com

---

Made with ❤️ for an amazing birthday celebration! 🎉
