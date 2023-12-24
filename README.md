- database: coacrochdb, softwarepathandcv@gmail.com

- [x] "npx create-next-app@latest {project-name}" to initialize nextjs
- [x] change layout, delete assets, change metadata
- [x] remove page.tsx // balance page
- [x] create .env file, add .env to .gitignore

- [x] "npx shadcn-ui@latest init" to initialize shadcn
- [x] html, body, :root { height: 100% } thing at app/globals.css
- [x] "npx shadcn-ui@latest add button" to add button

- [x] "npm i @clerk/nextjs"
- [x] create clerk project
- [x] add .env keys and .env after sign out shits
- [x] add providers/clerk-provider.tsx and add wrap layout.tsx's children
- [x] add middleware.ts
- [x] add app/(auth)

- [x] "npm i axios"
- [x] "npm i @tanstack/react-query"
- [x] add providers/query-provider.tsx and wrap layout.tsx's children

- [x] npm i uuid
- [x] npm i -D @types/uuid
- [x] note: import { v4 as uuid } from "uuid"; when it needed

- [x] create coachroachdb cluster
- [x] press connect -> create new sql user -> copy password -> copy general connection string -> paste to .env as DATABASE_URL
- [x] "npm i -D prisma"
- [x] "npm i @prisma/client"
- [x] "npx prisma init"
- [x] create lib/db.ts
- [x] add "postinstall": "prisma generate" to package.json's scripts
- [x] change datasource db provider to cockroachdb in schema.prisma
- [x] note: "npx prisma generate" and "npx prisma db push" whenever schemas have changed
- [x] note: "npx prisma studio" to manage content
- [x] create Profile schema to keep users better
- [x] create lib/initial-profile.ts and lib/current-profile.ts
