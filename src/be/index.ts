import dotenv from 'dotenv'

import { App } from './app'

dotenv.config()

App().listen(process.env.PORT || 4000)
