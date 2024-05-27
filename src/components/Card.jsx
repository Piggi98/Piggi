export default function Card() {
    return (
        <div className="rounded-md bg-zinc-950">
            <img
                src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""></img>
            <div className="flex flex-col p-4">
                <h2 className="text-2xl text.white font bold">Titolo</h2>
                <p className="text-gray-500"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
        </div>
    )
}