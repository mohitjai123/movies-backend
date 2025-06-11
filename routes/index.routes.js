// routes/index.js
const express = require('express');
const router = express.Router();

router.use('/users', require('./user.routes'));
router.use('/subadmins', require('./subadmin.routes'));
router.use('/login-attempts', require('./loginAttempt.routes'));
router.use('/otp-verifications', require('./otpVerification.routes'));
router.use('/aboutus', require('./aboutUs.routes'));
router.use('/faq', require('./faqPage.routes'));
router.use('/policies', require('./policy.routes'));
router.use('/category', require('./category.routes'));
router.use('/products', require('./product.routes'));
router.use('/videos', require('./video.routes'));
router.use('/trailers', require('./trailer.routes'));
router.use('/episodes', require('./episode.routes'));
router.use('/categories', require('./categories.routes'));
router.use('/trending', require('./trending.routes'));
router.use('/notifications', require('./notification.routes'));
router.use('/continue-watching', require('./watchlater.routes'));
router.use('/video-progress', require('./videoProgress.routes'));
router.use('/delete-requests', require('./deleteRequest.routes'));
router.use('/admins', require('./admin.routes'));
router.use('/ads', require('./ads.routes'));
router.use('/language', require('./language.routes'));
router.use('/genres', require('./genres.routes'));
router.use('/movies', require('./movies.routes'));
router.use('/series', require('./series.routes'));
router.use('/season', require('./season.routes'));

module.exports = router;
