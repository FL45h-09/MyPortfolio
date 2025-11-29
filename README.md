# 🧊 Vishal’s Portfolio Analytics

A lightweight, serverless, Vercel-friendly analytics system — **no database, no backend maintenance, no rate-limit anxiety**.  
Just clean React, smart caching, cookie-based protection, GitHub API stats, and Vercel Edge Functions powering everything.

This project tracks:

- 👀 Total page views  
- ❤️ Appreciation count (“Love this portfolio” button)  
- 🧑‍💻 GitHub followers, following & public repos (cached)  
- 🧠 Duplicate prevention using cookies  
- ⚡ Extremely fast performance through Vercel Edge runtime  

Built with **Next.js + Tailwind + Vercel Edge Functions**.  
Crafted by **Vishal Ravanank** with vibes, precision, and dedication.

---

## 🛠️ Tech Stack

| Tech | Purpose |
|------|---------|
| **Next.js 14** | Routing, SSR, Edge support |
| **Vercel Edge Functions** | Serverless analytics without a DB |
| **Tailwind CSS** | Rapid styling, responsive UI |
| **Cookies (browser)** | Prevent duplicate view/like spam |
| **GitHub REST API** | Real-time GitHub stats (cached) |

---

## ✨ Features

### 🔥 1. Smart View Tracking (No Database Needed)
Whenever a visitor lands on the site:

- Increments page view count  
- Saves value in Vercel KV / Edge Cache  
- Cookie prevents same-user spam refresh  
- Works globally with ultra-low latency  

### ❤️ 2. Appreciation Counter
A clean button:
❤️ Love this portfolio

When clicked:

- Appreciation count increases  
- User gets a cookie  
- Button can't be spammed  
- Updates instantly on UI  

### 🧠 3. GitHub Stats (Cached)
- Followers  
- Following  
- Public Repos  

Fetched once every few hours → never hits rate limit.  
Ultra-fast render thanks to caching.

### ⚡ 4. Built for Performance
- Dark-themed UI  
- Responsive grid  
- Smooth transitions  
- Clean card layout  
- Minimal API calls  

---
