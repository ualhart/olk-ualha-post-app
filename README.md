# Hugo Blog

A modern, responsive Hugo blog with the Ananke theme and custom styling.

## Features

- 🚀 **Fast**: Built with Hugo, the world's fastest static site generator
- 📱 **Responsive**: Mobile-first design that works on all devices
- 🎨 **Customizable**: Clean, modern design with custom CSS
- 📝 **Markdown**: Write content in simple Markdown
- 🔍 **SEO Optimized**: Built-in SEO features and meta tags
- 🌙 **Dark Mode**: Automatic dark mode support
- 📊 **Analytics Ready**: Easy integration with Google Analytics

## Quick Start

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (Extended version recommended)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd olk-ualha-post-app
   ```

2. **Install the theme**
   ```bash
   git submodule update --init --recursive
   ```

3. **Start the development server**
   ```bash
   hugo server -D
   ```

4. **Open your browser**
   Navigate to `http://localhost:1313`

## Configuration

### Basic Configuration

Edit `config.toml` to customize your site:

```toml
baseURL = 'https://yourdomain.com/'
title = 'Your Blog Title'
theme = 'ananke'

[params]
  author = "Your Name"
  description = "Your blog description"
  github = "https://github.com/yourusername"
  twitter = "https://twitter.com/yourusername"
```

### Customization

- **Colors**: Edit `static/css/custom.css` to change the color scheme
- **Layout**: Modify files in `layouts/` to customize the structure
- **Content**: Add posts in `content/posts/` and pages in `content/`

## Creating Content

### New Blog Post

```bash
hugo new posts/my-new-post.md
```

### New Page

```bash
hugo new about.md
```

### Content Structure

All content uses Markdown with front matter:

```markdown
---
title: "My Post Title"
date: 2024-01-20T14:30:00Z
draft: false
description: "A brief description"
tags: ["tag1", "tag2"]
categories: ["category1"]
---

# Your content here
```

## Deployment

### Netlify (Recommended)

1. Connect your repository to Netlify
2. Set build command: `hugo --gc --minify`
3. Set publish directory: `public`
4. Deploy!

### GitHub Pages

1. Build the site: `hugo --minify`
2. Push the `public` folder to your `gh-pages` branch
3. Enable GitHub Pages in repository settings

### Manual Deployment

```bash
hugo --minify
# Upload the contents of the 'public' folder to your web server
```

## Development

### Local Development

```bash
# Start development server with drafts
hugo server -D

# Start development server without drafts
hugo server

# Build for production
hugo --minify
```

### Adding Dependencies

The theme is included as a git submodule. To update it:

```bash
git submodule update --remote themes/ananke
```

## File Structure

```
├── archetypes/          # Content templates
├── content/             # Site content
│   ├── posts/          # Blog posts
│   └── about.md        # About page
├── layouts/            # Custom layouts
├── static/             # Static assets
│   └── css/           # Custom CSS
├── themes/             # Hugo themes
├── config.toml         # Site configuration
└── README.md          # This file
```

## Customization Guide

### Changing Colors

Edit `static/css/custom.css` and modify the CSS variables:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --accent-color: #your-color;
}
```

### Adding Custom Pages

1. Create a new `.md` file in `content/`
2. Add front matter with title and date
3. Write your content in Markdown

### Modifying the Theme

1. Copy theme files from `themes/ananke/` to `layouts/`
2. Modify the copied files as needed
3. Hugo will use your custom layouts instead of the theme's

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Ananke Theme](https://github.com/theNewDynamic/gohugo-theme-ananke)
- [Hugo Community](https://discourse.gohugo.io/)

---

Happy blogging! 🎉