import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Experience } from '../../typings'

const query = groq`
    *[_type == "experience"] {
        ...,
        technologies[]->
    }
`

type Data = {
    experiences: Experience[]
}

export const fetchExperiences = async() => {
    const res = await sanityClient.fetch(query);

    //const data = await res.json();
    const experiences: Experience[] = res;

    //console.log("fetching", experiences);

    return experiences;
}