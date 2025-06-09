// NoteBuddy Prototype Calendar View Logic with Weekly View
console.log("🟢 Calendar script loaded.");
document.addEventListener("DOMContentLoaded", () => {
    // Ensure mockData is loaded
    if (typeof mockData === "undefined") {
        console.error("mockData is not loaded. Make sure mock-data.js is included before this script.");
        return;
    }

    let currentView = "month"; // month, week, day
    let currentDate = new Date("2025-05-14T00:00:00Z"); // Initialize with a date that has mock data

    const calendarGrid = document.getElementById("calendarGrid");
    const currentMonthYearDisplay = document.getElementById("currentMonthYear");
    const eventListContainer = document.getElementById("event-list-items"); // Assuming an ID for event list
    const dailyViewContainer = document.getElementById("daily-view-container"); // Placeholder for daily view
    const weeklyViewContainer = document.getElementById("weekly-view-container"); // Container for weekly view

    const monthViewBtn = document.getElementById("month-view-btn");
    const weekViewBtn = document.getElementById("week-view-btn");
    const dayViewBtn = document.getElementById("day-view-btn");

    const prevButton = document.querySelector(".nav-arrow:first-of-type");
    const nextButton = document.querySelector(".nav-arrow:last-of-type");
    const todayButton = document.querySelector(".today-icon");

    // --- Helper Functions ---
    function formatDate(date) {
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }

    function formatTime(dateString) {
        const date = new Date(dateString);
        return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
    }
    
    function getDaysInMonth(year, month) {
        return new Date(year, month + 1, 0).getDate();
    }

    function getFirstDayOfMonth(year, month) {
        let day = new Date(year, month, 1).getDay();
        return day === 0 ? 6 : day - 1; // 0 (Mon) - 6 (Sun)
    }

    // --- Event Fetching ---
    function getEventsForDate(date) {
        const dateString = date.toDateString();
        const meetings = mockData.meetings.filter(m => new Date(m.dateTime).toDateString() === dateString);
        const tasks = mockData.tasks.filter(t => new Date(t.dueDate).toDateString() === dateString);
        return [...meetings, ...tasks].sort((a,b) => new Date(a.dateTime || a.dueDate) - new Date(b.dateTime || b.dueDate));
    }
    
    function getEventsForPeriod(startDate, endDate) {
        const start = new Date(startDate);
        start.setHours(0,0,0,0);
        const end = new Date(endDate);
        end.setHours(23,59,59,999);

        const meetings = mockData.meetings.filter(m => {
            const meetingDate = new Date(m.dateTime);
            return meetingDate >= start && meetingDate <= end;
        });
        const tasks = mockData.tasks.filter(t => {
            const taskDate = new Date(t.dueDate);
            return taskDate >= start && taskDate <= end;
        });
        return [...meetings, ...tasks].sort((a,b) => new Date(a.dateTime || a.dueDate) - new Date(b.dateTime || b.dueDate));
    }

    // --- Render Functions ---
    function renderMonthView() {
        if (!calendarGrid || !currentMonthYearDisplay) return;
        calendarGrid.innerHTML = ''; // Clear previous grid
        if(dailyViewContainer) dailyViewContainer.style.display = 'none';
        if(weeklyViewContainer) weeklyViewContainer.style.display = 'none';
        calendarGrid.style.display = 'grid';
        if(eventListContainer) eventListContainer.innerHTML = ''; // Clear event list for month view initially

        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        currentMonthYearDisplay.textContent = `${currentDate.toLocaleDateString('en-US', { month: 'long' })} ${year}`;

        const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        dayNames.forEach(name => {
            const dayNameCell = document.createElement('div');
            dayNameCell.className = 'day-name';
            dayNameCell.textContent = name;
            calendarGrid.appendChild(dayNameCell);
        });

        const firstDay = getFirstDayOfMonth(year, month);
        const daysInMonth = getDaysInMonth(year, month);
        const today = new Date();

        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDay; i++) {
            const emptyCell = document.createElement('div');
            emptyCell.className = 'date-cell other-month';
            calendarGrid.appendChild(emptyCell);
        }

        // Add cells for each day of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dateCell = document.createElement('div');
            dateCell.className = 'date-cell';
            dateCell.textContent = day;
            const cellDate = new Date(year, month, day);

            if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dateCell.classList.add('today');
            }
            if (day === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear() && currentView === 'month') {
                dateCell.classList.add('selected');
            }

            const eventsOnDay = getEventsForDate(cellDate);
            if (eventsOnDay.length > 0) {
                const eventDot = document.createElement('span');
                eventDot.className = 'event-dot';
                dateCell.appendChild(eventDot);
            }

            dateCell.addEventListener('click', () => {
                document.querySelectorAll('.date-cell').forEach(cell => cell.classList.remove('selected'));
                dateCell.classList.add('selected');
                currentDate = new Date(year, month, day);
                renderEventListForDate(currentDate);
            });
            calendarGrid.appendChild(dateCell);
        }
        
        // Add event list for the initially selected day of the month (or current day)
        renderEventListForDate(currentDate);
    }

    function renderWeekView() {
        if (!weeklyViewContainer || !currentMonthYearDisplay) return;
        weeklyViewContainer.innerHTML = '';
        if(calendarGrid) calendarGrid.style.display = 'none';
        if(dailyViewContainer) dailyViewContainer.style.display = 'none';
        weeklyViewContainer.style.display = 'block';
        if(eventListContainer) eventListContainer.innerHTML = '';

        // Get the current week's start and end dates
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const day = currentDate.getDate();

        // Get the day of the week (0 = Sunday, 1 = Monday, etc.)
        let currentDayOfWeek = currentDate.getDay();
        // Adjust for Monday as first day of week
        if (currentDayOfWeek === 0) currentDayOfWeek = 7;
        
        // Calculate the start date (Monday) and end date (Sunday) of the current week
        const startDate = new Date(year, month, day - currentDayOfWeek + 1);
        const endDate = new Date(year, month, day + (7 - currentDayOfWeek));

        // Update the header to show the week range
        currentMonthYearDisplay.textContent = `${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
        
        // Create the weekly view container
        const weeklyGrid = document.createElement('div');
        weeklyGrid.className = 'weekly-grid';
        
        // Add day headers
        const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        const dayDates = [];
        
        // Create day headers with dates
        const headerRow = document.createElement('div');
        headerRow.className = 'weekly-header-row';
        
        for (let i = 0; i < 7; i++) {
            const dayDate = new Date(startDate);
            dayDate.setDate(startDate.getDate() + i);
            dayDates.push(dayDate);
            
            const dayHeader = document.createElement('div');
            dayHeader.className = 'weekly-day-header';
            
            const dayNameSpan = document.createElement('span');
            dayNameSpan.className = 'weekly-day-name';
            dayNameSpan.textContent = dayNames[i];
            
            const dayNumberSpan = document.createElement('span');
            dayNumberSpan.className = 'weekly-day-number';
            if (dayDate.toDateString() === new Date().toDateString()) {
                dayNumberSpan.classList.add('today');
            }
            dayNumberSpan.textContent = dayDate.getDate();
            
            dayHeader.appendChild(dayNameSpan);
            dayHeader.appendChild(dayNumberSpan);
            headerRow.appendChild(dayHeader);
        }
        
        weeklyGrid.appendChild(headerRow);
        
        // Create content rows for each day with events
        const contentRow = document.createElement('div');
        contentRow.className = 'weekly-content-row';
        
        for (let i = 0; i < 7; i++) {
            const dayEvents = getEventsForDate(dayDates[i]);
            const dayColumn = document.createElement('div');
            dayColumn.className = 'weekly-day-column';
            
            if (dayEvents.length === 0) {
                const emptyIndicator = document.createElement('div');
                emptyIndicator.className = 'weekly-empty-day';
                dayColumn.appendChild(emptyIndicator);
            } else {
                dayEvents.forEach(event => {
                    const eventItem = document.createElement('div');
                    eventItem.className = 'weekly-event-item';
                    
                    // Add appropriate class based on event type
                    if (event.dateTime) {
                        eventItem.classList.add('meeting-event');
                    } else {
                        eventItem.classList.add('task-event');
                        if (event.priority) {
                            eventItem.classList.add(`priority-${event.priority}`);
                        }
                    }
                    
                    const eventTitle = document.createElement('div');
                    eventTitle.className = 'weekly-event-title';
                    eventTitle.textContent = event.title;
                    
                    const eventTime = document.createElement('div');
                    eventTime.className = 'weekly-event-time';
                    if (event.dateTime) {
                        eventTime.textContent = formatTime(event.dateTime);
                    } else {
                        eventTime.textContent = 'Due: ' + formatTime(event.dueDate);
                    }
                    
                    eventItem.appendChild(eventTitle);
                    eventItem.appendChild(eventTime);
                    
                    // Add click event to navigate to details
                    eventItem.addEventListener('click', () => {
                        if (event.dateTime) {
                            window.location.href = 'notebuddy_prototype_summary_view.html';
                        } else {
                            window.location.href = 'notebuddy_prototype_task_list.html';
                        }
                    });
                    
                    dayColumn.appendChild(eventItem);
                });
            }
            
            contentRow.appendChild(dayColumn);
        }
        
        weeklyGrid.appendChild(contentRow);
        weeklyViewContainer.appendChild(weeklyGrid);
    }

    function renderDayView() {
        if (!dailyViewContainer || !currentMonthYearDisplay) return;
        dailyViewContainer.innerHTML = '';
        if(calendarGrid) calendarGrid.style.display = 'none';
        if(weeklyViewContainer) weeklyViewContainer.style.display = 'none';
        dailyViewContainer.style.display = 'block';
        if(eventListContainer) eventListContainer.innerHTML = '';

        currentMonthYearDisplay.textContent = formatDate(currentDate);
        
        const dayEvents = getEventsForDate(currentDate);
        renderEventList(dayEvents, dailyViewContainer, "Today's Agenda");
    }
    
    function renderEventList(events, container, title) {
        container.innerHTML = ''; // Clear previous content
        const titleEl = document.createElement('h3');
        titleEl.textContent = title;
        container.appendChild(titleEl);

        if (events.length === 0) {
            const noEventsMsg = document.createElement('p');
            noEventsMsg.textContent = 'No events or tasks.';
            noEventsMsg.style.padding = "0 16px";
            noEventsMsg.style.color = "#6c6c70";
            container.appendChild(noEventsMsg);
            return;
        }

        events.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.className = 'event-card'; // Use existing styling
            const eventDetails = document.createElement('div');
            eventDetails.className = 'event-details';
            const eventTitle = document.createElement('h4');
            eventTitle.textContent = event.title;
            const eventTimeP = document.createElement('p');
            
            let itemTime = '';
            if (event.dateTime) { // It's a meeting
                itemTime = formatTime(event.dateTime);
                if(event.with) eventTimeP.textContent = `With: ${event.with}`;
            } else { // It's a task
                itemTime = formatTime(event.dueDate);
                if(event.clientName) eventTimeP.textContent = `Client: ${event.clientName}`;
                else if(event.teamMembers) eventTimeP.textContent = `Team: ${event.teamMembers.join(', ')}`;
            }

            eventDetails.appendChild(eventTitle);
            eventDetails.appendChild(eventTimeP);

            const timeDisplay = document.createElement('div');
            timeDisplay.className = 'event-time'; 
            timeDisplay.textContent = itemTime;

            eventCard.appendChild(eventDetails);
            eventCard.appendChild(timeDisplay);
            container.appendChild(eventCard);
        });
    }

    function renderEventListForDate(date) {
        if (!eventListContainer) return;
        const events = getEventsForDate(date);
        renderEventList(events, eventListContainer, `Events for ${formatDate(date)}`);
    }

    // --- UI Updates ---
    function updateActiveButton(activeButton) {
        [monthViewBtn, weekViewBtn, dayViewBtn].forEach(btn => {
            if(btn) btn.classList.remove('active');
        });
        if(activeButton) activeButton.classList.add('active');
    }

    function switchView(view) {
        currentView = view;
        switch (view) {
            case "month":
                updateActiveButton(monthViewBtn);
                renderMonthView();
                break;
            case "week":
                updateActiveButton(weekViewBtn);
                renderWeekView();
                break;
            case "day":
                updateActiveButton(dayViewBtn);
                renderDayView();
                break;
        }
    }

    // --- Event Listeners ---
    if (monthViewBtn) monthViewBtn.addEventListener('click', () => switchView('month'));
    if (weekViewBtn) weekViewBtn.addEventListener('click', () => switchView('week'));
    if (dayViewBtn) dayViewBtn.addEventListener('click', () => switchView('day'));

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            if (currentView === 'month') {
                currentDate.setMonth(currentDate.getMonth() - 1);
            } else if (currentView === 'week') {
                currentDate.setDate(currentDate.getDate() - 7);
            } else {
                currentDate.setDate(currentDate.getDate() - 1);
            }
            switchView(currentView);
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            if (currentView === 'month') {
                currentDate.setMonth(currentDate.getMonth() + 1);
            } else if (currentView === 'week') {
                currentDate.setDate(currentDate.getDate() + 7);
            } else {
                currentDate.setDate(currentDate.getDate() + 1);
            }
            switchView(currentView);
        });
    }

    if (todayButton) {
        todayButton.addEventListener('click', () => {
            currentDate = new Date(); // Reset to actual today
            // If today has mock data, use that for consistency in prototype
            if (mockData.meetings.some(m => new Date(m.dateTime).toDateString() === currentDate.toDateString()) || 
                mockData.tasks.some(t => new Date(t.dueDate).toDateString() === currentDate.toDateString())) {
                 // Keep actual today
            } else {
                currentDate = new Date("2025-05-14T00:00:00Z"); // Fallback to a date with data
            }
            switchView(currentView);
        });
    }

    // Initial Render
    switchView(currentView);
});
