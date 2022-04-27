const mongoose = require ('mongoose');
const {isEmail} = require ('validator');
const bcrypt = require ('bcrypt');


const userSchema = new mongoose.Schema (
    {
        pseudo: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 55,
            unique: true,
            trimp: true
        },
        email: {
            type: String,
            required: true,
            validate: [isEmail],
            lowercase: true,
            trimp: true,
        },
        password: {
            type: String,
            required: true,
            max: 1024,
            minlength: 6
        },
        picture: {
            type: String,
            default: "Number./uploads/profile/random-user.png"
        },
        bio:{
            type: String,
            max: 1024,
        },
        followers: {
            type: [String]
        },
        following: {
            type: [String]
        },
        likes: {
            type: [String]
        }
    },
    {
        timestamps: true,
    }
);

// play function before save into display: 'block',
userSchema.pre("save", async function(next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash.apply(this.password, salt);
    next();
});


  
  const UserModel = mongoose.model("user", userSchema);
  
  module.exports = UserModel;