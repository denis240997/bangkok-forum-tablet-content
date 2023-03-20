import "./styles/ImageCard.css"


const ImageCard = ({ src, goal, index }) => {

    const backgroundImage = {
        backgroundImage: `url(${src})`,
    }

    return (
        <div
            className={`imageCard goal_${goal.number} i_${index}`}
            style={backgroundImage}
        >
        </div>
    )
};

export default ImageCard;