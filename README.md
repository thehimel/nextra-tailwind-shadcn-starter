# Nextra Tailwind shadcn/ui Starter 🚀

A modern documentation starter built with [Nextra](https://nextra.site/), [Tailwind CSS](https://tailwindcss.com/), and
[shadcn/ui](https://ui.shadcn.com/). Perfect for creating beautiful, responsive documentation sites with excellent
developer experience.

## ✨ Features

- **📚 Nextra** - Static site generator built on Next.js for documentation
- **🎨 Tailwind CSS** - Utility-first CSS framework for rapid styling
- **🧩 shadcn/ui** - Beautiful, accessible React components
- **🌙 Dark Mode** - Built-in dark/light theme switching
- **📱 Responsive** - Mobile-first design that works on all devices
- **⚡ Fast** - Optimized for performance with Next.js
- **🔍 Search** - Built-in search functionality
- **📖 MDX Support** - Write content in Markdown with React components
- **🎯 TypeScript** - Full TypeScript support out of the box

## 🚀 Quick Start

1. **Use this template**
   ```bash
   npx create-next-app@latest my-docs --example https://github.com/thehimel/nextra-tailwind-shadcn-starter
   ```

2. **Or clone the repository**
   ```bash
   git clone https://github.com/thehimel/nextra-tailwind-shadcn-starter.git
   cd nextra-tailwind-shadcn-starter
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser** and navigate to `http://localhost:3000`

## 🎨 Customization

### Adding New Components

This starter includes shadcn/ui components. To add more components:

```bash
npx shadcn-ui@latest add [component-name]
```

### Styling

- **Global styles**: Edit `styles/globals.css`
- **Tailwind config**: Modify `tailwind.config.js`
- **Theme colors**: Update the CSS variables in `styles/globals.css`

### Theme Configuration

Edit `theme.config.tsx` to customize:
- Site title and description
- Navigation
- Footer
- Logo
- Social links

## 📝 Writing Content

Create `.mdx` files in the `pages/` directory. You can use:

- **Markdown syntax** for content
- **React components** inline
- **shadcn/ui components** for enhanced UI

Example:
```mdx
import { Alert, AlertDescription } from '@/components/ui/alert'

# My Page Title

This is regular markdown content.

<Alert>
  <AlertDescription>
    This is a shadcn/ui alert component!
  </AlertDescription>
</Alert>
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out/` folder to Netlify

### GitHub Pages

1. Configure `next.config.js` for static export
2. Run `npm run build && npm run export`
3. Deploy the `out/` folder

## 🛠️ Built With

- [Nextra](https://nextra.site/) - Documentation framework
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icons

## 📚 Resources

- [Nextra Documentation](https://nextra.site/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Nextra](https://nextra.site/) team for the amazing documentation framework
- [shadcn](https://twitter.com/shadcn) for the beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) team for the utility-first CSS framework

---

**⭐ If you found this starter helpful, please give it a star!**

Made with ❤️ by [thehimel](https://github.com/thehimel)
