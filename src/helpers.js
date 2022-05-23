export const addToWishList = (post) => {
	const postListStorage = localStorage.getItem("postLIst");
	if (postListStorage === null) {
		const postList = [];
		postList.push(post);
		localStorage.setItem("postlist", JSON.stringify(postList));
	} else {
		const storageArray = JSON.parse(postListStorage);
		if (
			!storageArray.find((postStorage) => {
				return postStorage === post.id;
			})
		)
			storageArray.push(post);
		localStorage.setItem("postlist", JSON.stringify(storageArray));
	}
};
