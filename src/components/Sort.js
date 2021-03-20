import React from "react"
import "./Sort.css"

class Sort extends React.Component {
    state = {
        lang: this.props.lang,
        sort: "id",
        order: "ascending"
    }

    handleSortChange = () => {
        let sortObj = this.state
        this.props.onSelectSort(sortObj)
    }

    componentDidUpdate(oldProps) {
        const newProps = this.props
        if(oldProps.lang !== newProps.lang) {
            this.setState({lang: newProps.lang})
        }
    }

    activateSort(sort) {
        this.setState({ sort: sort }, this.handleSortChange)
    }

    activateOrder(order) {
        this.setState({ order: order }, this.handleSortChange)
    }

    render() {
        let ruLabels = {
            "caption": "Сортировка",
            "id":"ID",
            "name": "Имя",
            "age": "Возраст",
            "ascending": "По возрастанию",
            "descending": "По убыванию",
        }
        let enLabels = {
            "caption": "Sort by",
            "id":"ID",
            "name": "Name",
            "age": "Age",
            "ascending": "Ascending order",
            "descending": "Descending order",
        }
        let labels = [ruLabels, enLabels]

        let langIndex
        if(this.state.lang === "ru") {
            langIndex = 0
        }
        else {
            langIndex = 1
        }

        const activeTileStyle = {
            boxShadow: "-3px -2px 12px 0px rgba(34, 60, 80, 0.2)"
        }


        return(
            <div>
                <h2 className="sort__label">{labels[langIndex].caption}</h2>
                <div className="sort__wrapper">
                    <div className="sort__tiles">
                        <div onClick={() => this.activateSort("id")} className="sort__tile" style={this.state.sort === "id" ? activeTileStyle : {}}><h3>{labels[langIndex].id}</h3></div>
                        <div onClick={() => this.activateSort("name")} className="sort__tile" style={this.state.sort === "name" ? activeTileStyle : {}}><h3>{labels[langIndex].name}</h3></div>
                        <div onClick={() => this.activateSort("age")} className="sort__tile" style={this.state.sort === "age" ? activeTileStyle : {}}><h3>{labels[langIndex].age}</h3></div>
                    </div>
                    <div className="sort__tiles">
                        <div onClick={() => this.activateOrder("ascending")} className="sort__tile" style={this.state.order === "ascending" ? activeTileStyle : {}}><h3>{labels[langIndex].ascending}</h3></div>
                        <div onClick={() => this.activateOrder("descending")} className="sort__tile" style={this.state.order === "descending" ? activeTileStyle : {}}><h3>{labels[langIndex].descending}</h3></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Sort