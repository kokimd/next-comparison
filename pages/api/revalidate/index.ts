import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  revalidated: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('revalidating')
  let revalidated = false

  try {
    await res.unstable_revalidate('/isr/on_demand_isr')
  } catch (err) {
    console.log(err)
  }
  res.status(200).json({ revalidated })
}
