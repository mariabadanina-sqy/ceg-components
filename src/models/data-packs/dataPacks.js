import { CLOUDINARY_BASE_UPLOAD_URL as CLOUDINARY_URL } from '@constants/cloudinary';

export default {
  NEWS: {
    title: 'News',
    category: 'ARTICLES_EVENTS',
    description: 'It shows the news of the sector and the schools',
    image: `${CLOUDINARY_URL}/thesaurus/data-packs-thumbnails/News/news.png`,
  },

  EVENTS: {
    title: 'Events',
    category: 'ARTICLES_EVENTS',
    description:
      'It shows the next events, being able to select if you want to show specific ones manually. It also adds the functionality of Add to calendar.',
    image: `${CLOUDINARY_URL}/thesaurus/data-packs-thumbnails/Events/events.png`,
  },

  PUBLICATIONS: {
    title: 'Publications',
    category: 'ARTICLES_EVENTS',
    description: 'It shows books or publications of the sectors',
    image: `${CLOUDINARY_URL}/thesaurus/data-packs-thumbnails/Publications/publications.png`,
  },

  ARTICLES: {
    title: 'Articles',
    category: 'ARTICLES_EVENTS',
    description: 'Allows you to hightlight articles',
    image: `${CLOUDINARY_URL}/thesaurus/data-packs-thumbnails/Articles/articles.png`,
  },

  OFFICES: {
    title: 'Offices',
    category: 'OFFICES',
    description: 'List of international offices',
    image: `${CLOUDINARY_URL}/thesaurus/data-packs-thumbnails/Offices/offices.png`,
  },

  STORIES: {
    title: 'Stories',
    category: 'PEOPLE',
    description: 'It allows to use Stories content type of different profiles.',
    image: `${CLOUDINARY_URL}/thesaurus/data-packs-thumbnails/Stories/stories.png`,
  },

  TESTIMONIALS: {
    title: 'Testimonials',
    category: 'PEOPLE',
    description: 'Allows you to display several testimonials on one carousel',
    image: `${CLOUDINARY_URL}/thesaurus/data-packs-thumbnails/Testimonials/testimonials.png`,
  },

  PEOPLE: {
    title: 'People',
    category: 'PEOPLE',
    description:
      'It shows a list of people outside the School who collaborate by giving talks and seminars',
    image: `${CLOUDINARY_URL}/thesaurus/data-packs-thumbnails/People/people.png`,
  },

  TEACHERS: {
    title: 'Teachers',
    category: 'PEOPLE',
    description: 'It allows to use Teachers content type ',
    image: `${CLOUDINARY_URL}/thesaurus/data-packs-thumbnails/Teachers/teachers.png`,
  },

  VIDEOS: {
    title: 'Videos',
    category: 'PEOPLE',
    description: 'It shows last videos from content type videos.',
    image: `${CLOUDINARY_URL}/thesaurus/data-packs-thumbnails/Videos/videos.png`,
  },
};
