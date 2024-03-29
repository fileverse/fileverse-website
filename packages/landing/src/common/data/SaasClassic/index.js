import Screenshot1 from '../../assets/image/saasClassic/screen-1.png';

import AuthorOne from '../../assets/image/saasClassic/author-1.jpg';
import AuthorTwo from '../../assets/image/saasClassic/author-2.jpg';
import AuthorThree from '../../assets/image/saasClassic/author-3.jpg';

import { ic_monetization_on } from 'react-icons-kit/md/ic_monetization_on';
import { ic_settings } from 'react-icons-kit/md/ic_settings';
import { pieChart } from 'react-icons-kit/icomoon/pieChart';
import { briefcase } from 'react-icons-kit/fa/briefcase';

export const MENU_ITEMS = [
  {
    label: 'Home',
    path: '#banner_section',
    offset: '0',
  },
  {
    label: 'Use Cases',
    path: '#use_case_section',
    offset: '0',
  },
  // {
  //   label: 'Social',
  //   path: '#social_section',
  //   offset: '10',
  // },
];

export const SERVICE_ITEMS = [
  {
    img: true,
    style: { height: "1.2em" },
    icon: 'https://fileverse.imgix.net/web/public/twitter.png',
    title: 'Twitter',
    link: 'https://twitter.com/fileverse',
  },
  {
    img: true,
    style: { height: "1.2em" },
    icon: 'https://fileverse.imgix.net/web/public/github_logo.png',
    title: 'Github',
    link: 'https://github.com/fileverse',
  },
  {
    img: true,
    style: { height: "1.2em" },
    icon: 'https://fileverse.imgix.net/web/public/radicle.svg',
    title: 'Radicle',
    link: 'https://app.radicle.network/seeds/willow.radicle.garden/rad:git:hnrkj6egqcozks7f7n5dx3766e7m4z5tag8cy',
  },
  {
    img: true,
    style: { height: "1.2em" },
    icon: 'https://fileverse.imgix.net/web/public/gitcoin.png',
    title: 'Gitcoin',
    link: 'https://gitcoin.co/grants/4846/fileverseio-file-sharing-between-blockchain-addre',
  },
  {
    img: true,
    style: { height: "1.0em" },
    icon: 'https://fileverse.imgix.net/web/public/mail.png',
    title: 'Email',
    link: 'mailto:hello@fileverse.io',
  },
];

