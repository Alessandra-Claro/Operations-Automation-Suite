const securityTools = [
    { 
        name: "Permission Auditor", 
        desc: "Log system access levels.",
        run: () => render(`
            <h3>Access Audit</h3>
            <input id="user-audit" placeholder="Employee Name">
            <select id="access-lv"><option>Read-Only</option><option>Write</option><option>Admin</option></select>
            <button onclick="logToDB('Permission Audit', 'Security', {
                user: document.getElementById('user-audit').value, 
                level: document.getElementById('access-lv').value
            })">Sync Audit</button>
        `),
    },
    { 
        name: "Password Scorer", 
        desc: "Evaluate cryptographic entropy using E = L × log₂(R).",
        badge: "Most Advanced",
        priority: 1, 
        run: () => render(`
            <h3>Password Entropy Lab</h3>
            <p style="font-size:0.8rem; color:#666;">Standard: NIST 800-63B Compliance</p>
            <input type="password" id="p-test" placeholder="Test Password" 
                   style="width: 80%;"
                   oninput="updateEntropyDisplay(this.value)">
            <div id="entropy-results" style="margin-top: 15px; text-align: left; padding: 15px; background: #232f3e; color:white; border-radius: 8px;">
                <p><strong>Entropy:</strong> <span id="e-bits" style="color:var(--amz-orange); font-size:1.2rem;">0</span> bits</p>
                <p><strong>Security Grade:</strong> <span id="e-strength">N/A</span></p>
            </div>
            <button onclick="(() => {
                const bits = document.getElementById('e-bits').innerText;
                const strength = document.getElementById('e-strength').innerText;
                logToDB('Password Scorer', 'Security', {entropy_bits: bits, rating: strength});
            })()">Log Security Audit</button>
        `)
    },
    { 
        name: "GDPR Data Portal", 
        desc: "Automate privacy removal requests.",
        run: () => render(`
            <h3>Removal Request</h3>
            <input id="g-email" placeholder="Customer Email">
            <button onclick="logToDB('GDPR Request', 'Security', {email: document.getElementById('g-email').value})">Process Removal</button>
        `)
    },
    { 
        name: "Phishing Simulator", 
        desc: "Employee awareness training log.",
        run: () => render(`
            <h3>Phishing Test</h3>
            <p>From: verify-amazon.scam-net.com</p>
            <button onclick="logToDB('Phishing Sim', 'Security', {action: 'FAIL'})">Click Link</button>
            <button onclick="logToDB('Phishing Sim', 'Security', {action: 'PASS'})">Report Phish</button>
        `)
    },
    { 
        name: "SSL Health Monitor", 
        desc: "Log certificate status.",
        run: () => render(`
            <h3>SSL Check</h3>
            <input id="domain-ssl" placeholder="Domain URL">
            <select id="ssl-status"><option>Valid</option><option>Expiring</option><option>No SSL</option></select>
            <button onclick="logToDB('SSL Monitor', 'Security', {
                url: document.getElementById('domain-ssl').value, 
                status: document.getElementById('ssl-status').value
            })">Log Health</button>
        `)
    },
    { 
        name: "Geofence Login Guard", 
        desc: "Report unauthorized geographic logins.",
        run: () => render(`
            <h3>Geofence Alert</h3>
            <input id="geo-loc" placeholder="Detected IP Location">
            <button onclick="logToDB('Geofence Guard', 'Security', {alert_loc: document.getElementById('geo-loc').value})">Log Warning</button>
        `)
    },
    { 
        name: "Hash Integrity Checker", 
        desc: "Verify file authenticity (SHA-256).",
        run: () => render(`
            <h3>Integrity Check</h3>
            <input id="hash-val" placeholder="Paste File Hash">
            <button onclick="logToDB('Integrity Checker', 'Security', {hash: document.getElementById('hash-val').value})">Verify & Log</button>
        `)
    },
    { 
        name: "HIPAA Access Log", 
        desc: "Medical data interaction audit.",
        run: () => render(`
            <h3>Medical Log</h3>
            <input id="hipaa-id" placeholder="Patient/Record ID">
            <button onclick="logToDB('HIPAA Log', 'Security', {record_id: document.getElementById('hipaa-id').value})">Audit Access</button>
        `)
    },
    { 
        name: "Legal Doc Diff Tool", 
        desc: "Track changes in ToS versions.",
        run: () => render(`
            <h3>ToS Update Log</h3>
            <input id="tos-ver" placeholder="New Version #">
            <button onclick="logToDB('ToS Tracker', 'Security', {version: document.getElementById('tos-ver').value})">Log Revision</button>
        `)
    },
    { 
        name: "Security Micro-Quiz", 
        desc: "Daily associate awareness training.",
        run: () => render(`
            <h3>Security Quiz</h3>
            <p>Share passwords with managers?</p>
            <button onclick="logToDB('Security Quiz', 'Security', {result: 'FAIL'})">Yes</button> 
            <button onclick="logToDB('Security Quiz', 'Security', {result: 'PASS'})">Never</button>
        `)
    }
];

function updateEntropyDisplay(password) {
    if (!password) {
        document.getElementById('e-bits').innerText = "0";
        document.getElementById('e-strength').innerText = "N/A";
        return;
    }

    let R = 0;
    if (/[a-z]/.test(password)) R += 26; 
    if (/[A-Z]/.test(password)) R += 26; 
    if (/[0-9]/.test(password)) R += 10; 
    if (/[^a-zA-Z0-9]/.test(password)) R += 32; 

    const L = password.length;
    const entropy = Math.floor(L * Math.log2(R));
    
    let strength = "Very Weak";
    if (entropy > 128) strength = "Critical Grade (Military)";
    else if (entropy > 80) strength = "Strong (Production)";
    else if (entropy > 60) strength = "Medium";
    else if (entropy > 30) strength = "Weak";

    document.getElementById('e-bits').innerText = entropy;
    document.getElementById('e-strength').innerText = strength;
    
    const strengthEl = document.getElementById('e-strength');
    if (entropy > 80) strengthEl.style.color = "green";
    else if (entropy > 40) strengthEl.style.color = "orange";
    else strengthEl.style.color = "red";
}
