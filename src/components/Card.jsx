function Card() {
    const title = props.title;
    const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit";
    const imgURL = props.imgURL;
    
    return (
        <div className="rounded-md bg-zinc-950">
            <img src={imgURL} alt=""></img>
            <div className="flex flex-col p-4">
                <h2 className="text-2xl text-red font-bold"> Titolo</h2>
                <p className="text-gray-500"> {description}</p>
            </div>
        </div>
    );
}

export default Card;