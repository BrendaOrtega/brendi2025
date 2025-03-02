export const images = [
  "https://images.pexels.com/photos/1251828/pexels-photo-1251828.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/1684151/pexels-photo-1684151.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/2682452/pexels-photo-2682452.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1200",
  "https://images.pexels.com/photos/4066041/pexels-photo-4066041.jpeg?auto=compress&cs=tinysrgb&w=1200",
];

export type Group = {
  images: string[];
  title: string;
  links: { text: string; link: string }[];
  paragraph: string;
};

const groups = [
  {
    images,
    title: "Deník",
    links: [
      {
        text: "Visit Live",
        link: "https://www.denik.me/",
      },
      //   {
      //     text: "Visit Live",
      //     link: "http://easybits.cloud",
      //   },
      //   {
      //     text: "Learn More",
      //     link: "http://easybits.cloud",
      //   },
    ],
    paragraph:
      "Deník is most easy business tool to manage your appointments, make online payments, send reminders and surveys. It help you to manage your business in on place.",
  },
  {
    images,
    title: "EasyBits",
    links: [
      {
        text: "Visit Live",
        link: "http://easybits.cloud",
      },
      //   {
      //     text: "Visit Live",
      //     link: "http://easybits.cloud",
      //   },
      //   {
      //     text: "Learn More",
      //     link: "http://easybits.cloud",
      //   },
    ],
    paragraph:
      " Do you want to seel ilustrations, couses, books, webinars, templates o apps? EasyBits is the solution to sell your digital assets online. ",
  },
  {
    images,
    title: "Formmy",
    links: [
      {
        text: "Visit Live",
        link: "https://www.formmy.app/",
      },
      //   {
      //     text: "Visit Live",
      //     link: "http://easybits.cloud",
      //   },
      //   {
      //     text: "Learn More",
      //     link: "http://easybits.cloud",
      //   },
    ],
    paragraph:
      "Add contact forms to your website easly. Create and customize your formmy to keep your brand guidelines. And then, copy and paste one code line and your formmy is ready.",
  },
  {
    images,
    title: "Fixter",
    links: [
      {
        text: "Visit Live",
        link: "https://fixter.org/",
      },
      //   {
      //     text: "Visit Live",
      //     link: "http://easybits.cloud",
      //   },
      //   {
      //     text: "Learn More",
      //     link: "http://easybits.cloud",
      //   },
    ],
    paragraph:
      "Fixter is an small Design & Development Agency founded by me and my partner 9 years ago. I continue designing designing selected projects partially. So, if you are looking for design or build a new app, email us. ",
  },
  {
    images,
    title: "Fixtergeek",
    links: [
      {
        text: "Visit Live",
        link: "https://www.fixtergeek.com/",
      },
      //   {
      //     text: "Visit Live",
      //     link: "http://easybits.cloud",
      //   },
      //   {
      //     text: "Learn More",
      //     link: "http://easybits.cloud",
      //   },
    ],
    paragraph:
      "Fixtergeek is a E-learning platform founded 9 years ago, where you can find specific development on demand courses to become a pro developer. And discover a lot of blog post about new tools, librarys, frameworks or design tips.  ",
  },
];

export const useFakeData = () => ({ groups });
