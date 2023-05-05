import { createSchema } from 'sanity'

export const schemaTypes = [pageInfo, skill, socials, experience, project]

import skill from './skill'
import socials from './socials'
import project from './project'
import experience from './experience'
import pageInfo from './pageInfo'

export default createSchema ({
    name: 'default',
    types: schemaTypes.concat([
        pageInfo,
        skill,
        socials,
        project,
        experience
    ]),
});