import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { handleContactRequest } from './api/_contact.js'

/**
 * Runs the same serverless handler used in production (`/api/contact`) inside the
 * Vite dev server, so the contact form can be tested locally without `vercel dev`.
 */
function contactApiDevServer(): Plugin {
  return {
    name: 'contact-api-dev-server',
    configureServer(server) {
      server.middlewares.use('/api/contact', (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Allow', 'POST')
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ ok: false, message: 'Method not allowed.' }))
          return
        }

        let body = ''
        req.on('data', (chunk) => {
          body += chunk
          if (body.length > 20_000) {
            req.destroy()
          }
        })
        req.on('end', () => {
          handleContactRequest(body)
            .then((result) => {
              res.statusCode = result.status
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify(result.body))
            })
            .catch(() => {
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ ok: false, message: 'Unexpected server error.' }))
            })
        })
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  // The contact endpoint reads secrets from process.env at request time, so the
  // .env files have to be loaded into the Node process for local development.
  // Vercel provides real environment variables in production.
  const env = loadEnv(mode, process.cwd(), '')
  for (const key of ['RESEND_API_KEY', 'CONTACT_TO_EMAIL', 'CONTACT_FROM_EMAIL']) {
    if (env[key] !== undefined) process.env[key] = env[key]
  }

  return {
    plugins: [react(), contactApiDevServer()],
    server: {
      host: '0.0.0.0',
      // Allow the sandbox preview host to reach the dev server.
      allowedHosts: true,
    },
    preview: {
      host: '0.0.0.0',
      allowedHosts: true,
    },
  }
})
