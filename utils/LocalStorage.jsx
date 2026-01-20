


const employees = [
    {
        id: 1,
        employeeName: "Rahul Sharma",
        email: "a@a.com",
        password: "123",

        taskSummary: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Prepare Report",
                taskDescription: "Prepare the monthly sales report",
                taskDate: "2026-01-10",
                category: "Reporting"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Team Meeting",
                taskDescription: "Attend weekly team sync meeting",
                taskDate: "2026-01-05",
                category: "Meeting"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Client Follow-up",
                taskDescription: "Follow up with inactive client",
                taskDate: "2026-01-07",
                category: "Client"
            }
        ]
    },

    {
        id: 2,
        employeeName: "Ankit Verma",
        email: "employee2@example.com",
        password: "123",

        taskSummary: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Bug Fixing",
                taskDescription: "Fix login page bugs",
                taskDate: "2026-01-12",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Code Review",
                taskDescription: "Review teammate's code",
                taskDate: "2026-01-08",
                category: "Development"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Deploy Build",
                taskDescription: "Deploy new build to staging",
                taskDate: "2026-01-09",
                category: "Deployment"
            }
        ]
    },

    {
        id: 3,
        employeeName: "Neha Singh",
        email: "employee3@example.com",
        password: "123",

        taskSummary: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Design Banner",
                taskDescription: "Create promotional banner",
                taskDate: "2026-01-11",
                category: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Update Logo",
                taskDescription: "Update company logo assets",
                taskDate: "2026-01-06",
                category: "Design"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Client Feedback",
                taskDescription: "Incorporate client feedback",
                taskDate: "2026-01-07",
                category: "Design"
            }
        ]
    },

    {
        id: 4,
        employeeName: "Suresh Kumar",
        email: "employee4@example.com",
        password: "123",

        taskSummary: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Inventory Check",
                taskDescription: "Check warehouse inventory",
                taskDate: "2026-01-13",
                category: "Operations"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "Vendor Call",
                taskDescription: "Call vendor for restocking",
                taskDate: "2026-01-09",
                category: "Operations"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Shipment Tracking",
                taskDescription: "Track delayed shipment",
                taskDate: "2026-01-10",
                category: "Logistics"
            }
        ]
    },

    {
        id: 5,
        employeeName: "Pooja Patel",
        email: "employee5@example.com",
        password: "123",

        taskSummary: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },

        tasks: [
            {
                active: true,
                newTask: true,
                completed: false,
                failed: false,
                taskTitle: "Customer Support",
                taskDescription: "Handle support tickets",
                taskDate: "2026-01-14",
                category: "Support"
            },
            {
                active: false,
                newTask: false,
                completed: true,
                failed: false,
                taskTitle: "FAQ Update",
                taskDescription: "Update FAQ section",
                taskDate: "2026-01-08",
                category: "Support"
            },
            {
                active: false,
                newTask: false,
                completed: false,
                failed: true,
                taskTitle: "Refund Processing",
                taskDescription: "Process delayed refunds",
                taskDate: "2026-01-09",
                category: "Finance"
            }
        ]
    }
];




const admin = {

    "id": 1,
    "email": "admin@example.com",
    "password": "123"
}


export const setLocals = () => {

    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('Admin', JSON.stringify(admin))
}


export const getLcocal = () => {

    const Employees = JSON.parse(localStorage.getItem('employees'))
    const Admin = JSON.parse(localStorage.getItem('Admin'))

    return { Admin, Employees };
}