export const MONTHLY_PRICING_TABLE = [
  {
    name: 'Basic Account',
    description: 'For Small teams or group who need to build website ',
    price: '$0',
    priceLabel: 'Only for first month',
    buttonLabel: 'Start for free',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Business Account',
    description: 'For Mediums teams or group who need to build website ',
    price: '$9.87',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'Register Now',
    url: '#',
    trialButtonLabel: 'Or Start 14 Days trail',
    trialURL: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Premium Account',
    description: 'For Large teams or group who need to build website ',
    price: '$12.98',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'Register Now',
    url: '#',
    trialButtonLabel: 'Or Start 14 Days trail',
    trialURL: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
];

export const YEARLY_PRICING_TABLE = [
  {
    name: 'Basic Account',
    description: 'For a single client or team who need to build website ',
    price: '$0',
    priceLabel: 'Only for first month',
    buttonLabel: 'Start for free',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Business Account',
    description: 'For Small teams or group who need to build website ',
    price: '$6.00',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'Register Now',
    url: '#',
    trialButtonLabel: 'Or Start 14 Days trail',
    trialURL: '#',
    listItems: [
      {
        content: 'Unlimited secure storage',
      },
      {
        content: '2,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: '24/7 phone support',
      },
      {
        content: '50+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Premium Account',
    description: 'For Large teams or group who need to build website ',
    price: '$9.99',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'Register Now',
    url: '#',
    trialButtonLabel: 'Or Start 14 Days trail',
    trialURL: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '3,000s of Templates Ready',
      },
      {
        content: 'Advanced branding',
      },
      {
        content: 'Knowledge base support',
      },
      {
        content: '80+ Webmaster Tools',
      },
    ],
  },
];

export const FAQ_DATA = [
  {
    expend: true,
    title: 'How to contact with Customer Service?',
    description:
      'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
  },
  {
    title: 'App installation failed, how to update system information?',
    description:
      'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
  },
  {
    title: 'Website reponse taking time, how to improve?',
    description:
      'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
  },
  {
    title: 'New update fixed all bug and issues?',
    description:
      'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
  },
];

export const FOOTER_WIDGET = [
  {
    title: 'About Us',
    menuItems: [
      {
        url: '#',
        text: 'Support Center',
      },
      {
        url: '#',
        text: 'Customer Support',
      },
      {
        url: '#',
        text: 'About Us',
      },
      {
        url: '#',
        text: 'Copyright',
      },
      {
        url: '#',
        text: 'Popular Campaign',
      },
    ],
  },
  {
    title: 'Our Information',
    menuItems: [
      {
        url: '#',
        text: 'Return Policy',
      },
      {
        url: '#',
        text: 'Privacy Policy',
      },
      {
        url: '#',
        text: 'Terms & Conditions',
      },
      {
        url: '#',
        text: 'Site Map',
      },
      {
        url: '#',
        text: 'Store Hours',
      },
    ],
  },
  {
    title: 'My Account',
    menuItems: [
      {
        url: '#',
        text: 'Press inquiries',
      },
      {
        url: '#',
        text: 'Social media directories',
      },
      {
        url: '#',
        text: 'Images & B-roll',
      },
      {
        url: '#',
        text: 'Permissions',
      },
      {
        url: '#',
        text: 'Speaker requests',
      },
    ],
  },
  {
    title: 'Policy',
    menuItems: [
      {
        url: '#',
        text: 'Application security',
      },
      {
        url: '#',
        text: 'Software principles',
      },
      {
        url: '#',
        text: 'Unwanted software policy',
      },
      {
        url: '#',
        text: 'Responsible supply chain',
      },
    ],
  },
];

export const FEATURES = [
  {
    style: { height: "3.5em" },
    icon: 'https://fileverse.imgix.net/web/public/01.svg',
    title: 'Our Friends and Families',
    description:
      "We don't use Google Drive. We share files à la Web3!",
  },
  {
    style: { height: "3.2em" },
    icon: 'https://fileverse.imgix.net/web/public/02.svg',
    title: 'DAOs',
    description:
      "Share your alpha with anons that own the DAO's token. Membership-gating!",
  },
  {
    style: { height: "4em" },
    icon: 'https://fileverse.imgix.net/web/public/03.svg',
    title: 'NFT Communities',
    description:
      'Share any file with anyone that owns a specific NFT (eg. BAYC or a membership NFT).',
  },
  {
    style: { height: "3.2em" },
    icon: 'https://fileverse.imgix.net/web/public/04.svg',
    title: 'Web3 Companies',
    description:
      'Create your token/NFT & only team members that own it can access your files.',
  },
  {
    style: { height: "3em" },
    icon: 'https://fileverse.imgix.net/web/public/05.svg',
    title: 'Crypto Publishers',
    description:
      'Send exclusive content to your paying members without asking for emails...',
  },
  {
    style: { height: "2.8em" },
    icon: 'https://fileverse.imgix.net/web/public/06.svg',
    title: 'Blockchain Natives',
    description:
      'Get your fileverse sub-domain, like vitalik.fileverse.io & use it as a one-stop-shop for all of your token-gated content.',
  },
];

export const SCREENSHOTS = [
  {
    icon: ic_monetization_on,
    title: 'Budget Overview',
    image: Screenshot1,
  },
  {
    icon: ic_settings,
    title: 'Create & Adjust',
    image: Screenshot1,
  },
  {
    icon: pieChart,
    title: 'View Reports',
    image: Screenshot1,
  },
  {
    icon: briefcase,
    title: 'Integrations',
    image: Screenshot1,
  },
];

export const TESTIMONIALS = [
  {
    title: 'Modern look & trending design',
    review:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    name: 'Jon Doe',
    designation: 'CEO of Dell Co.',
    avatar: AuthorOne,
  },
  {
    title: 'Modern look & trending design',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur.',
    name: 'Jon Doe',
    designation: 'Co Founder of IBM',
    avatar: AuthorTwo,
  },
  {
    title: 'Modern look & trending design',
    review:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    name: 'Jeny Doe',
    designation: 'Manager of Hp co.',
    avatar: AuthorThree,
  },
];
