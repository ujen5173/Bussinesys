export const items = ["Home", "Bussines", "Office", "Contacts"].map((e) => ({
  id: Math.random() * 1000 + 1,
  name: e,
  link: `/${e.toLowerCase()}`,
}));

export const services = [
  {
    id: 1,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    icon: "uil uil-brush-alt",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    icon: "uil uil-arrow",
  },
  {
    id: 3,
    title: "App Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    icon: "uil uil-mobile-android-alt",
  },
  {
    id: 4,
    title: "ML & AI",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    icon: "uil uil-robot",
  },
];

export const companies = [
  "amazon",
  "coinbase",
  "discord",
  "google",
  "microsoft",
  "openai",
  "youtube",
  "fiverr",
];

export const blogs = [
  {
    id: 1,
    title:
      "From Small Business to Big Success: Tips and Tricks to Grow Your Company",
    description:
      "This blog will provide valuable insights and actionable tips for small business owners who want to take their companies to the next level. From marketing and sales strategies to financial planning and team building, we'll cover everything you need to know to succeed.",
    image: "/blog-1.avif",
    link: "/blog/from-small-business-to-big-success",
  },
  {
    id: 2,
    title:
      "Innovative Strategies for Modern Business: Staying Ahead in a Competitive Landscape",
    description:
      "In today's fast-paced and ever-changing business environment, it's more important than ever to stay ahead of the competition. This blog will explore the latest trends and technologies that can help your business thrive, from automation and artificial intelligence to social media and mobile marketing.",
    image: "/blog-2.avif",
    link: "/blog/innovative-strategies-for-modern-business",
  },
  {
    id: 3,
    title:
      "The Power of Networking: Building Relationships That Benefit Your Business",
    description:
      "Building strong relationships is key to business success, and networking is one of the best ways to do it. In this blog, we'll explore the art of networking and provide tips and tricks for making meaningful connections that can help grow your business.",
    image: "/blog-3.avif",
    link: "/blog/the-power-of-networking",
  },
  {
    id: 3,
    title:
      "Navigating the Digital World: Maximizing Your Online Presence for Business Growth",
    description:
      "In today's digital age, having a strong online presence is essential for any business. From website design and search engine optimization to social media and email marketing, this blog will provide tips and insights to help you navigate the digital world and reach your target audience.",
    image: "/blog-4.avif",
    link: "/blog/navigating-the-digital-world",
  },
];
