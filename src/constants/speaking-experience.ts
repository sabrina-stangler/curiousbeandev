import { Project, ProjectAttr, Organization } from '../models'

/**
 * Going to bastardize my own creation (Project + Organization models) to suit
 * speaking experience as like Project == Gig and Organization ==
 * either Year || Type (keynote, lightning, emcee/host, panelist, moderator, podcast, other)
 */

// projects == individual speaking engagements

const msoe_ww_wis: Project = {
  title: 'MSOE Welcome Week - Women in STEM Dinner',
  description: 'Three hour dinner, 90 min of stage time',
  bullets: [
    'managed the vibe & kept engaged a room full of freshman',
    'introduced + closed event, introduced each of five other speakers',
    'managed Q&A session with audience',
  ],
  attrs: [ProjectAttr.lightning, ProjectAttr.emcee],
  links: [
    {
      label: 'presentation',
      href: 'https://docs.google.com/presentation/d/1oHtcoTK9cUMUzYUq0TKrgwGkb5oUxJWRQSuq7O2rmJQ/edit?usp=sharing',
    },
  ],
}

const msoe_sse: Project = {
  title: 'MSOE Society of Software Engineers',
  description: 'President running monthly general meeting',
  bullets: [
    'ran the meeting, keeping pace, introducing speakers',
    'often speaking myself because we had no speaker lined up',
    'managed Q&A session with audience',
  ],
  attrs: [ProjectAttr.keynote, ProjectAttr.emcee],
}

const speak_up: Project = {
  title: 'Speak up, speak louder, speak often',
  description: 'by MKE Young Professionals group',
  bullets: [
    'introduced + closed event, introduced speakers',
    'kept audience engaged between speakers',
    'delivered lightning talk on radical responsibility as a leader',
  ],
  attrs: [ProjectAttr.emcee, ProjectAttr.lightning],
}

const msoe_uif_regional_meetup: Project = {
  title: 'Regional Meetup ignite talk',
  description: 'by MSOE UIF',
  bullets: [
    'introduced + closed event, introduced speakers',
    'delivered lightning talk',
  ],
  attrs: [ProjectAttr.emcee, ProjectAttr.lightning],
}

const uif_ignite_2023: Project = {
  title: 'ignite talk',
  description: 'UIF International Meetup',
  bullets: [
    'delivered 7-min talk to audience of 300 college students',
    'subject: practicing authenticity',
  ],
  attrs: [ProjectAttr.lightning],
  links: [
    {
      label: 'recording',
      href: 'https://www.youtube.com/watch?v=SkyjTEaAhrc',
    },
  ],
}

const uif_ignite_2024: Project = {
  title: 'ignite talk',
  description: 'UIF International Meetup',
  bullets: [
    'invited back to deliver another ignite talk',
    'subject: asking for help',
  ],
  attrs: [ProjectAttr.lightning],
}

const uif_ignite_2025: Project = {
  title: 'ignite talk',
  description: 'UIF International Meetup',
  bullets: [
    'invited back to deliver another ignite talk and CLOSE THE EVENT',
    'subject: reframing failure + defining creativity',
  ],
  attrs: [ProjectAttr.lightning],
}

const girls_in_tech_NM: Project = {
  title: 'Women in Tech Panel Moderator',
  description: 'outreach event hosted by Northwestern Mutual',
  bullets: [
    'moderated panel discussion with four professional women in tech + adjacent roles',
    'kept audience of middle school girls engaged for an hourto the best of my ability',
  ],
  attrs: [ProjectAttr.moderator],
}

const girls_in_steam_MBJ: Project = {
  title: 'Women in STEaM Panelist',
  description: 'Outreach event hosted by Milwaukee Business Journal',
  bullets: [
    'to an audience of 250+ middle school girls',
    'shared experiences and insights as a woman in STEaM fields',
  ],
  attrs: [ProjectAttr.panelist],
}

const tea_tech_2020: Project = {
  title: 'Tea & Tech Keynote',
  description: 'The Importance of Talking about Women in STEM',
  bullets: [
    'delivered with co-speaker Rachel Hunter (!)',
    'delivered remotely via zoom',
  ],
  attrs: [ProjectAttr.keynote],
  links: [
    {
      label: 'Rachel Hunter',
      href: 'https://linkedin.com/in/rachel-hunter-sts',
    },
  ],
}

const tea_tech_2021: Project = {
  title: 'Tea & Tech Lightning Talk',
  description: 'General advice for what to expect',
  bullets: ['responded to pre-submitted questions from the organizers'],
  attrs: [ProjectAttr.lightning],
}

