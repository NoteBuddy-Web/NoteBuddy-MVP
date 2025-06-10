// Enhanced Mock Data for NoteBuddy Prototype with improved project linking

const mockData = {
    users: [
        {
            id: "user1",
            name: "Alex Johnson",
            email: "alex.johnson@example.com",
            avatar: "./assets/images/avatar-placeholder.png" // Assuming a placeholder avatar
        }
    ],
    projects: [
        {
            id: "p1",
            name: "Project Phoenix",
            description: "Q3 marketing strategy and European market expansion",
            clientName: null,
            isInternal: true,
            teamMembers: ["Sarah Miller", "David Lee", "Alex Johnson"],
            relatedMeetings: ["m1", "m3"],
            relatedTasks: ["t1", "t2", "t5"]
        },
        {
            id: "p2",
            name: "Acme Corp Onboarding",
            description: "New client onboarding and training",
            clientName: "Acme Corp",
            isInternal: false,
            teamMembers: ["Alex Johnson", "Laura Chen (Acme)", "Tom Baker (Acme)"],
            relatedMeetings: ["m2"],
            relatedTasks: ["t3"]
        },
        {
            id: "p3",
            name: "Project Zeta",
            description: "Internal data migration project",
            clientName: "Internal Project Zeta",
            isInternal: true,
            teamMembers: ["David Lee", "Emily Carter"],
            relatedMeetings: ["m3"],
            relatedTasks: ["t4"]
        },
        {
            id: "p4",
            name: "Q3 Budget Planning",
            description: "Financial planning and budget allocation for Q3",
            clientName: null,
            isInternal: true,
            teamMembers: ["Alex Johnson", "Finance Head", "CEO"],
            relatedMeetings: ["m5"],
            relatedTasks: ["t6"]
        },
        {
            id: "p5",
            name: "Innovate Solutions",
            description: "Product demo and trial setup for potential client",
            clientName: "Innovate Solutions",
            isInternal: false,
            teamMembers: ["Alex Johnson", "Sales Team Lead"],
            relatedMeetings: ["m7"],
            relatedTasks: ["t7"]
        },
        {
            id: "p6",
            name: "Hackathon Planning",
            description: "AI-powered scheduling assistant project",
            clientName: null,
            isInternal: true,
            teamMembers: ["Alex Johnson", "Sarah Miller"],
            relatedMeetings: [],
            relatedTasks: ["t8"]
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
            projectId: "p1",
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
            projectId: "p2",
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
            projectId: null, // Cross-project meeting
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
            projectId: null,
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
            projectId: "p4",
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
            projectId: null,
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
            projectId: "p5",
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
            projectId: null,
            summaryId: null,
            tasksGenerated: []
        }
    ],
    summaries: [
        {
            id: "s1",
            meetingId: "m1",
            projectId: "p1",
            meetingTitle: "Project Phoenix - Q3 Strategy",
            meetingDateTime: "2025-05-14T10:00:00Z",
            participants: ["Sarah Miller", "David Lee", "Alex Johnson"],
            keyPoints: [
                "Q2 revenue exceeded targets by 15%.",
                "Focus for Q3 will be on expanding to new European markets.",
                "New social media campaign to launch mid-July."
            ],
            actionItems: [
                { 
                    id: "ai1",
                    description: "Finalize European market entry plan", 
                    assignedTo: "Sarah Miller", 
                    dueDate: "2025-05-21T17:00:00Z",
                    relatedTaskId: "t1",
                    projectId: "p1"
                },
                { 
                    id: "ai2",
                    description: "Develop creative assets for social media campaign", 
                    assignedTo: "David Lee", 
                    dueDate: "2025-05-28T17:00:00Z",
                    relatedTaskId: "t2",
                    projectId: "p1"
                }
            ],
            fullTranscriptLink: "#",
            exportLink: "#"
        },
        {
            id: "s2",
            meetingId: "m2",
            projectId: "p2",
            meetingTitle: "Client Onboarding - Acme Corp",
            meetingDateTime: "2025-05-14T14:00:00Z",
            participants: ["Alex Johnson", "Laura Chen (Acme)", "Tom Baker (Acme)"],
            keyPoints: [
                "Acme Corp excited to start using NoteBuddy.",
                "Initial training session scheduled for next Monday.",
                "Key contacts established on both sides."
            ],
            actionItems: [
                { 
                    id: "ai3",
                    description: "Send follow-up email with training materials to Acme Corp", 
                    assignedTo: "Alex Johnson", 
                    dueDate: "2025-05-15T17:00:00Z",
                    relatedTaskId: "t3",
                    projectId: "p2"
                }
            ],
            fullTranscriptLink: "#",
            exportLink: "#"
        },
        {
            id: "s3",
            meetingId: "m3",
            projectId: null, // Cross-project meeting
            meetingTitle: "Weekly Team Sync",
            meetingDateTime: "2025-05-15T09:00:00Z",
            participants: ["Alex Johnson", "Sarah Miller", "David Lee", "Emily Carter"],
            keyPoints: [
                "Project Phoenix on track.",
                "Client Acme Corp onboarding going smoothly.",
                "Emily needs assistance with data migration task."
            ],
            actionItems: [
                { 
                    id: "ai4",
                    description: "Assist Emily with data migration for Project Zeta", 
                    assignedTo: "David Lee", 
                    dueDate: "2025-05-17T17:00:00Z",
                    relatedTaskId: "t4",
                    projectId: "p3"
                },
                { 
                    id: "ai5",
                    description: "Schedule a follow-up meeting with Project Phoenix stakeholders", 
                    assignedTo: "Sarah Miller", 
                    dueDate: "2025-05-19T17:00:00Z",
                    relatedTaskId: "t5",
                    projectId: "p1"
                }
            ],
            fullTranscriptLink: "#",
            exportLink: "#"
        },
        {
            id: "s4",
            meetingId: "m5",
            projectId: "p4",
            meetingTitle: "Budget Review - Q3",
            meetingDateTime: "2025-05-16T11:00:00Z",
            participants: ["Alex Johnson", "Finance Head", "CEO"],
            keyPoints: [
                "Overall budget for Q3 approved with minor adjustments.",
                "Marketing budget increased by 5%.",
                "R&D to provide detailed spending plan for new initiatives."
            ],
            actionItems: [
                { 
                    id: "ai6",
                    description: "Communicate approved Q3 budget to department heads", 
                    assignedTo: "Finance Head", 
                    dueDate: "2025-05-19T17:00:00Z",
                    relatedTaskId: "t6",
                    projectId: "p4"
                }
            ],
            fullTranscriptLink: "#",
            exportLink: "#"
        },
        {
            id: "s5",
            meetingId: "m7",
            projectId: "p5",
            meetingTitle: "Product Demo - Innovate Solutions",
            meetingDateTime: "2025-05-17T13:00:00Z",
            participants: ["Alex Johnson", "Sales Team Lead", "Innovate Solutions Reps"],
            keyPoints: [
                "Innovate Solutions impressed with transcription accuracy and summarization.",
                "Requested a trial account for 5 users.",
                "Follow-up call scheduled for next week to discuss pricing."
            ],
            actionItems: [
                { 
                    id: "ai7",
                    description: "Set up trial accounts for Innovate Solutions", 
                    assignedTo: "Sales Team Lead", 
                    dueDate: "2025-05-20T17:00:00Z",
                    relatedTaskId: "t7",
                    projectId: "p5"
                }
            ],
            fullTranscriptLink: "#",
            exportLink: "#"
        },
        {
            id: "s6",
            meetingId: null, // Example of a summary not directly tied to a scheduled meeting (e.g. uploaded recording)
            projectId: "p6",
            meetingTitle: "Ad-hoc Brainstorming Session",
            meetingDateTime: "2025-05-13T15:30:00Z",
            participants: ["Alex Johnson", "Sarah Miller"],
            keyPoints: [
                "Generated several new ideas for the upcoming hackathon.",
                "Decided to focus on AI-powered scheduling assistant."
            ],
            actionItems: [
                { 
                    id: "ai8",
                    description: "Research existing AI scheduling assistant tools", 
                    assignedTo: "Sarah Miller", 
                    dueDate: "2025-05-20T17:00:00Z",
                    relatedTaskId: "t8",
                    projectId: "p6"
                }
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
            projectId: "p1",
            clientName: null,
            taskType: "individual",
            teamMembers: ["Sarah Miller"],
            completedTimestamp: null,
            relatedActionItemId: "ai1",
            isUncategorized: false
        },
        {
            id: "t2",
            title: "Develop creative assets for social media campaign",
            dueDate: "2025-05-28T17:00:00Z",
            status: "pending",
            priority: "medium",
            sourceMeetingId: "m1",
            sourceMeetingTitle: "Project Phoenix - Q3 Strategy",
            projectId: "p1",
            clientName: null,
            taskType: "individual",
            teamMembers: ["David Lee"],
            completedTimestamp: null,
            relatedActionItemId: "ai2",
            isUncategorized: false
        },
        {
            id: "t3",
            title: "Send follow-up email with training materials to Acme Corp",
            dueDate: "2025-05-15T17:00:00Z",
            status: "pending",
            priority: "high",
            sourceMeetingId: "m2",
            sourceMeetingTitle: "Client Onboarding - Acme Corp",
            projectId: "p2",
            clientName: "Acme Corp",
            taskType: "individual",
            teamMembers: ["Alex Johnson"],
            completedTimestamp: null,
            relatedActionItemId: "ai3",
            isUncategorized: false
        },
        {
            id: "t4",
            title: "Assist Emily with data migration for Project Zeta",
            dueDate: "2025-05-17T17:00:00Z",
            status: "pending",
            priority: "medium",
            sourceMeetingId: "m3",
            sourceMeetingTitle: "Weekly Team Sync",
            projectId: "p3",
            clientName: "Internal Project Zeta",
            taskType: "team",
            teamMembers: ["David Lee", "Emily Carter"],
            completedTimestamp: null,
            relatedActionItemId: "ai4",
            isUncategorized: false
        },
        {
            id: "t5",
            title: "Schedule follow-up: Project Phoenix stakeholders",
            dueDate: "2025-05-19T17:00:00Z",
            status: "pending",
            priority: "low",
            sourceMeetingId: "m3",
            sourceMeetingTitle: "Weekly Team Sync",
            projectId: "p1",
            clientName: null,
            taskType: "individual",
            teamMembers: ["Sarah Miller"],
            completedTimestamp: null,
            relatedActionItemId: "ai5",
            isUncategorized: false
        },
        {
            id: "t6",
            title: "Communicate approved Q3 budget to department heads",
            dueDate: "2025-05-19T17:00:00Z",
            status: "pending",
            priority: "high",
            sourceMeetingId: "m5",
            sourceMeetingTitle: "Budget Review - Q3",
            projectId: "p4",
            clientName: null,
            taskType: "individual",
            teamMembers: ["Finance Head"],
            completedTimestamp: null,
            relatedActionItemId: "ai6",
            isUncategorized: false
        },
        {
            id: "t7",
            title: "Set up trial accounts for Innovate Solutions",
            dueDate: "2025-05-20T17:00:00Z",
            status: "pending",
            priority: "medium",
            sourceMeetingId: "m7",
            sourceMeetingTitle: "Product Demo - Innovate Solutions",
            projectId: "p5",
            clientName: "Innovate Solutions",
            taskType: "individual",
            teamMembers: ["Sales Team Lead"],
            completedTimestamp: null,
            relatedActionItemId: "ai7",
            isUncategorized: false
        },
        {
            id: "t8",
            title: "Research existing AI scheduling assistant tools",
            dueDate: "2025-05-20T17:00:00Z",
            status: "pending",
            priority: "low",
            sourceMeetingId: null, // From ad-hoc summary
            sourceMeetingTitle: "Ad-hoc Brainstorming Session",
            projectId: "p6",
            clientName: null,
            taskType: "individual",
            teamMembers: ["Sarah Miller"],
            completedTimestamp: null,
            relatedActionItemId: "ai8",
            isUncategorized: false
        },
        {
            id: "t9",
            title: "Buy birthday gift for mom",
            dueDate: "2025-05-22T17:00:00Z",
            status: "pending",
            priority: "medium",
            sourceMeetingId: null,
            sourceMeetingTitle: null,
            projectId: null,
            clientName: null,
            taskType: "individual",
            teamMembers: ["Alex Johnson"],
            completedTimestamp: null,
            relatedActionItemId: null,
            isUncategorized: true
        },
        {
            id: "t10",
            title: "Schedule quarterly team building activity",
            dueDate: "2025-05-25T17:00:00Z",
            status: "pending",
            priority: "low",
            sourceMeetingId: null,
            sourceMeetingTitle: null,
            projectId: null,
            clientName: null,
            taskType: "individual",
            teamMembers: ["Alex Johnson"],
            completedTimestamp: null,
            relatedActionItemId: null,
            isUncategorized: true
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

// Helper function to get all projects
function getAllProjects() {
    return mockData.projects;
}

// Helper function to get tasks for a specific project
function getTasksByProject(projectId) {
    if (!projectId) {
        return mockData.tasks.filter(task => task.isUncategorized);
    }
    return mockData.tasks.filter(task => task.projectId === projectId);
}

// Helper function to get tasks related to a specific summary
function getTasksBySummary(summaryId) {
    const summary = mockData.summaries.find(s => s.id === summaryId);
    if (!summary) return [];
    
    return mockData.tasks.filter(task => 
        summary.actionItems.some(ai => ai.relatedTaskId === task.id)
    );
}

// Helper function to get uncategorized tasks
function getUncategorizedTasks() {
    return mockData.tasks.filter(task => task.isUncategorized);
}
