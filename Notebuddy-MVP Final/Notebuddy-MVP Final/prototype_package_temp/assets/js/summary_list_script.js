// Manus: Created summary_list_script.js for NoteBuddy Prototype Summary List View Logic

document.addEventListener("DOMContentLoaded", () => {
    if (typeof mockData === "undefined" || typeof mockData.summaries === "undefined") {
        console.error("mockData or mockData.summaries is not loaded. Make sure mock-data.js is included before this script.");
        return;
    }

    const summariesContainer = document.getElementById("allSummariesContainer");
    const searchInput = document.getElementById("summarySearchInput");

    // --- Helper Functions ---
    function formatDateTime(dateString) {
        const date = new Date(dateString);
        return `${date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} • ${date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}`;
    }

    // --- Summary Rendering ---
    function renderSummaries(filterText = "") {
        if (!summariesContainer) return;
        summariesContainer.innerHTML = ""; // Clear existing summaries

        const filteredSummaries = mockData.summaries.filter(summary => {
            const searchText = filterText.toLowerCase();
            return summary.meetingTitle.toLowerCase().includes(searchText) ||
                   (summary.participants && summary.participants.join(", ").toLowerCase().includes(searchText)) ||
                   (summary.keyPoints && summary.keyPoints.join(", ").toLowerCase().includes(searchText)) ||
                   (summary.actionItems && summary.actionItems.map(ai => ai.description).join(", ").toLowerCase().includes(searchText));
        }).sort((a, b) => new Date(b.meetingDateTime) - new Date(a.meetingDateTime)); // Sort by most recent first

        if (filteredSummaries.length === 0) {
            summariesContainer.innerHTML = `<p style="text-align: center; padding: 20px; color: #6c6c70;">No summaries found${filterText ? " matching your search" : ""}.</p>`;
            return;
        }

        filteredSummaries.forEach(summary => {
            const card = document.createElement("div");
            card.className = "summary-card";
            // card.onclick = () => alert(`View Details: ${summary.meetingTitle} - Mock.`); // Or navigate to a detailed view if one exists

            let participantsHTML = "";
            if (summary.participants && summary.participants.length > 0) {
                participantsHTML = `<div class="summary-section">
                                      <h4>Participants:</h4>
                                      <p>${summary.participants.join(", ")}</p>
                                  </div>`;
            }

            let keyPointsHTML = "";
            if (summary.keyPoints && summary.keyPoints.length > 0) {
                keyPointsHTML = `<div class="summary-section">
                                    <h4>Key Points:</h4>
                                    <ul>${summary.keyPoints.map(kp => `<li>${kp}</li>`).join("")}</ul>
                                 </div>`;
            }

            let actionItemsHTML = "";
            if (summary.actionItems && summary.actionItems.length > 0) {
                actionItemsHTML = `<div class="summary-section">
                                     <h4>Action Items:</h4>
                                     <ul>${summary.actionItems.map(ai => `<li>${ai.description} (Assigned: ${ai.assignedTo}, Due: ${new Date(ai.dueDate).toLocaleDateString()})</li>`).join("")}</ul>
                                   </div>`;
            }

            card.innerHTML = `
                <div class="summary-header">
                    <div class="summary-header-icon"></div>
                    <div class="summary-title-section">
                        <h3>${summary.meetingTitle}</h3>
                        <p>${formatDateTime(summary.meetingDateTime)}</p>
                    </div>
                </div>
                ${participantsHTML}
                ${keyPointsHTML}
                ${actionItemsHTML}
                <div class="summary-actions">
                    <button class="view-details-btn" onclick="alert('View Full Transcript for ${summary.meetingTitle.replace(/'/g, "\\'")} - Mock')">View Full Transcript</button>
                    <button class="export-btn" onclick="alert('Export Options for ${summary.meetingTitle.replace(/'/g, "\\'")} - Mock')">Export</button>
                </div>
            `;
            summariesContainer.appendChild(card);
        });
    }

    // --- Event Listeners ---
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            renderSummaries(e.target.value);
        });
    }

    // Initial Render
    renderSummaries();
});

