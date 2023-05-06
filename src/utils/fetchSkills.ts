// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Skill } from '../../typings'

const query = groq`
    *[_type == "skill"]
`
type Data = {
    skills: Skill[]
}

export const fetchSkills = async() => {
    const res = await sanityClient.fetch(query);

    //const data = await res.json();
    const skills: Skill[] = res;

    // console.log("fetching", skills);

    return skills;
}