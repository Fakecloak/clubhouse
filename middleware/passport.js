const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require*('bcrypt');
const db = require('../db/queries');

passport.use(
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
        },

        async( email, password, done ) => {

            try{
                const user = await db.getUserByEmail(email);

                if(!user){
                    return done(null, false, {
                        message: "Incorrect email.",
                    });
                }

                const match = await bcrypt.compare(password, user.password);

                if(!match){
                    return done(null,false, {
                        message: "Incorrect password.",
                    })
                }

                return done(null, user); // Successful authentication - try block
            } catch(err){
                return done(err);
            }
        }
    )
);

passport.serializeUser( (user, done)=> {
    done(null, user.id);
});

passport.deserializeUser( async (id, done) => {

    try{
        const user = await db.getUserByID(id);
        done(null, user);

    } catch(err) {

        done(err); 
    }
});