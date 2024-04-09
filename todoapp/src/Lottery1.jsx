import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery1({n=3, winningSum=15}) {
   let [ticket, setTicket] = useState(genTicket(3))
   let isWinning = sum(ticket) === winningSum;

   let buyNewTicket = () => {
      setTicket(genTicket(n));
   }

   return(
    <div>
       <h1>Lottery Game!</h1>
       <div className="ticket">
          <Ticket ticket={ticket}/>
          <br /><b><br /></b>
          <button onClick={buyNewTicket}>Buy New Ticket</button>
          <h3>{ isWinning && "Congratulations, You Won"}</h3>
       </div>
    </div>
   );
}