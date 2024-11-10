This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

# Utilities

---

# Button Component

This is a customizable `Button` component built with nextjs and styled using Tailwind CSS. The component supports various configurations such as text, size, color, variant, and optional icons to create flexible and reusable buttons.

## Features

- **Customizable Size**: Choose from `small`, `medium`, and `large` button sizes.
- **Color Variants**: Choose from predefined color schemes (`primary`, `success`, `warning`, `error`, `neutral`).
- **Button Styles**: Customize button style with `solid`, `outlined`, or `ghost` variants.
- **Icon Support**: Add optional icons to the left or right of the button text.
- **Click Handler**: The button accepts an optional `onClick` handler to trigger custom actions.
- **Fully Responsive**: Designed to work well on all screen sizes.

## Props

The `Button` component accepts the following props:

| Prop        | Type                                                          | Description                                                        |
| ----------- | ------------------------------------------------------------- | ------------------------------------------------------------------ |
| `text`      | `string`                                                      | The text displayed on the button.                                  |
| `size`      | `"small" \| "medium" \| "large"`                              | The size of the button. Default is `medium`.                       |
| `color`     | `"primary" \| "success" \| "warning" \| "error" \| "neutral"` | The color of the button. Default is `primary`.                     |
| `variant`   | `"solid" \| "outlined" \| "ghost"`                            | The button variant style. Default is `solid`.                      |
| `leftIcon`  | `React.ReactNode`                                             | An optional icon to be displayed on the left side of the button.   |
| `rightIcon` | `React.ReactNode`                                             | An optional icon to be displayed on the right side of the button.  |
| `className` | `string`                                                      | Additional custom CSS classes to apply to the button.              |
| `onClick`   | `() => void`                                                  | An optional function that is triggered when the button is clicked. |

## Usage

Here is how to use the `Button` component:

### Button with Text and Icons

```tsx
<Button
  text="Submit"
  size="medium"
  color="primary"
  variant="solid"
  leftIcon={<Icon />}
  rightIcon={<Icon />}
 onClick={() => console.log("Saved")}
  className="w-full"
/>
<Button
  text="Submit"
  size="medium"
  color="primary"
  variant="solid"
  leftIcon={<Icon />}
  className=""
/>
```

# Card Component

The `Card` component is a reusable UI element that displays a title, description, and a button. The button inside the card can trigger a custom function when clicked.

## Features

- **Title & Description**: Display a title and description inside the card.
- **Button**: A customizable button that can trigger an action on click.
- **Responsive Design**: The card is designed to be flexible and adapt to different screen sizes.
- **Customizable**: Pass custom props to change the title, description, button text, and button click handler.

## Props

The `Card` component accepts the following props:

| Prop            | Type         | Description                                                        |
| --------------- | ------------ | ------------------------------------------------------------------ |
| `title`         | `string`     | The title displayed at the top of the card.                        |
| `description`   | `string`     | The description text shown under the title.                        |
| `buttonText`    | `string`     | The text displayed on the button inside the card.                  |
| `onButtonClick` | `() => void` | An optional function that is triggered when the button is clicked. |

```tsx
<Card
  title="Card Title"
  description="This is a description of the card content."
  buttonText="Click Me"
  onButtonClick={() => console.log("Button clicked")}
/>
```
