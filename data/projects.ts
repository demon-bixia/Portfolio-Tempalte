import AvianDesignThumbnail from '@/public/images/project-thumbnails/avian-design-thumbnail.png';
import AvianThumbnail from '@/public/images/project-thumbnails/avian-thumbnail.png';
import BoltThumbnail from '@/public/images/project-thumbnails/bolt-thumbnail.png';
import ApiAdminThumbnail from '@/public/images/project-thumbnails/django-api-admin-thumbnail.png';
import PortfolioThumbnail from '@/public/images/project-thumbnails/portfolio-thumbnail.png';
import TestatThumbnail from '@/public/images/project-thumbnails/testat-thumbnail.png';
import TheFrontierThumbnail from '@/public/images/project-thumbnails/the-frontier-thumbnail.png';
import ThoughtlessThumbnail from '@/public/images/project-thumbnails/thoughtless-thumbnail.png';
import TolkThumbnail from '@/public/images/project-thumbnails/tolk-thumbnail.png';


// **** Variables **** //

const projects = {
  development: {
    title: 'My Projects',
    description: 'Check out my latest development projects and let me know what you think!',
    projects: [
      {
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
        thumbnail: AvianDesignThumbnail,
        thumbnailAlt: 'Avian messaging figma project thumbnail',
        demonLinkText: 'View Shots',
        demoLinkIcon: 'images-outline',
        projectLink: 'https://www.figma.com/file/P4anyRLoN2NNhDicfFUcqi/Avian-Messaging?type=design&t=6bWSlEgSMFB1LklL-6',
        projectLinkText: 'Figma',
        projectLinkIcon: 'logo-figma',
      },
      {
        thumbnail: TheFrontierThumbnail,
        thumbnailAlt: 'The frontier figma project thumbnail',
        demonLinkText: 'View Shots',
        demoLinkIcon: 'images-outline',
        projectLink: 'https://www.figma.com/file/D4UV5HtOlnxdZe0eC3jxQI/The-Frontier?type=design&t=6bWSlEgSMFB1LklL-6',
        projectLinkText: 'Figma',
        projectLinkIcon: 'logo-figma',
      },
      {
        thumbnail: TestatThumbnail,
        thumbnailAlt: 'Testat figma project thumbnail',
        demonLinkText: 'View Shots',
        demoLinkIcon: 'images-outline',
        projectLink: 'https://www.figma.com/file/kiUsNKC9jTm4fvWuqCAzD5/Testat-online-learning-site?type=design&t=6bWSlEgSMFB1LklL-6',
        projectLinkText: 'Figma',
        projectLinkIcon: 'logo-figma',
      },
    ],
    seeMoreButtonText: 'See More On Figma',
    seeMoreButtonIcon: 'chevron-forward-outline',
  },
}


// **** Default export **** //

export default projects;
