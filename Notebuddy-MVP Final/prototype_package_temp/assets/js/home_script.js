// Manus: Created home_script.js for NoteBuddy Prototype Home Screen Logic

document.addEventListener('DOMContentLoaded', () => {
    // Ensure mockData is loaded
    if (typeof mockData === 'undefined') {
        console.error("mockData is not loaded. Make sure mock-data.js is included before this script.");
        return;
    }

    const currentUser = mockData.users[0];
    // For prototype consistency, using a fixed "today" that has data in mockData
    const today = new Date("2025-05-14T00:00:00Z"); // Corresponds to m1, m2 in mockData

    // --- Helper Functions ---
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    }

    function formatTime(dateString) {
        const date = new Date(dateString);
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    }

    function formatDateTime(dateString) {
        const date = new Date(dateString);
        return `${date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}, ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
    }

    // --- Populate Header Avatar ---
    const avatarImg = document.getElementById('home-avatar-img');
    if (avatarImg) {
        // Path adjustment: HTML is in /home/ubuntu/, assets are in /home/ubuntu/notebuddy-clickable-prototype/assets/
        avatarImg.src = "notebuddy_clickable_prototype/" + currentUser.avatar.substring(2); // remove leading ./
        avatarImg.alt = currentUser.name + " avatar";
    }
    const avatarLink = document.getElementById('home-avatar-link');
    if(avatarLink) {
        avatarLink.href = "notebuddy_prototype_settings_page.html";
    }

    // --- Populate Today's Date in Schedule Header ---
    const todayDateSpan = document.getElementById('today-date-span');
    if (todayDateSpan) {
        todayDateSpan.textContent = ', ' + formatDate(today.toISOString());
    }

    // --- Populate Today's Schedule ---
    const scheduleContainer = document.getElementById('today-schedule-items');
    if (scheduleContainer) {
        scheduleContainer.innerHTML = ''; // Clear placeholder
        const todaysMeetings = mockData.meetings
            .filter(m => new Date(m.dateTime).toDateString() === today.toDateString())
            .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
        
        if (todaysMeetings.length === 0) {
            scheduleContainer.innerHTML = '<p style="padding: 0 20px; color: #6c6c70;">No meetings scheduled for today.</p>';
        }
        todaysMeetings.slice(0, 8).forEach(meeting => {
            const item = document.createElement('div');
            item.className = 'card schedule-item';
            item.innerHTML = `
                <div class="item-details">
                    <h4>${meeting.title}</h4>
                    <p>${formatTime(meeting.dateTime)} - ${meeting.with}</p>
                </div>
                <div class="item-info-button" data-meeting-id="${meeting.id}" role="button" aria-label="View meeting details"></div>
            `;
            scheduleContainer.appendChild(item);
            item.querySelector('.item-info-button').addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent card click if any
                openMeetingModal(meeting.id);
            });
            item.addEventListener('click', () => openMeetingModal(meeting.id)); // Click card to open modal
        });
    }

    // --- Populate Daily Agenda Timeline ---
    const agendaTimelineContainer = document.getElementById('agendaTimeline');
    if (agendaTimelineContainer) {
        agendaTimelineContainer.innerHTML = ''; // Clear placeholder
        const todaysMeetingsForAgenda = mockData.meetings
            .filter(m => new Date(m.dateTime).toDateString() === today.toDateString())
            .sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));

        if (todaysMeetingsForAgenda.length === 0) {
            agendaTimelineContainer.innerHTML = '<p style="padding: 0 20px; color: #6c6c70;">No events on the agenda for today.</p>';
        }
        todaysMeetingsForAgenda.forEach(meeting => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
                <div class="timeline-time">${formatTime(meeting.dateTime)}</div>
                <div class="timeline-event ${meeting.type === 'work' ? 'work' : 'personal'}" data-meeting-id="${meeting.id}">
                    <h5>${meeting.title}</h5>
                    <p>${meeting.with}</p>
                </div>
            `;
            agendaTimelineContainer.appendChild(item);
            item.querySelector('.timeline-event').addEventListener('click', () => openMeetingModal(meeting.id));
        });
    }

    // --- Populate Recent Summaries ---
    const summariesContainer = document.getElementById('recent-summaries-items');
    if (summariesContainer) {
        summariesContainer.innerHTML = ''; // Clear placeholder
        const recentSummaries = mockData.summaries.slice(0, 3); // Show first 3
        recentSummaries.forEach(summary => {
            const item = document.createElement('div');
            item.className = 'card';
            item.onclick = () => window.location.href = 'notebuddy_prototype_summary_view.html#${summary.id}';
            item.innerHTML = `
                <div class="summary-item-content">
                    <div class="summary-details">
                        <h4>${summary.meetingTitle}</h4>
                        <p class="summary-meta">${formatDateTime(summary.meetingDateTime)}</p>
                        <p class="summary-meta">Participants: ${summary.participants.join(', ')}</p>
                        ${summary.keyPoints && summary.keyPoints.length > 0 ? '<p><strong>Key Points:</strong></p><ul class="summary-key-points">
                            ${summary.keyPoints.slice(0,2).map(kp => `<li>${kp}</li>`).join('')}
                            ${summary.keyPoints.length > 2 ? '<li>...' : ''}
                        </ul>' : ''}
                        ${summary.actionItems && summary.actionItems.length > 0 ? '<p><strong>Action Items:</strong></p><ul class="summary-action-items">
                            ${summary.actionItems.slice(0,1).map(ai => `<li>${ai.description} (due ${formatDate(ai.dueDate)})</li>`).join('')}
                            ${summary.actionItems.length > 1 ? '<li>...' : ''}
                        </ul>' : ''}
                    </div>
                    <div class="item-icon"></div>
                </div>
            `;
            summariesContainer.appendChild(item);
        });
    }

    // --- Populate Tasks Overview ---
    const tasksOverviewContainer = document.getElementById('tasks-overview-items');
    if (tasksOverviewContainer) {
        tasksOverviewContainer.innerHTML = ''; // Clear placeholder
        const overviewTasks = mockData.tasks.filter(t => t.status === 'pending').slice(0, 8); // Show 8 pending tasks
        
        if (overviewTasks.length === 0) {
            tasksOverviewContainer.innerHTML = '<p style="padding: 0 20px; color: #6c6c70;">No pending tasks.</p>';
        }
        overviewTasks.forEach(task => {
            const item = document.createElement('div');
            item.className = 'card task-item'; // Assuming similar styling to schedule-item
            item.onclick = () => window.location.href = 'notebuddy_prototype_task_list.html#${task.id}';
            let taskMeta = `Due: ${formatDate(task.dueDate)}`;
            if (task.clientName) taskMeta += ` • Client: ${task.clientName}`;
            taskMeta += ` • ${task.taskType === 'team' ? 'Team Task' : 'Individual'}`;
            if (task.taskType === 'team' && task.teamMembers.length > 0) {
                taskMeta += ` (${task.teamMembers.join(', ')})`;
            }

            item.innerHTML = `
                <div class="item-details">
                    <h4>${task.title}</h4>
                    <p>${taskMeta}</p>
                </div>
                <div class="item-icon" style="background-color: ${task.priority === 'high' ? '#FF3B30' : task.priority === 'medium' ? '#FF9500' : '#34C759'};"></div>
            `;
            tasksOverviewContainer.appendChild(item);
        });
    }

    // --- Meeting Details Modal Logic ---
    const modal = document.getElementById("meetingDetailsModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalWith = document.getElementById("modalWith");
    const modalContext = document.getElementById("modalContext");
    const modalPreparation = document.getElementById("modalPreparation");
    const closeButton = document.querySelector(".modal .close-button");

    window.openMeetingModal = (meetingId) => {
        const meeting = mockData.meetings.find(m => m.id === meetingId);
        if (!meeting || !modal || !modalTitle || !modalWith || !modalContext || !modalPreparation) return;

        modalTitle.textContent = meeting.title;
        modalWith.innerHTML = `<strong>With:</strong> ${meeting.with}`;
        modalContext.innerHTML = `<strong>Context:</strong> ${meeting.context}`;
        
        let prepHtml = '<strong>Preparation Needed:</strong>';
        if (meeting.preparationNeeded && meeting.preparationNeeded.length > 0) {
            prepHtml += '<ul>' + meeting.preparationNeeded.map(p => `<li>${p}</li>`).join('') + '</ul>';
        } else {
            prepHtml += ' None';
        }
        modalPreparation.innerHTML = prepHtml;
        
        modal.style.display = "flex";
    };

    if (closeButton) {
        closeButton.onclick = () => {
            if(modal) modal.style.display = "none";
        };
    }
    if (modal) {
         modal.onclick = (event) => {
            if (event.target === modal) { // Click outside the modal content
                modal.style.display = "none";
            }
        };
    }
});

