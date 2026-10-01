import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Only allow GET and POST
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Get query parameters
  const { s, i, type } = req.query

  // Validate that at least one search parameter is provided
  if (!s && !i) {
    return res
      .status(400)
      .json({ error: 'Missing required parameter: s (search) or i (imdb id)' })
  }

  // Get API key from environment
  const apiKey = process.env.OMDB_API_KEY

  if (!apiKey) {
    console.error('[OMDb Proxy] OMDB_API_KEY not set in environment')
    return res.status(500).json({ error: 'API key not configured' })
  }

  // Build OMDb API URL
  let omdbUrl = 'https://www.omdbapi.com/?apikey=' + apiKey

  if (s) {
    omdbUrl += '&s=' + encodeURIComponent(String(s))
  }
  if (i) {
    omdbUrl += '&i=' + encodeURIComponent(String(i))
  }
  if (type) {
    omdbUrl += '&type=' + encodeURIComponent(String(type))
  }

  try {
    console.log('[OMDb Proxy] Fetching from OMDb...')

    // Call OMDb API
    const omdbResponse = await fetch(omdbUrl)

    if (!omdbResponse.ok) {
      console.error(
        '[OMDb Proxy] HTTP error:',
        omdbResponse.status,
        omdbResponse.statusText,
      )
      return res.status(omdbResponse.status).json({
        error: `OMDb API returned ${omdbResponse.status}`,
      })
    }

    // Parse response
    const data = await omdbResponse.json()

    console.log('[OMDb Proxy] Response received, returning to client')

    // Return OMDb response to client
    return res.status(200).json(data)
  } catch (error) {
    console.error('[OMDb Proxy] Error:', error)
    return res
      .status(500)
      .json({ error: 'Failed to fetch from OMDb API' })
  }
}
