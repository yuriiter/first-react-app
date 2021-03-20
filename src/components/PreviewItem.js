import React from "react";
import "./PreviewItem.css"
import Video from "./Video"


class PreviewItem extends React.Component {
    state = {
        image: this.props.image,
        age: this.props.age,
        phone: this.props.phone,
        lang: this.props.lang,
        name: this.props.name,
        phrase: this.props.phrase,
        video: this.props.video,
        top: this.scrollTop
    }

    elementInViewport = (el) => {
        let top = el.offsetTop
        let left = el.offsetLeft
        let width = el.offsetWidth
        let height = el.offsetHeight
      
        while(el.offsetParent) {
          el = el.offsetParent
          top += el.offsetTop
          left += el.offsetLeft
        }
      
        return (
          top >= window.pageYOffset &&
          left >= window.pageXOffset &&
          (top + height) <= (window.pageYOffset + window.innerHeight) &&
          (left + width) <= (window.pageXOffset + window.innerWidth)
        )
      }

    componentDidMount = () => {
        if(this.state.video !== undefined) {
            window.addEventListener('scroll', this.handleScroll);
        }
    }
    
    componentWillUnmount = () => {
        if(this.state.video !== undefined) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
    
    // handlePlayVideo = (el) => {
    //     if(el.paused) {
    //         el.play();
    //     }
    //     else {
    //         el.pause();
    //     }
    // }

    // handleScroll = (event) => {
    //     let el = document.querySelector("#ref" + this.state.key)
    //     let scrollTop = el.scrollTop   
    //     this.setState({
    //       top: scrollTop
    //     });
    //     if(this.elementInViewport(el)) {
    //         el.play()
    //     }
    //     else {
    //         el.pause()
    //     }
    // }


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

    componentDidUpdate(oldProps) {
        const newProps = this.props
        if(oldProps !== newProps) {
            this.setState({
                image: newProps.image,
                age: newProps.age,
                phone: newProps.phone,
                lang: newProps.lang,
                name: newProps.name,
                phrase: newProps.phrase,
                video: newProps.video,
                key: this.props.key
            })
        }
    }


    render() {
        let name = this.state.name[this.state.lang]
        let image = require("../img/" + this.state.image + ".svg")
        let ageString = this.state.lang === "ru" ? this.russianAge(this.state.age) : this.state.age + " years old"
        let phrase = this.state.phrase[this.state.lang]
        console.log(this.state.video)
        
        return(
            <div className={this.state.video === undefined ? "hover-class preview-item" : "hover-class preview-video"}>
                <div className="preview-item__container">
                    <div className="preview-item__img-name">
                        <div className="preview-item__image-container">
                            <img className="preview-item__image" src={image.default} alt="Avatar" />
                        </div>
                        <p className="preview-item__name">{name}</p>
                    </div>

                    <p className="preview-item__age">{ageString}</p>
                    <p className="preview-item__phone">{this.state.phone}</p>
                    <p className="preview-item__phrase">{phrase}</p>
                    {/* <img className="table-item__star" src={require("../img/star.svg").default} alt="Favourite" /> */}
                </div>
                <Video
                    video={this.state.video}
                    isPlaying={this.state.isPlaying}
                    ref={this.state.key}
                />
            </div>
        )
    }
}

export default PreviewItem