const tea_tech_2022: Project = {
  title: 'Tea & Tech Panelist',
  description: 'Outreach to K12 girls',
  bullets: ['responded to pre-submitted questions from the organizers'],
  attrs: [ProjectAttr.panelist],
}

const bit_by_bit: Project = {
  title: 'Bit by Bit Conference 40-min talk',
  description: 'hosted by The Commons WI',
  bullets: [
    'delivered 40-min talk remotely to a live audience of ~30 young professionals',
    'subject: managing time and priorities',
    'recorded by hosts to share, and self-recorded to upload to youtube',
  ],
  attrs: [ProjectAttr.keynote],
  links: [
    {
      label: 'recording',
      href: 'https://youtu.be/ftB-kDDu-Fw?si=QpRW1GNlmzHceJtE',
    },
    {
      label: 'presentation',
      href: 'https://docs.google.com/presentation/d/1W8T72aUDRj9eTnRRkCgE9vr61E4dD1uvAXmD0RhOG0Y/edit?usp=sharing',
    },
  ],
}

const intro_to_software: Project = {
  title: 'Intro to Software Engineering',
  description: 'High school career day talk',
  bullets: [
    'delivered remotely, re-recorded async for youtube (!)',
    'introduced high school students to the basics of software engineering',
    "spoke on my career journey and what i've learned",
    'invited back the following year to do in-person (2021, 2022)',
  ],
  attrs: [ProjectAttr.keynote],
  links: [
    {
      label: 'recording',
      href: 'https://youtu.be/mK5gOwWJr8w?si=XyWVRLYhrCvyfyGM',
    },
  ],
}

const msoe_innovent_entrepreneur: Project = {
  title: 'Innovators Speaker Series',
  description: 'hosted by MSOE Innovent Center',
  bullets: ['invited to open this speaker series', '2-hour slot including Q&A'],
  attrs: [ProjectAttr.keynote],
  links: [
    {
      label: 'flyer',
      href: 'https://drive.google.com/file/d/1DG7-vpUdtuApUT7We9ZNHFvxhinvoo3G/view?usp=sharing',
    },
  ],
}

const girls_who_code: Project = {
  title: 'Girls Who Code Session',
  description: 'Outreach to middle school girls',
  bullets: [
    'attended working session followed up by my lightning talk',
    'purpose: to inspire young girls to stick with it even amidst doubts',
  ],
  attrs: [ProjectAttr.lightning],
  links: [
    {
      label: 'presentation',
      href: 'https://docs.google.com/presentation/d/1GdGopKkzbMn61u0CkWZv5EWuNkScSybR3iAHC4YaqaE/edit?usp=sharing',
    },
  ],
}

const msoe_industry_forum: Project = {
  title: 'MSOE Industry Forum',
  description: 'Panelist representing my freelance business',
  bullets: [
    'participated in a panel discussion about industry trends and their impact on my work',
    'also a healthy dose of career/student advice',
    'invited back for subsequent panels (2021 - 2024)',
  ],
  attrs: [ProjectAttr.panelist],
}

const msoe_se_cs_advice: Project = {
  title: 'MSOE SE/CS Freshman Seminar',
  description: 'General Advice',
  bullets: [
    'shared insights on career trajectory and time management',
    'audience of 75+ freshman software engineering + computer science students',
    'invited back for subsequent seminars (2024-2025)',
  ],
  attrs: [ProjectAttr.panelist],
}

// organizations == types of speaking engagements

const emcee_host: Organization = {
  name: 'Emcee / Host',
  description: '',
  projects: [msoe_ww_wis, msoe_sse, speak_up, msoe_uif_regional_meetup],
}

const keynote: Organization = {
  name: 'Keynote',
  description: '',
  projects: [
    tea_tech_2020,
    bit_by_bit,
    intro_to_software,
    msoe_innovent_entrepreneur,
  ],
}

const lightning: Organization = {
  name: 'Lightning',
  description: '',
  projects: [
    msoe_ww_wis,
    speak_up,
    msoe_uif_regional_meetup,
    uif_ignite_2023,
    uif_ignite_2024,
    uif_ignite_2025,
    girls_who_code,
    tea_tech_2021,
  ],
}

const panelist: Organization = {
  name: 'Panelist',
  description: '',
  projects: [
    girls_in_steam_MBJ,
    tea_tech_2022,
    msoe_industry_forum,
    msoe_se_cs_advice,
  ],
}

const moderator: Organization = {
  name: 'Moderator',
  description: '',
  projects: [girls_in_tech_NM],
}

const speakingExperience = [emcee_host, keynote, lightning, panelist, moderator]

export { speakingExperience }
