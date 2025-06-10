// Manus: Created task_list_script.js for NoteBuddy Prototype Task List Logic

document.addEventListener("DOMContentLoaded", () => {
    if (typeof mockData === "undefined") {
        console.error("mockData is not loaded. Make sure mock-data.js is included before this script.");
        return;
    }

    const taskListContainer = document.getElementById("taskListContainer");
    const filterTabs = document.querySelectorAll(".filter-tab");
    let currentFilter = "all"; // Default filter
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Normalize today to start of day for comparisons

    // --- Helper Functions ---
    function formatDate(dateString) {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    }
    
    function isOverdue(dueDateString) {
        if (!dueDateString) return false;
        const dueDate = new Date(dueDateString);
        return dueDate < today && !isToday(dueDateString); // Overdue if before today and not today
    }

    function isToday(dateString) {
        if (!dateString) return false;
        const date = new Date(dateString);
        return date.toDateString() === today.toDateString();
    }

    // --- Task Rendering ---
    function renderTasks() {
        if (!taskListContainer) return;
        taskListContainer.innerHTML = ""; // Clear existing tasks

        let filteredTasks = mockData.tasks;

        if (currentFilter === "all") {
            // Show all non-completed tasks first, then completed tasks if we decide to show them here
            // For now, 'all' means all *pending* tasks as per typical UX
            filteredTasks = mockData.tasks.filter(task => task.status !== "completed");
        } else if (currentFilter === "today") {
            filteredTasks = mockData.tasks.filter(task => task.status !== "completed" && isToday(task.dueDate));
        } else if (currentFilter === "upcoming") {
            filteredTasks = mockData.tasks.filter(task => {
                if (task.status === "completed" || !task.dueDate) return false;
                const dueDate = new Date(task.dueDate);
                return dueDate > today;
            });
        } else if (currentFilter === "completed") {
            filteredTasks = mockData.tasks.filter(task => task.status === "completed");
        }

        if (filteredTasks.length === 0) {
            taskListContainer.innerHTML = `<p style="text-align: center; padding: 20px; color: #6c6c70;">No tasks in this category.</p>`;
            return;
        }

        filteredTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)); // Sort by due date

        filteredTasks.forEach(task => {
            const card = document.createElement("div");
            card.className = "task-item-card";
            card.dataset.taskId = task.id;
            card.dataset.status = task.status;

            const checkbox = document.createElement("div");
            checkbox.className = "task-checkbox";
            checkbox.innerHTML = `<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`;
            if (task.status === "completed") {
                checkbox.classList.add("completed");
            }
            checkbox.addEventListener("click", (e) => {
                e.stopPropagation(); // Prevent card click from triggering
                toggleTaskStatus(task.id);
            });

            const details = document.createElement("div");
            details.className = "task-details";
            details.innerHTML = `
                <h4>${task.title}</h4>
                <p class="task-meta">
                    ${task.clientName ? `Client: ${task.clientName} &bull; ` : ""}
                    Type: ${task.taskType === "team" ? `Team (${task.teamMembers.join(", ")})` : "Individual"}
                </p>
                <p class="task-due-date ${isOverdue(task.dueDate) && task.status !== 'completed' ? "overdue" : ""}">
                    ${task.status === "completed" ? `Completed: ${formatDate(task.completedTimestamp)}` : `Due: ${formatDate(task.dueDate)}`}
                </p>
                <p class="task-source">From: ${task.sourceMeetingTitle || "N/A"}</p>
            `;

            const priorityDiv = document.createElement("div");
            priorityDiv.className = `task-priority ${task.priority || "low"}`;
            
            card.appendChild(checkbox);
            card.appendChild(details);
            card.appendChild(priorityDiv);

            // Card click can navigate to a detailed task view if implemented
            // card.addEventListener("click", () => console.log("Navigate to task details for", task.id));

            taskListContainer.appendChild(card);
        });
    }

    // --- Task Logic ---
    function toggleTaskStatus(taskId) {
        const task = mockData.tasks.find(t => t.id === taskId);
        if (task) {
            if (task.status === "completed") {
                task.status = "pending"; // Or derive original status if stored
                task.completedTimestamp = null;
            } else {
                task.status = "completed";
                task.completedTimestamp = new Date().toISOString();
            }
            renderTasks(); // Re-render tasks for the current filter
        }
    }

    // --- Filter Logic ---
    window.filterTasks = (selectedTab, filter) => {
        currentFilter = filter;
        filterTabs.forEach(tab => tab.classList.remove("active"));
        selectedTab.classList.add("active");
        renderTasks();
    };

    // Initial Render
    const initialActiveTab = document.querySelector(".filter-tab.active") || document.querySelector(".filter-tab");
    if(initialActiveTab) {
        currentFilter = initialActiveTab.textContent.toLowerCase();
         filterTabs.forEach(tab => tab.classList.remove("active"));
        initialActiveTab.classList.add("active");
    }
    renderTasks();
});

