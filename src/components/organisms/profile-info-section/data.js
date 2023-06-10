import CheckIcon from '../../../../public/images/page2/noun_list.webp';
import Image from 'next/image';

export const experiences = [
  {
    id: 1,
    title: 'Founder',
    company: 'Neyasis Technology',
    dateText: 'February 2014 - Present (6 Years , 10 Months)',
    location: 'Ümraniye - İstanbul / Turkey',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
  {
    id: 2,
    title: 'Software Development Manager',
    company: 'IBM',
    dateText: 'Jully 2011 - January 2014  (2 Years, 6 Months)',
    location: 'Armonk- New York /ABD',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
  },
];

export const educations = [
  {
    id: 1,
    university: 'Bahçeşehir Üniversitesi',
    degree: 'Master Degree',
    section: 'Computer & Information Scienses',
    date: '2015-2019',
  },
  {
    id: 2,
    university: 'Boğaziçi Üniversitesi',
    degree: 'Bachelor’s Degree',
    section: 'Political Science and International Relations',
    date: '2010-2015',
  },
];

export const certificates = [
  {
    id: 1,
    title: 'MCP (Microsoft Certified Professional)',
    organisation: 'Microsoft',
    date: 'January 2015',
  },
];

export const abilities = [
  {
    id: 1,
    icon: <Image src={CheckIcon} width={14} height={14} alt="check icon" />,
    text: 'C#.Net (10 years)',
  },
  {
    id: 2,
    icon: <Image src={CheckIcon} width={14} height={14} alt="check icon" />,
    text: 'Swift (5 years)',
  },
  {
    id: 3,
    icon: <Image src={CheckIcon} width={14} height={14} alt="check icon" />,
    text: 'React (3 years)',
  },
];

export const interests = [
  {
    id: 1,
    icon: <Image src={CheckIcon} width={14} height={14} alt="check icon" />,
    text: 'Boating / Sailing',
  },
  {
    id: 2,
    icon: <Image src={CheckIcon} width={14} height={14} alt="check icon" />,
    text: 'Snowboarding',
  },
  {
    id: 3,
    icon: <Image src={CheckIcon} width={14} height={14} alt="check icon" />,
    text: 'Windsurfing',
  },
];
