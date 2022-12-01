export function ImageDetailsPane() {
	const { hash } = window.location;
	const [_hash, ...imageIdParts] = hash;
	const imageId = imageIdParts.join('');
	return (
		<section>
			<a href="/">Back</a>
			<br />
			<img
				alt={''}
				src={`${
					import.meta.env.VITE_IMG_URL
				}/iiif/2/${imageId}/full/843,/0/default.jpg`}
			/>
		</section>
	);
}
