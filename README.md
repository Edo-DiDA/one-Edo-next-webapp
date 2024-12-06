# Project Name: **oneEdo**

A brief description of oneEdo,its key components and its application.

---

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## About

**oneEdo** is a Next.js-powered web application that emphasizes modularity and maintainability. It exists to help developers, organizations, and individuals create scalable solutions efficiently. This project targets developers seeking a robust and adaptable framework with reusable components for building high-quality web applications.

For more details, visit the [GitHub repository](https://github.com/Edo-DiDA/one-Edo-next-webapp).

---

## Getting Started

### Prerequisites

This project requires **Yarn** as the package manager.

#### What is Yarn?

Yarn is a fast, reliable, and secure dependency manager for JavaScript projects. It enhances workflows with better performance and deterministic installations.

To install Yarn:

```bash
# Ensure you have the following prerequisites:
Node.js >= 18.17.0
npm >= 7.0.0

# Install Yarn globally:
npm install --global yarn
```

For alternative installation methods, refer to the [Yarn Official Documentation](https://classic.yarnpkg.com/en/docs/install).

---

### Installation

Follow these steps to set up the project locally:

```bash
# Clone the repository
git clone https://github.com/Edo-DiDA/one-Edo-next-webapp.git

# Navigate to the project directory
cd one-Edo-next-webapp

# Install dependencies
yarn install
```

### Start the Project

Run the development server with:

```bash
yarn dev
```

---

## Usage

### Reusable Components

This project utilizes **reusable components** to ensure consistency, efficiency, and maintainability throughout the application. These modular components reduce duplication and simplify updates.

---

### Reusable Component: `ContentLayout`

The `ContentLayout` component structures content areas with a header and search functionality.

#### Features

- **Sticky Header**: Stays fixed at the top on large devices.
- **Search Functionality**: Includes a dynamic search bar.
- **Responsive Design**: Adapts seamlessly to different screen sizes.
- **Customizable Content**: Accepts child elements for flexibility.

#### Example Usage

```tsx
import ContentLayout from "@/components/contents/Layout";

const ComponentLayout = ContentLayout;

export default ComponentLayout;
```

---

### Reusable Component: `Breadcrumbs`

The `Breadcrumbs` component provides a navigation aid, displaying a series of links for easier navigation.

#### Features

- **Dynamic Breadcrumb Links**: Generated based on provided props.
- **Chevron Separator**: Icons separate links for better clarity.
- **Conditional Styling**: Last breadcrumb styled as non-clickable.

### Props

- **`items`** (`BreadcrumbType[]`): An array of breadcrumb items that should be rendered. Each item should have the following structure:
  - **`id`** (`string`): A unique identifier for the breadcrumb.
  - **`page`** (`object`): An object representing the page for this breadcrumb, containing:
    - **`name`** (`string`): The name of the page.
    - **`slug`** (`string`): The URL slug for the page.

#### Example Usage

```tsx
import Breadcrumbs from "@/components/Breadcrumbs";

const MyPage = () => {
  const breadcrumbItems = [
    { id: "1", page: { name: "Home", slug: "" } },
    { id: "2", page: { name: "Services", slug: "services" } },
    { id: "3", page: { name: "Web Development", slug: "web-development" } },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} />
    </div>
  );
};
```

---

### Reusable Component: `MenuButton`

The `MenuButton` is a simple, reusable button for various actions.

#### Features

- **Customizable Text**: Pass text via props.
- **Action Trigger**: Attach custom functions.
- **Basic Styling**: Easily customizable Tailwind CSS styles.

### Props

- **text** (string - optional): The label that will be displayed on the button. Defaults to "Menu" if not provided.
- **action** (function - optional): A function that will be executed when the button is clicked.

#### Example Usage

```tsx
<MenuButton action={openMenu} />
```

---

### Reusable Component: `PageHighlight`

The `PageHighlight` component displays highlighted items with customizable options.

#### Features

- **Customizable Title**: Displayed at the top of the section.
- **Dynamic Styling**: Supports background, height, bullets, and borders.
- **List of Links**: Accepts a list of items to highlight.
- **Flexible Layout**: Designed for adaptability.

### Props

- **`title`** (`string`): The title to display at the top of the section.
- **`height`** (`string` - optional): The height of the section. Defaults to `"auto"` if not provided.
- **`background`** (`string` - optional): The background color of the section. Defaults to `"neutral-50"` if not provided.
- **`addBullets`** (`boolean` - optional): If `true`, the list will display bullets. Defaults to `false`.
- **`bottomBorder`** (`boolean` - optional): If `true`, a bottom border will be added. Defaults to `false`.
- **`items`** (`HighlightItem[]`): An array of items to display in the list, each containing `title` and `link`.

#### Example Usage

```tsx
<PageHighlight
  items={pageSections}
  title="page title"
  bottomBorder={true}
  addBullets
/>
```

---

### Reusable Component: `References`

#### Features

- **Dynamic Links**: Generates links dynamically based on `items` prop.
- **Customizable Content**: Supports rendering titles, descriptions, and icons.
- **Interactive Design**: Includes clickable areas with hover effects and styling.

#### Props

- **`showNew`** (`boolean` - optional): Indicates whether to display new items.
- **`items`** (`SubmenuType[]` - optional): An array of reference items, each containing information about pages or articles to be displayed.

#### Example Usage

```tsx
<References showNew items={array of items} />

```

---

### Reusable Component: `SearchReferences`

This is specifically used for the search page

#### Features

- **Dynamic Links**: Generates links dynamically based on `items` prop.
- **Customizable Content**: Supports rendering titles, descriptions, and icons.
- **Interactive Design**: Includes clickable areas with hover effects and styling.

#### Props

- **`showNew`** (`boolean` - optional): Indicates whether to display new items.
- **`items`** (`SubmenuType[]` - optional): An array of reference items, each containing information about pages or articles to be displayed.

#### Example Usage

```tsx
 <SearchReferences showNew items={array of items} />
```

---

### Reusable Component: `ServiceList`

The `ServiceList` component is designed to display a list of services in a grid layout, providing an interactive and visually appealing way to showcase popular services.

#### Features

- **Dynamic Service Links**: Automatically generates links to each service using the provided `services` prop.
- **Interactive Design**: Includes hover and active states for better user experience.
- **Responsive Layout**: Designed to adapt to different screen sizes with flexible styling.

#### Props

- **`services`** (`SubmenuType[]`): An array of service items. Each item contains page details like `slug`, `name`, and `shortDescription`.

```tsx
<ServiceList services={content?.submenus} />
```

---

### Reusable Component: `Suggestions`

The `Suggestions` component is a versatile, reusable component designed to display a list of suggested items, such as articles or services, with customizable titles, body text, and styling based on the `pageType`.

#### Features

- **Dynamic Suggestions**: Displays a list of clickable suggestions based on the `items` prop.
- **Customizable Appearance**: Background, title styling, and button colors adjust dynamically according to the `pageType` configuration.
- **Routing Integration**: Uses `next/router` for smooth navigation to selected suggestions.
- **Optional Content**: Includes optional title and body text for additional context.

#### Props

- **`title`** (`string` - optional): Title to display above the suggestions. Defaults to `"Popular suggestions"`.
- **`showTitle`** (`boolean` - optional): Toggles the display of the title. Defaults to `true`.
- **`pageType`** (`PageContent` - optional): Defines the type of page, which influences styling through the `getSuggestionConfig()` function. Defaults to `"service"`.
- **`items`** (`PopularSuggestionType[]` - optional): List of suggested items, each containing `title` and `page` properties.
- **`body`** (`string` - optional): Additional descriptive text displayed under the title.

#### Example Usage

```tsx
<Suggestions items={content?.popularsuggestion} />
```

---

### Reusable Component: `TopSection`

The `TopSection` component is a dynamic, reusable component designed to display a prominent section with a title and body text. Its appearance is tailored using configurations based on the `content` type.

#### Features

- **Customizable Styling**: Dynamically adjusts background and text styles using the `getTopSectionConfig()` function based on the `content` prop.
- **Responsive Layout**: Ensures proper display across different devices using Tailwind CSS.
- **Content-Specific Configuration**: Supports different `content` types (e.g., "service") for varied designs.

#### Props

- **`title`** (`string`): The main heading of the top section.
- **`body`** (`string`): Descriptive text to display below the title.
- **`content`** (`PageContent` - optional): The content type, which determines the configuration styles. Defaults to `"service"`.

#### Example Usage

```tsx
<Suggestions items={content?.popularsuggestion} />
```

---

### Styling

This code provides helper functions and configuration objects. It includes utilities for managing lists, creating URLs, and generating CSS configurations for different content contexts.

---

### **Functions**

#### **1. `isNotLastOnList`**

- **Purpose**: Checks if an item is not the last one in a list.
- **Parameters**:
  - `index`: The current item's index.
  - `listLength`: The total number of items in the list.
- **Returns**: A boolean indicating whether the item is not the last one (`true` if not last, `false` otherwise).
- **Usage**:
  Useful for rendering conditional styles or separators (e.g., adding a comma between list items except for the last one).

---

#### **2. `getSuggestionConfig`**

- **Purpose**: Returns a configuration object for styling suggestions based on the page context (`service`, `home`, `search`).
- **Structure**:
  - **`title`**: CSS classes for styling titles.
  - **`bg`**: CSS classes for background styling.
  - **`little`**: CSS classes for smaller text elements.
  - **`btn`**: CSS classes for button styles.
- **Usage**:
  Fetch and apply styles dynamically based on the context.

  ```javascript
  const config = getSuggestionConfig();
  const serviceStyles = config.service;
  ```

---

#### **3. `getTopSectionConfig`**

- **Purpose**: Similar to `getSuggestionConfig`, but for styling the top sections of different pages.
- **Structure**:
  - **`title`**: Title styles.
  - **`bg`**: Background styles.
  - **`little`**: Subtext styles.
  - **`btn`**: Button styles.
- **Usage**:
  Dynamically style the top sections of pages.

  ```javascript
  const config = getTopSectionConfig();
  const homeStyles = config.home;
  ```

---

#### **4. `buildReferenceUrl`**

- **Purpose**: Constructs a URL based on the provided `slug` and `component`.
- **Parameters**:
  - `slug`: A string representing the unique identifier of the item.
  - `component`: A string representing the type of content (`shared.service-page`, `shared.article`, etc.).
- **Returns**: A URL string.
- **How it Works**:
  - Uses a `switch` statement to determine the base path based on the `component`.
  - Defaults to a `/services/` path if the `component` is not recognized.
- **Usage**:
  Generate URLs dynamically for navigation or linking.

  ```javascript
  const url = buildReferenceUrl("example-slug", "shared.article");
  ```

---

### **How to Add to It**

#### Adding a New Page Context to `getSuggestionConfig` or `getTopSectionConfig`

1. Open the respective function (`getSuggestionConfig` or `getTopSectionConfig`).
2. Add a new key-value pair for the new context (e.g., `about`):
   ```javascript
   export const getSuggestionConfig = () => ({
     service: {},
     home: {},
     search: {},
     about: {
       title: "text-neutral-800 text-lg font-medium",
       bg: "bg-neutral-50",
       little: "text-neutral-500",
       btn: "bg-secondary-400",
     },
   });
   ```
3. Use the new context in your application where appropriate:
   ```javascript
   const config = getSuggestionConfig();
   const aboutStyles = config.about;
   ```

---

#### Adding a New Component to `buildReferenceUrl`

1. Add a new case to the `switch` statement:
   ```javascript
   case "shared.about-page":
     url = `/about/${slug}`;
     break;
   ```
2. Use the new component in your application:
   ```javascript
   const aboutUrl = buildReferenceUrl("team", "shared.about-page");
   console.log(aboutUrl); // Outputs: /about/team
   ```

## **Contributing **

---

### **How to Contribute**

#### **1. Fork the Repository**

1. Navigate to the GitHub repository.
2. Click the **Fork** button at the top-right corner to create a copy of the repository under your GitHub account.

---

#### **2. Clone Your Fork**

1. Open your terminal or command line.
2. Run the following command to clone your forked repository:
   ```bash
   git clone https://github.com/Edo-DiDA/one-Edo-next-webapp.git
   ```
3. Navigate to the project directory:
   ```bash
   cd one-Edo-next-webapp
   ```

---

#### **3. Set Upstream Repository**

Set the original repository as the upstream remote to keep your fork updated:

```bash
git remote add upstream https://github.com/Edo-DiDA/one-Edo-next-webapp.git
```

Verify the remotes:

```bash
git remote -v
```

---

#### **4. Create a New Branch**

Create a new branch for your changes:

```bash
git checkout -b feature-name
```

Use a descriptive name for your branch, such as `fix-bug`, `add-component`, or `update-docs`.

---

#### **5. Make Changes**

1. Open the project in your preferred code editor (e.g., VS Code).
2. Implement your changes (e.g., fix bugs, add new features, update styles).
3. Test your changes thoroughly to ensure they work as expected.

---

#### **6. Commit Changes**

Stage and commit your changes:

```bash
git add .
git commit -m "Brief description of changes"
```

---

#### **7. Push Your Changes**

Push the branch to your forked repository:

```bash
git push origin feature-name
```

---

#### **8. Create a Pull Request (PR)**

1. Go to the original repository on GitHub.
2. Click the **Pull Requests** tab.
3. Click **New Pull Request**.
4. Select your branch and provide a clear title and description for your PR.
5. Submit the PR.

---

### **Contribution Guidelines**

To maintain the quality and consistency of the project, please adhere to the following guidelines:

#### **Code Style**

- Follow the project's established coding conventions (e.g., indentation, naming conventions).
- Write clean, readable, and reusable code.

#### **Testing**

- Test your changes locally to ensure they do not break existing functionality.
- Add or update tests for new or modified functionality if applicable.

#### **Documentation**

- Update documentation for new features or changes in behavior.
- Ensure code comments are clear and concise.

#### **Commit Messages**

- Write meaningful commit messages summarizing your changes.
- Use the format: `<type>: <description>`, e.g., `feat: add new suggestion component`.

#### **Respect the Workflow**

- Keep your PRs focused on a single feature or fix to make reviews easier.
- Avoid making unrelated changes in the same PR.

---

### **Need Help?**

If you're unsure where to start, check out the **Issues** tab in the repository. Look for issues labeled:

- `good first issue`
- `help wanted`

Feel free to ask questions in the issue thread or start a discussion.

---

### **Code of Conduct**

Please be respectful and collaborative. Ensure your contributions align with the project's values and goals.

---

### **Thank You for Contributing!**

Every contribution, no matter how small, helps make this project better. 🚀
