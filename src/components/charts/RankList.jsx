import React from 'react';
import bower from '../../images/appIcons/bowMaster-multiplayerGameIcon.jpg'
import driveClimberIcon from '../../images/appIcons/driveClimberIcon.jpg'
import facebookMessenger from '../../images/appIcons/facebookMessengerIcon.jpg'
import ReactStars from "react-rating-stars-component";

const RankList = ({data}) => {
    const srcVal = (val) => {
        switch (val) {
            case "driveClimberIcon.jpg":
                return driveClimberIcon;
            case "facebookMessengerIcon.jpg":
                return facebookMessenger;
            default:
                return bower;
        }
    }
    return (
        <>{data.map((val, key)=>{
            return (
                <section key={key} className="list-order">
                    <div className="list">
                        <div className="order">{++key}</div>
                        <div className="constant">
                            <img src={srcVal(val.iconName)}/>
                            <div className="constant-container">
                                <div className="c-title">{val.name}</div>
                                <div className="publish">
                                    <div className="val-publish">
                                        {val.publisher}
                                        <div className="point">
                                            <ReactStars 
                                                size={15}
                                                count={5}
                                                color={"black"}
                                                activeColor={"yellow"}
                                                value={val.rating}
                                                a11y={true}
                                                isHalf={true}
                                                emptyIcon={<i className="far fa-star" />}
                                                halfIcon={<i className="fa fa-star-half-alt" />}
                                                filledIcon={<i className="fa fa-star" />}
                                                onChange={(newValue) => {
                                                    console.log(`Example 2: new value is ${newValue}`)}
                                                } />
                                            <span style={{fontSize: "7pt"}}>({val.rank})</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`${val.rating > 0 ? "up-rank" : "down-rank"} rank`}>{val.rating}</div>
                    </div>
                </section>
            )
        })} 
        </>
    );
}

export default RankList;