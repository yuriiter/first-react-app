import React from "react";
import "./TableItem.css"

class TableItem extends React.Component {
    state = {
        image: this.props.image,
        age: this.props.age,
        phone: this.props.phone,
        lang: this.props.lang,
        name: this.props.name,
        starred: false
    }

    componentDidUpdate(oldProps) {
        const newProps = this.props
        if(oldProps !== newProps) {
            this.setState({
                image: newProps.image,
                age: newProps.age,
                phone: newProps.phone,
                lang: newProps.lang,
                name: newProps.name 
            })
        }
    }

    russianAge(age) {
        if(age % 100 >= 10 && age % 100 <= 20) {
            return age + " лет"
        }
        let lastDigit = age % 10
        if(lastDigit === 0 || lastDigit > 4) {
            return age + " лет"   
        }
        else if(lastDigit === 1) {
            return age + " год"
        }
        else if(lastDigit <= 4) {
            return age + " года"
        }
    }

    render() {
        let name = this.state.name[this.state.lang]
        let image = require("../img/" + this.state.image + ".svg")
        let ageString = this.state.lang === "ru" ? this.russianAge(this.state.age) : this.state.age + " years old"
        return(
            <div className="table-item">
                <div className="table-itme__container">
                    <div className="table-item__image-container">
                        <img className="table-item__image" src={image.default} alt="Avatar" />
                    </div>
                    <p className="table-item__name">{name}</p>
                    <p className="table-item__age">{ageString}</p>
                    <p className="table-item__phone">{this.state.phone}</p>
                    {/* <img className="table-item__star" src={require("../img/star.svg").default} alt="Favourite" /> */}
                </div>
            </div>
        )
    }
}

export default TableItem