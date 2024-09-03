This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

npm run dev 
26:30
# THE FUCKING ENV 
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
They are deprecated in nextjs 5.0 version or above, so instead use

NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/
# END THE FUCKING ENV


NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/


npm run dev 
1:10:17 (7-8-24)

mongo : lamstore_admin / 12345


1:40:15 (8-8-2024)

2.10.36 (10-8-2024)

2.50.00 (11-8-2024)

3.20:16 (12-8-2024)

3.51.29 (13-8-2024)

4.20.00 (14-8-2024)

admin 
LiamDoanUser3@gmail.com
Abc@1234567abc

user ( same but 6 )

NEW USER : LIAM DOAN PHAN 
LiamDoanUser7gmail.com
Abc@12345Abc

! REMEMBER TO HOST THE ADMIN FIRST AND USE THE CLIENT SIDE ON A DIFFERENT BROWSER ( EDGE ) ! 

4:50:22 ( 15-8-2024) Beginning of the Client side

5:20:47 ( 18 - 8 - 2024 ) 

5:50:17 ( 19 - 8 - 2024 )

6:20:30 ( 20 - 8 - 2024 )

stripe : doanphlam@gmail.com
        LAM DOAN PHAN 
        bmwx6mvietnam


6:50:09 ( 21 -8 - 2024 ) AT ADMIN DASHBOARD

/////////////////////////////////////////////

Microsoft Windows [Version 10.0.19045.4780]
(c) Microsoft Corporation. All rights reserved.

C:\Users\Lam>cd C:\Users\Lam\Desktop\stripe_1.21.2_windows_x86_64

C:\Users\Lam\Desktop\stripe_1.21.2_windows_x86_64>stripe login
Your pairing code is: amaze-pepped-defeat-entice
This pairing code verifies your authentication with Stripe.
Press Enter to open the browser or visit https://dashboard.stripe.com/stripecli/confirm_auth?t=EKewNB6cjmu7kESNbRxjDi1qZn8bpRTJ (^C to quit)exceeded max attempts

C:\Users\Lam\Desktop\stripe_1.21.2_windows_x86_64>stripe listen --forward-to localhost:3000/api/webhooks
You have not configured API keys yet. Running `stripe login`...
Your pairing code is: thrift-regal-warmer-comfy
This pairing code verifies your authentication with Stripe.
Press Enter to open the browser or visit https://dashboard.stripe.com/stripecli/confirm_auth?t=udbBlf1p8HRLlRVBqYCmI4PzgSSiLlzu (^C to quit)exceeded max attempts

C:\Users\Lam\Desktop\stripe_1.21.2_windows_x86_64>stripe listen --forward-to localhost:3000/api/webhooks
You have not configured API keys yet. Running `stripe login`...
Your pairing code is: robust-quiet-champ-gentle
This pairing code verifies your authentication with Stripe.
Press Enter to open the browser or visit https://dashboard.stripe.com/stripecli/confirm_auth?t=tj3bmSm15YvtwJTbgxMjmB8iop54Z0iy (^C to quit)
> Done! The Stripe CLI is configured for your account with account id acct_1PqEg902oCU5uVZz

Please note: this key will expire after 90 days, at which point you'll need to re-authenticate.

C:\Users\Lam\Desktop\stripe_1.21.2_windows_x86_64>stripe listen --forward-to localhost:3000/api/webhooks
> Ready! You are using Stripe API Version [2024-06-20]. Your webhook signing secret is whsec_c7a82924f3d31b11fcd32cf59408e322cf1e547c434b239d7da8ac1b6ea464af (^C to quit)



HOW TO LOGIN STRIPE 

Step 1 : open cmd -> cd C:\Users\Lam\Desktop\stripe_1.21.2_windows_x86_64

Step 2 : stripe login

Step 3 : stripe listen --forward-to localhost:3000/api/webhooks

Step 4 : i will show a key and you copy and paste on env 

////////////////////////////////////////////////


7:11:42 ( THE CMD STRIPE LOGIN )

7:23:05 ( 22 - 8 - 2024 ) 

8:09:29 ( 25 - 8 - 2024 ) IDK WHY TF IT DOESNT UPLOAD THE NEW PRODUCT ON CLIENT SIDE 

8:09:29 ( 26 - 8 - 2024 ) fixed it , fucking actions file


8:40:06 ( 27 - 5 - 2024 ) Remember to boot up the stripe make sure it's doenst returns any error
CAREFUL TO CHECK [ORDERID] PAGE on Dashboard cus its different.

Check add product edit product - add user - add Customer ( When already ordered counts )

9:13:54 (28 - 8 - 2024) 

9:47:55 (29 - 8 - 2024)


!!!! ATTENTION !!!! 
THE FUCKING COLLECTION DOESNT UPDATE THE PRODUCT SO HERES HOW YOU DO :
Step 1 : Go to that product in Admin Panel
Step 2 : Delete the collection and escape 
Step 3 : Go back to that product again and add the collection 

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!