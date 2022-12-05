const unread_notifications = document.querySelectorAll(".unread-notification");
const header_btn = document.querySelector(".header-btn");
const unread_msg_count = document.querySelector(".unread-msg-count");

let unread_messages = unread_notifications.length;

unread_msg_count.innerHTML = unread_messages;

header_btn.addEventListener("click", (e) => {
    unread_notifications.forEach((notification) => {
        notification.classList.remove("unread-notification");
    });
    unread_msg_count.innerHTML = "0";
});

unread_notifications.forEach((notification) => {
    notification.addEventListener("click", () => {
        notification.classList.remove("unread-notification");
        unread_messages = unread_messages - 1;
        unread_msg_count.innerHTML = `${unread_messages}`;
    });
});
