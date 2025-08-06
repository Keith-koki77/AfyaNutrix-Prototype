# AfyaNutrix-Prototype

_Automatically synced with your [v0.dev](https://v0.dev) deployments_

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/keiths-projects-64893551/v0-afya-nutrix-mvp-requirements)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/UtpJgoGEBzJ)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Deployment

Your project is live at:

**[https://vercel.com/keiths-projects-64893551/v0-afya-nutrix-mvp-requirements](https://vercel.com/keiths-projects-64893551/v0-afya-nutrix-mvp-requirements)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/UtpJgoGEBzJ](https://v0.dev/chat/projects/UtpJgoGEBzJ)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Type Generation

This project includes automatic Supabase type generation. Make sure you have your `SUPABASE_PROJECT_ID` in your `.env` file:

```env
SUPABASE_PROJECT_ID=your-project-id-here
```

### Available Scripts

- `npm run generate-types` - Generate types once
- `npm run dev:with-types` - Generate types and start development server
- `npm run watch-types` - Watch for .env changes and regenerate types (requires nodemon)

### How it works

The type generation script automatically:

1. Reads environment variables from `.env`, `.env.local`, or `.env.development` files
2. Validates that `SUPABASE_PROJECT_ID` exists
3. Creates the `types/` directory if it doesn't exist
4. Generates TypeScript types from your Supabase schema
5. Saves them to `types/database.types.ts`
