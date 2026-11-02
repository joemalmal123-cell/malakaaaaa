# OurWorld engine plan

OurWorld is an original game-creation platform. The historical Roblox 2016 repository is a learning reference only; this project does not copy its proprietary source files.

## What we are building

| OurWorld system | What it will do | First implementation |
| --- | --- | --- |
| Player client | Show and control the player's character | Browser-based 3D scene |
| World renderer | Draw terrain, blocks, and avatars | Three.js |
| Studio editor | Let players place and edit objects | Grid-based block editor |
| Avatar system | Create and customize player characters | Original character model and color settings |
| Multiplayer service | Let players join the same world | Server-authoritative WebSocket service |
| Accounts and saves | Sign in and save creations | Supabase Auth and database |
| Creator publishing | Save and list player-made worlds | World metadata and saved scene data |

## How the old project helps us learn

The reference repository has areas named like a client, Studio, rendering, networking, and server services. Those names help us understand the kinds of systems a game platform needs. They are not code we should copy unless a specific file is proven to have a license that permits reuse.

## Build order

1. Make a 3D scene and a controllable character.
2. Add a block placement editor and save a world locally.
3. Add accounts and cloud saves.
4. Add multiplayer rooms.
5. Add avatar customization and a public world browser.

## Important

Before reusing any third-party library, check its own license and comply with its terms. Do not assume the entire historical source repository has one permissive license.
