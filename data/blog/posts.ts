/**
 * Study-abroad blog posts.
 *
 * Adding a daily post is one entry in `blogPosts`, plus a cover image.
 * Put the file in `public/images/blog/` and set `coverImage` to that path,
 * or set `coverImage` to an absolute image URL.
 * Credit the Unsplash photographer with their name, profile URL, and photo URL.
 * Page metadata (`lib/seo-meta.ts`) and the sitemap read this list.
 */

export type BlogSection = {
  heading: string;
  text: string;
};

export type UnsplashCredit = {
  photographerName: string;
  photographerUrl: string;
  photoUrl: string;
};

export type BlogPost = {
  title: string;
  slug: string;
  description: string;
  category: string;
  /**
   * Full ISO date (`YYYY-MM-DD`) when the day is known.
   * Older posts that were only dated to a month use `YYYY-MM`.
   */
  date: string;
  readTime: string;
  intro: string;
  sections: BlogSection[];
  /** Public path (`/images/blog/...`) or an absolute image URL. */
  coverImage: string;
  coverImageAlt: string;
  unsplash: UnsplashCredit;
};

const FULL_ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const MONTH_ISO_DATE = /^\d{4}-\d{2}$/;

export function isFullIsoDate(date: string) {
  return FULL_ISO_DATE.test(date);
}

