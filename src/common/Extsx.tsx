
import React, { useState } from 'react'

interface extsxProps {

}


function MyButton(props: any) {
    return (<button onClick={() => {
        let x = 0;

        if (1 > 2) {
            x = 1;
        } else {
            x = 2;
        }
    }}>submit {props.serv}</button>);
}


const Extsx: React.FC<extsxProps> = ({ }) => {
    const [serv, setServ] = useState("")

    return (
        <div>
            Page home

            <MyButton serv={serv}></MyButton>
        </div>
    );
}
export default Extsx