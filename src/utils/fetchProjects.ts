import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Project } from '../../typings'

const query = groq`
    *[_type == "project"] {
        ...,
        technologies[]->
    }
`

type Data = {
    projects: Project[]
}

export const fetchProjects = async() => {
    const res = await sanityClient.fetch(query);

    //const data = await res.json();
    const projects: Project[] = res;

    // console.log("fetching", projects);

    return projects;
}