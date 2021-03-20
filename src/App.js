import React from "react"
import TableSwitch from "./components/TableSwitch"
import Sort from "./components/Sort"
import View from "./components/View"

import "./App.css"

class App extends React.Component {
    state = {
        sorted: "id",
        order: "ascending",
        view: "table",
        lang: "ru"
    }

    handleSort = (sort) => {
        this.setState({
            sorted: sort.sort,
            order: sort.order
        })
    }

    handleView = (view) => {
        this.setState({ view: view })
    }

    handleLang = (lang) => {
        this.setState({ lang: lang })
    }

    render() {
        // console.log(this.state)
        return (
            <div>
                <div className="ui-wrapper">
                    <div className="ui-inner-wrapper">
                        <Sort 
                            onSelectSort={this.handleSort}
                            lang={this.state.lang} 
                        />
                        <TableSwitch 
                            onSelectView={this.handleView}
                            onSelectLang={this.handleLang}    
                        />
                    </div>
                </div>

                <View 
                    sorted={this.state.sorted}
                    order={this.state.order}
                    view={this.state.view}
                    lang={this.state.lang}
                />
            </div>
        )

    }
}

export default App