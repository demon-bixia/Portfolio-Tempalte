import AvianThumbnail from "@/public/images/projects/avian-template/thumbnail.png";
import ApiAdminThumbnail from "@/public/images/projects/django-api-admin/thumbnail.png";
import BoltThumbnail from "@/public/images/projects/django-bolt/thumbnail.png";
import PortfolioThumbnail from "@/public/images/projects/portfolio/thumbnail.png";
import ThoughtlessThumbnail from "@/public/images/projects/thoughtless/thumbnail.png";
import WE2EEThumbnail from "@/public/images/projects/WE2EE/thumbnail.png";

import AvianDesignThumbnail from "@/public/images/designs/neos/thumbnail.png";
import TestatThumbnail from "@/public/images/designs/testat/thumbnail.png";
import TheFrontierThumbnail from "@/public/images/designs/the-frontier/thumbnail.png";

import NeosScreenshot1 from "@/public/images/designs/neos/screenshots/Landing.png";
import NeosScreenshot2 from "@/public/images/designs/neos/screenshots/Posts.png";
import NeosScreenshot3 from "@/public/images/designs/neos/screenshots/Post.png";

import TestatScreenshot1 from "@/public/images/designs/testat/screenshots/landing-page.jpg";
import TestatScreenshot2 from "@/public/images/designs/testat/screenshots/student-course-dashboard.jpg";
import TestatScreenshot3 from "@/public/images/designs/testat/screenshots/student-dashboard.png";

import TheFrontierScreenshots1 from "@/public/images/designs/the-frontier/screenshots/Article.png";
import TheFrontierScreenshots2 from "@/public/images/designs/the-frontier/screenshots/Stories.png";
import TheFrontierScreenshots3 from "@/public/images/designs/the-frontier/screenshots/Write.png";


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
        thumbnail: AvianDesignThumbnail,
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
    ],
    seeMoreButtonText: "See More On Figma",
    seeMoreButtonIcon: "chevron-forward-outline",
    seeMoreButtonLink: "https://www.figma.com/team_invite/redeem/DhgR09RNVpELww9F8TkNLz"
  },
}


// **** Default export **** //

export default projects;
