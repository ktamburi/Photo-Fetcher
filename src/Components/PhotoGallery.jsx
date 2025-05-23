import PhotoCard from './UI/PhotoCard.jsx'
import '../Styles/app.css'

function PhotoGallery({ images, grayscale }) {
    if(images.length === 0){
        return <p>No images to display.</p>
    }

    return (
        <section className="photo-gallery ">
            {images.map((img, index) => (
                <PhotoCard photo={img} key={img.id || index} grayscale={grayscale} />
            ))}
        </section>
    );
}

export default PhotoGallery;