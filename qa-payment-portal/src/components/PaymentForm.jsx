import React, { useState } from "react";

const PaymentForm = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cardNumber.length === 16 && expiryDate && cvv.length === 3) {
            setMessage("Pago exitoso!");
        } else {
            setMessage("Error: Datos inválidos.");
        }
    };

    return (
        <div style={{ maxWidth: "300px", margin: "auto", textAlign: "center" }}>
            <h2>Portal de Pagos</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Número de tarjeta" 
                    value={cardNumber} 
                    onChange={(e) => setCardNumber(e.target.value.replace(/[^0-9]/g, ''))} 
                    maxLength="16" 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="MM/AA" 
                    value={expiryDate} 
                    onChange={(e) => setExpiryDate(e.target.value)} 
                    required 
                />
                <input 
                    type="text" 
                    placeholder="CVV" 
                    value={cvv} 
                    onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/g, ''))} 
                    maxLength="3" 
                    required 
                />
                <button type="submit">Pagar</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default PaymentForm;
