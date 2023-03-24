import "./styles/InlineImage.css"


const InlineImage = ({ src }) => {
    return ( 
        <div className="inlineImage">
            <img src={src} />
        </div>
     );
}
 
export default InlineImage;