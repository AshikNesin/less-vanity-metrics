// Packages
const elementReady = require('element-ready');

// Utils
// TODO: Check if regex is correct.
const YOUTUBE_SINGLE_VIDEO_REGEX = /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/;
const isYouTubeSingleVideo = url => (url || window.location.href).startsWith('https://www.youtube.com/watch?v=');
const isYouTubeChannelPage = channelId => window.location.pathname.startsWith(`/channel/${channelId}`)

const isYouTubeCreatorVideos = () => window.location.pathname.startsWith(`/my_videos`)
const isYouTubeCreatorDashboard = () => window.location.pathname.startsWith(`/dashboard`)

// https://github.com/sindresorhus/refined-github/blob/4d0fff7c04fb5f221675ac7ea0baff56b462e0ad/source/libs/simplified-element-observer.js
const observeEl = (el, listener, options = {
    childList: true
  }) => {
  if (typeof el === 'string') {
    el = document.querySelector(el);
  }

  if (!el) {
    return;
  }

  // Run first
  listener([]);

  // Run on updates
  const observer = new MutationObserver(listener);
  observer.observe(el, options);
  return observer;

}


let OWN_CHANNEL_ID = null;

if (isYouTubeSingleVideo()) {
console.log('isYouTubeSingleVideo');
  OWN_CHANNEL_ID = window.ytInitialData.responseContext.serviceTrackingParams.filter(x => x.service === 'GUIDED_HELP')[0].params.filter(x => x.key === 'creator_channel_id')[0].value;
}

// Hide Views Count in Single Video
//
const hideViewCountInSingleVideo = () => {
  const ownChannelPictureNode = document.querySelector(`.ytd-video-secondary-info-renderer a[href~="/channel/${OWN_CHANNEL_ID}"]`)
  if (ownChannelPictureNode) {
    document.querySelector('#page-manager .ytd-video-primary-info-renderer .yt-view-count-renderer').style.display = "none";
  } else {
    document.querySelector('#page-manager .ytd-video-primary-info-renderer .yt-view-count-renderer').style.display = "block";
  }
}


// 2 - Hide video counts in Channel Page (handled via CSS)
// 3 - Hide video counts in Creator Studio → Videos (handled via CSS))
// 4 - Hide video counts in Creator Studio → Dashboard (handled via CSS))

setInterval(function(){
  isYouTubeSingleVideo() && hideViewCountInSingleVideo();
}, 5000)
