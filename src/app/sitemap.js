import { Files } from "./[view]/file";
export default function sitemap() {
  const courseUrl = Files.map((file) => ({
    url: `https://applecourses.netlify.app/courses/${file.slug}`,
    lastModified: new Date(),
    changeFrequency: "always",
    priority: 1,
  }));

  return [
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
    },
    ...courseUrl,
  ];
}
