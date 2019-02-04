import React from 'react'
import "./Events.scss"

const  Event = () => {


    const verse = "The LORD hath done great things for us; whereof we are glad."

    const placesToVisit = [
        {
            "name": "Muttom beach",
            "coordinates": "",
            "wikiLink": ""

        },
        {
            "name": "Kanya Kumari beach",
            "coordinates": "",
            "wikiLink": ""
        },
        {
            "name": "Muttom beach",
            "coordinates": "",
            "wikiLink": ""
        },
        {
            
        } 
    ];


    const showMap = (lat,lng) => {
        // var url = "https://maps.google.com/?q=" + lat + "," + lng;
        var url = "http://maps.google.com/maps?q=loc:" + lat + "," + lng + " ( TEST )";
        window.open(url);
     }

    return (
        <div className="Parent">
            <div className="verse">{verse}</div>
            <div className="16th"> 
                <div>Reception</div>
                <div>Date: </div>
                <div className="Place">Place: Nagercoil</div>
                <div className="Time">6.30PM</div>
            </div>
            <div className="176h">
                <div>Matimony</div>
                <div>Date: </div>
                <div className="Place">Place: Nagercoil</div>
                <div className="Time">10.00AM</div>
            </div>
            <div className="176h">
                <div>Reception</div>
                <div>Date: </div>
                <div className="Place"
                    onClick={() => showMap(8.1717022, 77.3464751)}>
                    Place: Saral
                </div>
                <div className="Time">6.30PM</div>
            </div>
        </div>
    )
}

export default Event