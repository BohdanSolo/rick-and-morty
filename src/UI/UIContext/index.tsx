import React, {createContext, useState} from 'react';
import MuiAlert, {AlertColor} from '@mui/material/Alert';
import {Snackbar} from '@mui/material';

export const UIContext = createContext<UIContextProps>({} as UIContextProps);

interface UIContextProps {
    setAlert: React.Dispatch<React.SetStateAction<AlertProps>>;
    alert: AlertProps;
}

interface AlertProps {
    show: boolean;
    severity?: AlertColor;
    message?: string;
}

export const UIContextProvider: React.FC<any> = ({children}) => {
    const [alert, setAlert] = useState<AlertProps>({
        show: false,
        severity: 'info',
        message: '',
    });
    const handleClose = () =>
        setAlert({
            show: false,
        });

    return (
        <UIContext.Provider
            value={{setAlert, alert,}}
        >
            {children}
            <Snackbar open={alert.show} autoHideDuration={4000} onClose={handleClose}>
                <MuiAlert elevation={6} variant="filled" severity={alert.severity}>
                    {alert.message}
                </MuiAlert>
            </Snackbar>
        </UIContext.Provider>
    );
};
