import "./style.css"
function Developer({name,age,country}){
    return (
        <div className="Dados">
            <h3 className="name">
                Dev: {name}
            </h3>
            <p>
                Idade: {age}
            </p>
            <p>
                País: {country}
            </p>
        </div>
    )
}

export default Developer