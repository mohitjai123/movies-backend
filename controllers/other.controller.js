// Clone this pattern for each model below
const generateCrud = (Model) => ({
  create: (req, res) => Model.create(req.body).then(d => res.status(201).json(d)).catch(e => res.status(400).json({ message: e.message })),
  getAll: (_req, res) => Model.find().then(d => res.json(d)),
  getById: (req, res) => Model.findById(req.params.id).then(d => d ? res.json(d) : res.status(404).json({ message: 'Not found' })).catch(e => res.status(400).json({ message: e.message })),
  update: (req, res) => Model.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(d => d ? res.json(d) : res.status(404).json({ message: 'Not found' })).catch(e => res.status(400).json({ message: e.message })),
  remove: (req, res) => Model.findByIdAndDelete(req.params.id).then(d => d ? res.json({ message: 'Deleted' }) : res.status(404).json({ message: 'Not found' })).catch(e => res.status(400).json({ message: e.message }))
});

module.exports = {
  subAdminController: generateCrud(require('../models/subAdmin.model')),
  loginAttemptController: generateCrud(require('../models/loginAttempt.model')),
  otpVerificationController: generateCrud(require('../models/otpVerification.model')),
  aboutUsController: generateCrud(require('../models/aboutUs.model')),
  faqPageController: generateCrud(require('../models/faqPage.model')),
  policyController: generateCrud(require('../models/policy.model')),
  categoryController: generateCrud(require('../models/category.model')),
  videoController: generateCrud(require('../models/video.model')),
  trailerController: generateCrud(require('../models/trailer.model')),
  episodeController: generateCrud(require('../models/episode.model')),
  sliderController: generateCrud(require('../models/slider.model')),
  trendingController: generateCrud(require('../models/trending.model')),
  notificationController: generateCrud(require('../models/notification.model')),
  continueWatchingController: generateCrud(require('../models/watchlater.model')),
  deleteRequestController: generateCrud(require('../models/deleterequest.model')),
  videoProgressController: generateCrud(require('../models/videoProgress.model')),
  adminController: generateCrud(require('../models/admin.model')),
  adController: generateCrud(require('../models/ads.model'))
};
