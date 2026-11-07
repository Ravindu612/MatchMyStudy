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
  /**
   * Editorial note for the speaking-practice link.
   * Set only when this article already discusses language prep.
   */
  languagePracticeNote?: string;
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
    title: "Before You Pay a Deposit: How to Find Student Housing Abroad Safely",
    slug: "before-you-pay-a-deposit",
    description: "A calm guide to finding a room abroad from far away: where to look first, the warning signs of a rental scam, what to check in a contract, and when it is safe to send money.",
    category: "Student Life",
    date: "2026-10-29",
    readTime: "5 min read",
    intro: "Finding a room in a city you have never visited is one of the strangest parts of studying abroad. You are scrolling through photos of kitchens on the other side of the world, trying to guess which street is safe, which price is fair, and which friendly landlord is real.\n\nMost listings are honest. But housing is also where many international students lose money, because they are far away, short on time, and easy to rush. This guide is about slowing down at the one moment that matters most: before you pay anything.",
    sections: [
      {
        heading: "Start with the university, not the internet",
        text: "Before you open a single listings site, read your university's accommodation pages. Many universities run their own residences, keep lists of approved private halls, or have a housing office that answers questions from new international students. Some offer a guaranteed or priority place for first-year or international students if you apply by a certain date.\n\nEven if university housing is full or not right for you, the housing office often knows which local platforms are reputable, what a normal contract looks like in that country, and which scams are going around this year. A short email to them can save you hours of guessing.",
      },
      {
        heading: "Know what normal looks like where you are going",
        text: "Renting works differently from country to country. In some places a large deposit is standard; in others it is capped by law. Some cities expect you to bring your own furniture, and in others rooms are almost always furnished. Some contracts include heating, water, and internet, and others leave you to set them up yourself.\n\nLook for the official government or city page on renting, and read your university's advice for students. Once you know what is normal, anything far outside it, such as a much lower rent than similar rooms nearby, or a demand for months of rent upfront, starts to stand out.",
      },
      {
        heading: "The warning signs of a rental scam",
        text: "Scams tend to look alike. The rent is noticeably cheaper than everything else in the area. The landlord is abroad, busy, or for some reason cannot show you the room, but promises to post the keys once you pay. You are pushed to decide today because \"many other students are interested\". You are asked to pay by money transfer service, cryptocurrency, gift cards, or to a personal account in another country.\n\nOther signs are quieter: photos that look like a hotel advert, an address that does not quite match the pictures, or a landlord who stops answering simple questions once you ask them. If you are unsure, copy one of the photos into a reverse image search. If the same room appears in other cities under other names, walk away.",
      },
      {
        heading: "See the room, or get someone to see it for you",
        text: "The safest rule is simple: do not send money for a room that nobody you trust has seen. If you cannot visit yourself, ask for a live video call where the landlord walks through the room, opens the window to show the street, and tells you the address while you watch. A recorded video is not the same, because it can be copied.\n\nIf you know a student already in the city, or the university has a buddy or mentor program, ask whether someone could look at the place. Another option is to book a short, flexible stay for your first week or two, through a provider with clear cancellation rules, and look for a longer-term room once you are there. It costs a little more at the start, but it lets you see places in person.",
      },
      {
        heading: "Read the contract before you sign it",
        text: "Ask for the contract in writing, and read it fully, ideally with a translation tool if it is in a language you do not read well. Check the full address, the names of both parties, the rent and what it includes, the start and end dates, how much notice you must give to leave, and exactly how and when the deposit is returned.\n\nIf something is unclear, ask, and keep the answer in writing. The university housing office or student union can often explain a local contract, and some can check it for you. Never sign a document you have only been shown as a blurry photo, and be wary of anyone who refuses to put the agreement on paper.",
      },
      {
        heading: "When you do pay, leave a trail",
        text: "Pay through a method that leaves a record and, where possible, gives you some protection: a bank transfer to an account in the landlord's or company's name in the same country as the property, or the payment system of a reputable housing platform. Avoid cash handed over before you have the keys, and avoid anything that cannot be traced or reversed.\n\nKeep every message, receipt, and the signed contract in one folder. On arrival, take dated photos of the room, including any damage, and send them to the landlord. It is a small habit that helps a lot when the deposit comes up again at the end of the year.",
      },
      {
        heading: "If something already went wrong",
        text: "If you think you have paid a scammer, act quickly and do not feel ashamed. These schemes are designed to fool careful people. Contact your bank or payment provider straight away and ask whether the payment can be stopped. Report it to the local police and the platform where you found the listing, and tell your university's housing or international office, since they may be able to help you find somewhere to stay.\n\nThen take a breath. A lost deposit is painful, but it is not the end of your plans. The next search, done slowly and with these checks, is usually the one that works.",
      },
    ],
    coverImage: "/images/blog/before-you-pay-a-deposit.jpg",
    coverImageAlt: "A hand holding a keyring next to an open apartment door",
    unsplash: {
      photographerName: "Jakub Żerdzicki",
      photographerUrl: "https://unsplash.com/@jakubzerdzicki",
      photoUrl:
        "https://unsplash.com/photos/a-hand-holds-a-keyring-near-an-open-door-z8OGyY0v24w",
    },
  },
  {
    title: "Read the Small Print: How to Understand Your University Offer Letter",
    slug: "read-your-offer-letter",
    description:
      "You got in. Now read the letter again slowly: conditions, deadlines, fees, and visa documents, explained in plain words for international students.",
    category: "Admissions",
    date: "2026-10-27",
    readTime: "5 min read",
    intro:
      "The email arrives, you read the first line, and the rest of the page goes blurry. You got in. Take a moment for that, because it is a real achievement.\n\nThen, sometime in the next day or two, read the letter again slowly. An offer letter is not only good news. It is a short set of instructions with deadlines attached, and the students who run into trouble later are often the ones who skimmed it on the first happy read.",
    sections: [
      {
        heading: "First, find out what kind of offer it is",
        text: "Most offers fall into one of two groups. An unconditional offer means the university is satisfied and the place is yours once you accept it. A conditional offer means the place depends on something still to come: final exam results, a language test score, a missing document, or a degree you have not finished yet.\n\nIf your offer is conditional, write each condition down on its own line, in plain words, with the date it has to be met. Then check every condition against your real situation. If one looks impossible or unclear, ask the admissions office now, while there is still time to fix it, not in August.",
      },
      {
        heading: "Check that the details are actually yours",
        text: "It sounds obvious, but read the letter as if you were checking someone else's homework. Is your name spelled exactly as it is in your passport? Is the program the one you applied for, at the level you expected? Are the start date, campus, and length of study right?\n\nThese details often flow into other paperwork later, including visa or study permit applications. A small mismatch is much easier to correct now with a polite email than after it has been copied onto three other documents.",
      },
      {
        heading: "Circle every deadline",
        text: "Offer letters and the portals that come with them usually hide several dates. There may be a date to accept the offer, a date to pay a deposit if the university asks for one, a date to send final documents, and a date to apply for housing. They are rarely in the same paragraph.\n\nPut every date into your phone calendar with a reminder a week before. If you are waiting on more than one university, note which deadlines come first, so a decision is not made for you simply because one date passed. If you need more time, ask. The answer may be no, but it is sometimes yes.",
      },
      {
        heading: "Read the money part twice",
        text: "Look carefully at what the letter says about fees, and what it does not say. Is the amount for one year or the whole program? Is it in a currency you need to convert? Does it say fees may change in later years? Is a deposit refundable if your visa is refused, and on what terms?\n\nDo not rely on a figure you remember from a ranking site or a friend. The university's own fee pages and the letter itself are the sources that count, and if the two seem to disagree, email the university and keep the reply. If a scholarship is mentioned, check whether it is automatic or whether you still have to apply, and whether it renews each year or only applies once.",
      },
      {
        heading: "Spot the documents the visa will need",
        text: "Many countries ask international students for an official letter or code from the university before they can apply for a student visa or permit. Sometimes that is the offer itself, and sometimes it is a separate document issued only after you accept and pay a deposit.\n\nFind out which one your destination needs by reading the official immigration website for that country, then match it against what your university says it will send. Visa processing can take weeks, so knowing which document unlocks your application is worth an evening of reading.",
      },
      {
        heading: "Write one good email instead of five worried ones",
        text: "After reading everything, you will probably have a few questions. Collect them into one short, clear email to the admissions office. Put your full name and applicant number in the subject line, number your questions, and keep each one to a sentence or two.\n\nIt is a small habit, but it gets faster, clearer answers, and it gives you a written record. Save every reply in the same folder as the letter itself.",
      },
      {
        heading: "Then let yourself celebrate",
        text: "Once the conditions are listed, the dates are in your calendar, and your questions have gone out, put the letter away for the night. You have turned a page of good news into a plan you actually understand.\n\nThat is the part nobody photographs, and it is the part that gets you onto the plane.",
      },
    ],
    coverImage: "/images/blog/read-your-offer-letter.jpg",
    coverImageAlt: "Smiling woman reading a letter at a kitchen table with coffee and fruit",
    unsplash: {
      photographerName: "Vitaly Gariev",
      photographerUrl: "https://unsplash.com/@silverkblack",
      photoUrl:
        "https://unsplash.com/photos/woman-reading-document-at-kitchen-table-with-coffee-RNUNbvIXUbg",
    },
  },
  {
    title: "Pack for Week Three: A Suitcase Guide for International Students",
    slug: "pack-for-week-three",
    description:
      "Pack for the ordinary third week abroad, not the arrival photo: what to carry, what to buy there, and the small things that make a new room feel like yours.",
    category: "Student Life",
    date: "2026-10-26",
    readTime: "5 min read",
    intro:
      "Most packing lists are written for the first day. The flight, the arrivals hall, the photo you send home from the new room. That day matters, but it only happens once, and you will get through it on adrenaline and snacks.\n\nThe day your suitcase really has to work for is somewhere in week three. The excitement has worn thin, the laundry is piling up, a cold is starting, and you have a seminar at nine. Pack for that day. It is a quieter list, and a more useful one.",
    sections: [
      {
        heading: "Start with the folder, not the clothes",
        text: "Before a single shirt goes in, put your paper life in one place. Your passport, your admission letter, your visa or permit documents, proof of accommodation, insurance details, and anything the university asked you to bring on arrival. Keep the originals in your hand luggage, never in the checked bag, and keep a scanned copy somewhere you can open from any phone.\n\nAdd the boring extras: a few passport photos, a copy of your prescriptions, and your school certificates if there is any chance a local office will want to see them. Read the official pages from your university and the immigration authority for the exact list, because it changes from country to country. The folder is the only part of the suitcase that is hard to replace once you land.",
      },
      {
        heading: "Pack clothes for a normal week",
        text: "It is tempting to pack for the person you hope to be abroad: the hiking version, the party version, the version who irons. Pack for the person who goes to class, does laundry once a week, and gets cold in the library. Count roughly a week and a half of everyday clothes, one outfit you would wear to a presentation or an interview, and layers you can add or remove.\n\nLook up the weather for the months you will actually be there, not only arrival month. If the winter will be serious and you have never lived through one, you can often buy a proper coat locally, made for that climate and sometimes cheaper second-hand. A suitcase full of guesses is heavier than a suitcase with space left over.",
      },
      {
        heading: "Bring the things that are hard to find",
        text: "Some items are easy to buy anywhere: towels, hangers, shampoo, a cheap pan. Others are surprisingly hard to replace. Medicine you take regularly is the obvious one. Bring it in its original packaging with a copy of the prescription, and check your destination's official rules first, because some common medicines are restricted in some countries.\n\nThen think about the smaller things. Glasses and a spare pair, or your contact lens prescription. A phone charger, plus a plug adapter for the country you are heading to. The spice blend or tea you cannot find abroad, if customs allows it. Clothes in your size if your size is unusual. These are the gaps that show up on a Tuesday night when the shops are closed.",
      },
      {
        heading: "Leave room for the first shopping trip",
        text: "You will shop in the first week, whatever you pack. Bedding, a pillow, cleaning things, groceries, a bin, a lamp because the ceiling light is harsh. Many universities and student groups run welcome sales or swap tables where these cost very little, and older students often leave usable things behind.\n\nSo leave space, and leave a little money set aside for that trip in your budget. Write a short list before you go of what you will buy on arrival, so you do not panic-buy everything in the first shop near the station. A half-empty suitcase on the way out is a full one on the way home, and that is fine.",
      },
      {
        heading: "Pack one small piece of home",
        text: "Week three is often when homesickness arrives, quietly, in the middle of an ordinary afternoon. Practical lists tend to skip this part. Pack something light that makes a rented room feel like yours: a few printed photos, a small blanket, a mug, a scarf someone gave you, a recipe written in a familiar hand.\n\nIt is not about decoration. It is about having one thing in the room that already knows you. On the grey days, that matters more than a second pair of shoes.",
      },
      {
        heading: "The night-before check",
        text: "Before you close the bag, run through a short list. Documents in hand luggage, with copies saved online. Medicine and prescriptions together. Phone, charger, and adapter where you can reach them. A change of clothes in your carry-on in case the checked bag takes the scenic route. The address of your first night's stay written down, in case your phone dies at the airport.\n\nThen weigh the bag against your airline's allowance, take one thing out, and go to sleep. Week three will be easier because of what you chose tonight.",
      },
    ],
    coverImage: "/images/blog/pack-for-week-three.jpg",
    coverImageAlt: "Clothing items and a pair of shoes in an open suitcase",
    unsplash: {
      photographerName: "Arnel Hasanovic",
      photographerUrl: "https://unsplash.com/@arnelhasanovic",
      photoUrl:
        "https://unsplash.com/photos/clothing-items-and-pair-of-shoes-in-luggage-Nl-SXO4FAHw",
    },
  },
  {
    title: "Send It Once: How to Email a University Office and Get a Useful Reply",
    slug: "email-your-university",
    description:
      "A plain guide to writing emails to admissions, international offices, and professors: subject lines, what to include, how to follow up, and when to stop waiting.",
    category: "Applications",
    date: "2026-10-28",
    readTime: "5 min read",
    intro:
      "Somewhere in every application there is a question the website does not answer. Does my degree count? Is this document translated well enough? Can I start in January instead? So you write an email, and then you wait, refreshing your inbox and wondering if it went to the wrong place.\n\nThe people who read these emails are often handling hundreds of them in a busy week. The ones that get quick, clear answers are rarely the most polite or the most formal. They are the ones a tired person can understand and answer in one go. Here is how to write that email.",
    sections: [
      {
        heading: "Check the page before you write",
        text: "Before you write anything, spend ten minutes on the official pages. Many universities publish answers to the common questions: entry requirements by country, English test rules, deadlines, document formats. If the answer is already there, an email will often just bring back a link to it, a few days later.\n\nIf the page is unclear, that is a good reason to write. Copy the link and the exact sentence that confuses you. \"Your page says applicants need a recognised bachelor's degree. Is a three-year degree from my university recognised for this program?\" is a question someone can answer. \"Can I apply?\" is not.",
      },
      {
        heading: "Find the right inbox",
        text: "Universities are made of many small offices, and each one answers different things. Admissions usually handles applications, documents, and offers. The international student office often handles visas, arrival, and insurance questions. Fees and payment can sit with a finance or student accounts team. A department or program coordinator knows the details of the course itself.\n\nLook for the contact listed on the program page first, since that is usually the team that owns your question. Avoid sending the same email to five addresses at once. It feels efficient, but it often means five people each assume someone else will answer, or you get two replies that disagree.",
      },
      {
        heading: "Write a subject line that does the sorting",
        text: "A good subject line lets the reader know what this is before they open it. Put your applicant or student ID if you have one, the program name, and the question in a few words. Something like \"Application 123456, MSc Data Science: question about transcript translation.\"\n\nAvoid subject lines like \"Urgent!!\", \"Help\", or \"Question\". They do not make anyone move faster, and they are hard to find later when someone searches the inbox for your name.",
      },
      {
        heading: "Keep the body short and complete",
        text: "Start with who you are in one line: your full name as it appears on your passport, your applicant number, the program, and the intake you applied for. Then ask your question. If you have two questions, number them, so the reply can answer them one by one.\n\nAttach only what helps answer the question, and name the files clearly, such as \"Surname_Transcript_English.pdf\". End with a simple thank you and your name. You do not need long apologies or a paragraph about how much you love the university. Clear is kind, and it is what gets read.",
      },
      {
        heading: "Writing to a professor is different",
        text: "If you are applying for a research degree, or want to ask about a supervisor, you may write to a professor directly. Read the department page first, because some programs ask applicants not to contact staff before applying. If contact is welcome, show that you have actually read their recent work. Mention one paper or project and say, in two or three sentences, how your own interests connect to it.\n\nDo not send the same message to a long list of professors with the name swapped. They can usually tell. A short, specific note to the two or three people whose work genuinely fits you is worth more than fifty copies.",
      },
      {
        heading: "Follow up, but calmly",
        text: "Look for a stated response time on the contact page and give it a fair chance. If nothing comes back after that, or after about a week if no time is given, reply to your own original email rather than starting a new thread. Keep it to two lines: you are following up on the question below, and here is your applicant number again.\n\nIf a deadline is close, say so plainly, with the date. If you still hear nothing, check whether the university has an online enquiry form or a phone line, and use that. Keep every reply you receive in one folder. When an office tells you something important in writing, that email is your record.",
      },
      {
        heading: "A short template to start from",
        text: "Subject: Application [number], [program name]: [question in a few words].\n\nDear Admissions team,\n\nMy name is [full name] and I applied for [program] starting [intake], applicant number [number]. I have one question about [topic]. Your page at [link] says [quote]. Does this apply to [your situation]?\n\nThank you for your help.\n[Full name]\n\nChange it to fit your voice, keep it short, and send it once. Then close the inbox and get back to the rest of your application.",
      },
    ],
    coverImage: "/images/blog/email-your-university.jpg",
    coverImageAlt: "A person typing on a laptop next to an open notebook on a wooden table",
    unsplash: {
      photographerName: "Ebru Doğan",
      photographerUrl: "https://unsplash.com/@ebrubodyy",
      photoUrl:
        "https://unsplash.com/photos/a-person-typing-on-a-laptop-on-a-wooden-table-8VJjpY51FSA",
    },
  },
  {
    title: "Read the Module List: How to Choose a Program by What You Will Actually Study",
    slug: "read-the-module-list",
    description:
      "Two programs can share a name and teach very different things. A practical guide to reading course structures, core and optional modules, assessment, and placements before you apply.",
    category: "Choosing a Program",
    date: "2026-10-30",
    readTime: "5 min read",
    intro:
      "Search for a program like \"International Business\" or \"Computer Science\" and you will find hundreds of them, all with the same title and very similar photos of smiling students on a lawn. It is tempting to sort them by ranking or city and stop there.\n\nBut the title is only the cover of the book. What you will actually do for one, two, or four years is written further down the page, in the part most applicants skim: the module list, sometimes called the course structure, curriculum, or study plan. Reading it properly takes about half an hour per program, and it is one of the best half hours you can spend before applying.",
    sections: [
      {
        heading: "Find the real course structure",
        text: "On most university websites, the program page has a section called something like \"What you will study\", \"Course structure\", \"Curriculum\", or \"Modules\". Sometimes it links to a separate handbook or a module catalogue with a short description of every course. That handbook is gold. It often lists the topics week by week, the reading, and how the course is graded.\n\nCheck which year the information is for. Universities update their programs, and a page may show this year's modules with a note that they can change. That is normal. You are not looking for a promise of every detail, you are looking for the shape of the program.",
      },
      {
        heading: "Separate core from optional",
        text: "Most programs have core modules that everyone takes, and optional modules you choose from. The core tells you what the program really is. If a degree called \"Data Science\" is mostly statistics in its core, it will feel different from one where the core is mostly programming, even though both have the same name on the certificate.\n\nBe a little careful with the optional list. A long list looks exciting, but options can depend on staff availability, timetable clashes, or minimum student numbers. If one optional module is the main reason you want a program, it is fair to email the department and ask how often it actually runs.",
      },
      {
        heading: "Look at how you will be assessed",
        text: "Module descriptions often say how you are graded: exams, essays, group projects, lab reports, presentations, or a mix. This matters more than people expect. Some students do their best work in a quiet exam hall, and others shine in a long project with time to think. Neither is better, but a program built almost entirely on one style will suit some people far more than others.\n\nNotice group work too. In many countries, group projects are a big part of the grade, and you will be working closely with classmates from very different backgrounds. That can be one of the best parts of studying abroad, and it is worth knowing about before you arrive.",
      },
      {
        heading: "Check the bits that live outside the classroom",
        text: "Some programs include a placement year, an internship module, fieldwork, a study exchange, or a final research project or dissertation. Read the small details here. Is the placement guaranteed, or do you have to find it yourself with support from the university? Is it optional or required? Does it add time to the degree?\n\nIf you are an international student, also check whether any placement or exchange has rules that depend on your visa or residence status. Keep this general at first, then look at the official government and university guidance for your specific country. Do not assume that what worked for a friend in another country will work for you.",
      },
      {
        heading: "Compare two programs side by side",
        text: "Once you have two or three programs you like, put them on one page. Make a simple table with a row for each year or semester and write the core modules in it. Add a line for assessment style, a line for placements or projects, and a line for anything that surprised you.\n\nPatterns jump out quickly. One program may spend its first year on broad foundations while another goes straight into specialist topics. One may finish with a big individual project, and another with a team project for a real organisation. You will probably find that one of them simply sounds more like the student you want to be on a normal Tuesday.",
      },
      {
        heading: "Use the list in your application",
        text: "Reading the modules is not only for choosing. It also makes your application better. When a personal statement or motivation letter says \"I am excited about your program\", it says nothing. When it says \"I want to take the module on urban water systems because of a flood project I worked on at home\", it shows you have done the reading and know why you are applying.\n\nOne honest, specific reason is enough. Pick a module or project that genuinely connects to something you have done or want to do, and say why in two or three sentences.",
      },
      {
        heading: "Questions worth asking before you apply",
        text: "If the page leaves you unsure, a short email to the department or admissions team is perfectly normal. Good questions include: Which optional modules ran last year? How big are the classes in the first year? Who usually teaches the core modules? Is the final project individual or in a group? How are placements arranged?\n\nYou may not get every answer, and that is fine. The aim is not to find a perfect program. It is to choose one where you know, roughly, what your days will be full of, and you still want to go.",
      },
    ],
    coverImage: "/images/blog/read-the-module-list.jpg",
    coverImageAlt: "A spiral notebook and pen on a seminar desk next to a seated student",
    unsplash: {
      photographerName: "Marco J Haenssgen",
      photographerUrl: "https://unsplash.com/@marcohaenssgen",
      photoUrl:
        "https://unsplash.com/photos/a-man-sitting-at-a-desk-with-a-notebook-and-pen-JU7-JtAAzmQ",
    },
  },
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
    languagePracticeNote:
      "The Tuesday above already counts an extra hour when lectures are in a language you are still learning. Speaking practice is the part of that hour that is hard to do from a textbook.",
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
    title: "The Corridor Hello: How to Make Friends in Your First Semester Abroad",
    slug: "make-friends-abroad",
    description:
      "Friendships abroad rarely happen in week one. A practical, kind guide to the quiet patch, small repeated habits, and building a circle in a new country.",
    category: "Student Life",
    date: "2026-10-31",
    readTime: "5 min read",
    intro:
      "Moving abroad to study means leaving the people who already know you. Some students find their circle in the first week, but many do not, and that is completely normal. Friendship in a new country is less about luck and more about small habits repeated over a few months. Here is how to get through the quiet patch and build real connections, one ordinary hello at a time.",
    sections: [
      {
        heading: "Expect a quiet patch, and don't read it as failure",
        text: "Most students arrive expecting either instant best friends or total loneliness. The truth is usually in between. The first week is loud: welcome events, flatmates, a hundred names you will forget. Then lectures start, everyone retreats into their timetable, and for a few weeks it can feel like the door closed.\n\nThat dip is normal, and it happens to local students too. Friendships at university are mostly built by seeing the same faces again and again, not by one perfect first conversation. If week four feels lonelier than week one, it does not mean you picked the wrong country. It means you are in the slow part, and the slow part is where real friendships grow.",
      },
      {
        heading: "Say yes to small, repeated things",
        text: "Big welcome parties are fun, but they are rarely where friendships start. Small things that repeat are much better: the same seminar group every Thursday, a weekly language caf\u00e9, a club that trains on Monday evenings, a volunteering shift, a choir. Seeing people regularly gives you a reason to talk without having to invent one.\n\nPick two or three repeating things in your first month and go even when you are tired. One society linked to your subject and one that has nothing to do with your studies is a good mix. The second one often turns out to be the one you remember.",
      },
      {
        heading: "Use the corridor hello",
        text: "Your flat, your corridor, and your shared kitchen are the easiest places to start. A simple routine works: say hello every time, learn names, and leave the kitchen door open when you cook. Cooking something from home and offering a taste is one of the oldest tricks in student housing, and it still works.\n\nIf conversation feels hard, ask small practical questions. Where do you buy groceries? Which bus goes to campus? Is the library open late? People like being helpful, and a practical question is an easy way in. Next time you see them, you already have something to follow up on.",
      },
      {
        heading: "Find your people and also step outside them",
        text: "It is completely natural to look for students from your own country or who speak your language. They understand the jokes, the food you miss, and the paperwork you are struggling with. Many universities have national or cultural student associations, and they can be a real lifeline in the first months.\n\nTry not to let that be your only circle, though. Mix it with local students and international students from other places. You will improve your language faster, you will learn how things work in your new city, and you will end up with friends you would never have met at home. Both kinds of friendship matter.",
      },
      {
        heading: "Study together on purpose",
        text: "Group work can feel stressful, but it is also a ready-made reason to spend time with classmates. Suggest meeting in the library a little before a deadline, or invite one or two people to review lecture notes over coffee. Study sessions turn classmates into friends surprisingly often, because you are working on something real together.\n\nIn many countries, it is normal to be direct about this. Saying \"I am new here and still meeting people, do you want to study together this week?\" is not strange. Most people will respect the honesty, and some will be quietly relieved you asked first.",
      },
      {
        heading: "Mind the language and culture gaps kindly",
        text: "If you are studying in a language that is not your first, group conversations can be exhausting. People talk fast, interrupt each other, and joke about things you have no context for. One-to-one conversations are often much easier at the start, so do not judge yourself by how you do at a noisy party.\n\nCultural habits around friendship differ too. In some places people are warm on the first day but slow to invite you home. In others they seem reserved for weeks and then become very loyal friends. Give it time before deciding that people are cold, and assume good intentions when something feels awkward.",
      },
      {
        heading: "Look after yourself while it grows",
        text: "Making friends takes energy, and so does everything else about moving abroad. Keep in touch with family and friends at home, but try not to spend every evening on video calls, because it can keep you from settling in. Get outside, keep some kind of routine, and eat properly.\n\nIf loneliness or homesickness starts to feel heavy, or lasts for weeks, talk to someone. Most universities have student support or counselling services, and international student offices see this all the time. Asking for help early is a sensible step, not a sign that you are failing. Friendship abroad usually arrives slowly, then all at once, and it is worth the wait.",
      },
    ],
    coverImage: "/images/blog/make-friends-abroad.jpg",
    coverImageAlt: "Four smiling young friends walking arm in arm through a park in autumn",
    unsplash: {
      photographerName: "Vitaly Gariev",
      photographerUrl: "https://unsplash.com/@silverkblack",
      photoUrl:
        "https://unsplash.com/photos/four-friends-walking-together-in-a-park-NMSvDSJV4LQ",
    },
  },
  {
    title: "Best Countries for International Students in 2026",
    slug: "best-countries-2026",
    description:
      "Compare Canada, Australia, Germany and Finland for international students in 2026: tuition fees, student jobs, living costs, post-study work and quality of education.",
    category: "Country Comparison",
    date: "2026-05-15",
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
    languagePracticeNote:
      "The Finland section notes that learning Finnish can improve job opportunities while you study. The same idea applies in Germany and other places where daily life is not in English: speaking practice is how you prepare before you go.",
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
    title: "Tell One True Story: How to Write a Personal Statement for Study Abroad",
    slug: "personal-statement",
    description:
      "A calm, practical guide to writing a personal statement or statement of purpose for a university abroad: reading the prompt, finding one honest story, linking it to the program, and editing without losing your own voice.",
    category: "Applications",
    date: "2026-11-07",
    readTime: "6 min read",
    intro:
      "The personal statement is often the part of an application that students leave until last, because it feels the most exposing. Grades and test scores are numbers. A statement asks you to explain, in your own words, why you want this program and why you are ready for it. Staring at an empty page with that question can make anyone freeze.\n\nThe good news is that admissions readers are not looking for a perfect writer or a dramatic life story. They want to understand who you are, what you want to study, and whether you have thought about it seriously. This guide walks through a simple way to get there, one honest paragraph at a time.",
    sections: [
      {
        heading: "Read the prompt like a set of instructions",
        text: "Before you write a single sentence, find the exact instructions on the university or application portal page. Different systems ask for different things. Some want a general personal statement, some want a statement of purpose focused on research or career plans, and some ask two or three short questions instead of one long essay. The word or character limit, and whether it is strict, matters too.\n\nCopy the prompt into the top of your document and underline the verbs: describe, explain, discuss, tell us. Those words are the real brief. A beautiful essay that answers a different question will still feel off to the person reading it. If anything is unclear, check the program's admissions page or email the admissions office before you guess.",
      },
      {
        heading: "Start with notes, not with an opening line",
        text: "Many students lose hours trying to write a clever first sentence. Skip it for now. Open a blank page and list moments instead: a class that changed how you think, a project you stayed up late to finish, a problem at home or at work that you wanted to solve, a book or person that pushed you toward this subject.\n\nNext to each moment, write one line on what you learned or what it made you curious about. You will not use all of them. You are looking for two or three that point clearly toward the program you are applying for. The best material is usually specific and a little ordinary, like a lab result that failed or a customer question you could not answer, rather than a grand statement about your passion.",
      },
      {
        heading: "Choose one true story and let it carry the essay",
        text: "A strong statement often has one thread running through it. Pick the moment from your notes that best explains why you want to study this subject, and build around it. Describe what happened briefly, then spend more words on what you did, what you noticed, and how it shaped your next steps.\n\nShow, then explain. Instead of saying you are hardworking, describe the weekend you rebuilt a project after it broke. Instead of saying you love economics, mention the question about local prices you kept trying to answer. Readers remember details. They forget adjectives.",
      },
      {
        heading: "Connect yourself to this program, not to any program",
        text: "Admissions readers want to know why you chose their course. Go back to the official program page and read the modules, research areas, teaching style, and any placement or project options. Pick one or two that genuinely match your interests, and say how they connect to what you have already done.\n\nKeep it honest and specific. One clear sentence about a module you are excited to take is better than a paragraph of praise for the university's reputation. If you are applying to several universities, keep a shared core but rewrite this part for each one. A statement that could be sent anywhere usually reads that way.",
      },
      {
        heading: "Finish by looking forward",
        text: "The last part of your statement should answer a quiet question: what will you do with this degree? You do not need a fixed ten-year plan. It is enough to describe the kind of work, research, or problem you hope to move toward, and how this program helps you take the next step.\n\nIf you have a gap in your studies, a change of subject, or a weaker semester that the reader might notice, a short, calm explanation can help. State what happened, what you did about it, and what has changed. Keep it brief and move on. The statement is about where you are going, not an apology for where you have been.",
      },
      {
        heading: "Edit for clarity, then stop",
        text: "Leave your first draft for a day before editing. Then read it aloud. Cut sentences that repeat your CV, words you would never say in real life, and any paragraph that does not help answer the prompt. Check that you are within the limit, and that the university and program names are correct in every version you send.\n\nAsk one or two people you trust, such as a teacher or a friend who writes well, to tell you where they got confused or bored. Be careful with heavy rewriting from others or from writing tools. Universities expect the statement to be your own work, and many state this clearly in their application rules. Your voice, even if it is simple, is the point. When it is clear, honest, and answers the question, you are done.",
      },
    ],
    coverImage: "/images/blog/personal-statement.jpg",
    coverImageAlt: "A hand writing notes in a lined notebook beside a laptop and phone on a white desk",
    unsplash: {
      photographerName: "Светлана Химочка",
      photographerUrl: "https://unsplash.com/@oraswet",
      photoUrl:
        "https://unsplash.com/photos/a-person-writing-on-a-notebook-with-a-laptop-in-the-background-0KT9gxj_BdM",
    },
  },
  {
    title: "Touch Down, Then Breathe: Getting from the Airport to Your First Night Abroad",
    slug: "arrival-day",
    description:
      "A calm arrival-day checklist for international students: documents, immigration and bags, getting into town, getting online, and settling in for the first night without trying to do everything at once.",
    category: "Student Life",
    date: "2026-11-06",
    readTime: "6 min read",
    intro:
      "Landing in a new country after a long flight is strange. Your body thinks it is the middle of the night, the signs are in a language you only half recognise, and everyone else seems to know exactly where to walk. It is easy to feel that you should already be organised, smiling, and unpacking.\n\nYou do not need to be. Arrival day has one job: get you from the plane to a safe bed with your bags, your documents, and enough energy left to sleep. Everything else can wait until tomorrow. This guide is a calm checklist for that single day.",
    sections: [
      {
        heading: "Before you leave the plane, know where you are going",
        text: "While you are still seated, open the note you prepared at home. It should have your full address for tonight, the name of your residence or host, a phone number that works in that country, and how you plan to get there from the airport. Add a screenshot of the route or booking confirmation in case the airport Wi-Fi is slow.\n\nKeep your passport, visa or entry documents, offer letter, and housing confirmation in one place you can reach without unpacking your whole bag. Immigration officers and university welcome desks ask for these often. Having them ready is less about looking efficient and more about not digging through a suitcase while a queue forms behind you.",
      },
      {
        heading: "Move through immigration and bags one step at a time",
        text: "Follow the signs for arrivals and immigration. If you are unsure which queue is yours, ask a staff member once rather than guessing twice. Have your documents out, put your phone away while you speak to the officer, and answer the questions they ask. Most of the time the process is ordinary, even when it feels serious.\n\nAt baggage claim, stand where you can see the belt clearly and keep your hand luggage with you. If a bag does not arrive, go to the airline desk in the arrivals hall before you leave the airport, and keep the report they give you. It is annoying, but it is also common, and it is much easier to fix from the airport than from a student residence an hour away.",
      },
      {
        heading: "Choose your way into town before you are tired",
        text: "The best transport plan is the one you decided before you landed. Many universities publish clear advice on airport transfers, welcome pickups, and public transport options for new students. If yours does, follow it. If you booked a train, coach, or ride in advance, go to the meeting point written on your confirmation, not the first person who offers you a taxi in the arrivals hall.\n\nOfficial taxi ranks, licensed ride apps used in that city, and airport buses are usually easier to trust than a stranger who approaches you. Check that the destination on the meter, app, or ticket matches the address you wrote down. Keep your bags where you can see them, and send a short message to someone at home once you are on your way, so they know you left the airport safely.",
      },
      {
        heading: "Get online just enough to be reachable",
        text: "You do not need perfect connectivity on day one, but you do need a way to receive messages, open maps, and contact housing or the university if something goes wrong. Airport Wi-Fi is often enough for that first hour. Some students buy a local SIM or eSIM before they travel; others wait until they can visit a phone shop with their passport the next day.\n\nWhatever you choose, test one thing early: that you can open your housing address, your university emergency or arrival contacts, and a message to family. Save those numbers offline too. A dead battery and no offline copy of your address is a small problem that feels huge when you are jet-lagged.",
      },
      {
        heading: "When you arrive, do the boring important things first",
        text: "At your residence or host home, check in properly. Confirm your room number, how you get back in after hours, where the kitchen and bathroom are, and what Wi-Fi password you need. Take a photo of any existing damage in the room before you unpack. It takes two minutes and can save arguments about deposits months later.\n\nThen look after your body. Drink water, eat something simple, even if it is only from a nearby shop, and decide when you will sleep. Unpack only what you need for the night: chargers, toiletries, pyjamas, tomorrow's clothes, and your documents folder. A fully unpacked suitcase can wait. Sleep usually cannot.",
      },
      {
        heading: "Tell the right people you landed, then stop scrolling",
        text: "Send a short message to your family or a close friend once you are inside and safe. If your university asked you to confirm arrival, do that too, especially if they are expecting you for orientation or a residence check-in. One clear update is better than a long stream of half-awake photos.\n\nAfter that, put the phone down for a while. Comparing your tired arrival with someone else's polished day-one post will not help you sleep. Your first night abroad does not need to look like a highlight reel. It needs to be quiet enough that tomorrow feels possible.",
      },
      {
        heading: "Leave day two for day two",
        text: "It is tempting to open a bank account, buy a phone plan, tour the campus, and find every supermarket before you go to bed. Resist that. Arrival day ends when you are fed, locked in, and lying down. Orientation, registration, and exploring work better when you have slept.\n\nIf something already went wrong, such as a missed pickup or a room that is not ready, contact the housing office or the university's international or student support team rather than inventing a late-night solution alone. They deal with arrival problems every term. Asking for help on day one is not a failure. It is how most good first nights begin.",
      },
    ],
    coverImage: "/images/blog/arrival-day.jpg",
    coverImageAlt: "A traveler sitting alone in a quiet airport waiting area at night under bright terminal lights",
    unsplash: {
      photographerName: "Eric Prouzet",
      photographerUrl: "https://unsplash.com/@eprouzet",
      photoUrl:
        "https://unsplash.com/photos/man-sitting-in-empty-airport-waiting-area-dsp3EelRZl4",
    },
  },
  {
    title: "Small Awards Add Up: A Calm Guide to Finding Scholarships for Study Abroad",
    slug: "scholarship-search",
    description:
      "Where study abroad scholarships actually come from, how to build a simple shortlist, how to tell real funding from scams, and how to write applications that do not all sound the same.",
    category: "Scholarships",
    date: "2026-11-05",
    readTime: "6 min read",
    intro:
      "Searching for scholarships can feel like shouting into a very large room. You type a few words into a search engine, open twenty tabs, and find lists of awards that are closed, meant for someone else, or so vague you cannot tell whether you qualify.\n\nThe students who end up with funding are rarely the ones who searched the hardest for one perfect award. They are usually the ones who searched in the right places, kept a tidy list, and applied steadily to awards they had a real chance of winning. This guide walks through that approach, one calm step at a time.",
    sections: [
      {
        heading: "Start with the university you want to attend",
        text: "The most reliable place to look is the scholarships or funding page of each university on your list. Many universities offer awards for international students, and some consider you automatically when you apply for admission, while others need a separate application with its own deadline. The page will usually say which, so read it carefully rather than assuming.\n\nLook at the department or faculty pages too. Individual schools sometimes have their own smaller awards that never appear on the main university list. If anything is unclear, a short email to the admissions or scholarships office is perfectly normal, and the answer comes from the people who actually decide.",
      },
      {
        heading: "Then look closer to home and further afield",
        text: "After universities, check two kinds of official sources. The first is the government of the country you want to study in. Many governments run scholarship programs for international students, often listed on an official study portal or the website of their embassy in your country. The second is your own government, ministry of education, or national scholarship body, which may fund students who study abroad and return.\n\nBeyond those, look at international organisations, foundations, and professional bodies linked to your field. A future engineer, nurse, or teacher may find awards that a general search never shows. Always follow the link back to the organisation's own website before you trust the details, because third-party lists are often out of date.",
      },
      {
        heading: "Build a shortlist you can actually manage",
        text: "Make a simple spreadsheet or note with one row per award. For each one, write the name, the official link, who it is for, what it covers, the deadline, and what you need to submit. Add a column for your honest chance, such as strong, possible, or long shot.\n\nThis list does two useful things. It stops you losing track of deadlines, and it shows you quickly which awards are worth your time. An award that matches your country, subject, and level of study is usually a better bet than a famous one that thousands of people apply for. Aim for a realistic mix rather than putting everything into a single application.",
      },
      {
        heading: "Read the eligibility rules like a checklist",
        text: "Before writing a word, go through the eligibility section line by line. Check your nationality, the level of study, the subject areas, the start date, any academic or language requirements, and whether you need an offer of admission before you apply. If you miss one condition, the application may not be read at all.\n\nPay attention to what the award covers, too. Some scholarships pay part of the tuition, some cover living costs, some pay for travel, and a few cover several of these. Knowing exactly what you would receive helps you plan the rest of your budget honestly, instead of counting on money that was never part of the offer.",
      },
      {
        heading: "Write each application for the people reading it",
        text: "Most scholarship applications ask some version of the same question: why you, why this subject, and what you will do with it. It is tempting to write one essay and send it everywhere. Reviewers can usually tell. Start from a strong core story about your goals, then adjust it for each award, connecting your plans to that organisation's purpose in its own words.\n\nBe specific. One clear example of something you did, learned, or built says more than a paragraph of big adjectives. Ask a teacher or friend to read your draft and tell you what they remember afterwards. If they cannot name your main point, make it clearer. Give your referees plenty of notice, and send them the award details so their letters fit too.",
      },
      {
        heading: "Learn to spot scholarship scams",
        text: "Real scholarships do not usually ask you to pay a fee to apply or to receive the award. Be careful with any offer that arrives without you applying, promises guaranteed funding, asks for bank details or card numbers early on, or pressures you to act within hours. Check that emails come from the organisation's official domain and that the award appears on its official website.\n\nIf you are unsure, ask the university's international or scholarships office whether they recognise the award. A two-minute question can save you a lot of money and worry.",
      },
      {
        heading: "Keep going after the first no",
        text: "Rejections are part of the process, and they say very little about your worth as a student. Competitive awards often have far more strong applicants than places. Keep your notes, reuse what worked, and move on to the next deadline on your list.\n\nAnd remember that funding often arrives in pieces. A partial tuition award, a small travel grant, and a departmental bursary can together make a real difference. Small awards add up, and every application you send makes the next one a little easier to write.",
      },
    ],
    coverImage: "/images/blog/scholarship-search.jpg",
    coverImageAlt: "A person writing in a small notebook beside an open laptop and a cup of coffee on a wooden table",
    unsplash: {
      photographerName: "Esra Afşar",
      photographerUrl: "https://unsplash.com/@esraafsar",
      photoUrl:
        "https://unsplash.com/photos/person-writing-in-notebook-next-to-laptop-and-coffee-vDNMEn8VCfU",
    },
  },
  {
    title: "New Classroom, New Rules: How to Adjust to Academic Culture Abroad",
    slug: "new-academic-culture",
    description:
      "A practical guide to the unwritten rules of studying at a university abroad: speaking up in class, independent study, office hours, group work, referencing and academic integrity, and reading feedback without panic.",
    category: "Student Life",
    date: "2026-11-04",
    readTime: "5 min read",
    intro:
      "You can prepare for the visa, the flight and the housing, and still feel lost in your first week of classes. The lecture starts, the professor asks the room a question, and everyone seems to know something you were never told. How much should you speak? How much reading is really expected? Is it rude to email a lecturer, or rude not to?\n\nEvery university system has its own unwritten rules. None of them are better or worse than the ones you grew up with, but they are different, and nobody hands you the list. This guide walks through the ones that surprise international students most often, so your first semester feels less like guessing.",
    sections: [
      {
        heading: "Speaking up is often part of the work",
        text: "In many places, students are expected to listen carefully and speak only when asked. In others, especially in seminars and small classes, asking questions, disagreeing politely and building on a classmate's point is part of how you learn, and sometimes part of your grade.\n\nIf you come from a quieter tradition, start small. Prepare one question or one comment before each seminar and aim to say it in the first half of the session, before the conversation gets fast. Phrases like \"I wondered whether\" or \"Could I add something to that\" give you a gentle way in. Nobody expects perfect English or a brilliant point. They expect you to take part.",
      },
      {
        heading: "The hours outside class matter more than the hours inside",
        text: "A timetable abroad can look surprisingly empty. A few lectures, a seminar or two, and long gaps in between. Those gaps are not free time. Many systems assume that most of your learning happens through reading, problem sets and projects you organise yourself.\n\nCheck your course handbook or module page for the expected study hours, then block them into your week like classes. Find a place where you actually focus, whether that is the library, a quiet cafe or a study room in your building. Students who treat independent study as a real appointment usually feel much calmer by mid-semester than those who wait for a deadline to push them.",
      },
      {
        heading: "Office hours are an invitation, not a punishment",
        text: "In some education systems, going to see a teacher means you are in trouble. At many universities abroad, it means you are engaged. Lecturers often set aside regular office hours, in person or online, specifically so students can come with questions.\n\nYou do not need a big problem to go. Asking how to approach an essay question, what a piece of feedback meant, or which reading to start with is completely normal. Bring your question written down, be on time, and keep it focused. One short visit early in the semester also means the lecturer knows your face, which helps later if you need advice or a reference.",
      },
      {
        heading: "Group work is assessed on how you work, not only what you hand in",
        text: "Group projects are common, and they can feel strange if you are used to being marked only as an individual. Some groups divide the work neatly. Others drift until the week before the deadline.\n\nAt the first meeting, agree on three things: who does which part, when you will check in, and how you will share files. Write it down in a shared message so nobody remembers it differently. If someone disappears, raise it kindly with the group first, then with the lecturer if it continues. Most universities have a process for this, and using it early is far better than doing two people's work in silence.",
      },
      {
        heading: "Referencing is a rule, not a style choice",
        text: "This is the one that catches the most well-meaning students. Universities abroad usually have strict academic integrity rules. Using someone else's words or ideas without a clear reference can be treated as plagiarism, even if you did not mean to copy and even if it was accepted where you studied before.\n\nFind out which referencing style your department uses and learn it in your first few weeks. Most university libraries run free workshops and have online guides. Check your course rules on AI writing tools too, because they vary a lot between universities and even between modules. When you are unsure whether something is allowed, ask before you submit, not after.",
      },
      {
        heading: "Read feedback as directions, not a verdict",
        text: "Your first marked assignment abroad might come back lower than you expected, with comments that feel blunt. That is common, and it is not a sign you do not belong. Grading scales and expectations differ between countries, and it takes time to learn what a strong answer looks like in a new system.\n\nRead the comments twice, once to feel whatever you feel and once to find two or three specific things to change. If something is unclear, take it to office hours. Many universities also have academic skills or writing centres where staff will look at a draft with you. Using them is what successful students do, not a sign of struggling.",
      },
      {
        heading: "Give yourself a semester to learn the rules",
        text: "Adjusting to a new academic culture is a skill, and like any skill it improves with practice. In the first few weeks, watch how other students take part, notice what lecturers praise, and keep a short list of anything that confuses you to ask about.\n\nBy the end of your first semester, the things that felt strange will start to feel normal. You will also have something valuable that you did not have before: the ability to learn well in more than one system, which employers and graduate programs around the world quietly respect.",
      },
    ],
    coverImage: "/images/blog/new-academic-culture.jpg",
    coverImageAlt: "A lecturer standing in front of students who are listening and taking notes at wooden desks in a lecture hall",
    unsplash: {
      photographerName: "Vitaly Gariev",
      photographerUrl: "https://unsplash.com/@silverkblack",
      photoUrl:
        "https://unsplash.com/photos/professor-lecturing-students-in-a-university-lecture-hall-nrE0LK_qN7E",
    },
  },
  {
    title: "Ask Early, Ask Well: How to Get Strong Recommendation Letters for Study Abroad",
    slug: "recommendation-letters",
    description:
      "Many study abroad applications ask for recommendation letters. How to choose your referees, ask politely and early, and give them what they need to write a strong letter.",
    category: "Applications",
    date: "2026-11-01",
    readTime: "5 min read",
    intro:
      "Many universities abroad ask for one or more recommendation letters, sometimes called references. They are one of the few parts of your application you cannot write yourself, which makes them feel out of your control. They are not. Who you ask, how early you ask, and what you give them make a big difference. Here is how to get letters that sound like they were written about you, not about any student.",
    sections: [
      {
        heading: "Check what each program actually asks for",
        text: "Before you ask anyone, read the application instructions for every program on your list. Requirements vary a lot. Some programs want academic referees only, some accept a work manager, some want a letter uploaded through an online portal, and some only ask for contact details and send the referee a form later. Many undergraduate programs do not ask for letters at all, while most postgraduate and research programs do.\n\nMake a small table with each program, how many letters it needs, what kind of referee it accepts, how the letter is submitted, and the deadline. That table is what you will share with your referees, so getting it right now saves awkward emails later.",
      },
      {
        heading: "Choose people who know your work, not just big titles",
        text: "A short, warm letter from a lecturer who supervised your project is usually more useful than a vague letter from a famous professor who barely remembers you. Admissions readers look for specific detail: what you did, how you thought, how you compared with other students. Only someone who has seen your work closely can give that.\n\nGood choices are a lecturer whose course you did well in and spoke up in, a thesis or project supervisor, or a manager who has watched you solve real problems at work. If a program asks for academic referees, follow that, even if your best relationship is with a manager.",
      },
      {
        heading: "Ask early, and ask properly",
        text: "Writing a good letter takes time, and lecturers often get many requests at the same moment of the year. Ask well before your first deadline, ideally several weeks ahead, so they can say yes without rushing. A last-minute request puts them in a hard spot and usually produces a thinner letter.\n\nAsk in a short, polite email or in person, and make it easy to say no. Something like: \"I am applying for master's programs abroad and would be grateful if you felt able to write a strong recommendation for me. I completely understand if you are too busy.\" The word strong matters. If someone hesitates, it is better to find out now and ask someone else.",
      },
      {
        heading: "Give your referees a simple pack",
        text: "Once someone agrees, send them everything in one tidy email. Include your program table with deadlines and submission methods, your CV, a draft of your personal statement, and a transcript if you have one. Add a few lines reminding them of specific things you did in their class or team: a project you led, a topic you wrote about, a time you improved after feedback.\n\nYou are not writing the letter for them. You are giving them the details they may have forgotten, so the letter can be concrete. Busy people appreciate this, and it shows the kind of organised student they would be recommending.",
      },
      {
        heading: "Be careful with portals and waivers",
        text: "Many universities send referees a link once you enter their email address in the application. Enter it early, double-check the spelling, and use an address your referee actually reads, ideally an official university or company address, since some programs prefer or require one. Tell your referee to expect an email from the university so it does not end up in spam.\n\nSome systems ask whether you waive your right to see the letter. Policies differ by country and university, so read the explanation on the form. Many applicants choose to waive it, because readers may give a confidential letter more weight, but check the university's own guidance if you are unsure.",
      },
      {
        heading: "Follow up kindly, and say thank you",
        text: "A week or so before each deadline, check your application portal to see whether the letter has arrived. If it has not, send a short, friendly reminder. Most referees are grateful for it, not annoyed. If a deadline is about to pass and a letter is still missing, contact the admissions office early and ask what they recommend, rather than waiting and hoping.\n\nWhen the letters are in, send a proper thank you. Later, tell your referees where you were accepted and where you decided to go. People who write recommendations rarely hear the ending, and they remember the students who come back to tell them. You may need their help again for a scholarship or a first job abroad, so it is a relationship worth looking after.",
      },
    ],
    coverImage: "/images/blog/recommendation-letters.jpg",
    coverImageAlt: "Cream envelopes sealed with gold wax seals stamped with a tree",
    unsplash: {
      photographerName: "Diana Light",
      photographerUrl: "https://unsplash.com/@dreamcatchlight",
      photoUrl:
        "https://unsplash.com/photos/a-white-envelope-with-a-wax-stamp-and-a-wax-seal-Fcd6LJ4HDNk",
    },
  },
  {
    title: "The First Thirty Days: How to Budget Your First Month Abroad",
    slug: "first-month-budget",
    description:
      "A practical guide to money in your first month abroad: why it costs more than the rest of the year, how to pay before your bank account is open, how to buy in waves, and how to turn real spending into a budget that works.",
    category: "Budget Study Guide",
    date: "2026-11-02",
    readTime: "5 min read",
    intro:
      "The first month abroad is the most expensive one you will have, and the hardest to predict. You arrive with a suitcase, a rough budget, and a list of things you think you need. Then the city adds its own list: a deposit, a transport card, a pillow, a phone plan, a cooking pan, a winter coat that was cheaper at home.\n\nNone of this means you planned badly. It just means the first month works differently from the rest of the year. This guide is about getting through it calmly, with money left over, and coming out the other side with a budget that actually fits your life.",
    sections: [
      {
        heading: "Treat the first month as its own budget",
        text: "Most students plan a monthly budget for the whole year and then expect the first month to match it. It rarely does. Month one carries setup costs that never come back: bedding, kitchen basics, a SIM card, an adaptor, maybe a deposit or the first rent payment plus fees, and travel from the airport.\n\nSo plan two budgets. One is your normal monthly budget, built from your university's cost-of-living guidance and your own research. The other is a one-off setup budget for the first few weeks. Keeping them apart stops you from panicking when week one looks expensive, and stops a heavy start from quietly becoming your normal.",
      },
      {
        heading: "Arrive with more than one way to pay",
        text: "Opening a local bank account can take a few days or a few weeks, depending on the country and on paperwork such as your address or residence documents. Until then, you need money you can actually reach.\n\nBring a mix: a card that works abroad, a small amount of local cash for your first day, and a backup card kept separately from your main wallet. Before you leave, check with your bank about foreign transaction fees, daily withdrawal limits, and whether they need to know you are travelling. A blocked card on day two is a stressful way to start.",
      },
      {
        heading: "Buy in waves, not all at once",
        text: "The first trip to a big store is where budgets go to die. Everything looks necessary when your room is empty. Instead, buy in three small waves.\n\nWave one is the first two days: only what you need to sleep, wash, and eat. Wave two is the end of week one, once you know what your room already has and what your flatmates are happy to share. Wave three is the end of the month, when you know your routine and can see what you are actually missing.\n\nAsk around before you buy. Many universities have welcome sales, second-hand groups, or leaving students who give away kitchen things and lamps for almost nothing.",
      },
      {
        heading: "Track everything, but only for four weeks",
        text: "You do not need a complicated app. A note on your phone or a simple notebook is enough. For the first four weeks, write down everything you spend, with a one-word category: rent, food, transport, phone, setup, fun.\n\nIt feels tedious, but this is the most useful money habit you can build abroad. At the end of the month you will see your real costs, not the ones you guessed from home. Food is often higher than expected because of eating out while you settle in. Transport is sometimes lower once you find a student pass. Those surprises are exactly what your normal budget needs to learn.",
      },
      {
        heading: "Find the student prices early",
        text: "Many cities and countries have discounts for students, but you usually have to ask, apply, or show the right card. Look at your university's welcome pages and your student union for public transport passes, student cards, cheap meals on campus, gym memberships, and software you get free through your university.\n\nCheck the details yourself, because what is available varies a lot between places and changes from year to year. But setting these up in your first two weeks can lower your monthly costs for the whole year, which is worth one slightly boring afternoon.",
      },
      {
        heading: "Keep a small cushion you do not touch",
        text: "Something unexpected will happen. A charger breaks, a form needs an official copy, or you need a taxi late at night. Set aside a small emergency amount that is not part of your spending money, ideally somewhere slightly harder to reach than your everyday card.\n\nIf you do need it, use it without guilt, and then rebuild it gradually. The point is not to be perfect. It is to make sure one bad day does not become a money crisis.",
      },
      {
        heading: "At the end of the month, rewrite the plan",
        text: "When the first month ends, sit down with your notes and compare them with the budget you made at home. Which categories were too low? Which were too high? Which setup costs are finished for good?\n\nThen write a new monthly budget based on what you actually spent, adjusted for anything that will change, like heating in winter or travel home at the holidays. If the numbers do not work, talk to your university's student support or money advice service early. They see this every year, and asking in month two is much easier than asking in month eight.",
      },
    ],
    coverImage: "/images/blog/first-month-budget.jpg",
    coverImageAlt: "A hand writing figures on a paper form beside a calculator, a phone and a stack of banknotes",
    unsplash: {
      photographerName: "Jakub Żerdzicki",
      photographerUrl: "https://unsplash.com/@jakubzerdzicki",
      photoUrl:
        "https://unsplash.com/photos/hand-writing-in-notebook-with-calculator-and-cash-leLj_06wjJQ",
    },
  },
  {
    title: "The Sunday Evening Feeling: How to Handle Homesickness When You Study Abroad",
    slug: "homesick-abroad",
    description:
      "A gentle, practical guide to homesickness for international students: why it often arrives weeks after you land, how to stay close to home without living there, small routines that help, and when to ask your university for support.",
    category: "Student Life",
    date: "2026-11-03",
    readTime: "5 min read",
    intro:
      "It often arrives on a quiet evening. The lectures are done, your flatmates have gone out or gone silent, and the light outside is fading earlier than it does at home. You open your phone, see a photo of a family dinner you were not at, and something in your chest goes heavy.\n\nThat is homesickness, and almost every international student meets it at some point. It does not mean you chose the wrong country or the wrong course. It means you left somewhere that mattered. This guide is about living with that feeling kindly, and making sure it stays a visitor rather than moving in.",
    sections: [
      {
        heading: "Expect it later than you think",
        text: "The first weeks abroad are loud. There are forms to fill in, rooms to set up, people to meet, and a new city to find your way around. Many students feel fine, even excited, through all of it.\n\nHomesickness often turns up afterwards, when the novelty fades and life settles into a routine. Shorter days, the first deadlines, or a holiday you are missing at home can all bring it on. Knowing this in advance helps. If you feel low a month or two in, it is not a sign that something has gone wrong. It is a very normal stage of settling in, and it usually eases as the new place starts to feel like yours.",
      },
      {
        heading: "Give home a regular slot, not every spare minute",
        text: "Staying in touch with family and friends is one of the best comforts you have. But there is a difference between feeling connected and living in two places at once. If you are on the phone to home every free hour, it becomes harder to build a life where you actually are.\n\nTry giving home a regular, predictable slot instead. A longer call at the weekend, a short voice message after classes, a shared photo album where everyone adds one picture a day. Your family gets something to look forward to, and so do you. Time zones can make this tricky, so agree on a time that works for both sides rather than squeezing calls in late at night.",
      },
      {
        heading: "Build small routines that belong to you",
        text: "Homesickness feeds on empty, shapeless time. Routines give your week a shape, and they do not need to be impressive. A walk to the same café on Saturday morning. Cooking one dish from home every week. A regular study spot in the library. A short run along the same route.\n\nAfter a while, these small habits become anchors. They are the first things in your new city that feel familiar, and familiarity is exactly what homesickness is asking for.",
      },
      {
        heading: "Bring a little of home with you",
        text: "Comfort objects are not childish. A photo on your wall, a blanket from your bedroom, a favourite tea, or a playlist of songs from home can make a rented room feel less like a waiting room.\n\nFood is especially powerful. Look for shops that sell ingredients from your country or region, and ask other students where they buy theirs. Cooking a familiar meal and sharing it with flatmates is one of the easiest ways to turn homesickness into a connection instead of a wall.",
      },
      {
        heading: "Say yes to small things with other people",
        text: "When you feel low, staying in your room feels safest. It is also the thing most likely to keep you feeling low. You do not have to go to every party. Small, low-pressure plans work just as well: a study session with a classmate, a society meeting, a volunteering shift, a free event on campus.\n\nOther international students understand this feeling better than anyone, and many local students will have felt something similar when they first left home for university. You may find that saying, honestly, that you miss home is the start of a real conversation rather than an awkward one.",
      },
      {
        heading: "Look after the basics",
        text: "Sleep, food, daylight, and movement have a big effect on mood, and they are often the first things to slip in a new country. Late nights, irregular meals, and long days indoors can make homesickness feel much heavier than it really is.\n\nYou do not need a perfect routine. Aim for roughly regular sleep, real meals most days, and some time outside when it is light. If you are moving somewhere with long dark winters, getting outdoors around midday can make a noticeable difference.",
      },
      {
        heading: "Know when to ask for help",
        text: "Homesickness usually comes and goes. But if the low feeling sticks around for weeks, if you stop sleeping or eating properly, if you cannot face classes, or if you feel hopeless, it is time to talk to someone. That is not a failure. It is exactly what university support services are there for.\n\nMost universities have student counselling or wellbeing teams, and many have advisers who work specifically with international students. Your university's website or your welcome pack will tell you how to reach them. If you ever feel unsafe or at risk, contact local emergency services straight away.",
      },
      {
        heading: "Let both places matter",
        text: "Missing home and enjoying your new life are not opposites. You can love your new city and still feel a pang when your family sits down to eat without you. Over time, most students find that the feeling softens, and that they end up with two places that feel like home instead of one.\n\nSo be patient with yourself. Call home, cook the dish, go to the meeting, take the walk. One quiet Sunday evening at a time, the place you are now becomes a place you belong.",
      },
    ],
    coverImage: "/images/blog/homesick-abroad.jpg",
    coverImageAlt: "A student on a laptop video call with a smiling woman and girl at home",
    unsplash: {
      photographerName: "Vitaly Gariev",
      photographerUrl: "https://unsplash.com/@silverkblack",
      photoUrl:
        "https://unsplash.com/photos/man-video-calls-with-a-woman-and-child-Xdiq2Ygfhms",
    },
  },
  {
    title: "Canada vs Australia for International Students",
    slug: "canada-vs-australia",
    description:
      "Canada or Australia? Compare education quality, part-time student jobs and living costs in both countries to decide which study destination fits your budget and goals.",
    category: "Country Comparison",
    date: "2026-05-15",
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
    languagePracticeNote:
      "Both countries teach in English. Extra speaking practice helps with tests such as IELTS or TOEFL and with everyday conversation after you arrive.",
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
    date: "2026-05-15",
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
    languagePracticeNote:
      "The advice above says to weigh language requirements, not only tuition. If you do not already speak the language you will use in class or in daily life, speaking practice is the part you can start now.",
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
