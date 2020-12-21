import React from "react";


const Alerts = (props) => {
    return (
        props.alert != null && (
            <div className={`alert alert-${alert.type}`}>
                <h5><i class="fas fa-exclamation-triangle text-light"></i>   Please Enter UserName</h5>
            </div>
        )
    );
};

export default Alerts;
