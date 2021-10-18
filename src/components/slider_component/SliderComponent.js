import {connect} from "react-redux";
import {mapDispatchToProps} from "../../utils/Utils";
import React from 'react';

import * as PropTypes from "prop-types";


import "./slider.css"
import {GetIcon, TYPE_OF_ICON} from "../../utils/GetIcon";
import ButtonComponent from "../button_component/ButtonComponent";

class SliderComponent extends React.Component {

    state = {
        images: [],
        currentIndex: 0,
    }

    componentDidMount() {
        this.defineImages();
    }

    render() {
        return (
            <div id={"container"}>
                <div id={"images_sector"}
                     style={{backgroundColor: 'black', height: window.innerHeight / 1.5, width: '100%'}}>

                    {
                        this.state.images[this.state.currentIndex] != undefined &&
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%',
                            justifyContent: 'center'
                        }}>
                            <img
                                style={{backgroundColor: 'red', aspectRatio: 2 / 3, height: '100%'}}
                                src={this.state.images[this.state.currentIndex].image}/>
                            <div id={"text_on_image"}>
                                asdasdsaddsa
                            </div>

                        </div>

                    }

                </div>
                <div id={"thumbnail"}>
                    {
                        this.props.images.map((item, index) => {
                            return this.createThumbnail(item.path, index)
                        })
                    }
                </div>
                {
                    this.navBetweenNotes()
                }

            </div>
        )
    }

    defineImages = () => {
        const images = [];
        this.props.images.map((image) => {
            images.push({
                image: image.path,
                caption: ''
            })
        })
        this.setState({
            images
        })
    }

    createThumbnail = (image, index) => {
        return <button name={index} onClick={this.onClick} id={"thumbnail_container"}>
            <img style={{height: '100%', width: '100%'}} src={image}/>
        </button>
    }

    onClick = (e) => {
        this.setState({
            currentIndex: e.currentTarget.getAttribute('name')
        })

    }

    navBetweenNotes=()=>{
        return <div style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            display: "flex",
            backgroundColor: 'red'
        }}>
            <ButtonComponent
                onClick={()=>{
                    this.changeCurrentNote(1)
                }}
                iconType={TYPE_OF_ICON.ARROW_LEFT}/>
            <ButtonComponent
                onClick={()=>{
                    this.changeCurrentNote(-1)
                }}
                iconType={TYPE_OF_ICON.ARROW_RIGHT}/>
        </div>
    }

    changeCurrentNote=(sum)=>{
        if(this.state.currentIndex>0&&sum==-1){
            this.setState(prev=>({
                currentIndex:prev.currentIndex-1
            }))
        }else if(this.state.currentIndex<this.props.lengthOfNotes-1&&sum==1){
            this.setState(prev=>({
                currentIndex:prev.currentIndex+1
            }))
        }
    }

}


const mapStateToProps = (state) => {
    return {}
}

SliderComponent.propTypes = {
    images: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderComponent);
