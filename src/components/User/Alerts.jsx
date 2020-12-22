import React, {useContext} from "react";

import AlertContext from '../../context/alert/alertContext'

const Alerts = () => {

    const alertContext = useContext(AlertContext);
    const { alert }  = alertContext;
    return (
        alert != null && (
            <div className={`alert alert-${alert.type}`}>
                <h5><i class="fas fa-exclamation-triangle text-light"></i>   Please Enter UserName</h5>
            </div>
        )
    );
};

export default Alerts;
