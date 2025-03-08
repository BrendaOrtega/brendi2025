export type GetBasicMetaTagsPros = {
  title?: string;
  description?: string;
  image?: string;
  twitterCard?: "summary" | "summary_large_image";
};

export default function getBasicMetaTags({
  title,
  description = "Let's talk!", // description should be at least 100 chars
  image = "https://i.imgur.com/eDktKC9.png",
  twitterCard = "summary",
}: GetBasicMetaTagsPros) {
  if (!title) {
    return [
      {
        title: "Brenda González Ortega | Product Designer",
      },
      {
        name: "description",
        content: "Let's talk!",
      },
    ];
  }
  return [
    { title },
    {
      property: "og:title",
      content: title,
    },
    {
      name: "description",
      content: description,
    },
    {
      property: "og:image",
      content: image,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "www.brendago.design",
    },
    {
      name: "twitter:card",
      content: twitterCard,
    },
    {
      name: "twitter:image",
      content: image,
    },
  ];
}
