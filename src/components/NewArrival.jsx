import '../style/home.css';
import useImage from "./useImage.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

const itemsList = [
    {
        backgroundColor: '#b2dfdb',
        imageUrl: '../public/asset/chaussure1.png',
        border: '#64b5f6 2px solid',
        width:'200px',
        height: '200px',
    },
    {
        backgroundColor: '#ffcc80',
        imageUrl: '../public/asset/chaussure2.png',
        border: 'none',
        width:'200px',
        height: '200px',
    },
    {
        backgroundColor: '#b39ddb',
        imageUrl: '../public/asset/chaussure3.png',
        border: 'none',
        width:'200px',
        height: '200px',
    },
];

function NewArrival() {
    const { images, error, loading } = useImage();
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);

    const onClickHandler = (index) => {
        setSelectedItemIndex(index);
    };

    return (
        <div className="new-arrival">
            <div className="newArrivalImageContainer" style={{
                backgroundColor: itemsList[selectedItemIndex].backgroundColor,
            }}>
                <a >
                    <img className={'newArrivalImage'} src={itemsList[selectedItemIndex].imageUrl} />
                </a>
            </div>

            <div className="exchangeImages">
                {itemsList.map((item, index) => (
                    <div className="exchangeImage" key={index} style={{ marginTop: index === 0 ? '-5em' : (index === 1 ? '-3em' : '-9em'), marginLeft: index === 2 ? '-1em' : 'unset', backgroundColor: item.backgroundColor, border: selectedItemIndex === index ? '#64b5f6 2px solid' : 'none',  }} onClick={() => onClickHandler(index)}>
                        <img src={item.imageUrl} alt={`Miniature ${index + 1}`}/>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default NewArrival;
