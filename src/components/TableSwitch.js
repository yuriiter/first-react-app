import React from "react"
import "./TableSwitch.css"

class TableSwitch extends React.Component {
    state = {
        view: "table",
        lang: "ru"
    }

    handleViewChange = () => {
        let view = this.state.view
        let lang = this.state.lang
        this.props.onSelectView(view)
        this.props.onSelectLang(lang)
    }

    activateTable = () => {
        this.setState({ view: "table" }, this.handleViewChange)
    }

    activatePreview = () => {
        this.setState({ view: "preview" }, this.handleViewChange)
    }
    
    changeLang = () => {
        let newLang
        if(this.state.lang === "ru") {
            newLang = "en"
        }
        else {
            newLang = "ru"
        }
        this.setState({ lang: newLang }, this.handleViewChange)
    }

    render() {
        let ruLabels = {
            "view":"Вид",
            "table": "Таблица",
            "preview": "Превью"
        }
        let enLabels = {
            "view":"View",
            "table": "Table",
            "preview": "Preview"
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

        const toggleRightStyle = {
            left: "59%"
        }

        return(
            <div className="table-switch">
                <h2 className="table-switch__label">{labels[langIndex].view}</h2>
                <div className="table-switch__tiles">
                <div onClick={this.activateTable} className="table-switch__tile" style={this.state.view === "table" ? activeTileStyle : {}}><h3>{labels[langIndex].table}</h3></div>
                <div onClick={this.activatePreview} className="table-switch__tile" style={this.state.view === "preview" ? activeTileStyle : {}}><h3>{labels[langIndex].preview}</h3></div>
                </div>
                <div onClick={this.changeLang} className="table-switch__lang-switch">
                    <div className="table-switch__lang-slide" style={this.state.lang === "en" ? toggleRightStyle : {}}></div>
                    <div className="table-switch__lang-container">
                        <p className="table-switch__lang-par">RU</p>
                        <p className="table-switch__lang-par">EN</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default TableSwitch