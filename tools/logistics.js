const logisticsTools = [
    { 
        name: "Damaged Goods Reporter", 
        desc: "Log damaged items for quality control.",
        run: () => render(`
            <h3>Damage Report</h3>
            <input id="item-id" placeholder="Scan Item ID">
            <select id="item-cond">
                <option>Crushed Box</option>
                <option>Liquid Leak</option>
                <option>Expired</option>
            </select>
            <button onclick="logToDB('Damaged Goods', 'Logistics', {
                id: document.getElementById('item-id').value, 
                condition: document.getElementById('item-cond').value
            })">Submit to Database</button>
        `)
    },
    { 
        name: "Pallet Location Tracker", 
        desc: "Update bin status in Section A-1.",
        run: () => render(`
            <h3>Update Bin Status</h3>
            <input id="bin-id" placeholder="Bin ID (e.g., A1-402)">
            <select id="bin-status">
                <option>FULL</option>
                <option>EMPTY</option>
                <option>RESERVED</option>
            </select>
            <button onclick="logToDB('Pallet Tracker', 'Logistics', {
                bin: document.getElementById('bin-id').value, 
                status: document.getElementById('bin-status').value
            })">Update Location</button>
        `)
    },
    { 
        name: "Restock Calculator", 
        desc: "Automated Reorder Point (ROP) logic.",
        run: () => render(`
            <h3>ROP Calculator</h3>
            <input id="daily-usage" type="number" placeholder="Avg Daily Usage">
            <input id="lead-time" type="number" placeholder="Lead Time (Days)">
            <button onclick="(() => {
                const u = document.getElementById('daily-usage').value;
                const l = document.getElementById('lead-time').value;
                const rop = (u * l) + 15;
                logToDB('Restock Calc', 'Logistics', {usage: u, lead: l, calculated_rop: rop});
                alert('Calculated ROP: ' + rop);
            })()">Calculate & Log</button>
        `)
    },
    { 
        name: "QR Label Generator", 
        desc: "Generate scannable IDs for new units.",
        run: () => render(`
            <h3>Label Gen</h3>
            <input id="qr-data" placeholder="Asset Name">
            <button onclick="(() => {
                const val = document.getElementById('qr-data').value;
                logToDB('QR Generator', 'Logistics', {asset: val});
                render('<h3>Generated: ' + val + '</h3><img src=\\'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + val + '\\'>');
            })()">Generate & Log</button>
        `)
    },
    { 
        name: "Aisle Heatmap", 
        desc: "Report path congestion.",
        run: () => render(`
            <h3>Congestion Report</h3>
            <input id="aisle-num" placeholder="Aisle Number">
            <select id="traffic-lv"><option>Low</option><option>Medium</option><option>CRITICAL</option></select>
            <button onclick="logToDB('Aisle Heatmap', 'Logistics', {
                aisle: document.getElementById('aisle-num').value, 
                level: document.getElementById('traffic-lv').value
            })">Log Traffic</button>
        `)
    },
    { 
        name: "FIFO Age Monitor", 
        desc: "Flag inventory over 30 days.",
        run: () => render(`
            <h3>FIFO Log</h3>
            <input id="pallet-id" placeholder="Pallet ID">
            <input id="days-old" type="number" placeholder="Days in Inventory">
            <button onclick="logToDB('FIFO Monitor', 'Logistics', {
                id: document.getElementById('pallet-id').value, 
                days: document.getElementById('days-old').value
            })">Flag Pallet</button>
        `)
    },
    { 
        name: "Label Format Validator", 
        desc: "Verify shipping carrier formats.",
        run: () => render(`
            <h3>Carrier Validator</h3>
            <input id="track-id" placeholder="Enter Tracking #">
            <button onclick="(() => {
                const val = document.getElementById('track-id').value;
                let carrier = 'Invalid';
                if(val.startsWith('1Z')) carrier = 'UPS';
                else if(val.length === 12) carrier = 'FedEx';
                logToDB('Label Validator', 'Logistics', {input: val, carrier: carrier});
                alert('Carrier: ' + carrier);
            })()">Validate & Log</button>
        `)
    },
    { 
        name: "Auto-Invoicer", 
        desc: "Draft procurement orders.",
        run: () => render(`
            <h3>Draft Procurement</h3>
            <input id="inv-item" placeholder="Item Name">
            <input id="inv-qty" type="number" placeholder="Quantity">
            <button onclick="logToDB('Auto-Invoicer', 'Logistics', {
                item: document.getElementById('inv-item').value, 
                qty: document.getElementById('inv-qty').value
            })">Submit Invoice</button>
        `)
    },
    { 
        name: "Dock Scheduler", 
        desc: "Manage truck arrival slots.",
        run: () => render(`
            <h3>Schedule Dock</h3>
            <input id="truck-id" placeholder="Carrier Name">
            <input id="arrival-time" type="time">
            <button onclick="logToDB('Dock Scheduler', 'Logistics', {
                carrier: document.getElementById('truck-id').value, 
                time: document.getElementById('arrival-time').value
            })">Book Slot</button>
        `)
    },
    { 
        name: "Box Size Recommender", 
        desc: "Packaging optimization.",
        run: () => render(`
            <h3>Box Recommender</h3>
            <input id="dim" placeholder="Item Dimensions (LxWxH)">
            <button onclick="logToDB('Box Recommender', 'Logistics', {dimensions: document.getElementById('dim').value})">Log Recommendation</button>
        `)
    }
];
