const Commentator = require('./commentator');
const Profile     = require('../profile/profile');

class MakeFormCommentDB {

    makeFormCommentator(commentRaw) {
        let profile = new Profile();
            profile.setFullName(commentRaw.fullName);
            profile.setUserId(commentRaw.user_id);
            profile.setAddress(commentRaw.address);
            profile.setEmail(commentRaw.email);
            profile.setDateOfBirth(commentRaw.dateOfBirth);
            profile.setAvatar(commentRaw.avatar);
        let comment = new Commentator(profile);
            comment.setComment(commentRaw.comment);

        return comment;
    }
}

module.exports = MakeFormCommentDB;
