// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import { PageInfo } from '../../typings'

const query = groq`
    *[_type == "pageInfo"][0]
`
type Data = {
    pageInfo: PageInfo;
}

export const fetchPageInfo = async() => {
    const res = await await sanityClient.fetch(query);

    // const data = await res.json();
    const pageInfo: PageInfo = res;

    // console.log("fetching", pageInfo);

    return pageInfo;
}