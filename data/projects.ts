import AvianThumbnail from "@/public/images/projects/avian-template/thumbnail.png";
import ApiAdminThumbnail from "@/public/images/projects/django-api-admin/thumbnail.png";
import BoltThumbnail from "@/public/images/projects/django-bolt/thumbnail.png";
import PortfolioThumbnail from "@/public/images/projects/portfolio/thumbnail.png";
import ThoughtlessThumbnail from "@/public/images/projects/thoughtless/thumbnail.png";
import WE2EEThumbnail from "@/public/images/projects/WE2EE/thumbnail.png";


import NeosDesignThumbnail from "@/public/images/designs/neos/thumbnail.png";
import NeosScreenshot1 from "@/public/images/designs/neos/screenshots/Landing.png";
import NeosScreenshot2 from "@/public/images/designs/neos/screenshots/Posts.png";
import NeosScreenshot3 from "@/public/images/designs/neos/screenshots/Post.png";

import TestatThumbnail from "@/public/images/designs/testat/thumbnail.png";
import TestatScreenshot1 from "@/public/images/designs/testat/screenshots/landing-page.jpg";
import TestatScreenshot2 from "@/public/images/designs/testat/screenshots/student-course-dashboard.jpg";
import TestatScreenshot3 from "@/public/images/designs/testat/screenshots/student-dashboard.png";

import TheFrontierThumbnail from "@/public/images/designs/the-frontier/thumbnail.png";
import TheFrontierScreenshots1 from "@/public/images/designs/the-frontier/screenshots/Article.png";
import TheFrontierScreenshots2 from "@/public/images/designs/the-frontier/screenshots/Stories.png";
import TheFrontierScreenshots3 from "@/public/images/designs/the-frontier/screenshots/Write.png";

import LawyerThemeThumbnail from '@/public/images/designs/lawyer-theme/thumbnail.png';
import LawyerThemeScreenshots1 from '@/public/images/designs/lawyer-theme/screenshots/Home.png';

import AvianDesignThumbnail from '@/public/images/designs/avian-design/thumbnail.png';
import AvianDesignScreenshots1 from '@/public/images/designs/avian-design/screenshots/Calls.png';
import AvianDesignScreenshots2 from '@/public/images/designs/avian-design/screenshots/Conversations.png';
import AvianDesignScreenshots3 from '@/public/images/designs/avian-design/screenshots/Stories.png';

import BoltDesignThumbnail from '@/public/images/designs/bolt-design/thumbnail.png';
import BoltDesignScreenshots1 from '@/public/images/designs/bolt-design/screenshots/Login.png';
import BoltDesignScreenshots2 from '@/public/images/designs/bolt-design/screenshots/Form.png';
import BoltDesignScreenshots3 from '@/public/images/designs/bolt-design/screenshots/Changelist.png';


// **** Variables **** //