export function formatBlogDate(date: string) {
  if (FULL_ISO_DATE.test(date)) {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${date}T00:00:00Z`));
  }

  if (MONTH_ISO_DATE.test(date)) {
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(`${date}-01T00:00:00Z`));
  }

  return date;
}

export const blogPosts: BlogPost[] = [
  {
    title: "The Tuesday Test: How to Choose a Study Abroad Plan You Can Actually Live",
    slug: "the-tuesday-test",
    description:
      "Write down one ordinary Tuesday abroad, from class and groceries to the call home, before you choose a country or program.",
    category: "Student Life",
    date: "2026-10-26",
    readTime: "5 min read",
    intro:
      "University pages love a certain kind of sentence. A global campus. A career-ready degree. A city you will fall in love with. Read three of them and they start to sound like the same promise in a different font.\n\nChoosing from that language is like buying a coat from a slogan. Try a smaller test. Before you commit to a country or a program, write down one ordinary Tuesday there. Skip arrival day. Skip graduation. Pick a Tuesday in the middle of term, when class is normal and a deadline is still sitting on your desk.",
    sections: [
      {
        heading: "Write the Tuesday down",
        text: "Give the day real hours. What time does the lecture start, and do you have to cross the city to reach it? Is the seminar in a room, or is half the week a recording you will keep postponing? Put lunch on the page. Put the grocery run on the page. Put the call home on the page, at a time your family is actually awake.\n\nYou do not need this Tuesday to be exciting. You need it to be possible. A program can sparkle in a brochure and still be a poor fit if the useful parts happen at an hour you cannot reach.",
      },
      {
        heading: "Follow the hours you cannot move",
        text: "Some parts of the week will not negotiate with you. Class times. A lab that runs long. The last bus. The shift you hope to pick up so rent feels less heavy. You do not need a job offer in hand to think about this. Ask whether a shift after class still leaves you a meal and a night of sleep.\n\nLanguage belongs on the same page. If lectures are in a language you are still learning, Tuesday includes the extra hour of reading, along with the hour in the room. That hour is part of the program even when the course list forgets to mention it.\n\nIf the only way the week works is by dropping sleep, food, or the one class that matters, the week does not work. A ranking table will not show you that. A timetable will.",
      },
      {
        heading: "Price a normal day",
        text: "You can compare countries without pretending you already know every fee. Start with the costs that show up on an ordinary day: a room you could actually get, the ride to campus, a lunch you packed and the lunch you buy when you are late, a phone plan, the rice and soap you replace without thinking.\n\nLook those up on official pages and in recent housing posts from students, and treat a wide gap between the two as information. That gap is where budgets break. Leave a blank wherever you cannot trace a number. A guessed rent is less honest than an empty space, because the empty space still reminds you to ask.\n\nThen notice what this Tuesday leaves out. A weekend trip is optional. The Tuesday is not. If an ordinary day already spends what you have, the move costs more than the tuition line on its own, whatever that line says.",
      },
      {
        heading: "Keep one place and one person",
        text: "Student life abroad is rarely a highlight reel. It is the third time you sit in the same library corner, or at the same cheap table by the window, because your head is loud and you know where the light is. In the first month, pick one place you can reach without making a plan. Go there on the dull days. A familiar room settles you faster than a chat full of people you have not met.\n\nFriendship works the same way, only slower. One repeating thing is enough: a lab group, a language cafe, a society that meets on the same weekday. Ask one specific question, the kind that belongs to the room you are in. The aim is modest. Someone would notice if your chair stayed empty.\n\nCall home on a day you choose, and also on the day you are falling apart. A short Sunday call keeps your family from filling the silence with worry. It also keeps you from using them as an emergency service.",
      },
      {
        heading: "Leave a margin for a bad week",
        text: "Every clean comparison falls apart the week you get sick, your card is declined, or a class is harder than its title. Build a small margin into the Tuesday before you need it. An hour with nothing scheduled. A little money that is not already promised to rent. The phone number of the campus health desk and the international student office, saved while you are still calm.\n\nThe right program is the one whose ordinary Tuesday you can repeat. You can still want the beautiful city. Make sure that city has a Tuesday you can live through, and then live through again the week after.",
      },
    ],
    coverImage: "/images/blog/the-tuesday-test.jpg",
    coverImageAlt: "A person writing on a notebook with a pen",
    unsplash: {
      photographerName: "Benoît Deschasaux",
      photographerUrl: "https://unsplash.com/@benowa",
      photoUrl:
        "https://unsplash.com/photos/a-person-writing-on-a-notebook-with-a-pen-O04ybN0h1C8",
    },
  },
  {
    title: "Best Countries for International Students in 2026",
    slug: "best-countries-2026",
    description:
      "Compare Canada, Australia, Germany and Finland for international students in 2026: tuition fees, student jobs, living costs, post-study work and quality of education.",
    category: "Country Comparison",
    date: "2026-05",
    readTime: "5 min read",
    intro:
      "Canada, Australia, Germany, and Finland are among the popular study destinations for international students. Each country offers different advantages depending on tuition fees, student jobs, living costs, and future opportunities.",
    sections: [
      {
        heading: "Canada",
        text: "Canada is attractive for students because of its multicultural environment, quality education, and post-study work opportunities. However, tuition fees and living costs can be higher compared with some European countries.",
      },
      {
        heading: "Australia",
        text: "Australia is popular for its strong universities, English-speaking environment, and student work opportunities. It can be a good option for students who want both education and work experience.",
      },
      {
        heading: "Germany",
        text: "Germany is known for affordable or low-tuition public universities. It is especially attractive for students who are looking for quality education in Europe with lower study costs.",
      },
      {
        heading: "Finland",
        text: "Finland offers high-quality education, a safe living environment, and growing opportunities for international students. Learning Finnish can improve job opportunities while studying.",
      },
    ],
    coverImage: "/images/blog/best-countries-2026.jpg",
    coverImageAlt: "Students walk and bike on a college campus path",
    unsplash: {
      photographerName: "Simon Chen",
      photographerUrl: "https://unsplash.com/@yowis31",
      photoUrl:
        "https://unsplash.com/photos/students-walk-and-bike-on-a-college-campus-path-sOENhFWZ-FU",
    },
  },
  {
    title: "Canada vs Australia for International Students",
    slug: "canada-vs-australia",
    description:
      "Canada or Australia? Compare education quality, part-time student jobs and living costs in both countries to decide which study destination fits your budget and goals.",
    category: "Country Comparison",
    date: "2026-05",
    readTime: "4 min read",
    intro:
      "Canada and Australia are two of the most popular destinations for international students. Both countries offer English-taught education, part-time work opportunities, and future career pathways.",
    sections: [
      {
        heading: "Education Quality",
        text: "Both Canada and Australia have internationally recognized universities and colleges. The best choice depends on the student’s study field, budget, and long-term goals.",
      },
      {
        heading: "Student Jobs",
        text: "Australia is often attractive for students looking for part-time work during studies. Canada also offers work opportunities, but availability can depend on the city and local job market.",
      },
      {
        heading: "Living Costs",
        text: "Both countries can be expensive, especially in large cities. Students should compare rent, transport, food, insurance, and tuition before choosing a destination.",
      },
    ],
    coverImage: "/images/blog/canada-vs-australia.jpg",
    coverImageAlt: "Colorful pushpins marking locations on a world map",
    unsplash: {
      photographerName: "Oualid Lakhrouti",
      photographerUrl: "https://unsplash.com/@oualid24",
      photoUrl:
        "https://unsplash.com/photos/colorful-pushpins-marking-locations-on-a-world-map-_IlhcLR4CKc",
    },
  },
  {
    title: "Cheapest Countries to Study Abroad",
    slug: "cheapest-countries",
    description:
      "Looking for an affordable study destination? See why Germany's low-tuition public universities and Finland's scholarships make them good-value options, and what else to budget for.",
    category: "Budget Study Guide",
    date: "2026-05",
    readTime: "4 min read",
    intro:
      "For many international students, affordability is one of the most important factors when choosing a study destination. Germany and Finland can be attractive options for students looking for quality education with reasonable costs.",
    sections: [
      {
        heading: "Germany",
        text: "Germany is popular because many public universities have low or no tuition fees. However, students still need to plan for living expenses, health insurance, and the blocked account requirement.",
      },
      {
        heading: "Finland",
        text: "Finland offers high-quality education and a safe study environment. Tuition fees may apply for non-EU students, but scholarships can reduce the cost.",
      },
      {
        heading: "Important Advice",
        text: "The cheapest country is not always the best country. Students should also consider job opportunities, language requirements, immigration rules, and long-term career plans.",
      },
    ],
    coverImage: "/images/blog/cheapest-countries.jpg",
    coverImageAlt: "A stack of books",
    unsplash: {
      photographerName: "Laura Ohlman",
      photographerUrl: "https://unsplash.com/@ohlmanphotography",
      photoUrl: "https://unsplash.com/photos/a-stack-of-books-qRtcb9wHG40",
    },
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPosts() {
  return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date));
}
