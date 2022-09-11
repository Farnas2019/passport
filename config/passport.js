const GoogleStrategy = require('passport-google-oauth20').Strategy
const FacebookStrategy = require('passport-facebook').Strategy;
const GitHubStrategy = require('passport-github').Strategy

const mongoose = require('mongoose')
const User = require('../models/User');

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL
      },
      async (accessToken, refreshToken, profile, done) => {
        const newUser = {
          googleId: profile.id,
          emailId: profile.emails[0].value,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value
        }

        try {
          let user = await User.findOne({ googleId: profile.id })

          if (user) {
            done(null, user)
          } else {
            user = await User.create(newUser)
            done(null, user)
          }
        } catch (err) {
          console.error(err)
        }
      }
    )
  )

  passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL
  },
    async (accessToken, refreshToken, profile, done) => {
      const newUser = {
        facebookId: id,
        emailId: profile.emails[0].value,
        displayName: profile.displayName,
        firstName: first_name,
        lastName: last_name,
        image: profile.photos[0].value
      }

      try {
        let user = await User.findOne({ facebookId: id })

        if (user) {
          done(null, user)
        } else {
          user = await User.create(newUser)
          done(null, user)
        }
      } catch (err) {
        console.error(err)
      }
    }
  ));

  passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL
  },
    async (accessToken, refreshToken, profile, done) => {
      const newUser = {
        githubId: profile.id,
        displayName: profile.displayName,
        firstName: profile.give_name,
        lastName: profile.name,
        image: profile.photos[0].value
      }

      try {
        let user = await User.findOne({ githubId: profile.id })

        if (user) {
          done(null, user)
        } else {
          user = await User.create(newUser)
          done(null, user)
        }
      } catch (err) {
        console.error(err)
      }
    }


  ));

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
  })

}
