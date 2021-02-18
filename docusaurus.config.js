module.exports = {
  title: "React Native ARIA",
  tagline:
    "React Native ARIA handles behaviour, accessibility and interactions so you can implement custom components and design systems for Android, iOS and Web",
  url: "https://geekyants.github.io",
  baseUrl: "/react-native-aria/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "geekyants", // Usually your GitHub org/user name.
  projectName: "react-native-aria", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "React Native ARIA",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        {
          href:
            "https://geekyants.com/hire?utm_source=reactnativearia&utm_medium=header&utm_campaign=reactnativearia",
          label: "Hire Us",
          position: "right",
        },
        {
          href: "https://github.com/GeekyAnts/react-native-aria",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/GeekyAnts/react-native-aria",
            },
          ],
        },
        {
          title: "Built with ❤️ by GeekyAnts.",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