const projects = {
  development: {
    title: "My Projects",
    description: "Check out my latest development projects and let me know what you think!",
    projects: [
      {
        id: "avian-template",
        thumbnail: AvianThumbnail,
        thumbnailAlt: "Avian messaging project thumbnail",
        demoLink: "http://avian-demo.netlify.app/",
        demonLinkText: "View Demo",
        demoLinkIcon: "open-outline",
        projectLink: "https://github.com/demon-bixia/Avian-Template",
        projectLinkText: "Github",
        projectLinkIcon: "logo-github",
      },
      {
        id: "django-bolt",
        thumbnail: BoltThumbnail,
        thumbnailAlt: "Django bolt administration project thumbnail",
        demoLink: "https://github.com/demon-bixia/bolt-demo",
        demonLinkText: "View Demo",
        demoLinkIcon: "open-outline",
        projectLink: "https://github.com/demon-bixia/django-bolt",
        projectLinkText: "Github",
        projectLinkIcon: "logo-github",
      },
      {
        id: "thoughtless",
        thumbnail: ThoughtlessThumbnail,
        thumbnailAlt: "Thoughtless blog project thumbnail",
        demoLink: "https://replit.com/@demon-bixia/Thoughtless",
        demonLinkText: "View Demo",
        demoLinkIcon: "open-outline",
        projectLink: "https://github.com/demon-bixia/thoughtless",
        projectLinkText: "Github",
        projectLinkIcon: "logo-github",
      },
      {
        id: "portfolio",
        thumbnail: PortfolioThumbnail,
        thumbnailAlt: "Portfolio project thumbnail",
        demoLink: "#",
        demonLinkText: "View Demo",
        demoLinkIcon: "open-outline",
        projectLink: "https://github.com/demon-bixia/portfolio",
        projectLinkText: "Github",
        projectLinkIcon: "logo-github",
      },
      {
        id: "WE2EE",
        thumbnail: WE2EEThumbnail,
        thumbnailAlt: "project thumbnail of a crypto library",
        demoLink: "https://github.com/demon-bixia/WE2EE-Demo",
        demonLinkText: "View Demo",
        demoLinkIcon: "open-outline",
        projectLink: "https://github.com/demon-bixia/WE2EE",
        projectLinkText: "Github",
        projectLinkIcon: "logo-github",
      },
      {
        id: "django-api-admin",
        thumbnail: ApiAdminThumbnail,
        thumbnailAlt: "Django api administration thumbnail",
        demoLink: "https://api-admin.demon-bixia.repl.co/api_admin/",
        demonLinkText: "View Demo",
        demoLinkIcon: "open-outline",
        projectLink: "https://github.com/demon-bixia/django-api-admin",
        projectLinkText: "Github",
        projectLinkIcon: "logo-github",
      },
    ],
    seeMoreButtonText: "See More On Github",
    seeMoreButtonIcon: "chevron-forward-outline",
    seeMoreButtonLink: "https://github.com/demon-bixia"
  },
  designs: {
    title: "My Designs",
    description: "Check out my latest designs and let me know what you think!",
    projects: [
      {
        id: "neos",
        thumbnail: NeosDesignThumbnail,
        thumbnailAlt: "Neos figma project thumbnail",
        demonLinkText: "View Shots",
        demoLinkIcon: "images-outline",
        projectLink: "https://www.figma.com/design/K9523UofZSt6xFWvxa0oB8/Neos?node-id=0-1&t=O1ubM0dt20Paun1Q-0",
        projectLinkText: "Figma",
        projectLinkIcon: "logo-figma",
        screenshots: [
          NeosScreenshot1.src,
          NeosScreenshot2.src,
          NeosScreenshot3.src,
        ]
      },
      {
        id: "testat",
        thumbnail: TestatThumbnail,
        thumbnailAlt: "Testat figma project thumbnail",
        demonLinkText: "View Shots",
        demoLinkIcon: "images-outline",
        projectLink: "https://www.figma.com/file/kiUsNKC9jTm4fvWuqCAzD5/Testat-online-learning-site?type=design&t=6bWSlEgSMFB1LklL-6",
        projectLinkText: "Figma",
        projectLinkIcon: "logo-figma",
        screenshots: [
          TestatScreenshot1.src,
          TestatScreenshot2.src,
          TestatScreenshot3.src,
        ]
      },
      {
        id: "the-frontier",
        thumbnail: TheFrontierThumbnail,
        thumbnailAlt: "The frontier figma project thumbnail",
        demonLinkText: "View Shots",
        demoLinkIcon: "images-outline",
        projectLink: "https://www.figma.com/file/D4UV5HtOlnxdZe0eC3jxQI/The-Frontier?type=design&t=6bWSlEgSMFB1LklL-6",
        projectLinkText: "Figma",
        projectLinkIcon: "logo-figma",
        screenshots: [
          TheFrontierScreenshots1.src,
          TheFrontierScreenshots2.src,
          TheFrontierScreenshots3.src,
        ]
      },
      {
        id: "LawyerTheme",
        thumbnail: LawyerThemeThumbnail,
        thumbnailAlt: "LawyerTheme figma project thumbnail",
        demonLinkText: "View Shots",
        demoLinkIcon: "images-outline",
        projectLink: "https://www.figma.com/design/SKhlWEm0UMwhJEtJlGvf4h/Lawyer-Firm-Theme?node-id=5-2&t=ldZ53ylxzLu9NP9F-0",
        projectLinkText: "Figma",
        projectLinkIcon: "logo-figma",
        screenshots: [
          LawyerThemeScreenshots1.src
        ]
      },
      {
        id: "BoltDesign",
        thumbnail: BoltDesignThumbnail,
        thumbnailAlt: "Bolt admin figma project thumbnail",
        demonLinkText: "View Shots",
        demoLinkIcon: "images-outline",
        projectLink: "https://www.figma.com/design/SKhlWEm0UMwhJEtJlGvf4h/Lawyer-Firm-Theme?node-id=5-2&t=ldZ53ylxzLu9NP9F-0",
        projectLinkText: "Figma",
        projectLinkIcon: "logo-figma",
        screenshots: [
          BoltDesignScreenshots1.src,
          BoltDesignScreenshots2.src,
          BoltDesignScreenshots3.src,
        ]
      },
      {
        id: "AvianDesign",
        thumbnail: AvianDesignThumbnail,
        thumbnailAlt: "Avian template figma project thumbnail",
        demonLinkText: "View Shots",
        demoLinkIcon: "images-outline",
        projectLink: "https://www.figma.com/design/SKhlWEm0UMwhJEtJlGvf4h/Lawyer-Firm-Theme?node-id=5-2&t=ldZ53ylxzLu9NP9F-0",
        projectLinkText: "Figma",
        projectLinkIcon: "logo-figma",
        screenshots: [
          AvianDesignScreenshots1.src,
          AvianDesignScreenshots2.src,
          AvianDesignScreenshots3.src,
        ]
      },
    ],
    seeMoreButtonText: "See More On Dribble",
    seeMoreButtonIcon: "chevron-forward-outline",
    seeMoreButtonLink: "https://dribbble.com/demon-bixia"
  },
}


// **** Default export **** //

export default projects;
