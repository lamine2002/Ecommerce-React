import '../style/home.css';
import useImage from "./useImage.jsx";
function NewArrival() {
    const { images, error, loading } = useImage();
    return (
        <div className={'new-arrival'}>
            <div className="newArrivalImage" >
                <img  className={'newArrivalImageView'} src="../public/asset/chaussure1.png" />
            </div>
        </div>
    );
}

export default NewArrival;