import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import profilepic from '../images/linkedinj.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Daniel Bautista.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I received my Associate's Degree in Software Development. Specializing in the <strong className="text-stone-100">Backend </strong> aspect, mainly using Python. I currently work
        at <strong className="text-stone-100">Upland Pumphouse</strong> serving great food and drinks. 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me binge watching <strong className="text-stone-100">Hell's Kitchen</strong> with my wife,  
        walking our <strong className="text-stone-100">Great Dane</strong> downtown Columbus, or playing video games with my friends. Typically <strong className="text-stone-100">League of Legends</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Daniel_Bautista_SoftwareDevelopment_resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `When I am not working, you can usually catch me using Discord to game with my friends, working out at the gym, or lounging on our couch watching some sort of Gordan Ramsey TV show.
  I am most comfortable using Python and working on the backend. I have briefly used other languages like Java, JS, HTML, and CSS.`,
  aboutItems: [
    {label: 'Location', text: 'Columbus, IN', Icon: MapIcon},
    {label: 'Age', text: '30', Icon: CalendarIcon},
    {label: 'Nationality', text: 'American', Icon: FlagIcon},
    {label: 'Interests', text: 'Video Games, Gym, Pets', Icon: SparklesIcon},
    {label: 'Study', text: 'Ivy Tech Community College', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Upland Pumphouse', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 2,
      },
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      {
        name: 'Active Learning',
        level: 8,
      },
      {
        name: 'Problem Solving',
        level: 7,
      },
      {
        name: 'Communication',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 4,
      },
      {
        name: 'Django',
        level: 1,
      },
      {
        name: 'JS',
        level: 1,
      },
    ],
  },
  {
    name: 'Game development',
    skills: [
      {
        name: 'Python',
        level: 4,
      },
      {
        name: 'Level Design',
        level: 3,
      },
      {
        name: 'Interactive System Design',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'The Haunted Journey',
    description: 'The Haunted Journey is a text-based adventure game. The player will choose between three different paths, all with different weather conditions, items, and stories.',
    url: 'https://github.com/cdbautista1/text_adventure',
    image: porfolioImage6,
  },
];
/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2024',
    location: 'Ivy Tech Community College',
    title: 'Associates in Software Development',
    content: <p>During my time in school, I developed strong problem-solving skills, particularly through coding. 
    As a beginner, I encountered numerous errors, but working through them gave me a deeper understanding of programming languages and enhanced my ability to troubleshoot independently. </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'April 2022 - Present',
    location: 'Upland Pumphouse',
    title: 'Server',
    content: (
      <p>
      Being a server gives me the opportunity to interact with a wide variety of people I might not otherwise encounter. In many ways, it feels like being my own boss. I have some flexibility in 
      setting my schedule, and my income depends on how I communicate and engage with my tables. This role has improved my public speaking skills, helped me think quickly on my feet, and 
      strengthened my ability to build interpersonal relationships.
      </p>
    ),
  },
  {
    date: 'April 2021 - April 2022',
    location: 'Greensburg Fire Department',
    title: 'Firefighter',
    content: (
      <p>
      My time as a firefighter allowed me to develop exceptional problem-solving skills in high-pressure situations, ensuring safety and effective responses. The role has strengthened my ability to 
      collaborate with a team, demonstrating strong communication and strategic thinking during emergencies. Additionally, participating in rescue operations has honed my capacity to remain 
      focused and decisive under stress, while making a meaningful impact by saving lives.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Connor Roseberry',
      text: 'Daniel is an efficient and detail oriented employee with a lot of potential for future growth.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Henry Curtis',
      text: 'Daniel was a great coworker and I was always pleased when the opportunity arose to collaborate with him.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here are the best ways contact me.',
  items: [
    {
      type: ContactType.Email,
      text: 'cdbautista@outlook.com',
      href: 'mailto:cdbautista@outlook.com',
    },
    {
      type: ContactType.Location,
      text: 'Columbus, IN',
      href: 'https://www.google.ca/maps/place/Columbus,+IN/@39.197876,-86.0628428,11z/data=!3m1!4b1!4m6!3m5!1s0x886ba0482c86c951:0x58993e182463d752!8m2!3d39.2014404!4d-85.9213796!16zL20vMDF6emM?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D',
    },
    {
      type: ContactType.Github,
      text: 'cdbautista1',
      href: 'https://github.com/cdbautista1',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/cdbautista1'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/daniel-bautista-379779327/'},
];
