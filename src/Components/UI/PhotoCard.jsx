import '../../Styles/app.css'

function PhotoCard({ photo, grayscale }) {
    return (
        <article className="photo-item">
            <img className={grayscale ? 'grayscale' : ''} src={photo.download_url} alt={photo.author} loading="lazy" id={photo.id} />
            <figcaption style={{ display: 'block' }}>
                <h3> {photo.author} </h3>
                <a href={photo.url} target="_blank"> {photo.url} </a>
            </figcaption>
        </article>
    );
}

export default PhotoCard;