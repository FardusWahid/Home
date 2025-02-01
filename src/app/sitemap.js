import { Files } from "./[view]/file";

export default function sitemap() {
  // Base URL entries
  const baseUrls = [
    {
      url: "https://applecourses.netlify.app",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: "https://applecourses.netlify.app/courses",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    }
  ];

  // Course URLs with image data
  const courseUrls = Files.map((file) => ({
    url: `https://applecourses.netlify.app/courses/${file.slug}`,
    lastModified: new Date(),
    changeFrequency: "always",
    priority: 1,
    // Add image metadata for search engines
    images: [
      {
        url: file.image.url,
        title: file.name,
        alt: file.image.alt,
        caption: file.image.alt,
      }
    ],
  }));

  return [...baseUrls, ...courseUrls];
}