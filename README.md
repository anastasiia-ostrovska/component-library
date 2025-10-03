# Storybook-based UI library

## Table of Contents

- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Components Overview](#components-overview)


## Getting Started

1. Clone the repository:

```
git clone https://github.com/anastasiia-ostrovska/component-library.git

cd component-library
``` 

2. Install dependencies:

```
npm install 
``` 

3. Run Storybook locally:

```
npm run storybook
```

Storybook will open at `http://localhost:6006/` 

## Folder Structure

```
src/
│── app/
├── components/
├── ├── CloseIconButton/
│   ├── Input/
│   ├── Sidebar/
│   └── Toast/
├── stories/
    ├── Input/
    ├── Sidebar/
    └── Toast/
```

## Components Overview

### Input
- Controlled input component;
- Supports label, placeholder (other typical input attributes);
- Types: password, email, text, number;
- Has optional clear button
- Has optional helper text with information about input value or validation state;
- Optional clear button
- Has show/hide password functionality;

Here are some examples of the Input component:

Docs:
![](/src/assets/demo-images/input/input-docs.png)
With a clear button:
![](/src/assets/demo-images/input/input-clearable.png)
With a show/hide password functionality:
![](/src/assets/demo-images/input/input-password-hidden.png)
![](/src/assets/demo-images/input/input-password-shown.png)
With an error message:
![](/src/assets/demo-images/input/input-error.png)

### Toast
- Controlled notification component that appears at the bottom-right of the screen
- Supports multiple variants: primary, secondary, success, error, warning;
- Supports multiple animations: fade or slide ;
- Auto-hide after a configurable duration;
- Has optional manual close button;

Here are some examples of the Input component:

Docs:
![](/src/assets/demo-images/toast/toast-docs.png)

With variants:
<div style="display: flex; flex-wrap: wrap; gap: 16px;">
  <img src="/src/assets/demo-images/toast/toast-primary.png" width="48%" alt="Primary variant" />
  <img src="/src/assets/demo-images/toast/toast-warning.png" width="48%" alt="Warning variant" />
  <img src="/src/assets/demo-images/toast/toast-error.png" width="48%" alt="Error variant"/>
  <img src="/src/assets/demo-images/toast/toast-success.png" width="48%" alt="Success variant"/>
</div>

With a close button:
![](/src/assets/demo-images/toast/toast-close-button.png)


### Sidebar
- Slides in from the right;
- Supports nested submenus (1-level and 2-level);
- Has optional header;
- Closes by clicking outside or pressing the close button;

Here are some examples of the Input component:

Docs:
![](/src/assets/demo-images/sidebar/sidebar-docs.png)

Open/close:
<div style="display: flex; flex-direction: row; gap: 16px; width: 100%;">
  <img src="/src/assets/demo-images/sidebar/sidebar-open-button.png" alt="Open button"/>
  <img src="/src/assets/demo-images/sidebar/sidebar-open-state.png" alt="Sidebar in open state"/>
</div>

With 1-level/2-level submenus:
<div style="display: flex; flex-direction: row; gap: 16px; width: 100%;">
  <img src="/src/assets/demo-images/sidebar/sidebar-1-level.png" alt="Sidebar with 1-level submenu"/>
  <img src="/src/assets/demo-images/sidebar/sidebar-2-level.png" alt="Sidebar with 2-level submenu"/>
</div>