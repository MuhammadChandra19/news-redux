const initialState = {
	newsList: [
		{
			id: 'poijhji9ijk',
			source: {
				id: null,
				name: "Bostonglobe.com"
			},
			author: null,
			title: "Michelle Carter denied early release from prison by Parole Board - The Boston Globe",
			description: "“Ms. Carter’s self serving statements and behavior, leading up to and after his suicide, appear to be irrational and lacked sincerity,” the board wrote in its decision.",
			url: "https://www.bostonglobe.com/metro/2019/09/20/michelle-carter-denied-early-release-from-prison-parole-board/mDdEUNMZ3noexLfdH1OQPI/story.html",
			urlToImage: "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/qKSWTVefI7L8Cex43BNXrNGR_Rg=/506x0/arc-anglerfish-arc2-prod-bostonglobe.s3.amazonaws.com/public/LQC7IMW3WUI6THZFPB7JVJMS6E.jpg",
			publishedAt: "2019-09-20T14:48:45Z",
			content: "The [Board] is troubled that Ms. Carter not only encouraged Mr. Conrad to take his own life, she actively prevented others from intervening in his suicide, the decision said. Ms. Carters self serving statements and behavior, leading up to and after his suicid… [+2971 chars]"
			,
		},
		{
			id: 'pokjnjiu8ikj',
			source: {
				id: 'nbc-news',
				name: "NBC News"
			},
			author: null,
			title: "Michelle Carter denied early release from prison by Parole Board - The Boston Globe",
			description: "“Ms. Carter’s self serving statements and behavior, leading up to and after his suicide, appear to be irrational and lacked sincerity,” the board wrote in its decision.",
			url: "https://www.bostonglobe.com/metro/2019/09/20/michelle-carter-denied-early-release-from-prison-parole-board/mDdEUNMZ3noexLfdH1OQPI/story.html",
			urlToImage: "https://media4.s-nbcnews.com/j/newscms/2019_38/3019056/190920-wilx-amish-crash-ew-1009a_3e6399efbe50b779fbc56ae57d48c291.nbcnews-fp-1200-630.jpg",
			publishedAt: "2019-09-20T14:48:45Z",
			content: "The [Board] is troubled that Ms. Carter not only encouraged Mr. Conrad to take his own life, she actively prevented others from intervening in his suicide, the decision said. Ms. Carters self serving statements and behavior, leading up to and after his suicid… [+2971 chars]"
			,
		},
	],
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'LOAD_NEWS':
			return state.newsList;
		default:
			return state.newsList;
	}
}