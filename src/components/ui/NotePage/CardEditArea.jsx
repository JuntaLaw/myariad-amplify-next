import CardNote from "../Card/CardNote";

export default function CardEditArea() {
    return (
        <div className="h-full">
            <div className="ml-10 mt-10 flex gap-10">
                <CardNote />
                <CardNote />
                <CardNote />
            </div>
        </div>
    );
}
