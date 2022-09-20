function getImagesFromServer() {
	return [1, 2];
}

async function log1() {
	const pictures = await getImagesFromServer();

	pictures.map((d) => console.log(d));
}

log1();
