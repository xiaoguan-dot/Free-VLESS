import { serve } from '@hono/node-server'

import app from './app.js'

serve({
    fetch: app.fetch,
})
