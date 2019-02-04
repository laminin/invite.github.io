import React from 'react'
import "./Events.scss"

const Invite = () => {

    const verse = "The LORD hath done great things for us; whereof we are glad."

    var inviteText = "Hello world! ||\n\n" +
            "\t\tTheir lives have been blessed by their love for each other| and by their faith in the Lord! ||" +
            "\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFranklin and Sathya\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t||\n\ntogether with their parents| invite you to witness the vows| that will join them as one on Monday,| " +
            "the fifteenth of May| two thousand nineteen| at ten o'clock in the morning,| CSI church,| Nagercoil.|"

    const helloWorld = "Hello world!";
    const firstLine = "Their lives have been blessed by their love for each other| and by their faith in the Lord!"
    const name = "Franklin and Sathya"
    const secondLine = "together with their parents| invite you to witness the vows| that will join them as one on Monday,"
    const time="the fifteenth of May| two thousand nineteen| at ten o'clock in the morning,| CSI church,| Nagercoil.|"



    return (
        <div className="parent">
           <div className="verse">{verse}</div>
           <div>{helloWorld}</div>
           <div>{firstLine}</div>
           <div>{name}</div>
           <div>{secondLine}</div>
           <div>{time}</div>
        </div>
    )
}

export default Invite