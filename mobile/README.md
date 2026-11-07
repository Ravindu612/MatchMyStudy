# MatchMyStudy mobile

This is the MatchMyStudy phone app. It uses the same Supabase project as the website: the same accounts, the same tables, the same row security, and the same photo storage. It does not change the website, and it is not part of the Vercel deploy.

This version lets you sign in, read the feed, like a post, open a post and add a comment, and view or edit a profile. Network, Messages, and Notifications are placeholders for later.

The app is Expo SDK 58 (the current SDK) with Expo Router and TypeScript.

## Run it on your phone with Expo Go

You need Node.js 22 or newer on the computer, and the phone and the computer on the same Wi-Fi.

1. Install Expo Go on the phone. This project is SDK 58, so Expo Go has to be the SDK 58 build.
   - Android: open Expo Go from the Play Store. If it says the project is for a newer SDK, install the SDK 58 build from [https://expo.dev/go](https://expo.dev/go).
   - iPhone: update Expo Go from the App Store. The App Store build moved to SDK 58 shortly after the SDK release. Until that update is on your phone, Expo Go will not open this project. An Android phone can install the matching Expo Go right away from the link above.
2. On iPhone, Expo Go asks you to be logged in. Use the same Expo account in the terminal (`npx expo login`) and in the Expo Go app.
3. In this repo, open a terminal in the `mobile` folder.
4. Copy `.env.example` to `.env`.
5. In the Supabase dashboard, open Project Settings, then API. Paste the project URL into `EXPO_PUBLIC_SUPABASE_URL` and the anon key into `EXPO_PUBLIC_SUPABASE_ANON_KEY`. These are the same values the website uses. The anon key is public. Row security is what protects the data.
6. Run `npm install`.
7. Run `npx expo start`.
8. Scan the QR code. On iPhone, use the Camera app. On Android, use the Scan button inside Expo Go.
9. If you change `.env`, stop Expo and start it again. The URL and key are baked in when the app bundles.

There is no App Store or Play Store submission in this version.

## Supabase redirect URL

Google sign-in sends the person back to the app with a custom link. Supabase will refuse that link until you allow it.

In the Supabase dashboard, open **Authentication → URL Configuration → Redirect URLs** and add:

`matchmystudy://auth/callback`

That is the address the installed app uses (`matchmystudy://`). Add it even if you only test in Expo Go, because a development build and a future store build use it.

Expo Go does not use that custom scheme. While the sign-in screen is open in Expo Go, it also shows an `exp://…/--/auth/callback` address. Add that exact address to the same Redirect URLs list, or Google sign-in will open and then fail to come back to Expo Go. You can remove the `exp://` address when you stop testing in Expo Go.

The Google provider should already be turned on, because the website signs in with Google. You do not need a separate Google client for the phone app. Supabase still receives the Google login, then redirects to the URL above.

## Email sign-in

The phone app signs in with the same email and password as the website. New accounts pick Student or Consultant, the same two roles the website allows.

If email confirmation is turned on in Supabase, a new account has to open the confirmation email before the first sign-in. Those links also come back through `matchmystudy://auth/callback`, so the redirect URL above covers them.
