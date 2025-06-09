import axios from "axios";

export function storeSpar(sparData){
    axios.post(
        'https://flowbook-533c9-default-rtdb.firebaseio.com/spars.json',
        sparData
    );
}