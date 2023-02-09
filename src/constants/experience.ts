import { Organization, Project, ProjectAttr } from "../models"

const ds_bluelabel: Project = {
  title: 'directsupply.net',
  description: 'massive eCommerce product, core offering',
  bullets: [
    'bullet 1',
    'bullet 2'
  ],
  attrs: [ProjectAttr.fullstack, ProjectAttr.react]
}

const ds: Organization = {
  name: 'Direct Supply',
  titles: ['Software Engineer'],
  description: 'Full-time, full stack software engineer, team of 4-8 engineers + 1 business analyst + 1 product manager',
  startDate: new Date('2020-06-05'),
  endDate: new Date('2021-07-15'),
  projects: [ds_bluelabel, ds_bluelabel]
}

export const organizations: Organization[] = [ds, ds]