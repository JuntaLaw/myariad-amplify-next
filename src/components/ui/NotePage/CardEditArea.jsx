import CardNote from "../Card/CardNote";

const CardEditArea = () => {
    return (
        <div className="h-full">
            <div className="ml-10 mt-10 flex gap-10">
                <CardNote />
                <CardNote />
                <CardNote />
            </div>
        </div>
    );
};
export default CardEditArea;