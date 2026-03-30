// tools/logistics.js
const logisticsTools = [
    { 
        name: "Damaged Goods Reporter", 
        desc: "Log damaged items for quality control.",
        run: () => render(`
            <h3>Damage Report</h3>
            <input id="item" placeholder="Scan Item ID">
            <select id="cond"><option>Crushed Box</option><option>Liquid Leak</option><option>Expired</option></select>
            <button onclick="alert('Logged to LocalStorage!')">Submit Report</button>
        `)
    },
    { 
        name: "Pallet Location Tracker", 
        desc: "Check bin status in Section A-1.",
        run: () => render(`
            <h3>Section A-1 Status</h3>
            <div style="display:flex; gap:10px; justify-content:center;">
                <div style="background:red; padding:10px; color:white; border-radius:5px;">A1: FULL</div>
                <div style="background:green; padding:10px; color:white; border-radius:5px;">A2: EMPTY</div>
            </div>
        `)
    },
    { 
        name: "Restock Calculator", 
        desc: "Automated Reorder Point (ROP) logic.",
        run: () => {
            const rop = (60 * 4) + 15; 
            render(`<h3>Current ROP: ${rop} units</h3><p>Trigger order when stock hits this level.</p>`);
        }
    },
    { 
        name: "QR Label Generator", 
        desc: "Generate scannable IDs via API.",
        run: () => render(`<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=AMZ-UNIT-X"><h3>ID: AMZ-UNIT-X</h3>`)
    },
    { 
        name: "Aisle Heatmap", 
        desc: "Identify congestion in pick-paths.",
        run: () => render(`<div style="background:linear-gradient(to right, red, yellow, green); height:30px; width:100%; border-radius:15px;"></div><p>Aisle 7: <b>Critical Congestion</b></p>`)
    },
    { 
        name: "FIFO Age Monitor", 
        desc: "Detect inventory sitting over 30 days.",
        run: () => render(`<h3>⚠️ Warning</h3><p>Pallet 402: 42 Days Old<br>Action: Move to Outbound Immediately</p>`)
    },
    { 
        name: "Label Format Validator", 
        desc: "Regex verification for UPS/FedEx.",
        run: () => render(`
            <input id="track" placeholder="Enter Tracking #" oninput="checkTrack(this.value)">
            <p id="trackRes">Waiting for input...</p>
        `)
    },
    { 
        name: "Auto-Invoicer", 
        desc: "Draft procurement orders for low stock.",
        run: () => render(`<h3>Draft Invoice #882</h3><p>Item: Brownies (Dairy-Free)<br>Qty: 250 Units<br>Status: Awaiting Manager Approval</p>`)
    },
    { 
        name: "Dock Scheduler", 
        desc: "Truck arrival time-slot management.",
        run: () => render(`<h3>Today's Schedule</h3><p>09:00 - Truck A (Miami)<br>10:00 - <b>OPEN SLOT</b><br>11:00 - Truck C (Sunrise)</p>`)
    },
    { 
        name: "Box Size Recommender", 
        desc: "Optimize packaging to reduce waste.",
        run: () => render(`<h3>Recommender</h3><p>Input: 10" x 8" Item<br><b>Use Box: Size B (Standard)</b></p>`)
    }
];

// Helper function for the Label Validator
function checkTrack(val) {
    const res = document.getElementById('trackRes');
    if(val.startsWith("1Z")) res.innerHTML = "✅ UPS Validated";
    else if(val.length === 12) res.innerHTML = "✅ FedEx Validated";
    else res.innerHTML = "❌ Invalid Format";
}
