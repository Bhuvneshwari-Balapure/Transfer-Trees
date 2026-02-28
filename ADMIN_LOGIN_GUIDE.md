# Admin Panel Login Guide

## Seed Data Setup Complete ✅

The admin panel has been seeded with the following data:

---

## Admin Account Credentials

**Use these credentials to login to the admin panel:**

- **Email:** `admin@example.com`
- **Username:** `admin`
- **Password:** `Admin@1234`
- **User ID:** `697084379f6753c4adfa86fa`
- **Role:** `admin`

---

## Demo User Accounts (for testing)

You can also use these demo accounts to test the platform:

### 1. Alice Johnson (Streamer)

- **Email:** alice@example.com
- **Username:** alice_demo
- **Password:** Demo@1234
- **User ID:** 697084379f6753c4adfa8711
- **Role:** streamer

### 2. Bob Smith (Regular User)

- **Email:** bob@example.com
- **Username:** bob_demo
- **Password:** Demo@1234
- **User ID:** 697084379f6753c4adfa8719
- **Role:** user

### 3. Carol Davis (Streamer)

- **Email:** carol@example.com
- **Username:** carol_demo
- **Password:** Demo@1234
- **User ID:** 697084379f6753c4adfa8720
- **Role:** streamer

---

## How to Login

1. **Start the Backend Server** (if not already running):

   ```bash
   cd "G:\wetransfer_trees-admin-main-2-zip_2025-11-10_0537\trees-backend-main (2)\trees-backend-main"
   npm run dev
   ```

   The backend should run on: `http://localhost:5000` (or your configured port)

2. **Start the Admin Panel** (if not already running):

   ```bash
   cd "G:\wetransfer_trees-admin-main-2-zip_2025-11-10_0537\trees-admin-main (2)\trees-admin-main"
   npm run dev
   ```

   The admin panel should run on: `http://localhost:5173`

3. **Navigate to Admin Login**:

   - Go to `http://localhost:5173`
   - Click on "Login" or navigate to the login page

4. **Enter Admin Credentials**:

   - **Email or Username:** `admin` (or `admin@example.com`)
   - **Password:** `Admin@1234`
   - Click "Login"

5. **Access Admin Dashboard**:
   Once logged in, you'll have access to:
   - Dashboard with stats
   - User Management
   - Content Moderation
   - Reports and Analytics
   - Admin Settings
   - And more...

---

## Admin Panel Features Available

After logging in with the admin account, you can access:

### 📊 Dashboard

- Total Users count
- Active Users
- Total Posts
- Total Reels
- Live Streams count
- Recent Activities

### 👥 User Management

- View all users (paginated)
- Filter by status, role, or search
- User details and statistics
- Manage user accounts
- View user interactions

### 📝 Content Moderation

- Review posts
- Review reels
- Review comments
- Action on content (approve, reject, delete)

### 📋 Reports Management

- View content reports
- Handle user reports
- Track report status
- Analytics on reported content

### ⚙️ Admin Settings

- Profile settings
- System configuration
- Logs and audit trails

---

## API Endpoints (for testing)

If you want to test the API directly using tools like Postman or curl:

### Authentication

```
POST /api/auth/login
Content-Type: application/json

{
  "identifier": "admin",
  "password": "Admin@1234"
}
```

### Admin Dashboard Stats

```
GET /api/admin/dashboard/stats
Authorization: Bearer <token>
```

### Admin Users List

```
GET /api/admin/users?page=1&limit=10
Authorization: Bearer <token>
```

### Admin Activities

```
GET /api/admin/activities/recent?limit=10
Authorization: Bearer <token>
```

### Admin Reports

```
GET /api/admin/reports
Authorization: Bearer <token>
```

---

## Backend Configuration

Make sure your backend `.env` file has the correct configuration:

```env
MONGODB_URI=mongodb://localhost:27017/social-media-platform
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d
NODE_ENV=development
```

---

## Admin Panel Configuration

Make sure your admin panel `.env` file (or `.env.local`) has:

```env
VITE_API_BASE_URL=http://localhost:5000
```

---

## Troubleshooting

### Login fails with "Invalid credentials"

- Make sure you're using the exact credentials: `admin` / `Admin@1234`
- Check that the backend server is running
- Verify the backend is accessible at the configured URL

### "Admin privileges required" error

- Make sure the user's role is set to `admin` in the database
- Check that the JWT token is valid
- Clear browser cache and try again

### Dashboard shows no data

- Make sure the backend server is running
- Verify the API base URL is correct in the admin panel
- Check browser console for any API errors

### Backend not connecting

- Start backend: `npm run dev` in the backend directory
- Check that MongoDB is running
- Verify the MongoDB URI in `.env`

---

## Sample Data Generated

The seed script has created:

- ✅ Admin user with full privileges
- ✅ 3 demo users (1 regular user, 2 streamers)
- ✅ Sample posts (for dashboard content)
- ✅ Sample reels (for streaming content)
- ✅ Sample notifications
- ✅ Sample content reports

All this data is now available in the admin panel for you to view and manage!

---

## Next Steps

1. Login with admin credentials
2. Explore the admin dashboard
3. View the demo user data
4. Test content moderation features
5. Review reports and analytics
6. Manage user accounts and settings

**Ready to login? Head to the admin panel and start managing! 🚀**
