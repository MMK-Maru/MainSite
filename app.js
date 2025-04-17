document.addEventListener("DOMContentLoaded", function() {
    console.log("웹사이트가 로드되었습니다!");

    // 슬롯 관리 기능 예시
    const slotManagement = document.getElementById("slot-management");
    slotManagement.innerHTML += "<p>슬롯 추가 기능이 여기 포함됩니다.</p>";

    // 로그 관리 기능 예시
    const logManagement = document.getElementById("log-management");
    logManagement.innerHTML += "<p>로그 관리 기능이 여기 포함됩니다.</p>";
});
