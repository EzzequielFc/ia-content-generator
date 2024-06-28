export default [
  {
    name: "Blog Title",
    desc: "An Ai Tool that generates blog titles based on your blog information",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/9521/9521706.png",
    aiPrompt:
      "Give me 5 blog topic ideas in bullet points based on the given niche topic and give me the result in Rich Text Editor form",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your blog niche",
        field: "input",
        name: "niche",
        required: true,
      },
      {
        label: "Enter blog outline",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Product Description",
    desc: "An AI Tool that generates product descriptions for your e-commerce site",
    category: "E-commerce",
    icon: "https://cdn-icons-png.flaticon.com/128/9079/9079748.png",
    aiPrompt:
      "Generate a compelling product description based on the given product details and features",
    slug: "generate-product-description",
    form: [
      {
        label: "Enter product name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Enter product features",
        field: "textarea",
        name: "features",
      },
    ],
  },
  {
    name: "Social Media Post",
    desc: "An AI Tool that creates engaging social media posts",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/124/124010.png",
    aiPrompt:
      "Create a catchy and engaging social media post based on the given topic and audience",
    slug: "generate-social-media-post",
    form: [
      {
        label: "Enter topic",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter target audience",
        field: "textarea",
        name: "audience",
      },
    ],
  },
  {
    name: "SEO Meta Description",
    desc: "An AI Tool that generates SEO-friendly meta descriptions for your web pages",
    category: "SEO",
    icon: "https://cdn-icons-png.flaticon.com/128/3523/3523063.png",
    aiPrompt:
      "Generate an SEO-friendly meta description for the given webpage content",
    slug: "generate-seo-meta-description",
    form: [
      {
        label: "Enter webpage content summary",
        field: "textarea",
        name: "contentSummary",
        required: true,
      },
    ],
  },
  {
    name: "Email Subject Line",
    desc: "An AI Tool that generates catchy email subject lines",
    category: "Email Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
    aiPrompt:
      "Generate a catchy and engaging email subject line based on the given email content",
    slug: "generate-email-subject-line",
    form: [
      {
        label: "Enter email content",
        field: "textarea",
        name: "emailContent",
        required: true,
      },
    ],
  },
  {
    name: "Ad Copy",
    desc: "An AI Tool that creates compelling ad copy for your marketing campaigns",
    category: "Advertising",
    icon: "https://cdn-icons-png.flaticon.com/128/2983/2983788.png",
    aiPrompt:
      "Generate a compelling ad copy based on the given product or service details",
    slug: "generate-ad-copy",
    form: [
      {
        label: "Enter product/service details",
        field: "textarea",
        name: "details",
        required: true,
      },
    ],
  },
  {
    name: "Landing Page Headline",
    desc: "An AI Tool that generates attention-grabbing headlines for your landing pages",
    category: "Web Development",
    icon: "https://cdn-icons-png.flaticon.com/128/3059/3059940.png",
    aiPrompt:
      "Generate an attention-grabbing headline for a landing page based on the given page content and target audience",
    slug: "generate-landing-page-headline",
    form: [
      {
        label: "Enter page content summary",
        field: "textarea",
        name: "pageContent",
        required: true,
      },
      {
        label: "Enter target audience",
        field: "textarea",
        name: "audience",
      },
    ],
  },
  {
    name: "YouTube Video Title",
    desc: "An AI Tool that generates catchy titles for your YouTube videos",
    category: "Video Content",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    aiPrompt:
      "Generate a catchy and SEO-friendly title for a YouTube video based on the given video content",
    slug: "generate-youtube-video-title",
    form: [
      {
        label: "Enter video content description",
        field: "textarea",
        name: "videoDescription",
        required: true,
      },
    ],
  },
];
