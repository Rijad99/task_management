const svgIcons = {
    homeIconPath: "M9.1,20.8v-3.1c0-0.8,0.6-1.4,1.4-1.4h2.9c0.8,0,1.4,0.6,1.4,1.4v3.1c0,0.7,0.5,1.2,1.2,1.2h2c0.9,0,1.8-0.4,2.4-1s1-1.5,1-2.4V9.9c0-0.7-0.3-1.4-0.9-1.9l-6.7-5.3c-1.2-0.9-2.8-0.9-4,0.1L3.5,8c-0.6,0.5-0.9,1.2-1,1.9v8.7C2.5,20.5,4,22,6,22h1.9c0.3,0,0.6-0.1,0.9-0.4C9,21.4,9.1,21.1,9.1,20.8L9.1,20.8z",
    dasboardIconPath: "M15.2,4.7c0,2.2,1.8,4,4,4c0.2,0,0.5,0,0.7-0.1v8c0,3.4-2,5.3-5.3,5.3H7.3C4,22,2,20,2,16.7V9.4C2,6,4,4,7.3,4h8C15.3,4.2,15.2,4.5,15.2,4.7z M13.1,14.9l2.9-3.7v0c0.2-0.3,0.2-0.8-0.1-1C15.7,10,15.5,10,15.3,10c-0.2,0-0.4,0.1-0.5,0.3l-2.4,3.1l-2.7-2.2c-0.2-0.1-0.4-0.2-0.6-0.1c-0.2,0-0.4,0.1-0.5,0.3l-3,3.8c-0.1,0.1-0.2,0.3-0.2,0.5c0,0.3,0.2,0.6,0.5,0.7c0.3,0.1,0.7,0,0.8-0.3l2.5-3.2l2.7,2.2c0.2,0.1,0.4,0.2,0.6,0.2C12.8,15.2,13,15.1,13.1,14.9z M19.5,2C20.9,2,22,3.1,22,4.5S20.9,7,19.5,7S17,5.9,17,4.5S18.1,2,19.5,2z",
    loginIconPath: "M7.3,6.4C7.3,4,9.4,2,11.9,2h5c2.5,0,4.6,2,4.6,4.4v11.1c0,2.5-2.1,4.4-4.6,4.4h-5c-2.5,0-4.6-2-4.6-4.4v-0.9V6.4z M16,11.5l-3-2.9c-0.3-0.3-0.8-0.3-1.1,0c-0.3,0.3-0.3,0.8,0,1.1l1.6,1.6H3.3c-0.4,0-0.8,0.3-0.8,0.8c0,0.4,0.4,0.8,0.8,0.8h10.3L12,14.4c-0.3,0.3-0.3,0.8,0,1.1c0.2,0.2,0.4,0.2,0.6,0.2c0.2,0,0.4-0.1,0.6-0.2l3-2.9c0.1-0.1,0.2-0.3,0.2-0.5C16.3,11.8,16.2,11.6,16,11.5z",
    logoutIconPath: "M2,6.4C2,4,4,2,6.5,2h5C14,2,16,4,16,6.4v11.1c0,2.5-2,4.4-4.5,4.4h-5C4,22,2,20,2,17.6v-0.9V6.4z M21.8,11.5l-2.8-2.9c-0.3-0.3-0.8-0.3-1.1,0c-0.3,0.3-0.3,0.8,0,1.1l1.6,1.6h-1.5H9.5c-0.4,0-0.7,0.3-0.7,0.8c0,0.4,0.3,0.8,0.7,0.8h9.9l-1.6,1.6c-0.3,0.3-0.3,0.8,0,1.1c0.1,0.2,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2l2.8-2.9c0.1-0.1,0.2-0.3,0.2-0.5C22,11.8,21.9,11.6,21.8,11.5z",
    settingsIconPath: "M12,14.8c-1.6,0-2.9-1.2-2.9-2.8s1.3-2.8,2.9-2.8c1.6,0,2.9,1.3,2.9,2.8S13.6,14.8,12,14.8z M21.2,14.4c-0.2-0.3-0.5-0.6-0.8-0.8c-0.3-0.1-0.5-0.4-0.6-0.6c-0.5-0.9-0.2-2,0.7-2.5c1-0.6,1.3-1.8,0.8-2.8l-0.7-1.2c-0.6-1-1.9-1.3-2.9-0.8C16.7,6.2,15.6,5.8,15,5c-0.2-0.3-0.3-0.6-0.2-0.9c0-0.4-0.1-0.8-0.3-1.1c-0.4-0.6-1.1-1-1.8-1h-1.4c-0.7,0-1.4,0.4-1.8,1C9.3,3.3,9.2,3.7,9.2,4.1c0,0.3-0.1,0.6-0.2,0.9C8.4,5.8,7.3,6.2,6.4,5.7c-1-0.6-2.3-0.2-2.9,0.8L2.8,7.6c-0.6,1-0.3,2.3,0.8,2.8c0.9,0.5,1.2,1.6,0.7,2.5c-0.2,0.3-0.4,0.5-0.6,0.6c-0.3,0.2-0.7,0.5-0.8,0.8c-0.4,0.6-0.4,1.4,0,2l0.7,1.2c0.4,0.6,1.1,1,1.8,1c0.3,0,0.8-0.1,1.1-0.3c0.3-0.2,0.6-0.2,0.9-0.2c1,0,1.9,0.8,1.9,1.8c0,1.1,0.9,2,2.1,2h1.4c1.2,0,2.1-0.9,2.1-2c0-1,0.9-1.8,1.9-1.8c0.3,0,0.6,0.1,0.9,0.2c0.3,0.2,0.7,0.3,1.1,0.3c0.7,0,1.4-0.4,1.8-1l0.7-1.2C21.6,15.8,21.6,15,21.2,14.4z",
    userIconPath: "M9.3,14.9c-4,0-7.3,0.6-7.3,3.1C2,20.4,5.4,21,9.3,21c4,0,7.3-0.6,7.3-3.1C16.7,15.5,13.3,14.9,9.3,14.9zM9.3,12.5c2.7,0,4.9-2.1,4.9-4.8C14.2,5.1,12,3,9.3,3C6.7,3,4.5,5.1,4.5,7.8C4.5,10.4,6.7,12.5,9.3,12.5z M16.2,7.8c0,1.3-0.4,2.6-1.1,3.6c-0.1,0.1,0,0.3,0.1,0.3c0.2,0,0.4,0,0.6,0.1c1.9,0,3.6-1.1,4.1-3c0.7-2.7-1.3-5.1-4-5.1c-0.3,0-0.6,0-0.8,0.1c0,0-0.1,0-0.1,0.1c0,0,0,0.1,0,0.1C15.7,5.1,16.2,6.4,16.2,7.8z M21.8,15.2c-0.3-0.7-1.2-1.2-2.5-1.5c-0.6-0.1-2.2-0.3-3.7-0.3c0,0,0,0,0,0c0,0,0,0,0,0.1c0.7,0.3,3.4,1.8,3.1,4.9c0,0.1,0.1,0.3,0.2,0.2c0.7-0.1,2.4-0.5,2.9-1.6C22.1,16.5,22.1,15.8,21.8,15.2z",
    userAddIconPath: "M21.1,9.6h-1.2V8.4c0-0.5-0.4-0.9-0.9-0.9c-0.5,0-0.9,0.4-0.9,0.9v1.2h-1.2c-0.5,0-0.9,0.4-0.9,0.9c0,0.5,0.4,0.9,0.9,0.9h1.2v1.2c0,0.5,0.4,0.9,0.9,0.9c0.5,0,0.9-0.4,0.9-0.9v-1.2h1.2c0.5,0,0.9-0.4,0.9-0.9C22,10,21.6,9.6,21.1,9.6z M9.5,15c-4,0-7.5,0.6-7.5,3.2c0,2.6,3.4,3.3,7.5,3.3c4,0,7.5-0.6,7.5-3.2S13.6,15,9.5,15z M9.5,12.6c2.8,0,5-2.2,5-5c0-2.8-2.2-5-5-5c-2.8,0-5,2.2-5,5C4.5,10.3,6.7,12.6,9.5,12.6z",
    tasksIconPath: "M16.2,2H7.8C4.8,2,3,3.8,3,6.8v10.3C3,20.3,4.8,22,7.8,22h8.4c3.1,0,4.8-1.7,4.8-4.8V6.8C21,3.8,19.3,2,16.2,2zM8.1,6.7L8.1,6.7C7.6,6.7,7.3,7,7.3,7.4s0.3,0.8,0.8,0.8h3c0.4,0,0.8-0.4,0.8-0.8c0-0.4-0.4-0.8-0.8-0.8H8.1z M15.9,12.7H8.1c-0.4,0-0.8-0.3-0.8-0.8s0.3-0.8,0.8-0.8h7.8c0.4,0,0.8,0.4,0.8,0.8S16.4,12.7,15.9,12.7z M15.9,17.3H8.1c-0.3,0-0.6-0.1-0.8-0.4c-0.2-0.3-0.2-0.6,0-0.8c0.2-0.3,0.5-0.4,0.8-0.4h7.8c0.4,0,0.7,0.4,0.7,0.8C16.6,16.9,16.3,17.3,15.9,17.3z",
    notificationsIconPath: "M19.8,11.6c-0.7-0.9-1.1-1.6-1.1-2.8V8.4c0-1.6-0.4-2.7-1.2-3.7C16.2,3,14.1,2,12,2H12c-2,0-4.1,0.9-5.4,2.5C5.7,5.6,5.3,6.7,5.3,8.4v0.4c0,1.3-0.3,2-1.1,2.8c-0.6,0.6-0.7,1.4-0.7,2.3c0,0.9,0.3,1.7,0.9,2.4c0.8,0.8,1.8,1.3,2.9,1.4C8.8,17.9,10.4,18,12,18c1.6,0,3.2-0.1,4.7-0.2c1.1-0.1,2.1-0.6,2.9-1.4c0.6-0.7,0.9-1.5,0.9-2.4C20.5,13.1,20.3,12.3,19.8,11.6zM14,19.2c-0.5-0.1-3.5-0.1-4,0c-0.4,0.1-0.9,0.3-0.9,0.8c0,0.5,0.3,0.9,0.7,1.2l0,0c0.5,0.4,1.1,0.6,1.7,0.7c0.3,0,0.7,0,1,0c0.6-0.1,1.2-0.3,1.7-0.7l0,0c0.4-0.3,0.7-0.7,0.7-1.2C14.9,19.6,14.4,19.3,14,19.2z",
    searchIconPath: "M10.6,2c4.7,0,8.6,3.9,8.6,8.7s-3.9,8.7-8.6,8.7S2,15.4,2,10.7S5.8,2,10.6,2z M20.7,22c-0.3,0-0.7-0.1-0.9-0.4l-2-2.4c-0.4-0.4-0.5-1.1-0.1-1.5c0.2-0.2,0.4-0.3,0.7-0.3c0.3,0,0.5,0.1,0.7,0.3l2.6,2c0.4,0.4,0.5,0.9,0.3,1.4C21.7,21.6,21.3,22,20.7,22L20.7,22z",
    moreIconPath: "M16.3,2H7.7C4.3,2,2,4.4,2,7.9v8.2C2,19.6,4.3,22,7.7,22h8.7c3.4,0,5.7-2.4,5.7-5.9V7.9C22,4.4,19.7,2,16.3,2zM7.5,10.8c-0.7,0-1.2,0.5-1.2,1.2c0,0.7,0.5,1.2,1.2,1.2s1.2-0.5,1.2-1.2C8.7,11.3,8.2,10.8,7.5,10.8z M12,10.8c-0.7,0-1.2,0.5-1.2,1.2c0,0.7,0.5,1.2,1.2,1.2c0.7,0,1.2-0.5,1.2-1.2C13.2,11.3,12.7,10.8,12,10.8z M15.3,12c0-0.7,0.5-1.2,1.2-1.2c0.7,0,1.2,0.5,1.2,1.2c0,0.7-0.5,1.2-1.2,1.2C15.8,13.2,15.3,12.7,15.3,12z",
    passwordIconPath: "M16.3,2H7.7C4.3,2,2,4.4,2,7.9v8.2C2,19.6,4.3,22,7.7,22h8.7c3.4,0,5.7-2.4,5.7-5.9V7.9C22,4.4,19.7,2,16.3,2zM11.3,11.2H17c0.4,0,0.8,0.3,0.8,0.8v1.9c0,0.4-0.3,0.8-0.8,0.8c-0.4,0-0.8-0.3-0.8-0.8v-1.1h-1.3v1.1c0,0.4-0.3,0.8-0.8,0.8c-0.4,0-0.8-0.3-0.8-0.8v-1.1h-2.1c-0.3,1.1-1.3,1.9-2.5,1.9c-1.4,0-2.6-1.2-2.6-2.6c0-1.4,1.2-2.6,2.6-2.6C10,9.4,11,10.2,11.3,11.2z M7.7,12c0,0.6,0.5,1.1,1.1,1.1c0.6,0,1.1-0.5,1.1-1.1s-0.5-1.1-1.1-1.1C8.2,10.9,7.7,11.4,7.7,12z",
    messageIconPath: "M22,15.9c0,2.8-2.2,5.1-5,5.1h0H7C4.3,21,2,18.8,2,16v0c0,0,0-4.4,0-6.7c0-0.4,0.5-0.7,0.8-0.4c2.4,1.9,6.6,5.3,6.7,5.4c0.7,0.6,1.6,0.9,2.5,0.9c0.9,0,1.8-0.3,2.5-0.9c0.1,0,4.2-3.4,6.6-5.3C21.5,8.7,22,9,22,9.4C22,11.6,22,15.9,22,15.9z M21.5,5.7C20.6,4,18.9,3,17,3h-10C5.2,3,3.5,4,2.6,5.7C2.4,6,2.5,6.5,2.8,6.8l7.4,5.9c0.5,0.4,1.1,0.6,1.8,0.6c0,0,0,0,0,0s0,0,0,0c0.6,0,1.3-0.2,1.8-0.6l7.4-5.9C21.6,6.5,21.7,6,21.5,5.7z",
    addItemIconPath: "M16.2,2H7.8C4.2,2,2,4.2,2,7.8v8.4C2,19.8,4.2,22,7.8,22h8.4c3.6,0,5.8-2.2,5.8-5.8V7.8C22,4.2,19.8,2,16.2,2zM16,11.2h-3.2V8c0-0.4-0.3-0.8-0.8-0.8S11.2,7.6,11.2,8v3.2H8c-0.4,0-0.8,0.3-0.8,0.8s0.3,0.8,0.8,0.8h3.2V16c0,0.4,0.3,0.8,0.8,0.8s0.8-0.3,0.8-0.8v-3.2H16c0.4,0,0.8-0.3,0.8-0.8S16.4,11.2,16,11.2z",
    dotsIconPath: "M7.6,1.3C7.6,2,7,2.6,6.3,2.6S5,2,5,1.3S5.6,0,6.3,0c0,0,0,0,0,0C7,0,7.6,0.6,7.6,1.3z M1.3,0C0.6,0,0,0.6,0,1.3s0.6,1.3,1.3,1.3S2.6,2,2.6,1.3l0,0C2.6,0.6,2,0,1.3,0z M11.3,0C10.6,0,10,0.6,10,1.3s0.6,1.3,1.3,1.3s1.3-0.6,1.3-1.3c0,0,0,0,0,0C12.6,0.6,12,0,11.3,0z",
    arrowIconPath: "M10.9,16.6c-0.1-0.1-0.3-0.3-0.5-0.5C9.1,15,7,12,6.3,10.4C6.2,10.1,6,9.5,6,9.2c0-0.3,0.1-0.6,0.2-0.9c0.2-0.4,0.5-0.6,0.9-0.8c0.3-0.1,1-0.3,1.1-0.3C9,7.1,10.4,7,12,7c1.5,0,2.8,0.1,3.7,0.2c0,0,1,0.2,1.3,0.3c0.6,0.3,1,0.9,1,1.6v0.1c0,0.4-0.4,1.3-0.4,1.3c-0.6,1.5-2.6,4.5-4,5.7c0,0-0.3,0.3-0.6,0.5C12.8,16.9,12.4,17,12,17C11.6,17,11.2,16.9,10.9,16.6z",
    closeIconPath: "M7.7,2h8.7C19.7,2,22,4.4,22,7.9v8.2c0,3.5-2.3,5.9-5.7,5.9H7.7C4.3,22,2,19.6,2,16.1V7.9C2,4.4,4.3,2,7.7,2zM15,15c0.3-0.3,0.3-0.9,0-1.2L13.2,12l1.8-1.8c0.3-0.3,0.3-0.9,0-1.2c-0.3-0.3-0.9-0.3-1.2,0L12,10.7L10.2,9C9.9,8.6,9.3,8.6,9,9c-0.3,0.3-0.3,0.9,0,1.2l1.8,1.8L9,13.8c-0.3,0.4-0.3,0.9,0,1.2c0.2,0.2,0.4,0.3,0.6,0.3c0.2,0,0.4-0.1,0.6-0.3l1.8-1.8l1.8,1.8c0.2,0.2,0.4,0.3,0.6,0.3C14.6,15.3,14.8,15.2,15,15z",
    checkmarkIconPath: "M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0z M14.8,7.7l-5.7,5.7c-0.3,0.3-0.8,0.3-1.1,0l-2.8-2.8c-0.3-0.3-0.3-0.8,0-1.1c0.3-0.3,0.7-0.3,1,0l2.3,2.3l5.1-5.1c0.3-0.3,0.8-0.3,1,0c0,0,0,0,0,0C15.1,6.9,15.1,7.4,14.8,7.7z",
    saveIconPath: "M11.6,17.7c-0.3,0.1-0.5,0.2-0.8,0.3l-1.6,0.5c-4,1.3-6.1,0.2-7.3-3.8l-1.3-4c-1.3-4-0.2-6.1,3.7-7.3l1.5-0.5C5.6,3.5,5.4,4,5.3,4.6l-1,4.2c-1.1,4.7,0.5,7.3,5.2,8.4l1.7,0.4L11.6,17.7z M15.2,0.7l-1.7-0.4C10.2-0.5,8.2,0.2,7,2.6C6.7,3.3,6.4,4,6.3,4.8L5.3,9c-1,4.2,0.3,6.2,4.5,7.2l1.7,0.4c0.5,0.1,1.1,0.2,1.6,0.3c3.1,0.3,4.8-1.2,5.6-4.8l1-4.2C20.7,3.8,19.4,1.7,15.2,0.7z M13.3,10.8c-0.1,0.3-0.4,0.6-0.7,0.6h-0.2l-2.9-0.7c-0.4-0.1-0.6-0.5-0.6-0.9c0,0,0,0,0,0C9,9.3,9.5,9.1,9.9,9.2l2.9,0.7C13.2,10,13.4,10.4,13.3,10.8z M16.2,7.4C16.1,7.8,15.8,8,15.5,8h-0.2l-4.8-1.2c-0.4-0.1-0.6-0.5-0.5-0.9c0.1-0.4,0.5-0.6,0.9-0.5c0,0,0,0,0,0l4.9,1.2C16.1,6.6,16.3,7,16.2,7.4z",
    warnErrIconPath: "M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0z M9.2,6c0-0.4,0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8v5c0,0.4-0.3,0.8-0.8,0.8S9.2,11.4,9.2,11V6z M10.9,14.4c0,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.2,0.2-0.3,0.2c-0.2,0.1-0.5,0.1-0.8,0c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1-0.1-0.2-0.2-0.2-0.3c-0.1-0.2-0.1-0.5,0-0.8c0.1-0.3,0.3-0.4,0.5-0.5c0.2-0.1,0.5-0.1,0.8,0c0.3,0.1,0.4,0.3,0.5,0.5C11,13.9,11,14.1,10.9,14.4z",
    infoIconPath: "M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M11.2,8c0-0.4,0.3-0.8,0.8-0.8s0.8,0.3,0.8,0.8v5c0,0.4-0.3,0.8-0.8,0.8s-0.8-0.3-0.8-0.8V8z M12.9,16.4c-0.1,0.1-0.1,0.2-0.2,0.3c-0.1,0.1-0.2,0.2-0.3,0.2S12.1,17,12,17s-0.3,0-0.4-0.1s-0.2-0.1-0.3-0.2c-0.1-0.1-0.2-0.2-0.2-0.3C11,16.3,11,16.1,11,16c0-0.1,0-0.3,0.1-0.4s0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.2,0.3-0.2c0.2-0.1,0.5-0.1,0.8,0c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0.1,0.2,0.2,0.2,0.3S13,15.9,13,16C13,16.1,13,16.3,12.9,16.4z"
}



export const {
    homeIconPath,
    dasboardIconPath,
    loginIconPath,
    logoutIconPath,
    notificationsIconPath,
    settingsIconPath,
    userIconPath,
    userAddIconPath,
    tasksIconPath,
    searchIconPath,
    moreIconPath,
    passwordIconPath,
    messageIconPath,
    addItemIconPath,
    dotsIconPath,
    arrowIconPath,
    closeIconPath,
    checkmarkIconPath,
    saveIconPath,
    warnErrIconPath,
    infoIconPath
} = svgIcons