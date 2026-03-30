const securityTools = [
    { 
        name: "Permission Auditor", 
        desc: "Scan user access levels for sensitive data.",
        run: () => render(`<h3>Access Control List</h3><p>Alessa: <b>Owner</b><br>Manager_01: <b>Write</b><br>Guest: <b style="color:red">Access Denied</b></p>`)
        <button onclick="alert('Clicked!')">Click Me</button>
    },
    { 
        name: "Password Scorer", 
        desc: "Evaluate entropy and complexity of system credentials.",
//                                                                                                                                                                      math formula     
        run: () => render(`<h3>Password Scorer</h3><input type="password" placeholder="Test Password" oninput="this.nextSibling.innerText = 'Entropy Score: ' + (this.value.length * 10) + '%'"><p>Score: 0%</p>`)
    },
    { 
        name: "GDPR Data Portal", 
        desc: "Automate data removal requests for privacy compliance.",
        run: () => render(`<h3>Compliance Request</h3><input placeholder="Customer Email"><button onclick="alert('Queued for deletion')">Erase Data</button>`)
    },
    { 
        name: "Phishing Simulator", 
        desc: "Employee security awareness training module.",
        run: () => render(`<h3>Security Lab</h3><p style="background:#f0f0f0;padding:10px;font-size:0.9rem">From: amazon-verify@scam-link.net<br>Subject: Urgent Action Required!</p><button>Report Suspicious</button>`)
    },
    { 
        name: "SSL Health Monitor", 
        desc: "Track certificate expiration across 100+ sites.",
        run: () => render(`<h3>SSL Dashboard</h3><p>alessa-wellness.com: <b>Active</b><br>freight-dispatch.com: <b style="color:orange">Renew in 5 Days</b></p>`)
    },
    { 
        name: "Geofence Login Guard", 
        desc: "Flag logins from unauthorized geographic regions.",
        run: () => render(`<h3>Location Monitor</h3><p>Home Base: Fort Lauderdale, FL<br>Alert: <span style="color:red">Unauthorized Login (International IP)</span></p>`)
    },
    { 
        name: "Hash Integrity Checker", 
        desc: "Verify file authenticity using SHA-256 comparison.",
        run: () => render(`<h3>Integrity Check</h3><p>Stored Hash: a1b2...<br>Live Hash: a1b2...<br><b style="color:green">Match: File is Untampered</b></p>`)
    },
    { 
        name: "HIPAA Access Log", 
        desc: "Encrypted log for medical data interactions.",
        run: () => render(`<h3>Medical Data Audit</h3><p>20:05: Record #81 Accessed by ID_22<br>Status: Logged to Secure DB</p>`)
    },
    { 
        name: "Legal Doc Diff Tool", 
        desc: "Compare changes in Terms of Service versions.",
        run: () => render(`<h3>ToS Update</h3><p><del style="color:red">Old: Data sold.</del><br><ins style="color:green">New: Data encrypted.</ins></p>`)
    },
    { 
        name: "Security Micro-Quiz", 
        desc: "Daily security awareness training for associates.",
        run: () => render(`<h3>Daily Training</h3><p>Should you plug found USBs into work computers?</p><button>Yes</button> <button onclick="alert('Correct!')">Absolutely Not</button>`)
    }
];
