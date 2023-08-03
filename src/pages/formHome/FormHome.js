import React, { useEffect, useState } from "react";
import './FormHome.css';
// import { SideBar } from "../../component/sideBar/SideBar";
import { Header } from "../../component/header/Header";
import { HomeCard } from "../../component/homeCard/HomeCard";
// import { MailList } from "../../component/mailList/MailList";
// import { SelectMenu } from "../../component/selectMenu/SelectMenu";
// import { HEADER_INITIAL } from "../../constant";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { ComposeMail } from "../../component/composeMail/ComposeMail";
import { getUserEmail } from "../../apiCall";
import { useParams } from "react-router-dom";

export const FormHome = () => {

    const [mails, setMails] = useState([]);

    const { type, selectedMail } = useParams();

    return (
        <>
            <Header/>
            <HomeCard />
            <div className="mail-container">
                <div className="mail-list-show">
                    
                </div>
            </div>   
        </>
    )
}