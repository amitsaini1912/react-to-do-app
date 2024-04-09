import TicketNum from "./TicketNum";


export default function Ticket ({ticket}) {
    return (
        <div>
            <h2>Ticket</h2>
            {ticket.map((num, idx) => (
                <TicketNum num={num} key={idx}/>
            ))}
        </div>
    );
}