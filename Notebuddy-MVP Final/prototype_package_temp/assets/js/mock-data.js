// Mock Data for NoteBuddy Prototype

const mockData = {
    users: [
        {
            id: "user1",
            name: "Alex Johnson",
            email: "alex.johnson@example.com",
            avatar: "./assets/images/avatar-placeholder.png" // Assuming a placeholder avatar
        }
    ],
    meetings: [
        {
            id: "m1",
            title: "Project Phoenix - Q3 Strategy",
            dateTime: "2025-05-14T10:00:00Z",
            durationMinutes: 60,
            participants: ["Sarah Miller", "David Lee", "Alex Johnson"],
            with: "Marketing Team",
            context: "Review Q2 performance and plan for Q3 campaigns.",
            preparationNeeded: ["Analyze Q2 metrics report", "Draft initial Q3 proposal"],
            type: "work",
            summaryId: "s1",
            tasksGenerated: ["t1", "t2"]
        },
        {
            id: "m2",
            title: "Client Onboarding - Acme Corp",
            dateTime: "2025-05-14T14:00:00Z",
            durationMinutes: 90,
            participants: ["Alex Johnson", "Laura Chen (Acme)", "Tom Baker (Acme)"],
            with: "Acme Corp",
            context: "Kick-off meeting for the new Acme Corp account.",
            preparationNeeded: ["Review SOW", "Prepare welcome packet"],
            type: "work",
            summaryId: "s2",
            tasksGenerated: ["t3"]
        },
        {
            id: "m3",
            title: "Weekly Team Sync",
            dateTime: "2025-05-15T09:00:00Z",
            durationMinutes: 45,
            participants: ["Alex Johnson", "Sarah Miller", "David Lee", "Emily Carter"],
            with: "Internal Team",
            context: "Standard weekly check-in on project statuses.",
            preparationNeeded: ["Update individual task boards"],
            type: "work",
            summaryId: "s3",
            tasksGenerated: ["t4", "t5"]
        },
        {
            id: "m4",
            title: "Dentist Appointment",
            dateTime: "2025-05-15T16:00:00Z",
            durationMinutes: 60,
            participants: ["Alex Johnson"],
            with: "Dr. Smiles",
            context: "Routine check-up.",
            preparationNeeded: ["Bring insurance card"],
            type: "personal",
            summaryId: null,
            tasksGenerated: []
        },
        {
            id: "m5",
            title: "Budget Review - Q3",
            dateTime: "2025-05-16T11:00:00Z",
            durationMinutes: 75,
            participants: ["Alex Johnson", "Finance Head", "CEO"],
            with: "Finance Department",
            context: "Finalize budget allocations for the upcoming quarter.",
            preparationNeeded: ["Departmental budget proposals", "Previous quarter spending analysis"],
            type: "work",
            summaryId: "s4",
            tasksGenerated: ["t6"]
        },
        {
            id: "m6",
            title: "Book Club Meeting",
            dateTime: "2025-05-16T18:30:00Z",
            durationMinutes: 90,
            participants: ["Alex Johnson", "Friends"],
            with: "Book Club Friends",
            context: "Discussing 'The Midnight Library'.",
            preparationNeeded: ["Finish reading chapter 10-15"],
            type: "personal",
            summaryId: null,
            tasksGenerated: []
        },
        {
            id: "m7",
            title: "Product Demo - Innovate Solutions",
            dateTime: "2025-05-17T13:00:00Z",
            durationMinutes: 60,
            participants: ["Alex Johnson", "Sales Team Lead", "Innovate Solutions Reps"],
            with: "Innovate Solutions (Potential Client)",
            context: "Showcasing NoteBuddy features to a new lead.",
            preparationNeeded: ["Customize demo script", "Ensure demo environment is ready"],
            type: "work",
            summaryId: "s5",
            tasksGenerated: ["t7"]
        },
        {
            id: "m8",
            title: "Yoga Class",
            dateTime: "2025-05-17T07:00:00Z",
            durationMinutes: 60,
            participants: ["Alex Johnson"],
            with: "Yoga Studio",
            context: "Morning Vinyasa flow.",
            preparationNeeded: ["Yoga mat", "Water bottle"],
            type: "personal",
            summaryId: null,
            tasksGenerated: []
        }
    ],
    summaries: [
        {
            id: "s1",
            meetingId: "m1",
            meetingTitle: "Project Phoenix - Q3 Strategy",
            meetingDateTime: "2025-05-14T10:00:00Z",
            participants: ["Sarah Miller", "David Lee", "Alex Johnson"],
            keyPoints: [
                "Q2 revenue exceeded targets by 15%.",
                "Focus for Q3 will be on expanding to new European markets.",
                "New social media campaign to launch mid-July."
            ],
            actionItems: [
                { description: "Finalize European market entry plan", assignedTo: "Sarah Miller", dueDate: "2025-05-21T17:00:00Z" },
                { description: "Develop creative assets for social media campaign", assignedTo: "David Lee", dueDate: "2025-05-28T17:00:00Z" }
            ],
            fullTranscriptLink: "#",
            exportLink: "#"
        },
        {
            id: "s2",
            meetingId: "m2",
            meetingTitle: "Client Onboarding - Acme Corp",
            meetingDateTime: "2025-05-14T14:00:00Z",
            participants: ["Alex Johnson", "Laura Chen (Acme)", "Tom Baker (Acme)"],
            keyPoints: [
                "Acme Corp excited to start using NoteBuddy.",
                "Initial training session scheduled for next Monday.",
                "Key contacts established on both sides."
            ],
            actionItems: [
                { description: "Send follow-up email with training materials to Acme Corp", assignedTo: "Alex Johnson", dueDate: "2025-05-15T17:00:00Z" }
            ],
            fullTranscriptLink: "#",
            exportLink: "#"
        },
        {
            id: "s3",
            meetingId: "m3",
            meetingTitle: "Weekly Team Sync",
            meetingDateTime: "2025-05-15T09:00:00Z",
            participants: ["Alex Johnson", "Sarah Miller", "David Lee", "Emily Carter"],
            keyPoints: [
                "Project Phoenix on track.",
                "Client Acme Corp onboarding going smoothly.",
                "Emily needs assistance with data migration task."
            ],
            actionItems: [
                { description: "Assist Emily with data migration for Project Zeta", assignedTo: "David Lee", dueDate: "2025-05-17T17:00:00Z" },
                { description: "Schedule a follow-up meeting with Project Phoenix stakeholders", assignedTo: "Sarah Miller", dueDate: "2025-05-19T17:00:00Z" }
            ],
            fullTranscriptLink: "#",
            exportLink: "#"
        },
        {
            id: "s4",
            meetingId: "m5",
            meetingTitle: "Budget Review - Q3",
            meetingDateTime: "2025-05-16T11:00:00Z",
            participants: ["Alex Johnson", "Finance Head", "CEO"],
            keyPoints: [
                "Overall budget for Q3 approved with minor adjustments.",
                "Marketing budget increased by 5%.",
                "R&D to provide detailed spending plan for new initiatives."
            ],
            actionItems: [
                { description: "Communicate approved Q3 budget to department heads", assignedTo: "Finance Head", dueDate: "2025-05-19T17:00:00Z" }
            ],
            fullTranscriptLink: "#",
            exportLink: "#"
        },
        {
            id: "s5",
            meetingId: "m7",
            meetingTitle: "Product Demo - Innovate Solutions",
            meetingDateTime: "2025-05-17T13:00:00Z",
            participants: ["Alex Johnson", "Sales Team Lead", "Innovate Solutions Reps"],
            keyPoints: [
                "Innovate Solutions impressed with transcription accuracy and summarization.",
                "Requested a trial account for 5 users.",
                "Follow-up call scheduled for next week to discuss pricing."
            ],
            actionItems: [
                { description: "Set up trial accounts for Innovate Solutions", assignedTo: "Sales Team Lead", dueDate: "2025-05-20T17:00:00Z" }
            ],
            fullTranscriptLink: "#",
            exportLink: "#"
        },
        {
            id: "s6",
            meetingId: null, // Example of a summary not directly tied to a scheduled meeting (e.g. uploaded recording)
            meetingTitle: "Ad-hoc Brainstorming Session",
            meetingDateTime: "2025-05-13T15:30:00Z",
            participants: ["Alex Johnson", "Sarah Miller"],
            keyPoints: [
                "Generated several new ideas for the upcoming hackathon.",
                "Decided to focus on AI-powered scheduling assistant."
            ],
            actionItems: [
                { description: "Research existing AI scheduling assistant tools", assignedTo: "Sarah Miller", dueDate: "2025-05-20T17:00:00Z" }
            ],
            fullTranscriptLink: "#",
            exportLink: "#"
        }
    ],
    tasks: [
        {
            id: "t1",
            title: "Finalize European market entry plan",
            dueDate: "2025-05-21T17:00:00Z",
            status: "pending",
            priority: "high",
            sourceMeetingId: "m1",
            sourceMeetingTitle: "Project Phoenix - Q3 Strategy",
            clientName: null,
            taskType: "individual",
            teamMembers: ["Sarah Miller"],
            completedTimestamp: null
        },
        {
            id: "t2",
            title: "Develop creative assets for social media campaign",
            dueDate: "2025-05-28T17:00:00Z",
            status: "pending",
            priority: "medium",
            sourceMeetingId: "m1",
            sourceMeetingTitle: "Project Phoenix - Q3 Strategy",
            clientName: null,
            taskType: "individual",
            teamMembers: ["David Lee"],
            completedTimestamp: null
        },
        {
            id: "t3",
            title: "Send follow-up email with training materials to Acme Corp",
            dueDate: "2025-05-15T17:00:00Z",
            status: "pending",
            priority: "high",
            sourceMeetingId: "m2",
            sourceMeetingTitle: "Client Onboarding - Acme Corp",
            clientName: "Acme Corp",
            taskType: "individual",
            teamMembers: ["Alex Johnson"],
            completedTimestamp: null
        },
        {
            id: "t4",
            title: "Assist Emily with data migration for Project Zeta",
            dueDate: "2025-05-17T17:00:00Z",
            status: "pending",
            priority: "medium",
            sourceMeetingId: "m3",
            sourceMeetingTitle: "Weekly Team Sync",
            clientName: "Internal Project Zeta",
            taskType: "team",
            teamMembers: ["David Lee", "Emily Carter"],
            completedTimestamp: null
        },
        {
            id: "t5",
            title: "Schedule follow-up: Project Phoenix stakeholders",
            dueDate: "2025-05-19T17:00:00Z",
            status: "pending",
            priority: "low",
            sourceMeetingId: "m3",
            sourceMeetingTitle: "Weekly Team Sync",
            clientName: null,
            taskType: "individual",
            teamMembers: ["Sarah Miller"],
            completedTimestamp: null
        },
        {
            id: "t6",
            title: "Communicate approved Q3 budget to department heads",
            dueDate: "2025-05-19T17:00:00Z",
            status: "pending",
            priority: "high",
            sourceMeetingId: "m5",
            sourceMeetingTitle: "Budget Review - Q3",
            clientName: null,
            taskType: "individual",
            teamMembers: ["Finance Head"],
            completedTimestamp: null
        },
        {
            id: "t7",
            title: "Set up trial accounts for Innovate Solutions",
            dueDate: "2025-05-20T17:00:00Z",
            status: "pending",
            priority: "medium",
            sourceMeetingId: "m7",
            sourceMeetingTitle: "Product Demo - Innovate Solutions",
            clientName: "Innovate Solutions",
            taskType: "individual",
            teamMembers: ["Sales Team Lead"],
            completedTimestamp: null
        },
        {
            id: "t8",
            title: "Research existing AI scheduling assistant tools",
            dueDate: "2025-05-20T17:00:00Z",
            status: "pending",
            priority: "low",
            sourceMeetingId: null, // From ad-hoc summary
            sourceMeetingTitle: "Ad-hoc Brainstorming Session",
            clientName: null,
            taskType: "individual",
            teamMembers: ["Sarah Miller"],
            completedTimestamp: null
        }
    ]
};

// Helper function to get current user (assuming single user for prototype)
function getCurrentUser() {
    return mockData.users[0];
}

// Helper function to get meetings for a specific date (for daily agenda)
function getMeetingsForDate(isoDateString) {
    const targetDate = new Date(isoDateString).toDateString();
    return mockData.meetings.filter(meeting => new Date(meeting.dateTime).toDateString() === targetDate);
}

// Helper function to get tasks (can be filtered by status, due date etc. later)
function getAllTasks() {
    return mockData.tasks;
}

// Helper function to get all summaries
function getAllSummaries() {
    return mockData.summaries;
}

// Example: Get today's meetings (assuming 'today' is when the script runs or a fixed date for prototype)
// const today = new Date().toISOString().split('T')[0] + 'T00:00:00Z';
// const todaysMeetings = getMeetingsForDate(today);
// console.log("Today's Meetings:", todaysMeetings);

