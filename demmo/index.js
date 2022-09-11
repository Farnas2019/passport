const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5000
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/passport"
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL
const FACEBOOK_CALLBACK_URL = process.env.FACEBOOK_CALLBACK_URL
const GITHUB_CALLBACK_URL = process.env.GITHUB_CALLBACK_URL
const CLIENT_HOME_PAGE_URL = process.env.CLIENT_HOME_PAGE_URL
const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID
const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_CLIENT_SECRET
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET

