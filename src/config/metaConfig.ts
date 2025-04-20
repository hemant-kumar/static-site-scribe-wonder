
interface MetaConfig {
  default: {
    keywords: string[];
    description: string;
  };
  pages: {
    [key: string]: {
      keywords: string[];
      description: string;
    };
  };
}

export const metaConfig: MetaConfig = {
  default: {
    keywords: [
      "programming tutorials",
      "java programming",
      "tech news",
      "web development",
      "software engineering",
      "Tech Chatter Box"
    ],
    description: "Tech Chatter Box - Your go-to resource for programming tutorials, tech news, and developer insights."
  },
  pages: {
    blog: {
      keywords: [
        "java tutorials",
        "programming blog",
        "coding tutorials",
        "software development articles",
        "tech blog"
      ],
      description: "Explore our collection of in-depth programming tutorials and tech articles."
    },
    categories: {
      keywords: [
        "programming categories",
        "tech topics",
        "coding subjects",
        "development categories"
      ],
      description: "Browse programming tutorials and articles by category."
    },
    about: {
      keywords: [
        "tech blog about",
        "programming community",
        "developer resources"
      ],
      description: "Learn more about Tech Chatter Box and our mission to educate developers."
    },
    contact: {
      keywords: [
        "contact tech blog",
        "programming help",
        "developer support"
      ],
      description: "Get in touch with Tech Chatter Box for questions or collaborations."
    }
  }
};
