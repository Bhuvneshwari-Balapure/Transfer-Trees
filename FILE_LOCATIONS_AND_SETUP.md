# 📍 Admin Setup - File & Credential Locations

## 🔐 Credentials
- **Location:** See files below
- **Admin Email:** admin@example.com
- **Admin Username:** admin
- **Admin Password:** Admin@1234

## 📁 Key Files

### Seed Data Output
```
📄 seed-output/admin-seed-data.txt
   └─ Contains all credentials and IDs
```

### Documentation
```
📄 ADMIN_LOGIN_GUIDE.md (in root folder)
   └─ Comprehensive login guide with all details
   
📄 ADMIN_SETUP_COMPLETE.md (in root folder)
   └─ Complete setup summary
   
📄 QUICK_LOGIN_REFERENCE.txt (in root folder)
   └─ Quick reference card
```

### Backend Seed Scripts
```
📄 scripts/seed-admin.js
   └─ Creates admin user and demo users
   
📄 scripts/verify-admin.js
   └─ Verifies admin setup is correct
```

### Backend Configuration
```
📁 trees-backend-main/
   ├─ .env (check MONGODB_URI, JWT_SECRET)
   ├─ server.js (runs on port 5000)
   └─ package.json (has seed:admin script)
```

### Admin Panel Configuration
```
📁 trees-admin-main/
   ├─ .env.local (check VITE_API_BASE_URL)
   ├─ src/components/AdminLogin.tsx (login form)
   ├─ src/services/api/auth.ts (auth service)
   └─ src/AdminApp.tsx (main app)
```

## 🚀 Running Everything

### 1. Terminal 1 - Backend
```bash
cd "G:\wetransfer_trees-admin-main-2-zip_2025-11-10_0537\trees-backend-main (2)\trees-backend-main"
npm run dev
# Runs on http://localhost:5000
```

### 2. Terminal 2 - Admin Panel
```bash
cd "G:\wetransfer_trees-admin-main-2-zip_2025-11-10_0537\trees-admin-main (2)\trees-admin-main"
npm run dev
# Runs on http://localhost:5173
```

### 3. Terminal 3 - Verify Setup (optional)
```bash
cd "G:\wetransfer_trees-admin-main-2-zip_2025-11-10_0537\trees-backend-main (2)\trees-backend-main"
node scripts/verify-admin.js
```

## 📊 What's in the Database

### Users
- ✅ admin (role: admin)
- ✅ alice_demo (role: streamer)
- ✅ bob_demo (role: user)
- ✅ carol_demo (role: streamer)

### Posts
- Sample posts created by demo users

### Reels
- Sample reels from streamers

### Notifications
- Sample notifications for testing

### Reports
- Sample content reports (open and resolved)

## 🔍 How Admin Panel Works

1. **User logs in** at http://localhost:5173
2. **Frontend sends** POST to `/api/auth/login`
3. **Backend verifies** credentials in MongoDB
4. **Backend returns** JWT token if valid
5. **Frontend stores** token in localStorage
6. **Frontend uses** token for all API calls
7. **Admin checks** if role === "admin"
8. **If admin** → Access granted to admin panel

## ✅ Verification Checklist

- [ ] Backend running (`npm run dev`)
- [ ] MongoDB running
- [ ] Admin panel running (`npm run dev`)
- [ ] Can access http://localhost:5173
- [ ] Credentials work: admin / Admin@1234
- [ ] Dashboard loads with stats
- [ ] Can see demo users
- [ ] Can view posts/reels
- [ ] Can access admin features

## 🎯 Admin Features Now Available

- 📊 Dashboard (stats, activities)
- 👥 User Management (list, search, filter)
- 📝 Posts Management (view, moderate)
- 🎬 Reels Management (view, moderate)
- 📋 Reports (view, process)
- ⚙️ Settings (admin settings)
- 📈 Analytics (data insights)

## 🛠️ Available Commands

```bash
# In trees-backend-main folder:
npm run dev              # Start backend
npm run seed:admin       # Create admin user
npm run seed:users       # Create demo users
node scripts/verify-admin.js  # Verify setup

# In trees-admin-main folder:
npm run dev              # Start admin panel
npm run build            # Build for production
npm run preview          # Preview production build
```

## 📞 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Can't login | Check backend is running, verify credentials |
| No data in dashboard | Restart both servers, clear browser cache |
| 404 errors | Verify API URL in .env, restart backend |
| MongoDB errors | Check MongoDB is running, verify connection string |

---

**Everything is ready! You can now:**
1. ✅ Login as admin
2. ✅ View dashboard data
3. ✅ Manage users
4. ✅ Moderate content
5. ✅ Process reports
6. ✅ Access all admin features

**Start by logging in with: admin / Admin@1234** 🚀
