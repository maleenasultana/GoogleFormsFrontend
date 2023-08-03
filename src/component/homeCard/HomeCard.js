import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
 import './HomeCard.css';
import { getUserForms } from "../../apiCall";
const IMG = require('../../assets/form-untitled.png');



export const HomeCard = ({mail}) => {

    const navigate = useNavigate();
    const [myForms, setMyForms] = useState([]);

    useEffect(() => {
        const forms = getUserForms();
        if (forms) {
            setMyForms(forms.data);
        }
    }, [])

    return (
        <div className="form-bar-container">
            <div className="container">
                <div className="row row-cols-1">
                    <div className="col form-card-container">
                        <div>Start a new form</div>
                        <div className="row" style={{ padding: '10px'}} >
                            <div className="col new-card-container">
                                <img src="https://ssl.gstatic.com/docs/templates/thumbnails/forms-blank-googlecolors.png" alt="" srcset="" width="180" height="150" onClick={() => navigate('create')} />
                                <div>Blank</div>
                            </div>
                            <div className="col new-card-container">
                                <img src="https://ssl.gstatic.com/docs/templates/thumbnails/1xQF3s6EP0d58H-XJ7R440OpREKo4KqEapa0mkw43RPE_400.png" alt="" width="180" height="150" onClick={() => navigate('create/template/contact-information')} />
                                <div>Contact Information</div>
                            </div>
                            <div className="col new-card-container">
                                <img src="https://ssl.gstatic.com/docs/templates/thumbnails/1kkUjv3G7-PgOEUPMTiKvKResxGxS7MTsy5Amj4b0Trw_400.png" alt="" width="180" height="150" onClick={() => navigate('create/template/rsvp')} />
                                <div>RSVP</div>
                            </div>
                            <div className="col new-card-container">
                                <img src="https://ssl.gstatic.com/docs/templates/thumbnails/1m0UYQl1LSGxl3sGsh9_xjim4hUYQ8BO_zbvcFXv1Qug_400.png" alt="" width="180" height="150" onClick={() => navigate('create/template/party-invite')} />
                                <div>Party Invite</div>
                            </div>
                            <div className="col new-card-container">
                                <img src="https://ssl.gstatic.com/docs/templates/thumbnails/134dbGrMBrHFEfdPk5UpsZWEBZb7xJrOKRdESE58Fvcg_400.png" alt="" width="180" height="150" onClick={() => navigate('create/template/t-shirt-sign-up')} />
                                <div>T-Shirt Sign Up</div>
                            </div>
                            <div className="col new-card-container">
                                <img src="https://ssl.gstatic.com/docs/templates/thumbnails/1pM0fD5FWTXCGw4h0g1WSP8Nj3mS56l1EaCZAec-p2uc_400.png" alt="" width="180" height="150" onClick={() => navigate('create/template/event-registration')} />
                                <div>Event Registration</div>
                            </div>
                        </div>
                    </div>
                    <div className="col form-card-container1">
                        <div>Recent forms</div>
                        <div className="row recent-card">
                            {myForms?.map(item =>
                            <div className="col">
                                <img src={IMG} alt="" width="180" height="150" onClick={() => navigate("edit/" + item._id)}/>
                                <div>{item.heading.question ? item.heading.question : "Untitled Form"}</div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}