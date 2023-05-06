// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { Social } from '../../typings'

const query = groq`
    *[_type == "social"]
`
type Data = {
    socials: Social[]
}

export const fetchSocials = async() => {
    const res = await sanityClient.fetch(query);

    //const data = await res.json();
    const socials: Social[] = res;

    // console.log("fetching", socials);

    return socials;
}