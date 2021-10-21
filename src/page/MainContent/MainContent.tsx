import React from "react";
import './MainContent.css';
import LogoImage from "../../assets/image/Capture.png";



const MainContent = () => {
    return (
        <React.Fragment>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#fafafa",
                borderBottom: "1px solid #efefef",
                width: "100%",
                fontSize: "14px",
                padding: "5px 0",
                margin: "0 20px 20px 20px"

            }}>
                <div></div>
                <div>
                    <span><a style={{
                        color: "#8c8c8c",
                        marginRight: "20px"
                    }}>Flow</a></span>
                    <span><a style={{
                        color: "#8c8c8c",
                        marginRight: "20px"
                    }}>Decision Table</a></span>
                    <span><a style={{
                        color: "#8c8c8c",
                        marginRight: "20px"
                    }}>Natural Language</a></span>
                    <span><a style={{
                        color: "#8c8c8c",
                        marginRight: "20px"
                    }}>DRD</a></span>
                </div>
            </div>
            <div style={{ display: "flex", borderBottom: "1px solid #e7e7e7" }}>
                <div style={{ width: "25%", paddingRight: "15px", paddingLeft: "15px" }}><img src={LogoImage} alt="" /></div>
                <div style={{ width: "50%",paddingRight: "15px", paddingLeft: "15px", fontSize: "22px", color: "#333", marginTop: "10px" }}>Decision Requirement Diagram</div>
                <div style={{ width: "25%", paddingRight: "15px", paddingLeft: "15px" }}>
                    <select style={{
                        width: "75%",
                        height: "34px",
                        color: "#555",
                        backgroundColor: "#fff",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        right: "-15px",
                        position: "relative",
                        marginTop: "10px",
                        padding:"0 0 0 10px",
                        fontSize: "14px",
                        boxShadow:"inset 0 1px 1px rgb(0 0 0 / 8%)"
                    }}>
                        <option>Select a DRD</option>
                        <option>One Item</option>
                        <option>Two Items</option>
                        <option>Car DRD</option>
                        <option>Covid19 DRD</option>
                    </select>
                </div>
            </div>
           
        </React.Fragment>

    )

}

export default MainContent;