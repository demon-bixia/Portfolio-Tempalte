import AvianThumbnail from '@/public/images/projects/avian-template/thumbnail.png';
import ApiAdminThumbnail from '@/public/images/projects/django-api-admin/thumbnail.png';
import BoltThumbnail from '@/public/images/projects/django-bolt/thumbnail.png';
import PortfolioThumbnail from '@/public/images/projects/portfolio/thumbnail.png';
import ThoughtlessThumbnail from '@/public/images/projects/thoughtless/thumbnail.png';
import TolkThumbnail from '@/public/images/projects/tolk/thumbnail.png';

import AvianDesignThumbnail from '@/public/images/designs/avian/thumbnail.png';
import TestatThumbnail from '@/public/images/designs/testat/thumbnail.png';
import TheFrontierThumbnail from '@/public/images/designs/the-frontier/thumbnail.png';

import AvianScreenshot1 from '@/public/images/designs/avian/screenshots/messages.png';
import AvianScreenshot2 from '@/public/images/designs/avian/screenshots/notifications.png';
import AvianScreenshot3 from '@/public/images/designs/avian/screenshots/settings.png';
import AvianScreenshot4 from '@/public/images/designs/avian/screenshots/sign-up.png';

import TestatScreenshot1 from '@/public/images/designs/testat/screenshots/landing-page.jpg';
import TestatScreenshot2 from '@/public/images/designs/testat/screenshots/register-page.jpg';
import TestatScreenshot3 from '@/public/images/designs/testat/screenshots/student-course-dashboard.jpg';
import TestatScreenshot4 from '@/public/images/designs/testat/screenshots/student-dashboard.png';

import TheFrontierScreenshots1 from '@/public/images/designs/the-frontier/screenshots/Article.png';
import TheFrontierScreenshots2 from '@/public/images/designs/the-frontier/screenshots/Notifications.png';
import TheFrontierScreenshots3 from '@/public/images/designs/the-frontier/screenshots/Stories.png';
import TheFrontierScreenshots4 from '@/public/images/designs/the-frontier/screenshots/Write.png';


// **** Variables **** //

const projects = {
  development: {
    title: 'My Projects',
    description: 'Check out my latest development projects and let me know what you think!',
    projects: [
      {
        id: 'avian-template',
        thumbnail: AvianThumbnail,
        thumbnailAlt: 'Avian messaging project thumbnail',
        demoLink: 'http://avian-demo.netlify.app/',
        demonLinkText: 'View Demo',
        demoLinkIcon: 'open-outline',
        projectLink: 'https://github.com/demon-bixia/Avian-Template',
        projectLinkText: 'Github',
        projectLinkIcon: 'logo-github',
      },
      {
        id: 'django-bolt',
        thumbnail: BoltThumbnail,
        thumbnailAlt: 'Django bolt administration project thumbnail',
        demoLink: 'https://django-api-admin.demon-bixia.repl.co/',
        demonLinkText: 'View Demo',
        demoLinkIcon: 'open-outline',
        projectLink: 'https://github.com/demon-bixia/django-bolt',
        projectLinkText: 'Github',
        projectLinkIcon: 'logo-github',
      },
      {
        id: 'thoughtless',
        thumbnail: ThoughtlessThumbnail,
        thumbnailAlt: 'Thoughtless blog project thumbnail',
        demoLink: 'https://demonbixia.pythonanywhere.com/articles/All/',
        demonLinkText: 'View Demo',
        demoLinkIcon: 'open-outline',
        projectLink: 'https://github.com/demon-bixia/thoughtless',
        projectLinkText: 'Github',
        projectLinkIcon: 'logo-github',
      },
      {
        id: 'portfolio',
        thumbnail: PortfolioThumbnail,
        thumbnailAlt: 'Portfolio project thumbnail',
        demoLink: '#',
        demonLinkText: 'View Demo',
        demoLinkIcon: 'open-outline',
        projectLink: 'https://github.com/demon-bixia/portfolio',
        projectLinkText: 'Github',
        projectLinkIcon: 'logo-github',
      },
      {
        id: 'tolk',
        thumbnail: TolkThumbnail,
        thumbnailAlt: 'Tolk messaging app project thumbnail',
        demoLink: 'https://tolk-project.up.railway.app/',
        demonLinkText: 'View Demo',
        demoLinkIcon: 'open-outline',
        projectLink: 'https://github.com/demon-bixia/Tolk',
        projectLinkText: 'Github',
        projectLinkIcon: 'logo-github',
      },
      {
        id: 'django-api-admin',
        thumbnail: ApiAdminThumbnail,
        thumbnailAlt: 'Django api administration thumbnail',
        demoLink: 'https://django-api-admin.demon-bixia.repl.co/api_admin/',
        demonLinkText: 'View Demo',
        demoLinkIcon: 'open-outline',
        projectLink: 'https://github.com/demon-bixia/django-api-admin',
        projectLinkText: 'Github',
        projectLinkIcon: 'logo-github',
      },
    ],
    seeMoreButtonText: 'See More On Github',
    seeMoreButtonIcon: 'chevron-forward-outline',
  },
  designs: {
    title: 'My Designs',
    description: 'Check out my latest designs and let me know what you think!',
    projects: [
      {
        id: 'avian-design',
        thumbnail: AvianDesignThumbnail,
        thumbnailAlt: 'Avian messaging figma project thumbnail',
        demonLinkText: 'View Shots',
        demoLinkIcon: 'images-outline',
        projectLink: 'https://www.figma.com/file/P4anyRLoN2NNhDicfFUcqi/Avian-Messaging?type=design&t=6bWSlEgSMFB1LklL-6',
        projectLinkText: 'Figma',
        projectLinkIcon: 'logo-figma',
        screenshots: [
          AvianScreenshot1.src,
          AvianScreenshot2.src,
          AvianScreenshot3.src,
          AvianScreenshot4.src,
        ]
      },
      {
        id: 'the-frontier',
        thumbnail: TheFrontierThumbnail,
        thumbnailAlt: 'The frontier figma project thumbnail',
        demonLinkText: 'View Shots',
        demoLinkIcon: 'images-outline',
        projectLink: 'https://www.figma.com/file/D4UV5HtOlnxdZe0eC3jxQI/The-Frontier?type=design&t=6bWSlEgSMFB1LklL-6',
        projectLinkText: 'Figma',
        projectLinkIcon: 'logo-figma',
        screenshots: [
          TheFrontierScreenshots1.src,
          TheFrontierScreenshots2.src,
          TheFrontierScreenshots3.src,
          TheFrontierScreenshots4.src,
        ]
      },
      {
        id: 'testat',
        thumbnail: TestatThumbnail,
        thumbnailAlt: 'Testat figma project thumbnail',
        demonLinkText: 'View Shots',
        demoLinkIcon: 'images-outline',
        projectLink: 'https://www.figma.com/file/kiUsNKC9jTm4fvWuqCAzD5/Testat-online-learning-site?type=design&t=6bWSlEgSMFB1LklL-6',
        projectLinkText: 'Figma',
        projectLinkIcon: 'logo-figma',
        screenshots: [
          TestatScreenshot1.src,
          TestatScreenshot2.src,
          TestatScreenshot3.src,
          TestatScreenshot4.src,
        ]
      },
    ],
    seeMoreButtonText: 'See More On Figma',
    seeMoreButtonIcon: 'chevron-forward-outline',
  },
}


// **** Default export **** //

export default projects;
