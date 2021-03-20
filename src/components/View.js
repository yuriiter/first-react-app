import React from "react"
import TableItem from "./TableItem"
import PreviewItem from "./PreviewItem"

import "./View.css"
import people from "./data"

class View extends React.Component {
    state = {
        sorted: this.props.sorted,
        order: this.props.order,
        view: this.props.view,
        lang: this.props.lang
    }

    sortPeople = (people) => {
        let content
        let sortedVariable
        let sortingOrder

        switch(this.state.sorted) {
            case "id":
                sortedVariable = "id"
                break
            case "name":
                sortedVariable = "name"
                break
            case "age":
                sortedVariable = "age"
                break
            default:
                sortedVariable = null;
        }

        if(this.state.order === "ascending") {
            sortingOrder = 1
        }
        else {
            sortingOrder = -1
        }

        content = people.sort((a, b) =>  {
            if(sortedVariable === "name") {
                if(a.name[this.state.lang] < b.name[this.state.lang]) { return sortingOrder * -1; }
                if(a.name[this.state.lang] > b.name[this.state.lang]) { return sortingOrder * 1; }
                return 0
            }
            return sortingOrder * (a[sortedVariable] - b[sortedVariable])
        })
        return content
    }

    componentDidUpdate(oldProps) {
        const newProps = this.props
        if(oldProps !== newProps) {
            this.setState({
                sorted: newProps.sorted,
                order: newProps.order,
                view: newProps.view,
                lang: newProps.lang
            })
        }
    }

    render() {
        let sortedPeople = this.sortPeople(people)
        let content
        if(this.state.view === "table") {
            content = sortedPeople.map((person) => {
                return(
                    <TableItem
                        key={person.id}
                        image={person.image}
                        name={person.name}
                        age={person.age}
                        phone={person.phone}
                        lang={this.state.lang}
                    />
                )
            })
        }
        else {
            content = sortedPeople.map((person) => {
                return(
                    <PreviewItem
                        key={person.id}
                        image={person.image}
                        name={person.name}
                        age={person.age}
                        phone={person.phone}
                        phrase={person.phrase}
                        video={person.video}
                        lang={this.state.lang}
                    />
                )
            })
        }
        return(
            <div className={this.state.view === "table" ? "table-grid" : "preview-grid"}>
                {content}
            </div>
        )
    }
}

export default View