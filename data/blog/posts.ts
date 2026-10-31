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
