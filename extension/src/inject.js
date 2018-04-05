/*
const elementReady = require('element-ready');
const onChange = require('on-change');

// https://github.com/sindresorhus/refined-github/blob/4d0fff7c04fb5f221675ac7ea0baff56b462e0ad/source/libs/simplified-element-observer.js
const observeEl = (el, listener, options = { childList: true }) => {
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
const hideInDashboardPage = () => {
	console.log('observer → hideInDashboardPage ');
	const overallStatElements = [...document.querySelectorAll('#creator-page .dashboard-stat-value')]
	overallStatElements.map(el => el.parentElement.style.display = 'none')

	const videoCounts = [...document.querySelectorAll('#creator-page .video-view-count')]
	videoCounts.map(el => el.parentElement.style.display = 'none')
}

(async () => {
	const element = await elementReady('#creator-page');
	console.log('#creator-page wordl');
	observeEl('#creator-page', hideInDashboardPage)
	// hideInDashboardPage()
})();


(async () => {
	const element = await elementReady('#creator-page .vm-video-side-view-count');
	observeEl('#creator-page .vm-video-side-view-count', () => {
		const videoCountsInManager = [...document.querySelectorAll('#creator-page .vm-video-side-view-count')]
		videoCountsInManager.map(el => el.style.display = 'none')
	})
	// hideInDashboardPage()
})();

let ownChannelId = null;

// function getOwnChannelId() {
// 	if(window.ytInitialData && 'responseContext' in window.ytInitialData){
// 		ownChannelId = window.ytInitialData.responseContext.serviceTrackingParams.filter(x=>x.service==='GUIDED_HELP')[0].params.filter(x=>x.key==='creator_channel_id')[0].value
// 		// console.log('getOwnChannelId GOT');
// 	}
//     else{
//     	// console.log('getOwnChannelId RETRY');
//         // setTimeout(getOwnChannelId, 3000);
//     }

// 	return ownChannelId;
// }

// const CHANNEL_URL = `https://www.youtube.com/channel/${getOwnChannelId()}`;

// console.log(CHANNEL_URL);

window.getOwnChannelId = ()=>window.ytInitialData.responseContext.serviceTrackingParams.filter(x=>x.service==='GUIDED_HELP')[0].params.filter(x=>x.key==='creator_channel_id')[0].value;

const watchYTInitialDataId = setInterval(function() {
	console.log(typeof(window.ytInitialData));
	// if(typeof(window.ytInitialData) === 'object'){
	// 	console.log('ytInitialData');
	// 	console.log(window.ytInitialData);
	// } else {
	// 	console.log('NO → ytInitialData');
	// }
}, 3000);
// setTimeout(function() {
// 	const watchedObject = onChange(window['ytInitialData'], () => {
// 	console.log('window changed:');
// });
// }, 500);


// Get Own Channel ID

*/


/**
 * injectScript - Inject internal script to available access to the `window`
 *
 * @param  {type} file_path Local path of the internal script.
 * @param  {type} tag The tag as string, where the script will be append (default: 'body').
 * @see    {@link http://stackoverflow.com/questions/20499994/access-window-variable-from-content-script}
 */
function injectScript(file_path, tag) {
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
}
injectScript(chrome.extension.getURL('dist/content.bundle.js'), 'body');

