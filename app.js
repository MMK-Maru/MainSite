document.addEventListener("DOMContentLoaded", function() {
    // 계정 생성 기능
    const accountForm = document.getElementById("account-form");
    const accountList = document.getElementById("account-list");

    accountForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const newAccount = document.createElement("div");
        newAccount.classList.add("account-item");
        newAccount.innerHTML = `<p>${username} - ${password}</p>`;
        accountList.appendChild(newAccount);

        // 입력값 초기화
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    });

    // 광고 관리 기능
    const adsForm = document.getElementById("ads-form");
    const adsList = document.getElementById("ads-list");

    adsForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const adName = document.getElementById("ad-name").value;
        const adUrl = document.getElementById("ad-url").value;

        const newAd = document.createElement("div");
        newAd.classList.add("ad-item");
        newAd.innerHTML = `<p>${adName} - <a href="${adUrl}" target="_blank">${adUrl}</a></p>`;
        adsList.appendChild(newAd);

        // 입력값 초기화
        document.getElementById("ad-name").value = "";
        document.getElementById("ad-url").value = "";
    });

    // 순위 조회 기능
    const rankingButton = document.getElementById("view-rankings");
    const rankingTableBody = document.querySelector("#ranking-table tbody");

    rankingButton.addEventListener("click", function() {
        const rankings = [
            { rank: 1, name: "사용자1", score: 500 },
            { rank: 2, name: "사용자2", score: 450 },
        ];

        rankingTableBody.innerHTML = ""; // 기존 데이터 삭제

        rankings.forEach(user => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${user.rank}</td><td>${user.name}</td><td>${user.score}</td>`;
            rankingTableBody.appendChild(row);
        });
    });

    // 로그 관리 기능
    const logSearchInput = document.getElementById("log-search");
    const filterLogsButton = document.getElementById("filter-logs");
    const logTableBody = document.querySelector("#log-table tbody");

    const logs = [
        { userId: "user1", type: "login", content: "Logged in", timestamp: "2023-01-01" },
        { userId: "user2", type: "create", content: "Created an ad", timestamp: "2023-02-01" }
    ];

    filterLogsButton.addEventListener("click", function() {
        const search = logSearchInput.value;

        const filteredLogs = logs.filter(log => log.content.includes(search));

        logTableBody.innerHTML = ""; // 기존 로그 삭제

        filteredLogs.forEach(log => {
            const row = document.createElement("tr");
            row.innerHTML = `<td>${log.userId}</td><td>${log.type}</td><td>${log.content}</td><td>${log.timestamp}</td>`;
            logTableBody.appendChild(row);
        });
    });

    // 공지사항 관리 기능
    const announcementForm = document.getElementById("announcement-form");
    const announcementList = document.getElementById("announcement-list");

    announcementForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const title = document.getElementById("announcement-title").value;
        const content = document.getElementById("announcement-content").value;

        const newAnnouncement = document.createElement("div");
        newAnnouncement.classList.add("announcement-item");
        newAnnouncement.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
        announcementList.appendChild(newAnnouncement);

        // 입력값 초기화
        document.getElementById("announcement-title").value = "";
        document.getElementById("announcement-content").value = "";
    });
});
